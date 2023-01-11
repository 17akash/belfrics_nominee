/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "belfrics.belfrics";

export interface MsgAddNominee {
  creator: string;
  accountHolder: string;
  nomineeAccount: string;
}

export interface MsgAddNomineeResponse {
  id: number;
}

const baseMsgAddNominee: object = {
  creator: "",
  accountHolder: "",
  nomineeAccount: "",
};

export const MsgAddNominee = {
  encode(message: MsgAddNominee, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.accountHolder !== "") {
      writer.uint32(18).string(message.accountHolder);
    }
    if (message.nomineeAccount !== "") {
      writer.uint32(26).string(message.nomineeAccount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddNominee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddNominee } as MsgAddNominee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.accountHolder = reader.string();
          break;
        case 3:
          message.nomineeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddNominee {
    const message = { ...baseMsgAddNominee } as MsgAddNominee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.accountHolder !== undefined && object.accountHolder !== null) {
      message.accountHolder = String(object.accountHolder);
    } else {
      message.accountHolder = "";
    }
    if (object.nomineeAccount !== undefined && object.nomineeAccount !== null) {
      message.nomineeAccount = String(object.nomineeAccount);
    } else {
      message.nomineeAccount = "";
    }
    return message;
  },

  toJSON(message: MsgAddNominee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.accountHolder !== undefined &&
      (obj.accountHolder = message.accountHolder);
    message.nomineeAccount !== undefined &&
      (obj.nomineeAccount = message.nomineeAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddNominee>): MsgAddNominee {
    const message = { ...baseMsgAddNominee } as MsgAddNominee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.accountHolder !== undefined && object.accountHolder !== null) {
      message.accountHolder = object.accountHolder;
    } else {
      message.accountHolder = "";
    }
    if (object.nomineeAccount !== undefined && object.nomineeAccount !== null) {
      message.nomineeAccount = object.nomineeAccount;
    } else {
      message.nomineeAccount = "";
    }
    return message;
  },
};

const baseMsgAddNomineeResponse: object = { id: 0 };

export const MsgAddNomineeResponse = {
  encode(
    message: MsgAddNomineeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddNomineeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddNomineeResponse } as MsgAddNomineeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddNomineeResponse {
    const message = { ...baseMsgAddNomineeResponse } as MsgAddNomineeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgAddNomineeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddNomineeResponse>
  ): MsgAddNomineeResponse {
    const message = { ...baseMsgAddNomineeResponse } as MsgAddNomineeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddNominee(request: MsgAddNominee): Promise<MsgAddNomineeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddNominee(request: MsgAddNominee): Promise<MsgAddNomineeResponse> {
    const data = MsgAddNominee.encode(request).finish();
    const promise = this.rpc.request(
      "belfrics.belfrics.Msg",
      "AddNominee",
      data
    );
    return promise.then((data) =>
      MsgAddNomineeResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
