<template>
	<div class="goods">
		<div class="car">
			<div class="car_left">
				<img :src="goods.thumb_url" alt />
				<h3>{{goods.goods_name}}</h3>
			</div>
			<div class="car_right">
				<br />

				<h3>MICHAEL KORS 迈克 科尔斯 MK女包 CYNTHIA系列黑色牛皮时尚女士中号手拎单肩包 30F7GCYS2L BLACK</h3>
				<br />
				<div class="miaosha">
					<div class="miaosha_left">
						<p class="info">每满1000元，可减100元现金，最多可减2000元 详情 >></p>
						<div>
							<span>
								品牌:
								<a>{{goods.brand}}</a>
							</span>
						</div>
						<div>
							<span>闪购价：￥{{goods.price}}</span>
						</div>
						<div>
							<span>优惠券{{goods.price/5}}</span>
						</div>
						<div>
							<span>重量：0.5kg</span>
						</div>
						<div>
							<span>配送至：四川轻化工大学</span>
						</div>
						<div>
							<span>默认快递：顺丰</span>
						</div>
						<div>
							<span>留言：{{goods.price}}</span>
						</div>
					</div>
					<div class="miaosha_right">
						<div class="serve">意外换3个月 ￥80</div>
						<div class="serve">意外换3个月 ￥80</div>
						<div class="serve">意外换3个月 ￥80</div>
						<div class="serve">意外换3个月 ￥80</div>
					</div>
				</div>
				<hr />
				<div class="add">
					<el-button class="anniu" type="primary" @click="addCar()">添加到购物车</el-button>
				</div>
				<span class="info">
					温馨提示
					·支持7天无理由退货
				</span>
			</div>
		</div>
	</div>

	<!-- <el-button class="anniu" type="primary" @click="add()">添加到购物车</el-button> -->
</template>

<script>

import store from "@/store";

export default {
	name: 'goods',
	store,
	data () {
		return {

			goods: []
		}
	},
	methods: {


		addCar () {
			var that = this
			var cartListStr = localStorage.getItem('carList')          //本地存贮的信息数据只能是字符串
			//将字符串转为数据
			var carList = JSON.parse(cartListStr) || []             //如果不存在 给一个空数组
			//判断购物车中是否有该商品
			var isHere = carList.find(
				function (item) {
					return item.goods_id == that.goods.goods_id   //详情页中商品id和购物车中的每一个商品id
				}
			)
			if (!isHere) {
				carList.push({
					goods_id: that.goods.goods_id,
					goods_name: that.goods.goods_name,
					goods_price: that.goods.price,
					num: 1
				})
			}
			else {
				isHere.num += 1
			}
			console.log('当前购物车数据:', carList);
			//再存储最新的数据
			localStorage.setItem('carList', JSON.stringify(carList))
			alert("添加购物车成功！")
		},

		add () {
			// console.log('obje当前商品ct :', this.goods)
			// store.commit("addItem", this.goods);
			// //  alert('添加购物车成功！

		}
	},
	created () {
		var that = this
		//获取当前的商品id
		var goodsId = that.$route.query.id//获取地址栏查询参数
		console.log('当前商品id,发送请求中 :', goodsId);

		that.$http.get('/list/one?goods_id=' + goodsId)
			.then((result) => {
				console.log('当前商品result :', result);
				that.goods = result.data[0]
				console.log('goods :', that.goods);


			}).catch((err) => {
				console.log('err :', err);

			});

	}
}
</script>

<style scoped >
.goods {
	width: 100%;
	height: 600px;
	text-align: center;
}
.car {
	width: 80%;
	height: 550px;
	background-color: rgb(241, 240, 240);
	margin: 0 auto;
	margin-top: 50px;
}
.car_left {
	width: 40%;
	height: 100%;
	float: left;
}
img {
	position: relative;
	width: 80%;
	top: 10%;
	margin-top: 10%;
	border-spacing: 2px;
	border: 1px solid #8e8e8e;
	margin-bottom: 30px;
}
.car_right {
	width: 60%;
	height: 100%;
	text-align: left;
	float: left;
	/* background-color: aquamarine; */
}
.miaosha {
	width: 90%;
	height: 300px;
	border: 1px solid #8e8e8e;
}
.miaosha_left {
	width: 50%;
	height: 90%;
	float: left;
	/* background-color: antiquewhite; */
}

.miaosha_right {
	width: 30%;
	height: 80%;
	/* background-color: antiquewhite; */
	float: left;
}
.serve {
	width: 100px;
	height: 30px;

	font-size: 10px;
	line-height: 30px;
	border: 1px solid #8e8e8e;
}
.serve:hover {
	color: #8e8e8e;
	cursor: pointer;
}

.info {
	font-size: 11px;
}
.miaosha div {
	margin-top: 10px;
	padding-left: 20px;
}
.add {
	width: 100%;
	text-align: center;
}
</style>
