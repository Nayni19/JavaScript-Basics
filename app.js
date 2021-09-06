const button = document.querySelector('button')
console.log(button);
const element = document.querySelector('body')
console.log(element);


button.addEventListener('click', () => {
    element.classList.toggle('dark')
})