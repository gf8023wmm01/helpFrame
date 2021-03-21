const Koa = require('koa');
const serve = require('koa-static');
const http = require('http');
const path = require('path');
const open = require('open');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();

    if (ctx.status === 404) {
        ctx.response.status = 404;
        ctx.response.body = '404 Not Found';
    }
});

app.use(serve(path.join(__dirname, './website')));
http.createServer(app.callback()).listen(8080);
console.log(`http server started on 8080`);

(async () => {
    // Opens the URL in a specified browser.
    let a = await open('http://127.0.0.1:8080');
})();