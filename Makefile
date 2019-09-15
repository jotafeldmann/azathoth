args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`
gotoSource = cd source
.PHONY: dev
dev:
	$(gotoSource) && npm run dev

.PHONY: npm
npm:
	$(gotoSource) && npm $(call args,defaultstring)
