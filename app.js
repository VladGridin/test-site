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
	document.getElementById("btn_1").innerHTML='<input type="button" onclick="Minus1()" value="-" class="btn">' + '<input type="button" onclick="Plus1()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
		item = `Газ ${qw*10}л`;
		tg.MainButton.show();
	}
};

function Minus1(){
	if (qw> 1) {
		qw--
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
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
			tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
			item = `Газ ${qw*10}л`;
			tg.MainButton.show();
		}
	}
};
function Plus1(){
	if (qw< 5){
		qw++
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
		item = `Газ ${qw*10}л`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
			item = `Газ ${qw*10}л`;
			tg.MainButton.show();

		
	}
};

function btn2(){
	document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
	document.getElementById("btn_2").innerHTML='<input type="button" onclick="Minus2()" value="-" class="btn">' + '<input type="button" onclick="Plus2()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `95-Евро ${we*10}л`;
		tg.MainButton.show();
	}
};

function Minus2(){
	if (we> 1) {
		we--
		document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `95-Евро ${we*10}л`;
		tg.MainButton.show();
	}
	else {
		document.getElementById("btn_2").innerHTML='<input type="button" onclick="btn2()" value="Buy" class="btn">';
		document.getElementById("txt2").innerHTML ="";
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
			item = `95-Евро ${we*10}л`;
			tg.MainButton.show();
		}
	}
};
function Plus2(){
	if (we< 5){
		we++
		document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `95-Евро ${we*10}л`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
			item = `95-Евро ${we*10}л`;
			tg.MainButton.show();
		
	}
};
// Кнопка 3 для 95-Puls
function btn3(){
	document.getElementById("txt3").innerHTML = `<p class="text">${we*10}л</p>`;
	document.getElementById("btn_3").innerHTML='<input type="button" onclick="Minus3()" value="-" class="btn">' + '<input type="button" onclick="Plus3()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
		item = `95-Puls ${er*10}л`;
		tg.MainButton.show();
	}
};

function Minus3(){
	if (er> 1) {
		er--
		document.getElementById("txt3").innerHTML = `<p class="text">${er*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
		item = `95-Puls ${er*10}л`;
		tg.MainButton.show();
	}
	else {
		document.getElementById("btn_3").innerHTML='<input type="button" onclick="btn3()" value="Buy" class="btn">';
		document.getElementById("txt3").innerHTML ="";
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
			item = `95-Puls ${er*10}л`;
			tg.MainButton.show();
		}
	}
};
function Plus3(){
	if (er< 5){
		er++
		document.getElementById("txt3").innerHTML = `<p class="text">${er*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали 95-Puls ${er*10}л`);
		item = `95-Puls ${er*10}л`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали 95-Puls ${er*10}л`);
			item = `95-Puls ${er*10}л`;
			tg.MainButton.show();
		
	}
};

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});