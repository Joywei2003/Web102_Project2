import React from 'react'
import '../App.css'
import { flashcards } from '../data.js';
import { useState } from 'react';

function Learning() {
    const [count, setCount] = useState(1)
      const [side, setSide] = useState('type')
      const totalCards = flashcards.length;
      const cardIndex = count - 1;
      const currentFlashcard = flashcards[cardIndex];
      
      const nextFlashcard = () => {
        setCount(count === totalCards ? 1 : count + 1);
        setSide('type');
      }
      const lastFlashcard = () => {
        setCount(count === 1 ? totalCards : count - 1);
        setSide('type');
      }
      const switchSide = () => {
        setSide(side === 'type' ? 'image' : 'type');
      }
    
      return (
        <div className='App Learning'>
          <div className='header'>
            <div className='instructions'>
              Click the card to filp it. Click the arrows to move between the cards.
            </div>
            <div className='cardNumber'>Card: {count}/{totalCards}</div>
          </div>
          <div className='flashCard' onClick={switchSide}>
            {side === 'type' ? (
              <div className='flashCard-type'>{currentFlashcard.type}</div>
            ) : (
              <div className='flashCard-image'>
                <img className='catImage' src={currentFlashcard.image} alt={currentFlashcard.type} />
              </div>
            )}
          </div>
          <div className='buttons'>
            <button onClick={lastFlashcard}> &larr; </button>
            <button onClick={nextFlashcard}> &rarr; </button>
          </div>
        </div>
      )
    }
 export default Learning;