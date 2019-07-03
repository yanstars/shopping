$(document).ready(function () {


  //鼠标button内容检测
  $('button').on('mouseover', function () {
    setInterval(function () {
      if ($('input[name=username]').val() != '' && $('input[name=userpsd]').val() != '') {
        $('button').addClass("ready")
      } else {
        $('button').removeClass("ready")
      }
    }, 50)
  })
//彩蛋随机码
  var num = Math.floor(Math.random() * 10)
  // console.log(num)


  //漂浮雪花
  $('div[name="same"]').each(function (index, ele) {
    var x = (Math.random() * 1000)
    var y = (Math.random() * 800)
    var v0x = (Math.random() * 12) - 6
    var v0y = (Math.random() * 8) - 4
    var vx = 0
    var vy = 0
    $(ele).addClass("snowflake")
    if (index == 0) {
      $(ele).css({
        "width": "82px",
        "height": "64px",
        "animation": " rotatey 20s linear infinite"
      })
    } else if (index == 1) {
      $(ele).css({
        "width": "128px",
        "height": "128px",
        "animation": " rotatez 15s linear infinite"
      })

    } else if (index == 3) {
      $(ele).css({
        "width": "128px",
        "height": "128px",
        "animation": " rotatey 20s linear infinite"
      })

    } else if (index == 2) {
      $(ele).css({
        "width": "175px",
        "height": "128px",
        "animation": " rotatez 10s linear infinite",
      })

    } else {
      $(ele).css({
        "width": "64px",
        "height": "64px",
        "animation": " rotatez 5s linear infinite"
      })
    }


    if (index == num) {
      $(ele).on('click', function () {
        alert("中奖了,喜提彩蛋")
      })
    }

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
  //漂浮雪花结束








})