
package keeper

import (
    "context"

    "github.com/cosmos/cosmos-sdk/store/prefix"
    sdk "github.com/cosmos/cosmos-sdk/types"
    "github.com/cosmos/cosmos-sdk/types/query"
    "google.golang.org/grpc/codes"
    "google.golang.org/grpc/status"

    "belfrics/x/belfrics/types"
)

func (k Keeper) Nominees(c context.Context, req *types.QueryNomineesRequest) (*types.QueryNomineesResponse, error) {
    // Throw an error if request is nil
    if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

    // Define a variable that will store a list of nominees
    var nominees []*types.NomineePost

    // Get context with the information about the environment
    ctx := sdk.UnwrapSDKContext(c)

    // Get the key-value module store using the store key (in our case store key is "chain")
    store := ctx.KVStore(k.storeKey)

    // Get the part of the store that keeps nominees (using nominee key, which is "nominee-value-")
    nomineeStore := prefix.NewStore(store, []byte(types.NomineeKey))

    // Paginate the nominees store based on PageRequest
    pageRes, err := query.Paginate(nomineeStore, req.Pagination, func(key []byte, value []byte) error {
        var nominee types.NomineePost
        if err := k.cdc.Unmarshal(value, &nominee); err != nil {
            return err
        }

        nominees = append(nominees, &nominee)

        return nil
    })

    // Throw an error if pagination failed
    if err != nil {
        return nil, status.Error(codes.Internal, err.Error())
    }

    // Return a struct containing a list of nominees and pagination info
    return &types.QueryNomineesResponse{NomineePost: nominees, Pagination: pageRes}, nil
}