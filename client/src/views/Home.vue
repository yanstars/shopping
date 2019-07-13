<template>
	<div class="home">
		<div id="nav">
			<div style="margin-left:900px;">
				<ul class="header">
					<li class="icon">
						<router-link to="/home">
							<h6>首页</h6>
						</router-link>
					</li>
					<!-- <li class="icon">
						<router-link to="/home/catogery">
							<h6>分类</h6>
						</router-link>
					</li> -->
					<li class="icon">
						<router-link to="/shoppingcar">
							<h6>购物车</h6>
						</router-link>
					</li>
					<li class="icon" v-if="isLogin">
						<router-link to="/personal">
							<h6>个人中心</h6>
						</router-link>
					</li>
					<li class="icon" v-else>
						<router-link to="/login">
							<h6>登陆</h6>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<router-view></router-view>

		<div class="footer">
			<div class="container">
				<ul class="one">
					<li>
						<span>合作伙伴</span>
						<ul class="two">
							<li> <span>严鑫博</span> </li>
							<li><span> 王遥枝</span></li>
							<li><span> 李中勇</span></li>
							<li><span> 高麟珂</span></li>
							<li><span> 徐鹏</span></li>
							<li><span> 余魏</span></li>
						</ul>
					</li>
					<li>
						<span>联系我们</span>
						<ul class="two">
							<li><span>QQ</span></li>
							<li><span> 微信</span></li>
							<li><span> 电话</span></li>
							<li><span> 邮箱</span></li>
							<li><span> 电话</span></li>
							<li><span> 邮箱</span></li>
						</ul>
					</li>
					<li>
						<span>更多信息</span>
						<ul class="two">
							<li><span> 广告</span></li>
							<li><span> 商户</span></li>
							<li><span> 用户</span></li>
							<li><span> 加盟</span></li>
							<li><span> 连锁</span></li>
							<li><span> 连锁</span></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script >
export default {
	name: 'list',
	data () {
		return {
			isLogin: false
		}
	},
	created () {
		var token = localStorage.getItem('token')
		if (token) {
			this.isLogin = true
		} else {
			this.isLogin = false
		}
	}
}
</script>

<style  scoped>
.home {
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#nav {
	width: 100%;
	height: 50px;
	background-color: #f0f0f0;
	margin-top: -16px;

	/* float: right */
}
#nav h6 {
	line-height: 50px;
	color: rgb(0, 183, 255);
}
.header {
	list-style: 0;
}
.header > li {
	font-size: 12px;
	width: 80px;
	display: block;
	float: left;
	line-height: 25px;
	margin-left: 10px;
	text-align: center;
}

.footer {
	position: relative;
	text-align: center;
	width: 100%;
	height: 300px;
	border: 0;
	background-color: rgba(5, 2, 2, 0.678);
	color: aliceblue;
	top: 200px;
}
.one {
	list-style: none;
}

.one li {
	display: inline-block;
	margin: 20px 50px;
}

.two li {
	display: block;
	margin-top: 10px;
	font-size: 10px;
  width: 50px;

}
.two li :hover{
  width: 80px;
}
.two li span{
  cursor: pointer;
}
.two li span:hover{

  color: rgb(213, 241, 181)

}
</style>
