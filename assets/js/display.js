


/* ============= Confirm remove =========== */
var confirmRemove = document.querySelector('.confirm-remove');
var confirmWrap = document.querySelector('.confirm-wrap');
var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById('no');
var resetBtn = document.getElementById('reset-btn');


function showConfirm () {
    confirmRemove.classList.add('show');
}

function hideConfirm () {
    confirmRemove.classList.remove('show');
}

confirmWrap.addEventListener('click', function(event) {
    event.stopImmediatePropagation()
    //ngừng nổi bọt để chỉ cho phép bấm vào phần bên ngoài mới tắt modal
})

resetBtn.addEventListener('click', showConfirm);
noBtn.addEventListener('click',hideConfirm);
confirmRemove.addEventListener('click', hideConfirm);



/* ============= Sticky navbar =========== */

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.position = 'fixed';
    // navbar.style.transition = '.3s ease';
  } else {
    navbar.classList.remove("sticky");
    navbar.style.position = 'relative';
    // navbar.style.transition = '.3s ease';
  }
}




/* ============= Change mode =========== */
var modeBtn = document.querySelector('.dark-mode-wrap');
var modeIcon = document.querySelector('#navbar .dark-mode-wrap i');
var modeLabel = document.querySelector('#navbar .dark-mode-wrap p');


var r = document.querySelector(':root');

count = 0;
function setMode () {
    if (count %2 == 0) {
        /* Light mode */
        r.style.setProperty('--bg-color', '#809BF3');
        r.style.setProperty('--card_color', '#fff');
        r.style.setProperty('--text_color', '#20285E');
        r.style.setProperty('--icon-color', '#809BF3');
        modeIcon.style.transform = 'rotate(0deg)';
        modeLabel.innerText = 'Dark mode';
    }
    else {
        /* Dark mode */
        r.style.setProperty('--bg-color', '#1D2536');
        r.style.setProperty('--card_color', '#303855');
        r.style.setProperty('--text_color', '#7F89B0');
        r.style.setProperty('--icon-color', '#C9AFC5');
        modeIcon.style.transform = 'rotate(180deg)';
        modeLabel.innerText = 'Light mode';
    }
    count++;
}

modeBtn.addEventListener('click', setMode);

/* ============= Open & close sub menu =========== */
var menuIcon = document.querySelector('.sub-menu-icon i');
var subMenuBg = document.querySelector('.sub-menu');
var subMenuWrap = document.querySelector('.sub-menu-wrap');
var timesIcon = document.querySelector('.sub-menu-wrap .times-icon-wrap i');

var count1 = 0;
function openMenu () {
    if (count1 == 1) {
        // Các lần tiếp theo
        subMenuBg.classList.replace('close-bg', 'open-bg');
        subMenuBg.style.display = 'block';
        subMenuWrap.classList.replace('close-menu', 'open-menu');
    } else {
        // Chạy 1 lần khi nhấn icon menu lần đầu tiên
        subMenuBg.classList.add('open-bg');
        subMenuBg.style.display = 'block';
        subMenuWrap.classList.add('open-menu');
        count1 = 1;
    }
}

function closeMenu () {
    subMenuBg.classList.replace('open-bg', 'close-bg');
    subMenuWrap.classList.replace('open-menu', 'close-menu');
    setTimeout(function() {
        subMenuBg.style.display = 'none';
    }, 600);
}

function stopBubble (event) {
    event.stopPropagation();
}

menuIcon.addEventListener('click', openMenu);
timesIcon.addEventListener('click', closeMenu);
subMenuWrap.addEventListener('click', stopBubble);
subMenuBg.addEventListener('click', closeMenu);