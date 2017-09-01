import Router from 'koa-better-router'
import dbOp from '../config/db.query.js'


var wetherRoute = Router({ prefix: '/api' }).loadMethods();

wetherRoute.get('/wether/get/:id', async(ctx, next) => {
    console.log("2");

    var id = ctx.params.id;
    // console.log(id);


    var res = await dbOp.db.dbquery('SELECT * FROM cds WHERE id=?', id);
    // console.log(res);
    if (res.length == 0) {
        // ctx.status = 404;

    }


    ctx.body = res;


});

wetherRoute.post('/wether/post', async(ctx, next) => {

    ctx.set('Access-Control-Allow-Origin', '*');
    // console.log(ctx.request.fields)
    var res;
    try {
        res = dbOp.db.dbquery("INSERT INTO tp_china_city set ?", ctx.request.fields);
        console.log(res);

    } catch (err) {
        console.log(err);
        ctx.status = 404;
    }

    ctx.body = res;




});




module.exports = wetherRoute;