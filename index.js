import Koa from 'koa'
import dbOp from './config/db.query.js';

import body from 'koa-better-body'
import Router from 'koa-better-router'
import wetherRouter from './routes/wether.js'
import wetherCityRouter from './routes/wether_city.js'


import https from 'https'
const app = new Koa();
app.use(body());
// const router = Router().loadMethods();

// app.use(router.middleware())

// var options = {
//     hostname: 'free-api.heweather.com',
//     port: 443,
//     path: '/v5/weather?city=nanjing&key=a02805ddacc0441882748f6590dd5896',

// }

// function getWether() {
//     return new Promise((resolve, reject) => {
//         var req = https.request(options, (res) => {
//             var data;
//             res.on('error', (err) => {
//                 reject(err);
//             })
//             res.on('data', (chunk) => {
//                 data += chunk;
//             })
//             res.on('end', () => {
//                 resolve(data);
//             })
//         })

//         req.end();
//     })
// }



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
app.use(wetherCityRouter.middleware());
app.use(async ctx => {
    if (ctx.status == 404) {

        console.log("3");


        ctx.body = JSON.stringify({
            success: false,
            data: []

        });
    }

})



app.listen(3000, () => {
    console.log(`server start at ${app}`);
})