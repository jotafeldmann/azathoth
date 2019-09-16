# Lovecraft

| <img src="docs/lovecraft.png" alt="Lovecraft" width="300" style="display: inline"/> | <i>"That is not dead which can eternal lie,</i> <br> and with strange aeons even death may die" <br><br> Abdul Alhazred, "The Nameless City" (1921) |
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

## Guidelines

- Detach domain from controller
- Error handler: there's only one success flow, so otherwise, throw errors
- Code oriented to IDE (mainly [VS Code](https://code.visualstudio.com/)) autocompletion and IntelliSense
- Dependency injection
  - Please, tests without `rewire`
  - Tests looking only to the function signature
- Async it all

## Services

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

- Tests
  - [ ] [Aplly TDD](https://en.wikipedia.org/wiki/Test-driven_development)
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
  - [x] CLI
  - [ ] Lambda

- Persistences
  - [x] [Sequelize](https://sequelize.org/)
  - [x] [SQLite Memory](https://www.sqlite.org/inmemorydb.html)
  - [ ] Main class refactory
  - [ ] Postgres
  - [ ] File

- Domains
   - [x] Validations with [Joi](https://github.com/hapijs/joi)
   - [ ] Wrap Joi
   - [ ] Wrap Sequelize

- Profiles
  - [ ] PROD
  - [ ] Dev
 
- Container
  - [ ] Docker
  - [ ] Docker compose
    - [ ] Postgres
    - [ ] Redis
  - [ ] Push to Docker Hub
 
 - CI/CD
   - [ ] Circle CI
     - [ ] Badge
   - [ ] Version generation
     - [ ] Diff log
     
- Code templates
  - [ ] Code template library
  - [ ] Domains and tests
  - [ ] Controllers and tests
  - [ ] Interfaces and tests
 
- [ ] Logs

- Documentation
  - [ ] Links
  - [ ] Layers structure
  - [ ] Technologies

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
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [YAGNI](https://pt.wikipedia.org/wiki/YAGNI)
- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
