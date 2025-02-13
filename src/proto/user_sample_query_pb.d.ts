import * as jspb from 'google-protobuf'

import * as result_pb from './result_pb'; // proto import: "result.proto"
import * as common_pb from './common_pb'; // proto import: "common.proto"
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
  getSkiptakeoption(): common_pb.SkipTakeOption | undefined;
  setSkiptakeoption(value?: common_pb.SkipTakeOption): GetAllSamplesRequest;
  hasSkiptakeoption(): boolean;
  clearSkiptakeoption(): GetAllSamplesRequest;

  getPagingoption(): common_pb.PagingOption | undefined;
  setPagingoption(value?: common_pb.PagingOption): GetAllSamplesRequest;
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
    skiptakeoption?: common_pb.SkipTakeOption.AsObject,
    pagingoption?: common_pb.PagingOption.AsObject,
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

