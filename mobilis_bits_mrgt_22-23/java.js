function Margit() {
  if (y.style.display === "none") {
    y.style.display = "inline";
	z.style.display = "inline";
  } else {
    y.style.display = "none";
	z.style.display = "none";
  }
}

var table1 = document.getElementById("nemtudom");
var y = document.getElementById("hidden2");
var z = document.getElementById("hidden3");
var zene = document.getElementById("player");
var megy = localStorage.getItem('playing');

// function start() {
// 	// var w = window.innerWidth.toString;
// 	// if (w<"800px") {
// 	// 	document.querySelector("player").display == "none";
// 	// }

// 	if (typeof(Storage) !== "undefined") {
// 		zene.volume = localStorage.volume;
// 		zene.currentTime = localStorage.position;
// 	}
// 	else {
// 		zene.volume = 0.5;
// 	}
// 	if (megy == "true") {
// 		zene.play();
// 	}
// } 

// function hangero_valt() {
// 	if (typeof(Storage) !== "undefined") {
// 		localStorage.volume = Number(zene.volume);
// 	}
// }

// function pill() {
// 	if (typeof(Storage) !== "undefined") {
// 		localStorage.position = Number(zene.currentTime);
// 	}
// }

// function megall() {
// 	if (typeof(Storage) !== "undefined") {
// 		localStorage.position = Number(zene.currentTime);
// 	}
// }

// function megall() {
// 	megy = false;
// 	localStorage.setItem("playing", false);
// }

// function kezd() {
// 	megy = true;
// 	localStorage.setItem("playing", true);
// }

function meret() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	document.getElementById("pdf").height = h*0.85;
	document.getElementById("pdf").width = w*0.8;
	document.getElementById("pdf").style.marginLeft = "10%";
	document.getElementById("pdf").style.marginRight = "10%";
}

function makeResponsive() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Logo(){
    if(innerWidth<=1260){
        document.getElementById("kep_div").style.display = "inline-block";
        document.getElementById("kep_div").style.float = "none";
    } else {
        document.getElementById("kep_div").style.float = "right";
    }
    document.querySelector("#navbar").style.display = "block";
}

function activeColor() {
    var name = window.location.pathname.split("/").pop();
    console.log(name);
    var x = $('a[href="' + name + '"]').parent().siblings();
    console.log(x);
    var baseid = x.attr('id');
    console.log(baseid);
    x.attr("id", "activ" + baseid);
    //var y = document.getElementById("myLI").parentElement.nodeName;;
    //console.log(y);
}

function loadNavbar(){
  $("#navbar").load("header.html", function() {
		console.log("Navbar loaded.");
		Logo();
		activeColor();
	});
}

function missions(){
    var nat = document.querySelector("#national");
    var reg = document.querySelector("#regional");
    if (nat.style.display == "none"){
        nat.style.display = "block";
        reg.style.display = "none";
        document.querySelector("#natmission").classList.add("missionact");
        document.querySelector("#regmission").classList.remove("missionact");
    } else {
        nat.style.display = "none";
        reg.style.display = "block";
        document.querySelector("#regmission").classList.add("missionact");
        document.querySelector("#natmission").classList.remove("missionact");
    }
}

function check(){
    var row1 = document.querySelector("#odd-bicikli")
    var row2 = document.querySelector("#odd-poster")
    var row3 = document.querySelector("#odd-tavauto")
    var row4 = document.querySelector("#odd-eger")

    var rowList = [row1, row2, row3, row4]

    if (row1.classList.contains("odd-selected") && row2.classList.contains("odd-selected") && row3.classList.contains("odd-selected") && row4.classList.contains("odd-selected")){
        document.querySelector("#odd-congrats").style.display = "block"
        document.querySelector("#odd-tryagain").style.display = "none"
    }
    else{
        document.querySelector("#odd-tryagain").style.display = "block"
        document.querySelector("#odd-congrats").style.display = "none"
    }
    for (i=0; i<4; i++){
        if (rowList[i].classList.contains("odd-selected")){
            rowList[i].classList.add("odd-correct")
        }
    }
}

function check2(){
    var row1 = document.querySelector("#odd-bicikli")
    var row2 = document.querySelector("#odd-poster")
    var row3 = document.querySelector("#odd-tavauto")
    var row4 = document.querySelector("#odd-eger")
    var rowList = [row1, row2, row3, row4]
    var selected = document.getElementsByClassName("odd-selected")
    var correct = 0
    console.log(selected)
    for (i = 0; i < selected.length; i++){
        if (selected[i] === rowList[i]){
            selected[i].classList.add("odd-correct")
            correct++
        } else{
            selected[i].classList.add("odd-wrong")
        }
    }
    if (correct == 4){
        document.querySelector("#odd-congrats").style.display = "block"
        document.querySelector("#odd-tryagain").style.display = "none"
    }else{
        document.querySelector("#odd-tryagain").style.display = "block"
        document.querySelector("#odd-congrats").style.display = "none"
    }
}

function selectOdd(name) {
    var current = document.getElementById(name)
    var sibilings = $('#'+name).siblings()
    if (!(current.classList.contains("odd-selected"))) {
        for (var i = 0; i <sibilings.length ;i++){
            sibilings[i].classList.remove("odd-selected")
            sibilings[i].classList.remove("odd-wrong")
            sibilings[i].classList.remove("odd-correct")
        }
        current.classList.add("odd-selected")
    }
    else{
        current.classList.remove("odd-selected")
    }
}