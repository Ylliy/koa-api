import Koa from 'koa'
import dbOp from './config/db.query.js';

import body from 'koa-better-body'
import Router from 'koa-better-router'
import wetherRouter from './routes/wether.js'

const app = new Koa();
app.use(body());
// const router = Router().loadMethods();

// app.use(router.middleware())

app.use(async(ctx, next) => {

    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})

app.use(async(ctx, next) => {
    const start = Date.now();

    console.log("1");
    await next();

    console.log("4");

    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);

});
app.use(wetherRouter.middleware());
app.use(async ctx => {
    if (ctx.status == 404) {

        console.log("3");

        var a = await dbOp.db.dbquery('SELECT * FROM cds');

        ctx.body = a;
    }

})



app.listen(3000, () => {

    console.log(`server start at ${app}`);
})