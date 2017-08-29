const mysql = require('mysql');
const mconfig = require('./mysql.config.js')


var pool = mysql.createPool(mconfig);

// exports.dbquery = (sql, val) => {
//     return new Promise((reslove, reject) => {
//         pool.getConnection((err, con) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 con.query(sql, val, (err, row) => {
//                     if (err) {
//                         reject(err);
//                     }
//                     reslove(row);
//                 })
//                 con.release();
//             }
//         })
//     })
// }

class dbOperation {
    constructor() {
        this.pool = pool;
    }

    dbquery(sql, val) {
        return new Promise((reslove, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                } else {
                    con.query(sql, val, (err, row) => {
                        if (err) {
                            reject(err);
                        }
                        reslove(row);
                    })
                    con.release();
                }
            })
        })
    }

}

exports.db = new dbOperation()