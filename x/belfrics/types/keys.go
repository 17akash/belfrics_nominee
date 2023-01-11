package types

const (
	// ModuleName defines the module name
	ModuleName = "belfrics"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_belfrics"

	// Keep track of the index of nomionees
	NomineeKey      = "Nominee/value/"
	NomineeCountKey = "Nominee/count/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
