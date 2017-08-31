import Router from 'koa-better-router'
import dbOp from '../config/db.query.js'


var wetherCityRoute = Router().loadMethods();

wetherCityRoute.post('/wether/citycode/', async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');


    var code = ctx.request.fields.code;

    // console.log(id);

    try {
        var res = await dbOp.db.dbquery('SELECT * FROM tp_china_city WHERE district_code=?', code);
        // console.log(res);
        if (res.length == 0) {
            ctx.status = 404;

        } else {
            ctx.body = res[0];

        }

    } catch (e) {
        ctx.status = 404;
    }





});



module.exports = wetherCityRoute;