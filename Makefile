args = ''
gotoSource = cd source
.PHONY: dev
dev:
	$(gotoSource) && npm run dev

.PHONY: cli
cli:
	$(gotoSource) && npm run cli $(args)

cli/test:
	make cli args='domain=user action=create login=abc'


.PHONY: npm
npm:
	$(gotoSource) && npm $(args)
