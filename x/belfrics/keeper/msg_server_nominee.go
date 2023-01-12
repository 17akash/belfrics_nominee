package keeper

import (
	"context"

	"belfrics/x/belfrics/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Nominee(goCtx context.Context, msg *types.MsgNominee) (*types.MsgNomineeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nomineePost = types.NomineePost{
		Creator:        msg.Creator,
		AccountHolder:  msg.AccountHolder,
		NomineeAccount: msg.NomineeAccount,
	}
	id := k.AppendNominee(ctx, nomineePost)

	return &types.MsgNomineeResponse{Id: id}, nil
}
