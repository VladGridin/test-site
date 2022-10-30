let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";


var qw = "1"
var we = "1"
var er = "1"
var rt = "1"
var ty = "1"

function btn1(){
	document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
	document.getElementById("btn_1").innerHTML='<input type="button" onclick="Minus()" value="-" class="btn">' + '<input type="button" onclick="Plus()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Газ ${qw*10}л`);
		item = `Газ ${qw*10}л`;
		tg.MainButton.show();
	}
};


function Minus(){
	if (qw> 1) {
		qw--
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Газ ${qw*10}л`);
		item = `Газ ${qw*10}л`;
		tg.MainButton.show();
	}
	else {
		document.getElementById("btn_1").innerHTML='<input type="button" onclick="btn1()" value="Buy" class="btn">';
		document.getElementById("txt1").innerHTML ="";
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText(`Газ ${qw*10}л`);
			item = `Газ ${qw*10}л`;
			tg.MainButton.show();
		}
	}
};
function Plus(){
	if (qw< 5){
		qw++
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Газ ${qw*10}л`);
		item = `Газ ${qw*10}л`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Газ ${qw*10}л`);
			item = `Газ ${qw*10}л`;
			tg.MainButton.show();

		
	}
};

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});