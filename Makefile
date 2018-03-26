
resumee:

	pandoc resume/index.md --from markdown --to html > resume/index.html
	pandoc resume/index.md --from markdown --to pdf --output resume/brianabelson.pdf

deploy:

	make resumee
	git add -A
	git commit -m'website update'
	git push origin master