# Images upload API.

Create an API to enable system users to upload and retrieve images securely provided that they are authenticated.

## Endpoints
- Users API: register and login endpoints
- Upload API: upload and retrieve endpoints

## Requirements

- The API must be written using Nodejs and deployed to AWS lambda (you can either use a free aws account or use the serverless-offline library)
- Use aws-s3 to store the images (you can either create a free aws account or use [localstack](https://github.com/localstack/localstack))
- Think about security while developing you APIs (It's impossible to have a system 100% secure but you will be asked to explain your reasoning)
- The deliverable must be something you consider production ready (whatever this means to you. Again the most important thing will be why you made each design/implementation decision)
- Finally, create a github repo with your project and share it with us as soon as you finish it.
- The final deadline for this deliver is September 15th 23:59 (BRT) 

## Instalation

- [Install GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install NPM and Node](https://nodejs.org/en/download/)
- [Clone the repo](https://help.github.com/en/articles/which-remote-url-should-i-use): `git clone https://github.com/jotafeldmann/lovecraft.git`
- `cd lovecraft`
- `make install`

## How to dev

- `make dev`

## How to use

- Check the Makefile for tasks

- Check interfaces
  - [HTTP](./source/app/interfaces/http/README.md)
  - [CLI](./source/app/interfaces/cli/README.md)


## Improvements

- Use a [TLS termination proxy on DMZ](https://en.wikipedia.org/wiki/TLS_termination_proxy) (maybe Nginx) due to Node.js and HTTPS/TLS crypto performance issues
