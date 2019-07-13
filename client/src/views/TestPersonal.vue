<template>
	<div class="personal">
		<div class="one">
			<div class="abc">
				<img @click="toHome" src="../assets/img/logo.png" class="one-left" />
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

		<div class="conten1-a">
			<ul class="nav nav-tabs">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				<li class="dropdown">
					<a href="#" class="data-toggle" data-toggle="dropdown" style="color:white">
						我的麦包包
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li>
							<router-link to="/home">首页</router-link>
						</li>
						<li>
							<a href="#">新品</a>
						</li>
						<li>
							<a href="#">爆款</a>
						</li>
						<li>
							<a href="#">真皮</a>
						</li>
						<li>
							<a href="#">品牌</a>
						</li>
						<li>
							<a href="#">选包</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" style="color:white;">个人中心</a>
				</li>
				<!-- <li><a href="#" style="color:white">新品</a></li>
					<li><a href="#" style="color:white">爆款</a></li>
					<li><a href="#" style="color:white">真皮</a></li>
					<li><a href="#" style="color:white">品牌</a></li>
				<li><a href="#" style="color:white">选包</a></li>-->
			</ul>
		</div>
		<div class="left-menu">
			<p>&nbsp;</p>
			<h4>我的交易</h4>
			<p>订单管理</p>
			<p>退换/售后</p>
			<p>收货地址</p>
			<div class="line1"></div>
			<h4>我的用户</h4>
			<p>零钱</p>
			<p>银行卡</p>
			<p>联名卡</p>
			<p>借记卡</p>
			<p>优惠券</p>
			<div class="line1"></div>
			<h4>我的账户</h4>
			<p @click="userExit">退出账号</p>
			<p>分享账号</p>
		</div>

		<div class="right">
			<img src="../assets/img/touxiang.jpg" />
			<span style="font-size: 20px; font-weight: bold;">麦包包会员，上午好！</span>
			<a href="#" style="color: skyblue; ">设置登录名</a>
			<div class="ziliao">
				<span style>资料完整度：</span>
				<img src="../assets/img/qwe.png" style="height: 16px;width: 112px;" />
				<a href="#" style="color: skyblue; ">立即完善</a>
				<br />
				<span style>账户安全级别:</span>
				<span style="color:red;">低</span>
				<img src="../assets/img/qwer.png" style="height: 25.3px;width:71.3px;" />
				<a href="#" style="color: skyblue; ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;立即提升</a>
				<div class="a">
					<p style="position: absolute;top:20px;left: 50px;">优惠券：0</p>
					<p style="position: absolute;top:20px;left: 230px;">麦包包卡：￥0.00</p>
					<p style="position: absolute;top:20px;left: 480px;">麦包包币：0</p>
					<p style="position: absolute;top:20px;left: 650px;">余额：￥0.00</p>
					<div class="line"></div>
					<p style="position: absolute;top:80px;left: 50px;">我的理财总额：￥0.00</p>
					<p style="position: absolute;top:80px;left: 300px;">快去赚钱吧>></p>
				</div>
				<div class="tixian">提现</div>
			</div>
		</div>

		<div class="shoppingcar">
			<span style="font-size: 20px; font-weight: bold;">我的购物车</span>
		</div>
		<!-- <div style="width: 70%; height: 1px; background:#000000; position: absolute; top: 580px;left:300px;"></div> -->
		<div class="guessyoulike">
			<span style="font-size: 20px; font-weight: bold;">猜你喜欢</span>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>


export default {
	name: 'personal',
	data () {
		return {

		}
	},
	methods: {

		toHome () {
			this.$router.push({
				name: 'list'
			})
		},
    userExit(){

    // localStorage.setItem('token', 'false')
    localStorage.removeItem('token')
    this.toHome()

    }
	}





}
</script>

<style>
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
.conten1-a {
	background-color: #c7254e;
	font-size: 20px;
}
.left-menu {
	text-align: center;
	width: 180px;
	height: 700px;
	/* border: 1px solid #000000; */
	position: fixed;
	margin-left: 120px;
}
.left-menu  p{
  display: block;
  width: 80px;
  cursor: pointer;
}
.left-menu  p :hover{

  cursor: pointer;
  background-color: #f11212
}
.line1 {
	height: 1px;
	width: 120px;
	background-color: #000000;
	margin-left: 30px;
}
.right {
	width: 60%;
	height: 120 px;

	position: absolute;
	top: 150px;
	left: 310px;
}
.shoppingcar {
	position: absolute;
	top: 450px;
	left: 330px;
}
.guessyoulike {
	position: absolute;
	top: 630px;
	left: 330px;
}

.a {
	width: 800px;
	height: 120px;
	background-color: #e6e6fa;
	position: absolute;
	top: 170px;
}
.line {
	background-color: #cfcfcf;
	height: 1px;
	width: 700px;
	position: absolute;
	top: 60px;
	left: 50px;
}
.tixian {
	text-align: center;
	border-radius: 5px;
	width: 40px;
	height: 25px;
	background-color: #a3a3a3;
	position: absolute;
	top: 188px;
	left: 753px;
}
</style>
