const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector('#board')
// const handler = (action) => {
//     console.log("You clicked " + action)
// }
// rock.addEventListener('click', () => {
//     handler('rock')
// })
// paper.addEventListener('click', () => {
//     handler('paper')})
// scissor.addEventListener('click', () => {
//     handler('scissor')})
// const handler = (action) => {
//     console.log("You clicked " + action)
// }
// rock.addEventListener('click', () => {
//     handler('rock')
// })
// paper.addEventListener('click', () => {
//     handler('paper')})
// scissor.addEventListener('click', () => {
//     handler('scissor')})


const handler = (event) => {
    const action = event.target.id
    // if(action === 'rock'){
    //     board.innerHTML =('Rock crushes Scissor');
    // }
    // else if (action === 'paper'){
    //     board.innerHTML = ('Paper traps Rock');
    // }
    // else if (action === 'scissor'){
    //     board.innerHTML = ('Scrissor cuts Paper');
    // }
    // else {
    //     board.innerHTML = ('Click Something Else');
    // }

    switch (action){
        case 'rock':
            board.innerHTML =('Rock crushes Scissor');
            break;
        case 'paper':
            board.innerHTML = ('Paper traps Rock');
            break;
        case 'scissor':
            board.innerHTML = ('Scrissor cuts Paper');
            break;
        default:
            board.innerHTML = ('Click Something Else');
    }
}
rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)