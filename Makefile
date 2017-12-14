
resumee:

	cd resume; md2resume html index.md . -t readable; md2resume pdf index.md . -t readable; mv index.pdf brianabelson.pdf; cd ..

deploy:

	make resumee
	git add -A
	git commit -m'website update'
	git push origin master