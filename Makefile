args = ''
gotoSource = cd source

.PHONY: cli
cli:
	make npm args='run cli'

.PHONY: cli/test
cli/test:
	make npm args='run cli domain=user action=create login=abc password=123'

.PHONY: cli/test/error
cli/test/error:
	make npm args='run cli domain=user action=create login=ac'

.PHONY: cli/watch
cli/watch:
	make npm args='run dev'

.PHONY: dev
dev:
	make http

.PHONY: http
http:
	make npm args='run dev mode=http'

.PHONY: http/test
http/test:
	curl -v -d '{"login":"blafadfa", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user

.PHONY: http/test/error
http/test/error:
	curl -v -d '{"login":"blaf adfa"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user

.PHONY: install
install:
	make npm args='install'

.PHONY: npm
npm:
	$(gotoSource) && npm $(args)
