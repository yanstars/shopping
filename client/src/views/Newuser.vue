<template>
	<div class="resgin">
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>
		<div class="snowflake" name="same"></div>

		<div class="wrap_main">
			<div class="newuser">
				<a @click="tologin()">LOGIN</a>
			</div>

			<form>
				<div class="login_panel">
					<h2>ALLBUY</h2>
					<div>
						<input
							type="text"
							name="username"
							autocomplete="off"
							autofocus="autofocus"
							v-model="username"
							placeholder="NAME"
						/>
					</div>
					<div>
						<input type="password" v-model="userpass" name="userpsd" placeholder="PASSWORD" />
					</div>
					<div>
						<input
							@keyup.enter="newuser()"
							name="userpsd"
							type="password"
							v-model="passcheck"
							placeholder="PASSWORD"
						/>
					</div>
					<div>
						<button type="button" @click="newuser()">RESGIN</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import $ from 'jquery'
import { setInterval } from 'timers';
export default {
	data () {
		return {
			username: '',
			userpass: '',
			passcheck: ''
		}
	},
	methods: {
		newuser () {
			var that = this
			if (that.userpass != that.passcheck) {

				that.username = ''
				that.userpass = ''
				that.passcheck = ''
				alert('两次密码输入不一致！')

			} else {
				that.$http.post('/user/newuser', {  //服务器中的api
					username: that.username,
					userpass: that.userpass
				}).then((result) => {
					// console.log('result :', result.data.msg
					that.username = ''
					that.userpass = ''
					that.passcheck = ''
					alert('注册成功！')
					this.$router.push({ name: 'login' })
				}).catch((err) => {
					alert("注册失败！")
				})
			}
		},
		tologin () {
			this.$router.push({ name: 'login' })
		}
	},
	created () {

		//输入框获取焦点
		$(function () {
			$('input[name=username]').focus()
		})

		//漂浮特效
		$(function () {
			var num = Math.floor(Math.random() * 10)
			//漂浮雪花随机初始位置
			$('div[name="same"]').each(function (index, ele) {
				var x = (Math.random() * 800)
				var y = (Math.random() * 400)
				var v0x = (Math.random() * 12) - 6
				var v0y = (Math.random() * 8) - 4
				var vx = 0
				var vy = 0

				setInterval(function () {
					vx += v0x
					vy += v0y
					$(ele).css({
						"top": +y + vy + "px",
						"left": +x + vx + "px",
					})

					if (v0x < 0 && $(ele).offset().left <= 0) {
						v0x = -v0x
					}
					if (v0y < 0 && $(ele).offset().top <= 0) {
						v0y = -v0y
					}

					if (v0x > 0 && $(ele).offset().left >= $(document.body).width() - $(ele).width()) {
						v0x = -v0x
					}
					if (v0y > 0 && $(ele).offset().top >= $(document.body).height() - $(ele).height()) {
						v0y = -v0y

					}
				}, 50)
			})

		})
		//漂浮雪花结束



  },
  mounted () {

		//判断是否为空
		$('button').on('mouseover', function () {
			setInterval(function () {
				if ($('input[name=username]').val() != '' && $('input[name=userpsd]').val() != '') {
					$('button').addClass("ready")
				} else {
					$('button').removeClass("ready")
				}
			}, 10)
		})

	}

}
</script>


<style lang="css" scoped>
@keyframes roz {
	0% {
		transform: rotateZ(0deg);
	}

	100% {
		transform: rotateZ(360deg);
	}
}

@keyframes rox {
	0% {
		transform: rotatex(0deg);
	}

	100% {
		transform: rotatex(360deg);
	}
}

@keyframes roy {
	0% {
		transform: rotatey(0deg);
	}

	100% {
		transform: rotatey(360deg);
	}
}

.snowflake {
	width: 82px;
	height: 64px;
	animation: rox 20s linear infinite;
}
.snowflake:nth-child(2) {
	width: 88px;
	height: 64px;
	animation: roy 15s linear infinite;
}
.snowflake:nth-child(3) {
	width: 122px;
	height: 122px;
	animation: roz 20s linear infinite;
}
.snowflake:nth-child(4) {
	width: 64px;
	height: 64px;
	animation: rox 12s linear infinite;
}
.snowflake:nth-child(5) {
	width: 128px;
	height: 128px;
	animation: roy 10s linear infinite;
}

.resgin {
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: url('../assets/img/cursor-red.png') 16 16, auto;
	overflow: hidden;
}
.wrap_main {
	width: 100%;
	height: 100%;
}

.wrap_main::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url('../assets/img/bg2.png');
	background-size: 100% 100%;
	filter: blur(0px);
	z-index: -1;
	overflow: hidden;
}

.login_panel {
	height: 280px;
	width: 460px;
	background-color: rgba(54, 59, 58, 0.55);
	margin: 0 auto;
	margin-top: 10%;
	z-index: 2;
}

.newuser {
	width: 15%;
	position: relative;
	left: 80%;
	text-align: center;
}
.newuser a {
	color: white;
	font-size: 12px;
	line-height: 40px;
	text-decoration: none;
	cursor: pointer;
}

.login_panel {
	text-align: center;
}

.login_panel h2 {
	font-family: Georgia, 'Times New Roman', Times, serif;
	margin-top: 20px;
	padding: 15px 0;
	color: whitesmoke;
	text-shadow: 6px 5px 8px black;
}

.login_panel div {
	height: 30px;
	width: 300px;
	border-radius: 7px;
	margin: 0 auto;
	margin-top: 20px;
}

.snowflake {
	width: 100px;
	height: 100px;
	z-index: 1;
	position: absolute;
	opacity: 0.8;
	background-image: url('../assets/img/yinghua.png');
	background-size: 100% 100%;
}

.ready {
	cursor: url('../assets/img/cursor-zi.png') 16 16, auto !important;
}
.login_panel input {
	width: 90%;
	height: 100%;
	border: none;
	border-radius: 7px;
	padding: 0 10px;
	transition: all 3s;
}
.login_panel input:hover {
	cursor: url('../assets/img/cursor.png') 16 16, auto;
}

.login_panel input:focus {
	box-shadow: 2px 2px 10px 2px blueviolet;
	background-color: #656157;
	color: whitesmoke;
	opacity: 0.8;
	cursor: url('../assets/img/cursor-red.png') 16 16, auto;
}

::-webkit-input-placeholder {
	color: white;
	font-size: 16px;
	line-height: 30px;
}

.login_panel button {
	border: none;
	width: 35%;
	height: 30px;
	color: black;
	font-weight: bolder;
	border-radius: 3px;
	font-size: 15px;
	line-height: 15px;
	margin-top: 10px;
	transition: all 1.5s;
}

.login_panel button:hover,
.login_panel button:active {
	background-color: white;
	font-size: 15px;
	color: blueviolet;
	box-shadow: 5px 2px 10px 2px blueviolet;
	cursor: url('../assets/img/cursor-red.png') 16 16, auto;
}
</style>
