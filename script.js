const MENU = document.getElementById("menu");
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const PORTFOLIO_IMG = document.getElementById("portfolio_img");
const PORTFOLIO_BTN = document.getElementById("portfolio_nav");
const LIST = document.getElementById("something");
const SLIDER = document.getElementById("slaider");
const PHONE = document.getElementById("phone");


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');

    function toAnchor(anchor) {
        window.location = "#" + anchor;
    }
    window.onclick = function () {
        toAnchor("home");
    };
    window.onclick = function () {
        toAnchor("Our-services");
    };
    window.onclick = function () {
        toAnchor("portfolio");
    };
    window.onclick = function () {
        toAnchor("about-us");
    };
    window.onclick = function () {
        toAnchor("get-quote");
    };
});

PORTFOLIO_BTN.addEventListener('click', (event) => {
    PORTFOLIO_BTN.querySelectorAll('button').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');

});

PORTFOLIO_IMG.addEventListener('click', (event) => {
    PORTFOLIO_IMG.querySelectorAll('img').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
});



BUTTON.addEventListener('click', (e) => {
    if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '') {
        e.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const project = document.getElementById('project').value.toString();
        document.getElementById('result1').innerText = 'Письмо отправлено';

        if (subject !== '') {
            document.getElementById('result2').innerText = 'Тема: ' + subject;
        } else {
            document.getElementById('result2').innerText = 'Без темы';
        }

        if (project !== '') {
            document.getElementById('result3').innerText = 'Описание: ' + project;
        } else {
            document.getElementById('result3').innerText = 'Без описания';
        }

        document.getElementById('body').classList.add('hide');
        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementById('body').classList.remove('hide');
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
});


function shuffle(items) {
    var cached = items.slice(0);
    var temp;
    var i = cached.length;
    var rand;
    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
//так передаётся анонимная функция
PORTFOLIO_BTN.onclick = () => {
    var nodes = LIST.children;
    var i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
        LIST.appendChild(nodes[i]);
        ++i;
    }
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slaider_item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    slides[slideIndex - 1].style.display = "block";

}

PHONE.addEventListener('click', (event) => {
    PHONE.querySelectorAll('.iphone_screen').forEach(element => element.classList.remove('hidden'));
    event.target.classList.add('hidden');
}); 