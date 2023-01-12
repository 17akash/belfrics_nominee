/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../belfrics/params";

export const protobufPackage = "belfrics.belfrics";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryNomineesRequest {}

export interface QueryNomineesResponse {
  accountHolder: string;
  nomineeAccount: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryNomineesRequest: object = {};

export const QueryNomineesRequest = {
  encode(_: QueryNomineesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNomineesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNomineesRequest } as QueryNomineesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryNomineesRequest {
    const message = { ...baseQueryNomineesRequest } as QueryNomineesRequest;
    return message;
  },

  toJSON(_: QueryNomineesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryNomineesRequest>): QueryNomineesRequest {
    const message = { ...baseQueryNomineesRequest } as QueryNomineesRequest;
    return message;
  },
};

const baseQueryNomineesResponse: object = {
  accountHolder: "",
  nomineeAccount: "",
};

export const QueryNomineesResponse = {
  encode(
    message: QueryNomineesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountHolder !== "") {
      writer.uint32(10).string(message.accountHolder);
    }
    if (message.nomineeAccount !== "") {
      writer.uint32(18).string(message.nomineeAccount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNomineesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNomineesResponse } as QueryNomineesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountHolder = reader.string();
          break;
        case 2:
          message.nomineeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNomineesResponse {
    const message = { ...baseQueryNomineesResponse } as QueryNomineesResponse;
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

  toJSON(message: QueryNomineesResponse): unknown {
    const obj: any = {};
    message.accountHolder !== undefined &&
      (obj.accountHolder = message.accountHolder);
    message.nomineeAccount !== undefined &&
      (obj.nomineeAccount = message.nomineeAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNomineesResponse>
  ): QueryNomineesResponse {
    const message = { ...baseQueryNomineesResponse } as QueryNomineesResponse;
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Nominees items. */
  Nominees(request: QueryNomineesRequest): Promise<QueryNomineesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("belfrics.belfrics.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Nominees(request: QueryNomineesRequest): Promise<QueryNomineesResponse> {
    const data = QueryNomineesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "belfrics.belfrics.Query",
      "Nominees",
      data
    );
    return promise.then((data) =>
      QueryNomineesResponse.decode(new Reader(data))
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
