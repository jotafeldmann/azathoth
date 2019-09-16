# Lovecraft

| <img src="docs/lovecraft.png" alt="Lovecraft" height="200" style="display: inline"/> | <i>"That is not dead which can eternal lie,</i> <br> and with strange aeons even death may die" <br><br> Abdul Alhazred, "The Nameless City" (1921) |
| - | - |

This is my **personal project** to **research about project patterns in Node.js**

Is a pun with `love to craft` code and my favorite author [H.P. Lovecraft](https://en.wikipedia.org/wiki/H._P._Lovecraft).

## Goals

### As application

Create an API to enable system users to upload and retrieve images securely provided that they are authenticated.

### As project and research

- **Independent of Frameworks**: The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.
- **Testable**: The business rules can be tested without the UI, Database, Web Server, or any other external element. Independent of UI. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.
- **Independent of Database**: You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.
- **Independent of any external agency**: business rules simply don’t know anything at all about the outside world.

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
     
- Code templates
 - [ ] Code template library
 - [ ] Domains
 - [ ] Controllers
 - [ ] Interfaces

## Instalation

- [Install GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install NPM and Node](https://nodejs.org/en/download/)
- [Clone the repo](https://help.github.com/en/articles/which-remote-url-should-i-use): `git clone https://github.com/jotafeldmann/lovecraft.git`
- `cd lovecraft`
- `make install`

## How to dev

- `make dev`

## How to use

- [Check the Makefile for tasks](https://github.com/jotafeldmann/lovecraft/blob/master/Makefile)

- Check interfaces
  - [HTTP](./source/app/interfaces/http/README.md)
  - [CLI](./source/app/interfaces/cli/README.md)


## Improvements

- Use a [TLS termination proxy on DMZ](https://en.wikipedia.org/wiki/TLS_termination_proxy) (maybe Nginx) due to Node.js and HTTPS/TLS crypto performance issues

## References

- [Clean Code](https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), by Uncle Bob
- [Onion architecture](https://www.codeguru.com/csharp/csharp/cs_misc/designtechniques/understanding-onion-architecture.html)
