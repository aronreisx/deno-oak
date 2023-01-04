import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

const port = 8000;
const app = new Application();

const router = new Router();

router.get('/', (ctx) => {
	ctx.response.body = 'HTTP GET request received client';
});

router.post('/', (ctx) => {
	ctx.response.body = 'HTTP POST request received client';
});

router.put('/', (ctx) => {
	ctx.response.body = 'HTTP PUT request received client';
});

router.delete('/', (ctx) => {
	ctx.response.body = 'HTTP DELETE request received client';
});

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener('listen', () => {
	console.log(`Server started on localhost:${port} ✅`);
});
