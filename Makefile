install:
	npm install
	npm install --prefix frontend

start-backend:
	npx start-server -s ./frontend/dist

start-frontend:
	npm run dev --prefix frontend

start:
	make start-backend & make start-frontend

build:
	rm -rf frontend/dist
	npm run build