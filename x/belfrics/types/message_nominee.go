package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgNominee = "nominee"

var _ sdk.Msg = &MsgNominee{}

func NewMsgNominee(creator string, accountHolder string, nomineeAccount string) *MsgNominee {
	return &MsgNominee{
		Creator:        creator,
		AccountHolder:  accountHolder,
		NomineeAccount: nomineeAccount,
	}
}

func (msg *MsgNominee) Route() string {
	return RouterKey
}

func (msg *MsgNominee) Type() string {
	return TypeMsgNominee
}

func (msg *MsgNominee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgNominee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgNominee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
