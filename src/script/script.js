

// left side menu toggle 

var isLeftSideMenuOpen = false;
document.querySelector(".left").addEventListener("click", function () {
    if (isLeftSideMenuOpen == false) {
        document.querySelector(".sidemenu-left").style.cssText = 'left:0;z-index:50';
        isLeftSideMenuOpen = true;

        document.querySelector(".sidemenu-button-wrap").classList.add("btn-active")
    }


    else if (isLeftSideMenuOpen == true) {
        document.querySelector(".sidemenu-left").style.cssText = 'left:-100%;z-index:-1;';
        isLeftSideMenuOpen = false

        document.querySelector(".sidemenu-button-wrap").classList.remove("btn-active")

    }
})




// app download modal on startup

const myModal = document.querySelector(".modal");

function showModal() {
    setTimeout(() => {
        myModal.style.cssText = "z-index:99;opacity:1;";
    }, 1000)

}

// modal close
document.querySelector('.modal-close').addEventListener('click', () => {
    myModal.style.cssText = "z-index:-50;opacity:0";
})


// manual slideshow code



// get values
let slideCarousal = document.querySelector('.slider');
let slideNumber = document.querySelectorAll('.slide').length;
let slideCarousalLength = slideNumber * 100;

// set slider length
slideCarousal.style.width = slideCarousalLength + '%';

transformLength = 100 / slideNumber;


// get curr position of slider from css

var currPos = 0;

document.querySelector('.next').addEventListener('click', function () {
    slideCarousal.style.transform = `translateX(-${currPos + transformLength}%)`;
    currPos += transformLength;

    if (currPos >= 100) {
        slideCarousal.style.transform = 'translateX(0%)';
        currPos = 0;
    };
})

document.querySelector('.prev').addEventListener('click', function () {
    slideCarousal.style.transform = `translateX(-${currPos - transformLength}%)`;
    currPos -= transformLength;

    if (currPos <= 0) {
        slideCarousal.style.transform = 'translateX(-0%)';
        currPos = 0;
    };
})



// Question and answer button toggles display list

let menu = document.querySelector('.menu-list').addEventListener('click', function (event) {

    if (event.target.className == 'marathi') {
        if (event.target.parentElement.parentElement.nextElementSibling) {
            event.target.parentElement.parentElement.nextElementSibling.classList.toggle("display-toggle");
        }

    }

    if (event.target.className == 'sub-list-item-link') {
        event.target.parentElement.nextElementSibling.classList.toggle("display-toggle");
    }



})



// questions and answers on side panel

let menu2 = document.querySelector('.sidemenu-left').addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.className == 'marathi') {
        event.target.parentElement.parentElement.nextElementSibling.classList.toggle("display-toggle");
    }

    if (event.target.tagName == 'A') {
        if (event.target.parentElement.nextElementSibling) {
            event.target.parentElement.nextElementSibling.classList.toggle('display-toggle');
        }
    }
})



window.addEventListener('scroll', () => {
    if (window.scrollY > 1300) {
        console.log(window.scrollY);
        document.querySelector('.gototop').style.cssText = 'display:block;';
    } else {
        document.querySelector('.gototop').style.cssText = 'display:none;';
    }
})








// date in footer

let currDate = new Date();

let currYear = currDate.getFullYear();

document.getElementById('currYear').innerHTML = currYear;


// contact form opening

document.querySelector('.enquiry-toggle').addEventListener('click', () => {
    document.querySelector('.form-container').style.left = '25%';
})

document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.form-container').style.left = '225%';
})


