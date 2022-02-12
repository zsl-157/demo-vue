const express = require("express")

const app = express();
app.use('/api/p',function(req,res,next){
  let ip;
  ip = req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress
  let time = new Date().toLocaleString();
  let logContent = "访问者: "+ ip + "---访问时间： " + time;
  res.send(logContent);
  console.log(logContent)
})

app.listen('8081',function(){
  console.log("后端服务已启动");
})