import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


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

