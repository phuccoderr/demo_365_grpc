/**
 * @fileoverview gRPC-Web generated client stub for UserSample
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: user_sample_query.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_sample_query_pb from './user_sample_query_pb'; // proto import: "user_sample_query.proto"


export class UserSampleQueryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetSample = new grpcWeb.MethodDescriptor(
    '/UserSample.UserSampleQuery/GetSample',
    grpcWeb.MethodType.UNARY,
    user_sample_query_pb.GetSampleRequest,
    user_sample_query_pb.CommonResult,
    (request: user_sample_query_pb.GetSampleRequest) => {
      return request.serializeBinary();
    },
    user_sample_query_pb.CommonResult.deserializeBinary
  );

  getSample(
    request: user_sample_query_pb.GetSampleRequest,
    metadata?: grpcWeb.Metadata | null): Promise<user_sample_query_pb.CommonResult>;

  getSample(
    request: user_sample_query_pb.GetSampleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_sample_query_pb.CommonResult) => void): grpcWeb.ClientReadableStream<user_sample_query_pb.CommonResult>;

  getSample(
    request: user_sample_query_pb.GetSampleRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_sample_query_pb.CommonResult) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/UserSample.UserSampleQuery/GetSample',
        request,
        metadata || {},
        this.methodDescriptorGetSample,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/UserSample.UserSampleQuery/GetSample',
    request,
    metadata || {},
    this.methodDescriptorGetSample);
  }

  methodDescriptorGetAllSamples = new grpcWeb.MethodDescriptor(
    '/UserSample.UserSampleQuery/GetAllSamples',
    grpcWeb.MethodType.UNARY,
    user_sample_query_pb.GetAllSamplesRequest,
    user_sample_query_pb.CommonResult,
    (request: user_sample_query_pb.GetAllSamplesRequest) => {
      return request.serializeBinary();
    },
    user_sample_query_pb.CommonResult.deserializeBinary
  );

  getAllSamples(
    request: user_sample_query_pb.GetAllSamplesRequest,
    metadata?: grpcWeb.Metadata | null): Promise<user_sample_query_pb.CommonResult>;

  getAllSamples(
    request: user_sample_query_pb.GetAllSamplesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_sample_query_pb.CommonResult) => void): grpcWeb.ClientReadableStream<user_sample_query_pb.CommonResult>;

  getAllSamples(
    request: user_sample_query_pb.GetAllSamplesRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_sample_query_pb.CommonResult) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/UserSample.UserSampleQuery/GetAllSamples',
        request,
        metadata || {},
        this.methodDescriptorGetAllSamples,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/UserSample.UserSampleQuery/GetAllSamples',
    request,
    metadata || {},
    this.methodDescriptorGetAllSamples);
  }

}

