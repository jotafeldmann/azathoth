# Lovecraft

| <img src="docs/lovecraft.png" alt="Lovecraft" height="200" style="display: inline"/> | <i>"That is not dead which can eternal lie,</i> <br> and with strange aeons even death may die" <br><br> Abdul Alhazred, "The Nameless City" (1921) |
| - | - |

This is my personal project to research about project patterns in Node.js <br> I really appreciate Lovecraft Cthulhu mythos and all the texts from the author.

The first goal: create an API to enable system users to upload and retrieve images securely provided that they are authenticated.

## Disclaimer

This project contains tons of [overengeering](https://en.wikipedia.org/wiki/Overengineering).

## Endpoints

-  [ ] Users API: register and login endpoints
  - [x] Create
  - [ ] Retrieve
  - [ ] Update
  - [ ] Delete
-  [ ] Upload Image API: upload and retrieve endpoints
-  [ ] Auth
  - [ ] Login
  - [ ] Logout

## TODO

- [x] Detach domain from controller
- [x] Error handler
- [ ] Async it all

- Tests
  - [ ] Aplly TDD
  - [ ] Implement suite
  - [ ] Unit tests
  - [ ] [Integrated tests](https://www.quora.com/What-is-the-difference-between-integration-tests-and-integrated-tests)
  
- Security
  - [x] Use Helmet
  - [ ] Sensitive information
  - [ ] Auth tests

- Cache
  - [ ] Redis

- Interfaces
  - [x] HTTP
  - [x] CLIT
  - [ ] Lambda

- Persistences
  - [x] Sequelize
  - [x] SQLite Memory
  - [ ] Main class refactory
  - [ ] Postgres
  - [ ] File
 
- Profiles
  - [ ] PROD
  - [ ] Dev
 
- Container
  - [ ] Docker
  - [ ] Docker compose
    - [ ] Postgres
    - [ ] Redis
  - [ ] Push to hub
 
 - CI/CD
   - [ ] Circle CI
   - [ ] Version generation
     - [ ] Diff log

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
