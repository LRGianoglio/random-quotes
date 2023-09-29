import { RANDOMIZE_COLOR, NEW_QUOTE } from "./types";

const initialState = {
    color: "pink",
    quote: { frase: "Frase placeholder ipsum dolor sit amet consectetur adipisicing elit.", autor: "Autor Placeholder" }
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case RANDOMIZE_COLOR:
            return {...state, color: action.payload}
        case NEW_QUOTE:
            return {...state, quote: action.payload}
        default:
            return {...state};
    }
}

export default rootReducer;