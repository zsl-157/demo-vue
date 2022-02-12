import axios from 'axios'

export default function(){
  console.log("速度快放假了看到撒房间里看电视机房里看到撒酒疯")
  let i;
  axios.get("/api/p").then(resp=>{
    console.log(resp);
  })
}