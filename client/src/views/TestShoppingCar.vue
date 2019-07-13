<template>
	<div class="shoppingcar">
		<div class="top">
			<h5 style="position:absolute;left:90px;top:10px;color:#00B7FF">
				<a @click="tohome">返回首页</a>
			</h5>
			<h6 style="position:absolute;left:1000px;color:#00B7FF">最近添加</h6>
			<h6 style="position:absolute;left:1100px;color:#00B7FF">我的收藏</h6>
			<h6 style="position:absolute;left:1200px;color:#00B7FF">客服中心</h6>
		</div>
		<div class="body">
			<img src="../assets/img/logo.png" style="position:absolute;left:110px;top:100px;" />
			<input
				type="text"
				class="form-control"
				id="name"
				placeholder="搜索添加更多~~"
				style="width:400px;position:absolute;left:520px;top:115px;background-color:rgb(252,229,223)"
			/>
			<button
				type="button"
				class="btn btn-secondary"
				style=" position:absolute;left:920px;top:115px;"
			>搜索</button>
			<img
				src="../assets/img//222.jpg"
				style="position:absolute;left:1000px;top:105px;width:25px;height:25px;"
			/>
			<li style="list-style:none;position:absolute;left:1000px;top:135px;">收藏</li>
			<img
				src="../assets/img/消息.svg"
				style="position:absolute;left:1050px;top:105px;width:24px;height;24px;"
			/>
			<li style="list-style:none;position:absolute;left:1050px;top:135px;">信息</li>

			<div class="container">
				<table class="table">
					<thead>
						<tr>
							<th></th>
							<th>商品名字</th>
							<th>商品价格</th>
							<th>数量</th>
							<th>小计</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in carList" :key="index">
							<td>
								<input type="checkbox" v-model="item.isSelected" />
							</td>
							<td>{{item.goods_name}}</td>

							<td>{{item.goods_price |currency}}</td>
							<td>
								<button type="button" @click="divCount(index)" class="btn btn-sm btn-outline-secondary">&lt;</button>&nbsp;
								<span class="money">{{item.num}}</span> &nbsp;
								<button
									type="button"
									@click="addCount(index)"
									class="btn btn-sm btn-outline-secondary"
								>&gt;</button>
							</td>
							<td>{{item.num*item.goods_price |currency}}</td>
							<td>
								<span class="cutGoods" @click="cutGoods(index)">删除</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="container"></div>

			<h5 style="position:absolute;left:100px;top:555px;color:red;">总价：{{getTotal|currency}}</h5>

			<button
				type="button"
				style="position:absolute;left:1000px;top:555px;"
				@click="topay"
				class="btn btn-outline-success"
			>结&nbsp;&nbsp;&nbsp;&nbsp;算</button>
		</div>
	</div>
</template>

<script>
import store from '@/store'
import { join } from 'path';

export default {


	name: 'shoopingCar',
	store,
	data () {
		return {
			num: 1,
			goods: '',
			lists: '',
			toal: 0,
			//  第二种方法

			carList: [],
			zongjia: 0


		}
	},
	methods: {
		divCount (index) {
			var carList = this.carList
			if (carList[index].num > 1) {
				carList[index].num--
			}
			else {
				carList[index].num = 1
			}
			this.carList = carList
			//跟新数据到本地存贮
			localStorage.setItem('carList', JSON.stringify(carList))

		},
		addCount (index) {
			var carList = this.carList
			carList[index].num++
			this.carList = carList

			//跟新数据到本地存贮
			localStorage.setItem('carList', JSON.stringify(carList))

		},
		cutGoods (index) {
			var carList = this.carList
			carList.splice(index, 1)
			this.carList = carList
			localStorage.setItem('carList', JSON.stringify(carList))
		},




		//第二种方式
		deletes (key) {
			console.log('key :', key)
			this.lists.splice(key, 1)
			this.all()
		},
		getList () {
			this.lists = store.state.lists1
			this.all()
		},
		handleChange (value) {
			console.log('value :', value);
			this.all(value)
		},
		all: function (value) {
			// `this` 指向 vm 实例
			var value = 1
			this.lists.forEach(element => {
				this.toal += element.price * value
			});
		},
		tohome () {
			this.$router.push({
				name: 'list'
			})
		},
		topay () {
			this.$router.push({
				name: 'pay'
			})
		}
	},
	computed: {
		getTotal () {
			var that = this
			var carList = that.carList.filter(  //删选出未选中的商品
				function (item) {
					return item.isSelected == true
				})
			console.log('选中的商品 :', carList);
			var total = 0
			for (var i = 0; i < carList.length; i++) {
				total = total + (carList[i].goods_price * carList[i].num)
			}
			return total

		}

	}
	,
	created () {
		this.getList()
		this.all()
		//从本地存储中取出数据
		var carList = JSON.parse(localStorage.getItem('carList'))
		console.log('购物车初始化数据 :', carList)

		var that = this

		if (carList) {  //添加字段   map遍历  返回新数组
			carList = carList.map(
				function (item) {
					item.isSelected = true
					return item
				})


		}

		that.carList = carList || []




	}
}


</script>

<style scoped>
.shoppingcar {
	height: 100%;
	width: 100%;
	background-color: #00b7ff;
	top: 0;
	left: 0;
}

.top {
	height: 50px;
	width: 100%;
	background-color: #f0f0f0;
}

.top h6 {
	line-height: 50px;
}
.top a:hover {
	cursor: pointer;
	color: azure;
	background-color: rgb(119, 119, 119);
}
.top-right {
	height: 50px;
	width: 50%;
	background-color: red;
	position: absolute;
	left: 680px;
	top: 0px;
}

table {
	width: 80%;
	margin: 0 auto;
	border-collapse: collapse;
	position: absolute;
	left: 100px;
	top: 200px;
	border-spacing: 0px 10px;
}

.money {
	font-size: 20px;
	font-weight: 200;
}
.cutGoods {
	cursor: pointer;
	display: inline-block;
	width: 50px;
	height: 30px;
	line-height: 30px;
	font-size: 18px;
	text-align: center;

}

.cutGoods:hover {
	background-color: red;
	border-radius: 5px;
  color: whitesmoke
}
</style>
