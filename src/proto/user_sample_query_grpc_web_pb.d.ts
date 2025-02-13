import * as grpcWeb from 'grpc-web';

import * as result_pb from './result_pb'; // proto import: "result.proto"
import * as user_sample_query_pb from './user_sample_query_pb'; // proto import: "user_sample_query.proto"


export class UserSampleQueryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSample(
    request: user_sample_query_pb.GetSampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.CommonResult) => void
  ): grpcWeb.ClientReadableStream<result_pb.CommonResult>;

  getAllSamples(
    request: user_sample_query_pb.GetAllSamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: result_pb.CommonResult) => void
  ): grpcWeb.ClientReadableStream<result_pb.CommonResult>;

}

export class UserSampleQueryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSample(
    request: user_sample_query_pb.GetSampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<result_pb.CommonResult>;

  getAllSamples(
    request: user_sample_query_pb.GetAllSamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<result_pb.CommonResult>;

}

