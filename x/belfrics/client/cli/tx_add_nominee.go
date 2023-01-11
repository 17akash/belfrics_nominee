package cli

import (
	"strconv"

	"belfrics/x/belfrics/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAddNominee() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-nominee [account-holder] [nominee-account]",
		Short: "Broadcast message addNominee",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAccountHolder := args[0]
			argNomineeAccount := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddNominee(
				clientCtx.GetFromAddress().String(),
				argAccountHolder,
				argNomineeAccount,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
