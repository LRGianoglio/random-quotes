const initialState = {
    color: "pink",
    quote: { frase: "Frase placeholder ipsum dolor sit amet consectetur adipisicing elit.", autor: "Autor Placeholder" }
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return {...state};
    }
}

export default rootReducer;