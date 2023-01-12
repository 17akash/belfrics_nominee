package keeper

import (
	"context"

	"belfrics/x/belfrics/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Nominee(goCtx context.Context, msg *types.MsgNominee) (*types.MsgNomineeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgNomineeResponse{}, nil
}
