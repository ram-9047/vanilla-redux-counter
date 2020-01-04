let Increment = document.querySelector(".inc")
let Decrement = document.querySelector(".dec")
let Reset = document.querySelector(".reset")
let h1 = document.querySelector("h1")

// create a state
let state = Redux.createStore(reducer);

// create a reducer function
function reducer(state = 0, action){
    switch(action.type){
        case "Inc":
        return state+1;
        case "Dec":
        return state-1;
        case "Reset" :
            return 0;
        default:
            return state;
    }
}

//action on buttons
Increment.addEventListener('click' , () => {
    state.dispatch ({type : "Inc"});
    h1.innerText = state.getState()
})
Decrement.addEventListener('click' , () => {
    state.dispatch ({type : "Dec"});
    h1.innerText = state.getState()
})
Reset.addEventListener('click' , () => {
    state.dispatch ({type : "Reset"});
    h1.innerText = state.getState()
})

h1.innerText = state.getState();

