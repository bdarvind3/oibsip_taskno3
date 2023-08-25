function convertTemp(){
    document.getElementById("fahrenheit").value = document.getElementById("celcius").value * 9/5 + 32;
    document.getElementById("kelvin").value = document.getElementById("celcius").value * 1 + 273.15;
    document.getElementById("reamur").value = document.getElementById("celcius").value * 4/5;
    document.getElementById("rankine").value = document.getElementById("celcius").value * 9/5 + 491.67;
    document.getElementById("romer").value = document.getElementById("celcius").value * 21/40 + 7.5;
    document.getElementById("delisle").value = (100 - document.getElementById("celcius").value) * 3/2;
    document.getElementById("newton").value = document.getElementById("celcius").value * 33/100;
    document.getElementById("convertMessage").innerHTML = "Celcius";
}

function convertForenheit(){
    document.getElementById("celcius").value = (document.getElementById("fahrenheit").value - 32) * 5/9;
    document.getElementById("kelvin").value = (document.getElementById("fahrenheit").value - 32) * 5/9 + 273.15;
    document.getElementById("reamur").value = (document.getElementById("fahrenheit").value - 32) * 4/9;
    document.getElementById("rankine").value = document.getElementById("fahrenheit").value * 1 + 459.67;
    document.getElementById("romer").value = (document.getElementById("fahrenheit").value - 32) * 7/24 + 7.5;
    document.getElementById("delisle").value = (212 - document.getElementById("fahrenheit").value) * 5/6;
    document.getElementById("newton").value = (document.getElementById("fahrenheit").value - 32) * 11/60;

    //Label Code Started
    document.getElementById("celciusLabel").innerHTML = (document.getElementById("fahrenheit").value - 32) * 5/9 + " °C";
}

var TextType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.number = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TextType.prototype.tick = function() {
    var i = this.number % this.toRotate.length;
    var fullText = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullText.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullText) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.number++;
        delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewriter');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var duration = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TextType(elements[i], JSON.parse(toRotate), duration);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewriter > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
