let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');
let h1 = document.querySelector('h1');


//create a store
let state = Redux.createStore(reducer);
console.log(state);
//create a reducer function 
function reducer(state=0, action= {} ){
 switch(action.type) {
     case 'increment':
         return state+1
     case 'decrement':
         return state-1
     case 'reset' :
         return 0
 }
}

increment.addEventListener('click', () => {
    state.dispatch({ type: 'increment'});
    state.getState();
})
decrement.addEventListener('click', () => {
    state.dispatch({type: 'decrement'});
    state.getState();
})
reset.addEventListener('click', () => {
    state.dispatch({type:'reset'});
    state.getState();
})
state.subscribe(()=> {
    h1.innerText=state.getState();
})