import React from 'react';
import '../App.css';
import { flashcards } from '../data.js';
import { useState } from 'react';

function Testing() {
    const [count, setCount] = useState(1);
    const totalCards = flashcards.length;
    const cardIndex = count - 1;
    const currentFlashcard = flashcards[cardIndex];

    const [streak, setStreak] = useState(0);
    const [longest, setLongest] = useState(0);
    const [guess, setGuess] = useState("");
    const [mode, setMode] = useState('home'); // 'home', 'order', or 'random'
    

    const nextFlashcard = () => {
        setMode('order');
        setCount(count === totalCards ? 1 : count + 1);
    };
    const lastFlashcard = () => {
        setMode('order');
        setCount(count === 1 ? totalCards : count - 1);
    };

    const randomCard = () => {
        setMode('random');
        const randomNumber = Math.floor(Math.random() * totalCards) + 1;
        setCount(randomNumber);
    };

    const stopMode = () => {
        setMode('home');
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (guess.trim() === '') return;
        
        if (guess.toLowerCase() === currentFlashcard.type.toLowerCase()) {
            alert(`Correct! Streak: ${streak + 1}`);
            setStreak(streak + 1);
        } else {
            alert(`Wrong! The correct answer is ${currentFlashcard.type}`);
            if (streak > longest) {
                setLongest(streak);
            }
            setStreak(0);
        }

        if (mode === 'home' || mode === 'order') 
            {nextFlashcard();} 
        else if (mode === 'random') 
            {randomCard(); }
        setGuess(""); 
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <div className='App Learning'>
            <div className='header'>
                <div className='instructions'>
                Enter the name of the cat breed into the text box. Click the arrows to move between the cards.
                </div>
                <div className='cardNumber'>Total Cards: {totalCards}</div>
                <div className='correctAnswers'>Current Streak: {streak}</div>
                <div className='correctAnswers'>Longest Streak: {longest}</div>
            </div>
            <div className='flashCard'>
                <div className='flashCard-image'>
                    <img className='catImage' src={currentFlashcard.image} alt={currentFlashcard.type} />
                </div>
            </div>
            {mode === 'home' && (
                <div className='buttons'>
                    <button 
                        onClick={lastFlashcard}
                        className={count === 1 ? 'notUse button' : ''}
                        disabled={count === 1}
                    > 
                        &larr; 
                    </button>
                    
                    <button 
                        onClick={nextFlashcard}
                        className={count === totalCards ? 'notUse button' : ''}
                        disabled={count === totalCards}
                    > 
                        &rarr; 
                    </button>
                    <button onClick={randomCard}>Random</button>
                </div>
            )}
            {mode === 'order' && (
                <div className='buttons'>
                    <button 
                        onClick={lastFlashcard}
                        className={count === 1 ? 'notUse button' : ''}
                        disabled={count === 1}
                    > 
                        &larr; 
                    </button>
                    
                    <button 
                        onClick={nextFlashcard}
                        className={count === totalCards ? 'notUse button' : ''}
                        disabled={count === totalCards}
                    > 
                        &rarr; 
                    </button>
                    <button className='notUse button'>Random</button>
                    <button onClick={stopMode}>Stop</button>
                </div>
            )}
            {mode === 'random' && (
                <div className='buttons'>
                    <button className='notUse button'> &larr; </button>
                    <button className='notUse button'> &rarr; </button>
                    <button onClick={randomCard}>Random</button>
                    <button onClick={stopMode}>Stop</button>
                </div>
            )}
            <div className='submit'>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter cat breed"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Testing;
