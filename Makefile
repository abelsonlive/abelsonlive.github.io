
resumee:

	pandoc resume/index.md --from markdown --to html > resume/index.html

deploy:

	make resumee
	git add -A
	git commit -m'website update'
	git push origin master