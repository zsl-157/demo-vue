<template>
	<view class="content">
		<view class="alert" v-if="msg">{{this.msg}}</view>
		<view style="margin-top: 3rem;display: flex;flex-direction: row;justify-content: space-around;">
			<picker :range="province" :value="index" mode="selector" @change="provinceChange($event)">
				<view class="basePicker">{{province[index]}}</view>
			</picker>
			<picker :range="city[cid]" :value="index2" mode="selector" @change="cityChange($event)">
				<view class="basePicker">{{city[cid][index2]}}</view>
			</picker>
		</view>
		<button class="submitBtn">提交</button>
	</view>
	
</template>

<script>
	export default {
		onLoad() {
			
		},
		data() {
			return {
				data:'',
				province:["河北","河南","山东"],//省份列表
				city:{"1":["石家庄","保定","邢台"],"2":["开封","洛阳","南阳"],"3":["日照","菏泽","济南"]},//省份对应的城市列表
				index:0,//省份索引
				index2:0,//城市索引
				cid:'1',////1对应河北，2对应河南，3对应山东
				msg:"",
			}
		},
		
		mounted() {
			
		},
		
		methods: {
				provinceChange:function(e){
					let provinceIndex = e.detail.value;
					this.index = provinceIndex;
					if(this.index == 0){
						this.cid = "1";
					}
					else if(this.index == 1){
						this.cid = "2";
					}
					else{
						this.cid = "3";
					}
				},
				
				cityChange:function(e){
					let cityIndex = e.detail.value;
					this.index2 = cityIndex;
				},
				submitClick:function(){
					let data = {
						'province':this.province[this.index],
						'city':this.city[this.cid][this.index2],
					}
					uni.request({
						dataType:'json',
						url:"http://127.0.0.1:5000/api/address",
						method:'POST',
						data:data,
						success(resp){
							if(resp['message'] === "提交成功"){
								this.msg = "提交成功"
							}
							else{
								this.msg = "提价失败"
							}
						}
					})
				},
				
		    }
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	
	.basePicker{
		width: 130px;
		height: 30px;
		line-height: 30px;
		border-radius: 7px;
		border: 1px solid #efefef;
		text-align: center;
		color: #747474;
	}
	.basePicker:first-of-type{
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.submitBtn{
		margin-top: 2rem;
		background-color: #8cc5ef;
		width: 298px;
		color: white;	
	}
		
	.alert{
		width: 18rem;
		height: 4rem;
		padding-top: 2rem;
		position: relative;
		text-align: center;
		color: #747474;
		top: 0rem;
		border-top: none;
		box-shadow: 0 0 3px #747474;
		
		display: block;
	}
	
</style>
