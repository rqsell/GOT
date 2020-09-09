//war in 3 parts
//From Jon's eyes
class Story {
    constructor(character, weapon) {
        this.character = character
        this.weapon = weapon
        this.scenes = [scene1, scene2, scene3]
        this.scene = null
        this.url = ""
        this.index = 0
        this.decisionmade = false
    }
    pickscene() {
        this.scene = this.scenes[this.index]
        this.url = this.scene.intro
        document.querySelector("#scenename").innerHTML = `<h2> ${this.scene.name}</h2>`
        this.changebutton()
        this.playvideo()
        this.index++
    }
    changebutton() {
        document.querySelector("#d1").innerText = `${this.scene.decision1}`
        document.querySelector("#d2").innerText = `${this.scene.decision2}`
    }
    changevideo(video) {
        console.log(this.scene[video])
        this.url = this.scene[video]
        this.playvideo()
        this.decisionmade = true
    }


    playvideo() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var video = document.getElementById('video');
        video.src = this.url
        video.play()
        video.addEventListener('play', function () {
            var $this = this; //cache
            (function loop() {
                if (!$this.paused && !$this.ended) {
                    ctx.drawImage($this, 0, 0, $this.width, $this.height);
                    setTimeout(loop, 1000 / 30); // drawing at 30fps
                }
            })();
        }, 0);
    }
}

document.querySelector('#d1').onclick = function (e) {
    console.log(e.target.id)
    snowstory.changevideo("video1")


}
document.querySelector('#d2').onclick = function (e) {
    snowstory.changevideo("video2")

}
class Scene {
    constructor(name, intro, decision1, decision2, video1, video2) {
        this.name = name
        this.intro = intro
        this.decision1 = decision1
        this.decision2 = decision2
        this.video1 = video1
        this.video2 = video2
    }

}

let scene1 = new Scene("Armies Assemble", "../video/Archive/scene 1_ armies assemble.mp4", "drogonattack", "flamingarrows", "../video/Archive/scene 1- drogon attacks.mp4", "../video/Archive/scene 1_ shoot arrows.mp4")
let scene2 = new Scene("Viserion Attacks", "../video/Archive/scene 2_ viserion attack.mp4", "dragonfight", "charge", "../video/Archive/scene 2_ dragon fight (1).mp4", "../video/Archive/Scene 2_ official Charge.mp4")
let scene3 = new Scene("Army is exhausted", "../video/army exhausted.mp4", "refuel", "charge", "../video/drink.mp4", "../video/charge.mp4")
let scene4 = new Scene("Mormont Dies", "../video/mormont-dies.mp4", "grieve", "rage", "../video/grief.mp4", "../video/dragonrage.mp4")
let snowstory = new Story("Jon Snow", "Longclaw")
console.log(snowstory)
snowstory.pickscene() //pick first scene


document.querySelector("video").onended = function (e) {
    console.log("video onended")
    if (snowstory.decisionmade === true) {
        snowstory.pickscene()
        snowstory.decisionmade = false
    }

}






// addEventListener('click', function (e) {

// this.scene = this.scenes[this.index]
// this.url = this.scene.video1
// this.playvideo()
// // this.index++
//})


//$(function () {

//});

// document.querySelector("#fight").onclick( )
//$this.width, $this.height)