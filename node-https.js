var https = require('https');

// key = 'a02805ddacc0441882748f6590dd5896'
//     // var req = https.get('https://free-api.heweather.com/v5/weather?city=nanjing&key=a02805ddacc0441882748f6590dd5896', (res) => {
//     //     var data = '';
//     //     res.on('data', (chunk) => {
//     //         console.log(chunk);
//     //         data += chunk;
//     //     })
//     //
//     //     res.on('end', () => {
//     //         console.log(data);
//     //     })
//     // })

var options = {
    hostname: 'www.baidu.com',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

    }


}

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
// var m;
// (async() => {
//     console.log("s2::")
//     m = await getWether();
//     console.log(m);
//     console.log("s3::")

// })()


// console.log('server start::::::')






// var req = https.request(options, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
//     var data = '';
//     res.on('data', (chunk) => {
//         console.log(chunk);
//         data += chunk;
//     })

//     res.on('end', (data) => {
//         console.log('data::::', data);
//     })
// })

// req.on('error', function(err) {
//     console.log(err);
// })
// req.end();


// const https = require('https');

// const options = {
//     hostname: 'free-api.heweather.com',
//     port: 443,
//     path: '/v5/weather?city=nanjing&key=a02805ddacc0441882748f6590dd5896',
//     method: 'GET'
// };

// const req = https.request(options, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);

//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });

// req.on('error', (e) => {
//     console.error(e);
// });
// req.end();




var sleep = function(time) {
    return new Promise(function(resolve, reject) {


        setTimeout(function() {
            reject('err');
        }, time);


    })
};

var start = async function() {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    try {
        await sleep('asda');

        console.log('end');
    } catch (e) {
        console.log(e);
    }
    console.log('complete');

};

start();
console.log(123);