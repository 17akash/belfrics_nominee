package simulation

import (
	"math/rand"

	"belfrics/x/belfrics/keeper"
	"belfrics/x/belfrics/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgAddNominee(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgAddNominee{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the AddNominee simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "AddNominee simulation not implemented"), nil, nil
	}
}
