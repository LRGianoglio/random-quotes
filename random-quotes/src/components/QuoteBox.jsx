import { useEffect, useState } from 'react';
import style from './QuoteBox.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {FaXTwitter} from 'react-icons/fa6'
import { newQuote, randomizeColor } from '../redux/actions';

function QuoteBox() {

    const dispatch = useDispatch();

    const color = useSelector((state)=>state.color)

    const quote = useSelector((state)=>state.quote)

    const [buttonColor, setButtonColor] = useState({
        borderColor: "black",
        color: "black"
    })

    const [displayedQuote, setDisplayedQuote] = useState({
        frase: "No se pudo cargar la frase",
        autor: ":("
    })

    useEffect(()=>{
        dispatch(randomizeColor());
        dispatch(newQuote())
    }, [])

    useEffect(()=>{
        setButtonColor({
            borderColor: color,
            color: color
        })
    }, [color])

    useEffect(()=>{
        setDisplayedQuote({
            frase: quote.frase,
            autor: quote.autor
        })
    }, [quote])

    const handleNewQuote = () =>{
        dispatch(randomizeColor());
        dispatch(newQuote())
    }

    const xLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(displayedQuote.frase + ' - ' + displayedQuote.autor+ '.')}`;
    
    return (
        <div id="#quote-box" className={style.quoteBox}>
            <div className={style.quote}>
                <h1 style={{color}}>{displayedQuote.frase}</h1>
                <h2>{displayedQuote.autor}</h2>
            </div>
            <div className={style.buttonBox}>
                <a href={xLink} target='_blank' style={{ textDecoration: 'none' }}>
                    <button className={`${style.button}`}>
                        <FaXTwitter className={style.logo} /> Share!
                    </button>
                </a>
                <button className={style.button} style={buttonColor} onClick={handleNewQuote}>
                    New Quote
                </button>
            </div>
        </div>
    );
}

export default QuoteBox;