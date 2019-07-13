/* eslint-disable */

<template>
	<div class="shopping-car">
		<h3>购物车</h3>
		<hr />
		<!-- <div class="lists">
			<div class="lists-item" v-for="(item,key) in lists" :key="key">
				<img :src="item.thumb_url" alt />
				<p>{{ item.goods_name }}</p>
				<p>{{ item.price }}</p>
				<el-input size="mini" placeholder="请输入内容" v-model="num"></el-input>
				<el-button @click="add(key)">-</el-button>
				<el-button @click="div(key)">+</el-button>
				<br />
				<el-button @click="deletes(key)">移出购物车</el-button>

			</div>
		</div>-->
		<el-divider></el-divider>

		<table>
			<tr>
				<th></th>
				<th>商品名称</th>
				<th>商品价格</th>
				<th>数量</th>
				<th>小计</th>
				<th>操作</th>
			</tr>

			<tr v-for="(item,index) in carList" :key="index">
				<td>
					<input type="checkbox" v-model="item.isSelected" />
				</td>

				<td>{{item.goods_name}}</td>
				<td>{{item.goods_price |currency}}</td>

				<td>
					<button @click="divCount(index)">-</button>
					{{item.num}}
					<button @click="addCount(index)">+</button>
				</td>
				<td>{{item.num*item.goods_price |currency}}</td>
				<td>
					<a href="javascript:;">删除</a>
				</td>
			</tr>
		</table>

		<h3>总价:{{getTotal|currency}}</h3>
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

<style scoped >
table {
	width: 60%;
	margin: 0 auto;
	border-collapse: collapse;
}

table,
tr,
td,
th {
	border: 1px solid #666;
}

.lists {
	width: 100%;
	margin: 0 auto;
}

.lists-item {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	/* 修改盒子模型为 IE模型 */
	float: left;
	text-align: center;
}

.lists-item img {
	width: 30%;
	height: auto;
}
</style>
