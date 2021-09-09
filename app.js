// const balls = document.getElementsByClassName('ball')
const balls = document.querySelectorAll('.ball')
const body = document.querySelector('body')

balls.forEach((ball, iteration) => {
    const value = iteration * 100
    ball.style = `transform:translateY( ${value}px)`
})

