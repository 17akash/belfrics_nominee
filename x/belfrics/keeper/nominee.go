package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"belfrics/x/belfrics/types"
)

func (k Keeper) GetNomineeCount(ctx sdk.Context) uint64 {
	// Get the store using storeKey (which is "belfrics") and NomineeCountKey (which is "Nominee/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NomineeCountKey))

	// Convert the NomineeCountKey to bytes
	byteKey := []byte(types.NomineeCountKey)

	// Get the value of the count
	bz := store.Get(byteKey)

	// Return zero if the count value is not found (for example, it's the first nominee)
	if bz == nil {
		return 0
	}

	// Convert the count into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetNomineeCount(ctx sdk.Context, count uint64) {
	// Get the store using storeKey (which is "belfrics") and NomineeCountKey (which is "Nominee/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NomineeCountKey))

	// Convert the NomineeCountKey to bytes
	byteKey := []byte(types.NomineeCountKey)

	// Convert count from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	// Set the value of nominee/count/ to count
	store.Set(byteKey, bz)
}

func (k Keeper) AppendNominee(ctx sdk.Context, nominee types.NomineePost) uint64 {
	// Get the current number of nominees in the store
	count := k.GetNomineeCount(ctx)

	// Assign an ID to the nominee based on the number of nominees in the store
	nominee.Id = count

	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.NomineeKey))

	// Convert the nominee ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, nominee.Id)

	// Marshal the nominee into bytes
	appendedValue := k.cdc.MustMarshal(&nominee)

	// Insert the nominee bytes using nominee ID as a key
	store.Set(byteKey, appendedValue)

	// Update the nominee count
	k.SetNomineeCount(ctx, count+1)
	return count
}
