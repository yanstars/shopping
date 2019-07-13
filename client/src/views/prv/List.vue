<template>
	<div class="list">

		<div class="lists">
			<div class="lists-item" v-for="(item,key) in lists" :key="key">
				<img :src="item.thumb_url" alt  />
				<h3>
					<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
				</h3>
				<p>{{ item.price }}</p>
			</div>
		</div>

	</div>
</template>

<script>

import store from "@/store";
export default {
	name: 'aa',
	store,
	data () {
		return {
			lists: [],
			key: '',
			// listsall: [],
			msg: '来自前端的getlist请求',

		}
	},
	methods: {

		// add (key) {
		// 	// console.log('key :', key);
		// 	// alert(this.lists[key].goods_name);
		// 	// console.log('obje当前商品ct :', this.lists[key].goods_name)
    //   store.commit("addItem", this.lists[key]);
    //  alert('添加购物车成功！ :');
		// },

		getList () {
			console.log('getlist请求正在发送--------')
			var that = this
			that.$http.post('/list', {
				//服务器中的api
				name: that.msg
			}).then((result) => {
				console.log('获取热销result :', result);

				this.lists = result.data
			}).catch((err) => {
				console.log('err :', err);
			});
		}
	},

	created () {

		this.getList()
	}

}
</script>

<style scoped>
.lists {
  position: relative;

	width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: aquamarine;
  overflow: hidden;
}

.lists-item {
	width: 25%;
	padding: 10px;
	box-sizing: border-box;
	/* 修改盒子模型为 IE模型 */
	float: left;
	text-align: center;
	border-bottom: 1px solid #8e8e8e;
}

.lists-item img {
	width: 100%;
	height: auto;
}
</style>
