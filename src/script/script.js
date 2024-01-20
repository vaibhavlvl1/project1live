

// left side menu toggle 

var isLeftSideMenuOpen = false;
document.querySelector(".left").addEventListener("click", function () {
    if (isLeftSideMenuOpen == false) {
        document.querySelector(".sidemenu-left").style.left = 0;
        isLeftSideMenuOpen = true;

        document.querySelector(".sidemenu-button-wrap").classList.add("btn-active")
    }


    else if (isLeftSideMenuOpen == true) {
        document.querySelector(".sidemenu-left").style.left = -100 + "%";
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




document.querySelector('.modal-close').addEventListener('click', () => {
    myModal.style.cssText = "z-index:-50;opacity:0";
})