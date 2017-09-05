import Router from 'koa-better-router'
import dbOp from '../config/db.query.js'


var wetherCityRoute = Router({ prefix: '/api' }).loadMethods();



wetherCityRoute.post('/wethercity/:citycode', async(ctx, next) => {
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


wetherCityRoute.get('/wethercity/cityprovinc/all', async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    try {
        var data = [];
        var inner = {}
        var res = await dbOp.db.dbquery('select district_cn, province_cn from tp_china_city', null);
        var prov = await dbOp.db.dbquery('select distinct province_cn from tp_china_city', null);
        // prov.forEach(function(el, index, arr) {
        //     var provinceData = {
        //         province: el.province_cn,
        //         city: []
        //     }
        //     provinceData.city.push()

        //     data.push(provinceData)

        // }, this);
        for (let i = 0; i < prov.length; i++) {
            let a = await dbOp.db.dbquery('select district_cn from tp_china_city where province_cn=?', prov[i].province_cn);
            console.log(a);
        }

        res.forEach(function(el, i, arr) {
            var length = data.length - 1;
            if (length == -1 || data[length].province != el.province_cn) {
                data.push({
                    province: el.province_cn,
                    city: []
                })
                length += 1;
            }
            data[length].city.push(el.district_cn);

        }, this);




        // console.log(res);
        ctx.status = 200
        ctx.state.re = data;



    } catch (e) {
        ctx.status = 404;
    }

});




module.exports = wetherCityRoute;