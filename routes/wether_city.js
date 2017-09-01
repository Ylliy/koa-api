import Router from 'koa-better-router'
import dbOp from '../config/db.query.js'


var wetherCityRoute = Router({ prefix: '/api' }).loadMethods();

wetherCityRoute.post('/wethercity/:citycode/:othparams', async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    var clonums = ctx.params.citycode;
    console.log('wetherCity middleware')
    var code = ctx.request.fields.code;

    // console.log(id);

    try {
        var res = await dbOp.db.dbquery(`SELECT * FROM tp_china_city WHERE ${clonums}=?`, code);
        // console.log(res);
        ctx.status = 200
            // ctx.body = res;
        ctx.state.re = res;

    } catch (e) {
        ctx.status = 404;
    }

});


// wetherCityRoute.get('/wethercity/:citycode/:', async(ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', '*');
//     console.log()
//     console.log('wetherCity middleware')
//     var code = ctx.request.fields.code;

//     // console.log(id);

//     try {
//         var res = await dbOp.db.dbquery('SELECT * FROM tp_china_city WHERE district_code=?', code);
//         // console.log(res);
//         ctx.status = 200
//         ctx.body = res[0];



//     } catch (e) {
//         ctx.status = 404;
//     }

// });




module.exports = wetherCityRoute;