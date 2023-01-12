package keeper

import (
	"context"

	"belfrics/x/belfrics/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Nominees(goCtx context.Context, req *types.QueryNomineesRequest) (*types.QueryNomineesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryNomineesResponse{}, nil
}
