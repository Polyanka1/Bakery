const menu_btn = document.getElementById("menu__toggle");
const spans = document.querySelector(".hamburger-menu__btn").children;
const menu_box = document.querySelector('.hamburger-menu__box');
const inner_anchors = document.querySelectorAll('.hamburger-menu__box-item');
const dialog_window = document.querySelector('.dialog');
const dialog_btn = document.getElementById('dialog_submit');
const dialog_close_btn = document.querySelector('.dialog__close')

const phone_input = document.getElementById('phone')
const name_input = document.getElementById('name')

let f = false;

//dialog window

dialog_btn.addEventListener('click', (e) => {
    if(name_input.value !== '' && phone_input.value !== '') {
        dialog_window.classList.toggle('dialog-toggle');
        disableScroll();
    }
    
});

dialog_close_btn.addEventListener('click', (e) => {
    dialog_window.classList.toggle('dialog-toggle');
    enableScroll();
})


//hamburger menu
inner_anchors.forEach(element => {
    element.addEventListener('click', (event) => {
        menu_box.classList.toggle("box_checked");
        spans.item(0).classList.toggle("span_id1_checked");
        spans.item(1).classList.toggle("span_id2_checked");
        spans.item(2).classList.toggle("span_id3_checked");
        enableScroll();
    })
});


menu_btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (f === false) {
        f = true;
        menu_btn.checked = f;
        disableScroll();
        menu_box.classList.toggle("box_checked");
        spans.item(0).classList.toggle("span_id1_checked");
        spans.item(1).classList.toggle("span_id2_checked");
        spans.item(2).classList.toggle("span_id3_checked");
        
    } else {
        f = false;
        menu_btn.checked = f;
        menu_box.classList.toggle("box_checked");
        spans.item(0).classList.toggle("span_id1_checked");
        spans.item(1).classList.toggle("span_id2_checked");
        spans.item(2).classList.toggle("span_id3_checked");
        enableScroll();
    }

})



//scroll handle
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
