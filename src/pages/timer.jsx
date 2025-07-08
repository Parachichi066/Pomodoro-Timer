import { useEffect, useState } from "react";

function Timer() {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState('')
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false); 

    useEffect(() => {
        fetch('/motivational_quotes.txt')
            .then(response => response.text())
            .then(text => {
                const parsedQuotes = text.split(':').map(q => q.trim());
                setQuotes(parsedQuotes);
            })
    }, [])

    useEffect(() => {
        if (quotes.length === 0) return;
        const getRandomQuote = () => {
            const index = Math.floor(Math.random() * quotes.length);
            setRandomQuote(quotes[index]);
        }

        getRandomQuote()
        const interval = setInterval(() => {
            getRandomQuote()
        }, 6000);
        return () => clearInterval(interval);
    }, [quotes]);
    
    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <>
            <div>
                <h1 className="mt-1">Hello</h1>
                <p>{randomQuote}</p>
                <h2>{formatTime(timeLeft)}</h2>
                <button onClick={() => setIsRunning(true)}>Start</button>
            </div>
        </>
    )
}

export default Timer;