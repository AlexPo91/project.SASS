var elem = document.querySelector('.dot_point');
var dot_1 = document.querySelector('.dot_1');
var dot_2 = document.querySelector('.dot_2');
var dot_3 = document.querySelector('.dot_3');
var dot_4 = document.querySelector('.dot_4');
var choice = document.querySelector('.choice h2');
var navigation_line = document.querySelector('.navigation_line');
var products = document.querySelector('.products');
var home = document.querySelector('.home');
var about = document.querySelector('.about');
dot_1.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "208px";
    choice.innerText = "01"
};
dot_2.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "260px";
    choice.innerText = "02"
};
dot_3.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "310px";
    choice.innerText = "03"
};
dot_4.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "360px";
    choice.innerText = "04"
};
products.onclick = function () {
    navigation_line.style.transform = "translate(937px,10px)"
    navigation_line.style.width = "90px";
};
home.onclick = function () {
    navigation_line.style.transform = "translate(774px,10px)"
    navigation_line.style.width = "50px";
};
about.onclick = function () {
    navigation_line.style.transform = "translate(1117px,10px)"
    navigation_line.style.width = "60px";
};




