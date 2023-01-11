package keeper

import (
	"context"

	"belfrics/x/belfrics/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AddNominee(goCtx context.Context, msg *types.MsgAddNominee) (*types.MsgAddNomineeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nominee = types.NomineePost{
		Creator:        msg.Creator,
		AccountHolder:  msg.AccountHolder,
		NomineeAccount: msg.NomineeAccount,
	}
	id := k.AppendNominee(ctx, nominee)

	return &types.MsgAddNomineeResponse{Id: id}, nil
}
