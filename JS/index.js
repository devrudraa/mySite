$('#close').click(() => {
    $('.mess').remove();
});

const message = ['Welcome to my website.', 'This is my personal website.', 'I hope you will like my website :\)'];
const mess_size = message.length-1;
const box = document.querySelector('.type')
const cursor = document.querySelector('.cursor')
const typingDealy = 25;
const erasingDealy = 25;
const newTextDealy = 2000;

let textArray = 0;
let charIndex = 0;

$(window).on("load", function load() {
    setTimeout(() => {
        type();
    }, 600);
})
function type() {
    if(textArray > mess_size){
        textArray = 0
    }
    if (charIndex < message[textArray].length) {
        $('.cursor').removeClass();
        box.innerHTML += message[textArray][charIndex];
        charIndex++;
        setTimeout(type, typingDealy)
    }
    else {
        $('#cur').addClass('cursor')
        setTimeout(erase, newTextDealy);
    }
}

function erase() {
    if (charIndex > 0) {
        $('.cursor').removeClass();
        box.innerHTML = message[textArray].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(erase, erasingDealy);
    }
    else {
        $('#cur').addClass('cursor')
        textArray++
        type();
    }
}