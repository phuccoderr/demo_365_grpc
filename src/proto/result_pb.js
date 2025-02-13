// source: result.proto
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

goog.exportSymbol('proto.CommonResult', null, global);
goog.exportSymbol('proto.Error', null, global);
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
proto.CommonResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CommonResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CommonResult.displayName = 'proto.CommonResult';
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
proto.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Error.repeatedFields_, null);
};
goog.inherits(proto.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Error.displayName = 'proto.Error';
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
proto.CommonResult.prototype.toObject = function(opt_includeInstance) {
  return proto.CommonResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CommonResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CommonResult.toObject = function(includeInstance, msg) {
  var f, obj = {
statuscode: jspb.Message.getFieldWithDefault(msg, 1, 0),
issuccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
data: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
datatype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
messagecode: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
error: (f = msg.getError()) && proto.Error.toObject(includeInstance, f)
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
 * @return {!proto.CommonResult}
 */
proto.CommonResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CommonResult;
  return proto.CommonResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CommonResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CommonResult}
 */
proto.CommonResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatuscode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatatype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecode(value);
      break;
    case 6:
      var value = new proto.Error;
      reader.readMessage(value,proto.Error.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.CommonResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CommonResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CommonResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CommonResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatuscode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIssuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 statusCode = 1;
 * @return {number}
 */
proto.CommonResult.prototype.getStatuscode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.setStatuscode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool isSuccess = 2;
 * @return {boolean}
 */
proto.CommonResult.prototype.getIssuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.setIssuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string data = 3;
 * @return {string}
 */
proto.CommonResult.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.setData = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.clearData = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CommonResult.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string dataType = 4;
 * @return {string}
 */
proto.CommonResult.prototype.getDatatype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.setDatatype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.clearDatatype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CommonResult.prototype.hasDatatype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string messageCode = 5;
 * @return {string}
 */
proto.CommonResult.prototype.getMessagecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.setMessagecode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.clearMessagecode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CommonResult.prototype.hasMessagecode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Error error = 6;
 * @return {?proto.Error}
 */
proto.CommonResult.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, proto.Error, 6));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.CommonResult} returns this
*/
proto.CommonResult.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CommonResult} returns this
 */
proto.CommonResult.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CommonResult.prototype.hasError = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Error.repeatedFields_ = [1];



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
proto.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
detailsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
stacktrace: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.Error}
 */
proto.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Error;
  return proto.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Error}
 */
proto.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStacktrace(value);
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
proto.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStacktrace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string details = 1;
 * @return {!Array<string>}
 */
proto.Error.prototype.getDetailsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Error} returns this
 */
proto.Error.prototype.setDetailsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Error} returns this
 */
proto.Error.prototype.addDetails = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Error} returns this
 */
proto.Error.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
};


/**
 * optional string stackTrace = 2;
 * @return {string}
 */
proto.Error.prototype.getStacktrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Error} returns this
 */
proto.Error.prototype.setStacktrace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto);
