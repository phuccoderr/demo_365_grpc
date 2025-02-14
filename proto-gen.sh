mkdir -p ./src/proto
protoc -I=proto ./proto/*.proto \
  --js_out=import_style=commonjs:./src/proto \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto