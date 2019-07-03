$(document).ready(function () {
  $('div[name="same"]').each(function (index, ele) {

    var x = (Math.random() * 1000)
    var y = (Math.random() * 800)
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
        "width": "100px",
        "height": "100px",
        "z-index": "1",
        "position": "absolute",
        "opacity": "0.7",
        "background-size": "100% 100%",
        // "box-shadow": "5px 5px  50px 10px sandybrown"
      })
      if (index == 0) {
        $(ele).css({
          "width": "82px",
          "height": "64px",
          "background-image": "url('./img/樱花.png')",
          "animation": " rotatey 20s linear infinite"
        })
      } else if (index == 1) {
        $(ele).css({
          "width": "128px",
          "height": "128px",
          "background-image": "url('./img/樱花.png')",
          "animation": " rotatez 15s linear infinite"
        })

      } else if (index == 4) {
        $(ele).css({
          "width": "128px",
          "height": "128px",
          "background-image": "url('./img/樱花.png')",
          "animation": " rotatey 20s linear infinite"
        })

      } else if (index == 2) {
        $(ele).css({
          "width": "175px",
          "height": "128px",
          "background-image": "url('./img/樱花.png')",
          "animation": " rotatez 10s linear infinite",
        })

      } else {
        $(ele).css({
          "width": "64px",
          "height": "64px",
          "background-image": "url('./img/樱花.png')",
          "animation": " rotatez 5s linear infinite"
        })
      }

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
  });
})