import * as grpcWeb from 'grpc-web';

import * as result_pb from './result_pb'; // proto import: "result.proto"
import * as user_sample_command_pb from './user_sample_command_pb'; // proto import: "user_sample_command.proto"


export class UserSampleCommandClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSample(
    request: user_sample_command_pb.CreateSampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.CommonResult) => void
  ): grpcWeb.ClientReadableStream<result_pb.CommonResult>;

  updateSample(
    request: user_sample_command_pb.UpdateSampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.CommonResult) => void
  ): grpcWeb.ClientReadableStream<result_pb.CommonResult>;

  deleteSample(
    request: user_sample_command_pb.DeleteSampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.CommonResult) => void
  ): grpcWeb.ClientReadableStream<result_pb.CommonResult>;

}

export class UserSampleCommandPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSample(
    request: user_sample_command_pb.CreateSampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<result_pb.CommonResult>;

  updateSample(
    request: user_sample_command_pb.UpdateSampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<result_pb.CommonResult>;

  deleteSample(
    request: user_sample_command_pb.DeleteSampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<result_pb.CommonResult>;

}

