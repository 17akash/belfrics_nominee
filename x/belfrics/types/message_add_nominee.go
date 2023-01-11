package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddNominee = "add_nominee"

var _ sdk.Msg = &MsgAddNominee{}

func NewMsgAddNominee(creator string, accountHolder string, nomineeAccount string) *MsgAddNominee {
	return &MsgAddNominee{
		Creator:        creator,
		AccountHolder:  accountHolder,
		NomineeAccount: nomineeAccount,
	}
}

func (msg *MsgAddNominee) Route() string {
	return RouterKey
}

func (msg *MsgAddNominee) Type() string {
	return TypeMsgAddNominee
}

func (msg *MsgAddNominee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddNominee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddNominee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
