args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

.PHONY: dev
dev:
	cd source && npm run dev

.PHONY: npm
npm:
	cd source && npm $(call args,defaultstring)
