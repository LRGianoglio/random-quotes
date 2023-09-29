import { useEffect, useState } from 'react';
import style from './QuoteBox.module.css'
import {useSelector} from 'react-redux'
import {FaXTwitter} from 'react-icons/fa6'

function QuoteBox() {

    const color = useSelector((state)=>state.color)

    const quote = useSelector((state)=>state.quote)

    const [buttonColor, setButtonColor] = useState({
        borderColor: "black",
        color: "black"
    })

    useEffect(()=>{
        setButtonColor({
            borderColor: color,
            color: color
        })
    }, [color])
    
    return (
        <div id="#quote-box" className={style.quoteBox}>
            <div className={style.quote}>
                <h1>{quote.frase}</h1>
                <h2>{quote.autor}</h2>
            </div>
            <div className={style.buttonBox}>
                <a href='#' style={{ textDecoration: 'none' }}>
                    <button className={`${style.button}`}>
                        <FaXTwitter className={style.logo} /> Share!
                    </button>
                </a>
                <button className={style.button} style={buttonColor}>
                    New Quote
                </button>
            </div>
        </div>
    );
}

export default QuoteBox;