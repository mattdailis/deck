all:
	cd frontend && yarn build;
	rm -rf backend/public
	mv frontend/build backend/public
