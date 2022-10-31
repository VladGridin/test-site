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
	document.getElementById("btn_1").innerHTML='<input type="button" onclick="Minus1()" value="-" class="btn"><input type="button" onclick="Plus1()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
		item = `1${qw*10}`;
		tg.MainButton.show();
	}
};

function Minus1(){
	if (qw> 1) {
		qw--
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
		item = `1${qw*10}`;
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
			item = `1${qw*10}`;
			tg.MainButton.show();
		}
	}
};
function Plus1(){
	if (qw< 5){
		qw++
		document.getElementById("txt1").innerHTML = `<p class="text">${qw*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
		item = `1${qw*10}`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${qw*10}л Газа`);
			item = `1${qw*10}`;
			tg.MainButton.show();

		
	}
};

function btn2(){
	document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
	document.getElementById("btn_2").innerHTML='<input type="button" onclick="Minus2()" value="-" class="btn"><input type="button" onclick="Plus2()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `2${we*10}`;
		tg.MainButton.show();
	}
};

function Minus2(){
	if (we> 1) {
		we--
		document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `2${we*10}`;
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
			item = `2${we*10}`;
			tg.MainButton.show();
		}
	}
};
function Plus2(){
	if (we< 5){
		we++
		document.getElementById("txt2").innerHTML = `<p class="text">${we*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
		item = `2${we*10}`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${we*10}л 95-Евро`);
			item = `2${we*10}`;
			tg.MainButton.show();
		
	}
};
// Кнопка 3 для 95-Puls
function btn3(){
	document.getElementById("txt3").innerHTML = `<p class="text">${er*10}л</p>`;
	document.getElementById("btn_3").innerHTML='<input type="button" onclick="Minus3()" value="-" class="btn"><input type="button" onclick="Plus3()" value="+" class="btn">';
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
		item = `3${er*10}`;
		tg.MainButton.show();
	}
};

function Minus3(){
	if (er> 1) {
		er--
		document.getElementById("txt3").innerHTML = `<p class="text">${er*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
		item = `3${er*10}`;
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
			item = `3${er*10}`;
			tg.MainButton.show();
		}
	}
};
function Plus3(){
	if (er< 5){
		er++
		document.getElementById("txt3").innerHTML = `<p class="text">${er*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
		item = `3${er*10}`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${er*10}л 95-Puls`);
			item = `3${er*10}`;
			tg.MainButton.show();
		
	}
};
// Кнопка 4 для ДП-Евро
function btn4(){
	document.getElementById("txt4").innerHTML = `<p class="text">${rt*10}л</p>`;
	document.getElementById("btn_4").innerHTML=`<input type="button" onclick="Minus4()" value="-" class="btn"><input type="button" onclick="Plus4()" value="+" class="btn">`;
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${rt*10}л ДП-Евро`);
		item = `4${rt*10}`;
		tg.MainButton.show();
	}
};

function Minus4(){
	if (rt> 1) {
		rt--
		document.getElementById("txt4").innerHTML = `<p class="text">${rt*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${rt*10}л ДП-Евро`);
		item = `4${rt*10}`;
		tg.MainButton.show();
	}
	else {
		document.getElementById("btn_4").innerHTML='<input type="button" onclick="btn4()" value="Buy" class="btn">';
		document.getElementById("txt4").innerHTML ="";
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText(`Вы выбрали ${rt*10}л ДП-Евро`);
			item = `5${rt*10}`;
			tg.MainButton.show();
		}
	}
};
function Plus4(){
	if (rt< 5){
		rt++
		document.getElementById("txt4").innerHTML = `<p class="text">${rt*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${rt*10}л ДП-Евро`);
		item = `5${rt*10}`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали ${rt*10}л ДП-Евро`);
			item = `5${rt*10}`;
			tg.MainButton.show();
		
	}
};
//5
function btn5(){
	document.getElementById("txt5").innerHTML = `<p class="text">${rt*10}л</p>`;
	document.getElementById("btn_5").innerHTML=`<input type="button" onclick="Minus5()" value="-" class="btn"><input type="button" onclick="Plus5()" value="+" class="btn">`;
		if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText(`Вы выбрали ${ty*10}л Дп-pulls`);
		item = `5${ty*10}`;
		tg.MainButton.show();
	}
};

function Minus5(){
	if (ty> 1) {
		ty--
		document.getElementById("txt5").innerHTML = `<p class="text">${ty*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${ty*10}л Дп-pulls`);
		item = `5${ty*10}`;
		tg.MainButton.show();
	}
	else {
		document.getElementById("btn_5").innerHTML='<input type="button" onclick="btn5()" value="Buy" class="btn">';
		document.getElementById("txt5").innerHTML ="";
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		}
		else {
			tg.MainButton.setText(`Вы выбрали ${ty*10}л Дп-pulls`);
			item = `5${ty*10}`;
			tg.MainButton.show();
		}
	}
};
function Plus5(){
	if (ty< 5){
		ty++
		document.getElementById("txt5").innerHTML = `<p class="text">${ty*10}л</p>`;
		tg.MainButton.setText(`Вы выбрали ${ty*10}л Дп-pulls`);
		item = `5${ty*10}`;
		tg.MainButton.show();
	}
	else {
			tg.MainButton.setText(`Вы выбрали Дп-pulls ${ty*10}л`);
			item = `5${ty*10}`;
			tg.MainButton.show();
		
	}
};


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});