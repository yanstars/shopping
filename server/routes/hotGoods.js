var express = require('express')
var router = express.Router()
var db = require('../models/sql')

/* 获取热销商品 */
router.post('/', function (req, res, next) {
  var sql = `select * from goods where hot = 1 `
  db(sql, [], function (err, data) {

    if (err) {
      res.json({
        state: 0,
        msg: '数据库查询错误',
        error: err
      })
    } else {
      // console.log('data :', data);
      res.json(data)
    }

  })
  console.log(' req到数据 :', req.body)


  // res.json(data)

})



//获取某个商品
router.get('/one', function (req, res, next) {
  console.log('收到商品请求 :');
  //get请求里面的参数  req。query
  var goodsid = req.query.goods_id
  var sql = `select * from goods where goods_id = ? `
  db(sql, [goodsid], function (err, data) {

    if (err) {
      res.json({
        state: 0,
        msg: '数据库查询错误',
        error: err
      })
    } else {
      console.log('data 返回前台 :', data);
      res.json(data)
    }

  })

  // res.json(data)

})

module.exports = router;