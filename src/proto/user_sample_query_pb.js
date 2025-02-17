// source: user_sample_query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var result_pb = require('./result_pb.js');
goog.object.extend(proto, result_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.UserSample.GetAllSamplesRequest', null, global);
goog.exportSymbol('proto.UserSample.GetSampleRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserSample.GetSampleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserSample.GetSampleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserSample.GetSampleRequest.displayName = 'proto.UserSample.GetSampleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserSample.GetAllSamplesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserSample.GetAllSamplesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserSample.GetAllSamplesRequest.displayName = 'proto.UserSample.GetAllSamplesRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserSample.GetSampleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UserSample.GetSampleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserSample.GetSampleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserSample.GetSampleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserSample.GetSampleRequest}
 */
proto.UserSample.GetSampleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserSample.GetSampleRequest;
  return proto.UserSample.GetSampleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserSample.GetSampleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserSample.GetSampleRequest}
 */
proto.UserSample.GetSampleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserSample.GetSampleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserSample.GetSampleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserSample.GetSampleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserSample.GetSampleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int32Value Id = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.UserSample.GetSampleRequest.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.UserSample.GetSampleRequest} returns this
*/
proto.UserSample.GetSampleRequest.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserSample.GetSampleRequest} returns this
 */
proto.UserSample.GetSampleRequest.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserSample.GetSampleRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserSample.GetAllSamplesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UserSample.GetAllSamplesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserSample.GetAllSamplesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserSample.GetAllSamplesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
skiptakeoption: (f = msg.getSkiptakeoption()) && common_pb.SkipTakeOption.toObject(includeInstance, f),
pagingoption: (f = msg.getPagingoption()) && common_pb.PagingOption.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserSample.GetAllSamplesRequest}
 */
proto.UserSample.GetAllSamplesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserSample.GetAllSamplesRequest;
  return proto.UserSample.GetAllSamplesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserSample.GetAllSamplesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserSample.GetAllSamplesRequest}
 */
proto.UserSample.GetAllSamplesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.SkipTakeOption;
      reader.readMessage(value,common_pb.SkipTakeOption.deserializeBinaryFromReader);
      msg.setSkiptakeoption(value);
      break;
    case 2:
      var value = new common_pb.PagingOption;
      reader.readMessage(value,common_pb.PagingOption.deserializeBinaryFromReader);
      msg.setPagingoption(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserSample.GetAllSamplesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserSample.GetAllSamplesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserSample.GetAllSamplesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserSample.GetAllSamplesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkiptakeoption();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.SkipTakeOption.serializeBinaryToWriter
    );
  }
  f = message.getPagingoption();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.PagingOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional SkipTakeOption SkipTakeOption = 1;
 * @return {?proto.SkipTakeOption}
 */
proto.UserSample.GetAllSamplesRequest.prototype.getSkiptakeoption = function() {
  return /** @type{?proto.SkipTakeOption} */ (
    jspb.Message.getWrapperField(this, common_pb.SkipTakeOption, 1));
};


/**
 * @param {?proto.SkipTakeOption|undefined} value
 * @return {!proto.UserSample.GetAllSamplesRequest} returns this
*/
proto.UserSample.GetAllSamplesRequest.prototype.setSkiptakeoption = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserSample.GetAllSamplesRequest} returns this
 */
proto.UserSample.GetAllSamplesRequest.prototype.clearSkiptakeoption = function() {
  return this.setSkiptakeoption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserSample.GetAllSamplesRequest.prototype.hasSkiptakeoption = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PagingOption PagingOption = 2;
 * @return {?proto.PagingOption}
 */
proto.UserSample.GetAllSamplesRequest.prototype.getPagingoption = function() {
  return /** @type{?proto.PagingOption} */ (
    jspb.Message.getWrapperField(this, common_pb.PagingOption, 2));
};


/**
 * @param {?proto.PagingOption|undefined} value
 * @return {!proto.UserSample.GetAllSamplesRequest} returns this
*/
proto.UserSample.GetAllSamplesRequest.prototype.setPagingoption = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserSample.GetAllSamplesRequest} returns this
 */
proto.UserSample.GetAllSamplesRequest.prototype.clearPagingoption = function() {
  return this.setPagingoption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserSample.GetAllSamplesRequest.prototype.hasPagingoption = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.UserSample);
