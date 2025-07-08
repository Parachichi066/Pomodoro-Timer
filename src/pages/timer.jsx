import { useEffect, useState } from "react";

function Timer() {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState('')

    useEffect(() => {
        fetch('/motivational_quotes.txt')
            .then(response => response.text())
            .then(text => {
                const parsedQuotes = text.split(':').map(q => q.trim());
                setQuotes(parsedQuotes);
                getRandomQuote(parsedQuotes);
            })
    })

    const getRandomQuote = (quoteArray = quotes) => {
        if (quoteArray.length === 0) return;
        const index = Math.floor(Math.random() * quoteArray.length);
        setRandomQuote(quoteArray[index]);
    };

    return (
        <>
            <div>
                <h1 className="mt-1">Hello</h1>
                <p>{randomQuote}</p>
            </div>
        </>
    )
}

export default Timer;