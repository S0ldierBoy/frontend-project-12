install:
	npm install
	npm install --prefix frontend

start-backend:
	npx start-server -s ./frontend/dist

start:
	make start-backend

build:
	rm -rf frontend/dist
	npm run build