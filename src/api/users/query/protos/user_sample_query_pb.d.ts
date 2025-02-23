import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class GetSampleRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): GetSampleRequest;
  hasId(): boolean;
  clearId(): GetSampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSampleRequest): GetSampleRequest.AsObject;
  static serializeBinaryToWriter(message: GetSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSampleRequest;
  static deserializeBinaryFromReader(message: GetSampleRequest, reader: jspb.BinaryReader): GetSampleRequest;
}

export namespace GetSampleRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }
}

export class GetAllSamplesRequest extends jspb.Message {
  getSkiptakeoption(): SkipTakeOption | undefined;
  setSkiptakeoption(value?: SkipTakeOption): GetAllSamplesRequest;
  hasSkiptakeoption(): boolean;
  clearSkiptakeoption(): GetAllSamplesRequest;

  getPagingoption(): PagingOption | undefined;
  setPagingoption(value?: PagingOption): GetAllSamplesRequest;
  hasPagingoption(): boolean;
  clearPagingoption(): GetAllSamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSamplesRequest): GetAllSamplesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllSamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSamplesRequest;
  static deserializeBinaryFromReader(message: GetAllSamplesRequest, reader: jspb.BinaryReader): GetAllSamplesRequest;
}

export namespace GetAllSamplesRequest {
  export type AsObject = {
    skiptakeoption?: SkipTakeOption.AsObject,
    pagingoption?: PagingOption.AsObject,
  }

  export enum SkiptakeoptionCase { 
    _SKIPTAKEOPTION_NOT_SET = 0,
    SKIPTAKEOPTION = 1,
  }

  export enum PagingoptionCase { 
    _PAGINGOPTION_NOT_SET = 0,
    PAGINGOPTION = 2,
  }
}

export class SkipTakeOption extends jspb.Message {
  getSkip(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setSkip(value?: google_protobuf_wrappers_pb.Int32Value): SkipTakeOption;
  hasSkip(): boolean;
  clearSkip(): SkipTakeOption;

  getTake(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTake(value?: google_protobuf_wrappers_pb.Int32Value): SkipTakeOption;
  hasTake(): boolean;
  clearTake(): SkipTakeOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkipTakeOption.AsObject;
  static toObject(includeInstance: boolean, msg: SkipTakeOption): SkipTakeOption.AsObject;
  static serializeBinaryToWriter(message: SkipTakeOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkipTakeOption;
  static deserializeBinaryFromReader(message: SkipTakeOption, reader: jspb.BinaryReader): SkipTakeOption;
}

export namespace SkipTakeOption {
  export type AsObject = {
    skip?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    take?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class PagingOption extends jspb.Message {
  getPagenumber(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPagenumber(value?: google_protobuf_wrappers_pb.Int32Value): PagingOption;
  hasPagenumber(): boolean;
  clearPagenumber(): PagingOption;

  getPagesize(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPagesize(value?: google_protobuf_wrappers_pb.Int32Value): PagingOption;
  hasPagesize(): boolean;
  clearPagesize(): PagingOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PagingOption.AsObject;
  static toObject(includeInstance: boolean, msg: PagingOption): PagingOption.AsObject;
  static serializeBinaryToWriter(message: PagingOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PagingOption;
  static deserializeBinaryFromReader(message: PagingOption, reader: jspb.BinaryReader): PagingOption;
}

export namespace PagingOption {
  export type AsObject = {
    pagenumber?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    pagesize?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class CommonResult extends jspb.Message {
  getStatuscode(): number;
  setStatuscode(value: number): CommonResult;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): CommonResult;

  getData(): string;
  setData(value: string): CommonResult;
  hasData(): boolean;
  clearData(): CommonResult;

  getDatatype(): string;
  setDatatype(value: string): CommonResult;
  hasDatatype(): boolean;
  clearDatatype(): CommonResult;

  getMessagecode(): string;
  setMessagecode(value: string): CommonResult;
  hasMessagecode(): boolean;
  clearMessagecode(): CommonResult;

  getError(): Error | undefined;
  setError(value?: Error): CommonResult;
  hasError(): boolean;
  clearError(): CommonResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResult.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResult): CommonResult.AsObject;
  static serializeBinaryToWriter(message: CommonResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResult;
  static deserializeBinaryFromReader(message: CommonResult, reader: jspb.BinaryReader): CommonResult;
}

export namespace CommonResult {
  export type AsObject = {
    statuscode: number,
    issuccess: boolean,
    data?: string,
    datatype?: string,
    messagecode?: string,
    error?: Error.AsObject,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 3,
  }

  export enum DatatypeCase { 
    _DATATYPE_NOT_SET = 0,
    DATATYPE = 4,
  }

  export enum MessagecodeCase { 
    _MESSAGECODE_NOT_SET = 0,
    MESSAGECODE = 5,
  }

  export enum ErrorCase { 
    _ERROR_NOT_SET = 0,
    ERROR = 6,
  }
}

export class Error extends jspb.Message {
  getDetailsList(): Array<string>;
  setDetailsList(value: Array<string>): Error;
  clearDetailsList(): Error;
  addDetails(value: string, index?: number): Error;

  getStacktrace(): string;
  setStacktrace(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    detailsList: Array<string>,
    stacktrace: string,
  }
}

