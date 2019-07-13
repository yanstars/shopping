<template>
	<div class="list">
		<div class="content">
			<div class="one">
				<div class="abc">
					<img src="../assets/img/logo.png" class="one-left" />
				</div>
				<div class="one-right">
					<img src="../assets/img/fuw_03.jpg" class="fuw3" />
					<img src="../assets/img/fuw_04.jpg" class="fuw3" />
					<img src="../assets/img/fuw_05.jpg" class="fuw3" />
				</div>
				<div class="one-center">
					<div class="input-group">
						<input type="text" class="form-control" id="name" placeholder="搜索'双肩包'试试~" />
						<div class="input-group-addon btn-danger">搜索</div>
					</div>
					<div class="bcd">
						<span class="text-danger">&nbsp潮流双肩包</span>
						<span>| 热销爆款 |</span>
						<span class="text-danger">品质真皮</span>
						<span>| 绅士公文 |</span>
						<span>拉杆箱</span>
					</div>
				</div>
			</div>
			<div class="two-top">
				<div class="two-first">
					<li class="dropdown" style="list-style: none;">
						<a href="#" class="data-toggle" data-toggle="dropdown" style="color: #fff">
							全部商品
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li>
								<router-link to="/home">首页</router-link>
							</li>
							<li>
								<router-link to="/home/catogery">新品</router-link>
							</li>
							<li>
								<router-link to="/home/catogery">爆款</router-link>
							</li>
							<li>
								<router-link to="/home/catogery">真皮</router-link>
							</li>
							<li>
								<router-link to="/home/catogery">品牌</router-link>
							</li>
							<li>
								<router-link to="/home/catogery">选包</router-link>
							</li>
						</ul>
					</li>
				</div>

				<div class="two-third">新品 &nbsp &nbsp &nbsp |</div>
				<div class="two-fourth">爆款 &nbsp &nbsp &nbsp |</div>
				<div class="two-fifth">真皮 &nbsp &nbsp &nbsp |</div>
				<div class="two-sixth">品牌 &nbsp &nbsp &nbsp |</div>
				<div class="two-senventh">选包 &nbsp &nbsp &nbsp</div>
			</div>

			<div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100" src="../assets/img/banner01.jpg" alt="First slide" />
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="../assets/img/banner02.jpg" alt="Second slide" />
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="../assets/img/banner03.jpg" alt="Third slide" />
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="../assets/img/banner04.jpg" alt="Third slide" />
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleIndicators1"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleIndicators1"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>

			<div class="three">
				<div class="three-center">
					<img src="../assets/img/rec01.jpg" />
					<img src="../assets/img/rec02.jpg" />
					<img src="../assets/img/rec03.jpg" />
				</div>
			</div>
			<div class="hr"></div>
			<div class="four">
				<div class="four-center">
					<div class="four-top">
						<div class="four-top-left">
							<img src="../assets/img/1f.png" />
						</div>
						<div class="four-top-right">查看更多</div>
					</div>
					<div class="four-left">
						<img src="../assets/img/1z.jpg" />
					</div>
					<div class="four-right">
						<!-- --------------------------------------------------------------------- -->

						<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/img/f01banner01.jpg" alt="First slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f01banner02.jpg" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f01banner03.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f01banner04.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f01banner05.jpg" alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators2"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators2"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>

						<!-- ------------------------------------------------------------------ -->
					</div>
				</div>

				<div class="testbottom">
					<div class="lists">
						<div class="lists-item" v-for="(item,key) in lists" :key="key">
							<img :src="item.thumb_url" alt  />
							<h5>
								<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
							</h5>
							<p>￥：{{ item.price/100 }}</p>
						</div>
					</div>
				</div>
			</div>

			<hr />
			<div class="five">
				<div class="five-center">
					<div class="five-top">
						<div class="four-top-left">
							<img src="../assets/img/2f.png" />
						</div>
						<div class="five-top-right">查看更多</div>
					</div>
					<div class="five-left">
						<img src="../assets/img/2z.jpg" />
					</div>
					<div class="five-right">
						<div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/img/f02banner01.jpg" alt="First slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f02banner02.jpg" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f02banner03.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f02banner04.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f02banner05.jpg" alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators3"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators3"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
				<div class="testbottom">
					<div class="lists">
						<div class="lists-item" v-for="(item,key) in lists" :key="key">
							<img :src="item.thumb_url" alt @click="add(key)" />
							<h5>
								<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
							</h5>
							<p>{{ item.price }}</p>
						</div>
					</div>
				</div>
			</div>

			<hr />
			<div class="six">
				<div class="six-center">
					<div class="five-top">
						<div class="four-top-left">
							<img src="../assets/img/3f.png" />
						</div>
						<div class="five-top-right">查看更多</div>
					</div>
					<div class="five-left">
						<img src="../assets/img/3z.jpg" />
					</div>
					<div class="five-right">
						<!-- ------------------------------------------------------------------ -->

						<div id="carouselExampleIndicators4" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators4" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/img/f03banner01.jpg" alt="First slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f03banner02.jpg" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f03banner03.jpg" alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators4"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators4"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>

						<!-- ------------------------------------------------------------------ -->
					</div>
				</div>
				<div class="testbottom">
					<div class="lists">
						<div class="lists-item" v-for="(item,key) in lists" :key="key">
							<img :src="item.thumb_url" alt @click="add(key)" />
							<h5>
								<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
							</h5>
							<p>{{ item.price }}</p>
						</div>
					</div>
				</div>
			</div>

			<hr />
			<div class="seven">
				<div class="seven-center">
					<div class="five-top">
						<div class="four-top-left">
							<img src="../assets/img/4f.png" />
						</div>
						<div class="five-top-right">查看更多</div>
					</div>
					<div class="five-left">
						<img src="../assets/img/4z.jpg" />
					</div>
					<div class="five-right">
						<div id="carouselExampleIndicators5" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators5" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators5" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/img/f04banner01.jpg" alt="First slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f04banner02.jpg" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f04banner03.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f04banner04.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f04banner05.jpg" alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators5"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators5"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
				<!-- ------------------------------------------------------------------------ -->
				<div class="testbottom">
					<div class="lists">
						<div class="lists-item" v-for="(item,key) in lists" :key="key">
							<img :src="item.thumb_url" alt @click="add(key)" />
							<h5>
								<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
							</h5>
							<p>{{ item.price }}</p>
						</div>
					</div>
				</div>
			</div>

			<hr />
			<hr />
			<hr />
			<div class="eight">
				<div class="eight-center">
					<div class="five-top">
						<div class="four-top-left">
							<img src="../assets/img/5f.png" />
						</div>
						<div class="five-top-right">查看更多</div>
					</div>
					<div class="five-left">
						<img src="../assets/img/5z.jpg" />
					</div>
					<div class="five-right">
						<!-- ------------------------------------------------------------------ -->
						<!-- ------------------------------------------------------------------ -->

						<div id="carouselExampleIndicators6" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#carouselExampleIndicators6" data-slide-to="0" class="active"></li>
								<li data-target="#carouselExampleIndicators6" data-slide-to="1"></li>
								<li data-target="#carouselExampleIndicators6" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/img/f05banner01.jpg" alt="First slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f05banner02.jpg" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f05banner04.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f05banner05.jpg" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/img/f05banner03.jpg" alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators6"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators6"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
						<!-- ------------------------------------------------------------------ -->
						<!-- ------------------------------------------------------------------ -->
					</div>
				</div>

				<!-- =------------------------------------- -->
				<div class="testbottom">
					<div class="lists">
						<div class="lists-item" v-for="(item,key) in lists" :key="key">
							<img :src="item.thumb_url" alt @click="add(key)" />
							<h5>
								<router-link :to="'/home/goods?id='+item.goods_id ">{{ item.goods_name }}</router-link>
							</h5>
							<p>{{ item.price }}</p>
						</div>
					</div>
				</div>
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

		add (key) {
			// console.log('key :', key);
			// alert(this.lists[key].goods_name);
			// console.log('obje当前商品ct :', this.lists[key].goods_name)
			store.commit("addItem", this.lists[key]);
			alert('添加购物车成功！ :');
		},

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

<style>
* {
	margin: 0;
	padding: 0;
}
html,
body {
	width: 100%;
	height: 100%;
	/* background-color:#CCCCCC; */
}
.top {
	width: 100%;
	height: 40px;
	background-color: #cccccc;
}
.top-left {
	width: 50%;
	height: 40px;
	/* background-color:chartreuse; */
	float: left;
	padding-top: 10px;
	padding-left: 150px;
}
a:link {
	text-decoration: none;
	color: #080808;
}
.top-right {
	width: 26%;
	height: 40px;
	/* background-color:#985F0D; */
	float: right;
	padding-top: 10px;
	padding-right: 40px;
}
.content {
	height: 6400px;
	width: 100%;
	background-color: #ffffff;
	/* margin-left: 60px; */
}
.one {
	height: 100px;
	width: 100%;
	/* background-color:#006400; */
}
.abc {
	width: 300px;
	height: 100px;
	/* background-color: #269ABC; */
	float: left;
}
.one-left {
	padding-top: 25px;
	padding-left: 96px;
}
.one-center {
	width: 400px;
	height: 100px;
	/* background-color: #000000; */
	padding-top: 20px;
	float: right;
}
.bcd {
	padding-top: 5px;
}
.one-right {
	width: 400px;
	height: 100px;
	/* background-color: #269ABC; */
	float: right;
}
.fuw3 {
	padding-top: 10px;
	padding-left: 40px;
}
.two-top {
	width: 100%;
	height: 40px;
	background-color: #c7254e;
}
.two-first {
	width: 240px;
	height: 40px;
	margin-left: 80px;
	/* background-color: #1B6D85; */
	float: left;
	text-align: center;
	padding-top: 10px;
	color: #fff;
}
.two-second,
.two-third,
.two-fourth,
.two-fifth,
.two-sixth,
.two-senventh {
	width: 80px;
	height: 40px;
	/* background-color:#000000; */
	float: left;
	text-align: center;
	padding-top: 10px;
	color: #fff;
}
.three {
	width: 100%;
	height: 290px;
	/* background-color: #1B6D85; */
	padding-top: 20px;
}
.three-center {
	width: 1200px;
	height: 240px;
	/* background-color: #000000; */
	margin-left: 40px;
}
.hr {
	width: 100%;
	height: 2px;
	background-color: #000000;
}
.four,
.five,
.six,
.seven,
.eight {
	width: 100%;
	height: 1125px;
	/* background-color: #204D74; */
}
.four-center,
.five-center,
.six-center,
.seven-center,
.eight-center {
	width: 1200px;
	height: 500px;
	/* background-color: #000000; */
	margin-left: 40px;
}
.four-top,
.five-top {
	width: 100%;
	height: 40px;
	padding-top: 5px;
	/* background-color: #449D44; */
}
.four-top-left {
	width: 10%;
	height: 40px;
	float: left;
	position: absolute;
}
.four-top-right,
.five-top-right {
	float: right;
	padding-top: 5px;
	padding-right: 5px;
}
.four-left,
.five-left {
	width: 240px;
	height: 460px;
	/* background-color: #9D9D9D; */
	padding-top: 5px;
	float: left;
}
.four-right,
.five-right {
	width: 960px;
	height: 460px;
	/* background-color:#1B6D85; */
	padding-top: 5px;
	padding-left: 5px;
	float: right;
}
.four-bottom,
.five-bottom,
.six-bottom,
.seven-bottom,
.eight-bottom {
	width: 1200px;
	height: 625px;
	/* background-color:#449D44; */
	margin-left: 40px;
}
.four-bottom-one {
	width: 1200px;
	height: 200px;
	/* background-color: #B92C28; */
}
.four-photo1 {
	width: 240px;
	height: 200px;
	/* background-color:#1B6D85; */
	padding-left: 30px;
	float: left;
}
.four-bottom-two {
	width: 1200px;
	height: 200px;
	/* background-color: #B92C28; */
}
.four-bottom-three {
	width: 1200px;
	height: 225px;
	/* background-color: #B92C28; */
}
.list {
	width: 100%;

	padding: 0;
}
.lists {
	position: relative;
	top: 80px;
	left: 50px;
	width: 90%;
	overflow: hidden;
	padding-left: 100px;
  border: 1px solid #8e8e8e
}
.lists  p{
  font-size: 18px;

}

.lists-item {
	width: 15%;
	padding: 0 5px;
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

.testbottom {
	width: 100%;
	min-height: 638px;
	background-color: rgb(231, 231, 231);
	position: absolute;
}
</style>
