var express = require('express');
var router = express.Router();
var db = require('../models/sql');

/* 登录 */
router.post('/login', function (req, res, next) {
  console.log('req收到数据请求 :', req.body);
  var {
    username,
    userpass
  } = req.body
  var sql = `select * from users  where username=?`
  db(sql, [username], function (err, data) {

    if (err) {
      res.json({
        state: 0,
        msg: '数据库查询错误',
        error: err
      })
    }
    if (data.length == 0) {
      res.json({
        state: 1,
        msg: '账号或者密码错误'
      })
    } else {
      console.log('data :', data);
      if (data[0].userpass != userpass) {

        console.log('err :', "密码错误")
        res.json({
          state: 2,
          msg: '密码错误'
        })
      } else {
        console.log('提示信息:', "成功")
         res.json({
          state: 3,
          msg: '登录成功',
          token: 'token'
        })
      }
    }
  })

})

//注册
router.post('/newuser', function (req, res) {

  var { //获取请求参数
    username,
    userpass
  } = req.body //对应html中的names
  //给前端响应

  var sql1 = `select * from users where username=?`
  db(sql1, [username], function (err, data) {
    console.log("输入的密码：", req.body) //请求参数保存在   req.body
    console.log("数据库结果：", data)
    if (err) {
      console.log("查询异常", err)
    }
    if (data.length > 0) {
      res.send("已被注册！")
    } else {

      var sql = `insert into users(username,userpass) values(?,?)`
      db(sql,
        [username, userpass],
        function (err, result) {
          if (err) {
            throw err
          }
          //成功
          console.log("用户注册成功,给前台")
          res.json({
            state: 5,
            msg: '当前用户注册成功',

          })
          

        })
    }
  })
})




module.exports = router;