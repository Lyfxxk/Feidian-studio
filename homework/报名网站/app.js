var express=require('express')
var router=require('./router')
/* var bodyParser=require('bodyParser') 视频里的方法被弃用了，不能这么搞了*/

var app=express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
/* app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 */
app.use(router)

app.listen(3000,function(){
    console.log('running http://127.0.0.1:3000');
})

module.exports=app