
document.getElementById("mulai").addEventListener("click", function () {

    document.getElementById("mulai").style.display = 'none'
    document.getElementById("jalan").style.animation = 'jalananimation 20s linear infinite'


    setInterval(() => {
        num = Math.floor(Math.random() * (350 - 230 + 1) + 230)
        document.getElementById("mobillawan1").style.left = `${num}px`

    }, 3000)
    setInterval(() => {
        num = Math.floor(Math.random() * (150 - 50 + 1) + 50)
        document.getElementById("mobillawan2").style.left = `${num}px`

    }, 6000)
    setInterval(() => {
        num = Math.floor(Math.random() * (-50 + 140 + 1) - 140)
        document.getElementById("mobillawan3").style.left = `${num}px`

    }, 5000)
    setInterval(() => {
        num = Math.floor(Math.random() * (-220 + 330 + 1) - 330)
        document.getElementById("mobillawan4").style.left = `${num}px`

    }, 4000)


    document.getElementById("mobillawan1").style.animation = 'mob1 3s linear infinite'
    document.getElementById("mobillawan2").style.animation = 'mob2 6s linear infinite'
    document.getElementById("mobillawan3").style.animation = 'mob3 5s linear infinite'
    document.getElementById("mobillawan4").style.animation = 'mob4 4s linear infinite'


    let t = 15
    let l = 0

    //KeyCode untuk atas kiri kanan bawah

    window.addEventListener("keydown", function (x) {
        // atas = w
        if (x.keyCode == 87) {  
            t = t - 3
        }
        // kiri = a
        if (x.keyCode == 65) {
            l = l - 1
        }
        // kanan = d
        if (x.keyCode == 83) {
            t = t + 3
        }
        // bawah = s
        if (x.keyCode == 68) {
            l = l + 1
        }

        document.getElementById("busbjrbkla").style.top = `${t}vh`
        document.getElementById("busbjrbkla").style.left = `${l}vw`
    })

    n = 0
    setInterval(() => {
        score = document.getElementById("score").value;
        score.innerText = `Score : ${n}`
        n = n + 1

        game = 'not over'

        var mob1_left = Math.abs(document.getElementById("gambarmobil1").getBoundingClientRect().left);
        var mob1_right = Math.abs(document.getElementById("gambarmobil1").getBoundingClientRect().right);
        var mob1_top = Math.abs(document.getElementById("gambarmobil1").getBoundingClientRect().top);
        var mob1_bottom = Math.abs(document.getElementById("gambarmobil1").getBoundingClientRect().bottom);

        var mob2_left = Math.abs(document.getElementById("gambarmobil2").getBoundingClientRect().left);
        var mob2_right = Math.abs(document.getElementById("gambarmobil2").getBoundingClientRect().right);
        var mob2_top = Math.abs(document.getElementById("gambarmobil2").getBoundingClientRect().top);
        var mob2_bottom = Math.abs(document.getElementById("gambarmobil2").getBoundingClientRect().bottom);

        var mob3_left = Math.abs(document.getElementById("gambarmobil3").getBoundingClientRect().left);
        var mob3_right = Math.abs(document.getElementById("gambarmobil3").getBoundingClientRect().right);
        var mob3_top = Math.abs(document.getElementById("gambarmobil3").getBoundingClientRect().top);
        var mob3_bottom = Math.abs(document.getElementById("gambarmobil3").getBoundingClientRect().bottom);

        var mob4_left = Math.abs(document.getElementById("gambarmobil4").getBoundingClientRect().left);
        var mob4_right = Math.abs(document.getElementById("gambarmobil4").getBoundingClientRect().right);
        var mob4_top = Math.abs(document.getElementById("gambarmobil4").getBoundingClientRect().top);
        var mob4_bottom = Math.abs(document.getElementById("gambarmobil4").getBoundingClientRect().bottom);

        var busbjrbkla_left = Math.abs(document.getElementById("gambarbus").getBoundingClientRect().left);
        var busbjrbkla_right = Math.abs(document.getElementById("gambarbus").getBoundingClientRect().right);
        var busbjrbkla_top = Math.abs(document.getElementById("gambarbus").getBoundingClientRect().top);
        var busbjrbkla_bottom = Math.abs(document.getElementById("gambarbus").getBoundingClientRect().bottom);


        if (busbjrbkla_left < 300 || busbjrbkla_right > 1130 || busbjrbkla_top < 20 || busbjrbkla_bottom > 690) {
            setTimeout(() => {
                alert(`GAME OVER! Skor kamu: ${score}`)
            })
            game = 'over'
            location.reload()
            return game

        }
        if (((mob1_left < busbjrbkla_left && busbjrbkla_left < mob1_right) || (mob1_left < busbjrbkla_right && busbjrbkla_right < mob1_right)) && ((mob1_top < busbjrbkla_top && busbjrbkla_top < mob1_bottom) || (mob1_top < busbjrbkla_bottom && busbjrbkla_bottom < mob1_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            game = 'over'
            location.reload()
            return game

        }
        if (((mob2_left < busbjrbkla_left && busbjrbkla_left < mob2_right) || (mob2_left < busbjrbkla_right && busbjrbkla_right < mob2_right)) && ((mob2_top < busbjrbkla_top && busbjrbkla_top < mob2_bottom) || (mob2_top < busbjrbkla_bottom && busbjrbkla_bottom < mob2_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            game = 'over'
            location.reload()
            return game

        }
        if (((mob3_left < busbjrbkla_left && busbjrbkla_left < mob3_right) || (mob3_left < busbjrbkla_right && busbjrbkla_right < mob3_right)) && ((mob3_top < busbjrbkla_top && busbjrbkla_top < mob3_bottom) || (mob3_top < busbjrbkla_bottom && busbjrbkla_bottom < mob3_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            game = 'over'
            location.reload()
            return game

        }
        if (((mob4_left < busbjrbkla_left && busbjrbkla_left < mob4_right) || (mob4_left < busbjrbkla_right && busbjrbkla_right < mob4_right)) && ((mob4_top < busbjrbkla_top && busbjrbkla_top < mob4_bottom) || (mob4_top < busbjrbkla_bottom && busbjrbkla_bottom < mob4_bottom))) {

            setTimeout(() => {
                alert(`GAME OVER!`)
            })
            game = 'over'
            location.reload()
            return game

        }


    }, 100)
})