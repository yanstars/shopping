var createError = require('http-errors')
var express = require('express')
var path = require('path')
var logger = require('morgan')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))
/*

api  --- s前端请求的服务器地址
cors：解决前端跨域问题

*/
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','Content-Type')
  next()
})


//用户自定义接口处理

var usersRouter =require('./routes/users')
app.use('/user',usersRouter)
var hotGoods=require('./routes/hotGoods')
app.use('/list',hotGoods)




// 404
app.use(function (req, res, next) {
  next(createError(404))
})

// 500
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app