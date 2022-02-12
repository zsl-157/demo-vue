let fs = require("fs");

export default function(content){
  if(!content || content.length<=0){
    throw new Error("日志内容为空！");
  }
  fs.appendFile("../src/log.log",content,(error)=>{
    throw new Error(error);
  })
}

