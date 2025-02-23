import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class CreateSampleRequest extends jspb.Message {
  getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTitle(value?: google_protobuf_wrappers_pb.StringValue): CreateSampleRequest;
  hasTitle(): boolean;
  clearTitle(): CreateSampleRequest;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): CreateSampleRequest;
  hasDescription(): boolean;
  clearDescription(): CreateSampleRequest;

  getDuedate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDuedate(value?: google_protobuf_timestamp_pb.Timestamp): CreateSampleRequest;
  hasDuedate(): boolean;
  clearDuedate(): CreateSampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSampleRequest): CreateSampleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSampleRequest;
  static deserializeBinaryFromReader(message: CreateSampleRequest, reader: jspb.BinaryReader): CreateSampleRequest;
}

export namespace CreateSampleRequest {
  export type AsObject = {
    title?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    duedate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 1,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 2,
  }

  export enum DuedateCase { 
    _DUEDATE_NOT_SET = 0,
    DUEDATE = 3,
  }
}

export class UpdateSampleRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): UpdateSampleRequest;
  hasId(): boolean;
  clearId(): UpdateSampleRequest;

  getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTitle(value?: google_protobuf_wrappers_pb.StringValue): UpdateSampleRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateSampleRequest;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): UpdateSampleRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateSampleRequest;

  getDuedate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDuedate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateSampleRequest;
  hasDuedate(): boolean;
  clearDuedate(): UpdateSampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSampleRequest): UpdateSampleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSampleRequest;
  static deserializeBinaryFromReader(message: UpdateSampleRequest, reader: jspb.BinaryReader): UpdateSampleRequest;
}

export namespace UpdateSampleRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    title?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    duedate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum DuedateCase { 
    _DUEDATE_NOT_SET = 0,
    DUEDATE = 4,
  }
}

export class DeleteSampleRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): DeleteSampleRequest;
  hasId(): boolean;
  clearId(): DeleteSampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSampleRequest): DeleteSampleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSampleRequest;
  static deserializeBinaryFromReader(message: DeleteSampleRequest, reader: jspb.BinaryReader): DeleteSampleRequest;
}

export namespace DeleteSampleRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
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

