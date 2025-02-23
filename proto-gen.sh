protoc -I=./src/api/users/command user_sample_command.proto \
  --js_out=import_style=commonjs:./src/api/users/command \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/api/users/command