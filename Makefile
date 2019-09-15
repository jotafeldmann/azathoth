args = ''
gotoSource = cd source

.PHONY: cli
cli:
	$(gotoSource) && npm run cli $(args)

.PHONY: cli/test
cli/test:
	make cli args='domain=user action=create login=abc password=123' $(args)

.PHONY: cli/test/error
cli/test/error:
	make cli args='domain=user action=create login=ac' $(args)

.PHONY: cli/watch
cli/watch:
	$(gotoSource) && npm run dev $(args)

.PHONY: dev
dev:
	make http

.PHONY: http
http:
	$(gotoSource) && npm run dev 'mode=http' $(args)

.PHONY: http/test
http/test:
	curl -v -d '{"login":"blafadfa", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user

.PHONY: http/test/error
http/test/error:
	curl -v -d '{"login":"blaf adfa"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user

.PHONY: install
install:
	$(gotoSource) && npm install

.PHONY: npm
npm:
	$(gotoSource) && npm $(args)
