// modal
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

// let form = document.querySelector('.js_form'),
//     checkIn = document.querySelectorAll('.checkIn');

// form.onsubmit = function () {
//     checkIn.forEach(function(input) {
//         if (input.value !== '') {
//             signupButton.addEventListener('click', () => {
//                 modal.classList.add('is-active');
//             });
//             modalBg.addEventListener('click', () => {
//                 modal.classList.remove('is-active');
//             }); 
//         }
//     })
// };

signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});    