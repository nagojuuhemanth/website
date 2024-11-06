// Get the modal elements
var loginModal = document.getElementById('loginModal');
var loginBtn = document.querySelector('.btn-login');
var closeBtn1 = document.querySelector('#loginModal .close');
// Get the conactmodel elements
var conactmodelModal = document.getElementById('contactModal');
var contactBtn = document.querySelector('.btn-contact');
var closeBtn2 = document.querySelector('#contactModal .close');
 
var sideBar = document.querySelector('.sidebar');
var menuBtn = document.querySelector('.menu-Btn');
var closeBtn = document.querySelector('.close-Btn')
// Open the modal when the login button is clicked
loginBtn.onclick = function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    loginModal.style.display = 'block';
};

// Close the modal when the close button (X) is clicked
closeBtn1.onclick = function () {
    loginModal.style.display = 'none';
   
};

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function (event) {
    if (event.target1 == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target2 == contactModal) {
        contactModal.style.display = 'none';
    }
};

// Open the modal when the contact button is clicked
contactBtn.onclick = function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    contactModal.style.display = 'block';
};

// Close the modal when the close button (X) is clicked
closeBtn2.onclick = function () {
    contactModal.style.display = 'none';
};

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = 'none';
    }
};

menuBtn.onclick = function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    sideBar.style.display = 'block';
};


