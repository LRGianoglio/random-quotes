import { RANDOMIZE_COLOR, NEW_QUOTE } from "./types"

const quotes = [
    { frase: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
    { frase: "El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
    { frase: "La única forma de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
    { frase: "La vida es corta, y es tu responsabilidad hacerla dulce.", autor: "Sarah Louise Delany" },
    { frase: "No importa lo que pase, siempre puedes elegir cómo reaccionar ante ello.", autor: "Viktor E. Frankl" },
    { frase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.", autor: "Nelson Mandela" },
    { frase: "La creatividad es contagiosa, pásala.", autor: "Albert Einstein" },
    { frase: "La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.", autor: "Walter Elliot" },
    { frase: "El que no arriesga, no gana.", autor: "Proverbio español" },
    { frase: "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía.", autor: "Mahatma Gandhi" },
    { frase: "La paciencia es amarga, pero su fruto es dulce.", autor: "Jean-Jacques Rousseau" },
    { frase: "La vida es realmente simple, pero insistimos en hacerla complicada.", autor: "Confucio" },
    { frase: "La mejor venganza es un éxito masivo.", autor: "Frank Sinatra" },
    { frase: "La imaginación es más importante que el conocimiento.", autor: "Albert Einstein" },
    { frase: "La única manera de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
    { frase: "El cambio no es algo que debamos temer. Es algo que debemos abrazar.", autor: "Michelle Obama" },
    { frase: "No esperes. El tiempo nunca será el adecuado.", autor: "Napoleón Hill" },
    { frase: "La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente.", autor: "Jim Rohn" },
    { frase: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
    { frase: "La mejor manera de predecir tu futuro es crearlo.", autor: "Abraham Lincoln" }
]

const colors = [
    "#FFD1DC",
    "#FFA07A",
    "#FFB6C1",
    "#FFD700",
    "#98FB98",
    "#ADD8E6",
    "#FFC0CB",
    "#F0E68C",
    "#B0E0E6",
    "#87CEEB",
]

const randomizeColor = () =>{
    const color = colors[Math.floor(Math.random() * colors.length)]
    return (dispatch) => {
        dispatch({type: RANDOMIZE_COLOR, payload: color})
    }
}

const newQuote = () =>{
    const quote = quotes[Math.floor(Math.random() * quotes.length)]
    return (dispatch) => {
        dispatch({type: NEW_QUOTE, payload: quote})
    }
}

export {
 randomizeColor,
 newQuote
}