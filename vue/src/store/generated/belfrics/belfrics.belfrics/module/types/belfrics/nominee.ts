/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "belfrics.belfrics";

export interface NomineePost {
  creator: string;
  id: number;
  accountHolder: string;
  nomineeAccount: string;
}

const baseNomineePost: object = {
  creator: "",
  id: 0,
  accountHolder: "",
  nomineeAccount: "",
};

export const NomineePost = {
  encode(message: NomineePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.accountHolder !== "") {
      writer.uint32(26).string(message.accountHolder);
    }
    if (message.nomineeAccount !== "") {
      writer.uint32(34).string(message.nomineeAccount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NomineePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNomineePost } as NomineePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.accountHolder = reader.string();
          break;
        case 4:
          message.nomineeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NomineePost {
    const message = { ...baseNomineePost } as NomineePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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

  toJSON(message: NomineePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.accountHolder !== undefined &&
      (obj.accountHolder = message.accountHolder);
    message.nomineeAccount !== undefined &&
      (obj.nomineeAccount = message.nomineeAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<NomineePost>): NomineePost {
    const message = { ...baseNomineePost } as NomineePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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
