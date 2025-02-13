import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as result_pb from './result_pb'; // proto import: "result.proto"


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

