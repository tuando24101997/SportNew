document.addEventListener("DOMContentLoaded", function(){
	var post = document.getElementsByClassName('post');
	var list_post = document.getElementsByClassName('list-post');
	var muiten = document.getElementsByClassName("muiten");
	var dashboard = document.getElementsByClassName("dashboard");
	var temp = "lan1";

	var icon1 = document.getElementsByClassName("icons1");
	var icon2 = document.getElementsByClassName("icons2");

	post[0].onclick = function(){
		if ( temp == "lan1") {
			list_post[0].classList.add("xuathienlistpost");
			muiten[0].classList.add("xuathienmuiten");
			temp = "lan2";
		} else if (temp == "lan2" ){
			list_post[0].classList.remove("xuathienlistpost");
			muiten[0].classList.remove("xuathienmuiten");
			temp = "lan1";
		}
		icon2[0].classList.add("iconmautrang");
	}

	var click_user = document.getElementsByClassName("setting-user");
	var user = document.getElementsByClassName("content-title-small");
	user[0].onclick = function(){
		click_user[0].classList.toggle("xuathienuser");
	}

	

}, false);