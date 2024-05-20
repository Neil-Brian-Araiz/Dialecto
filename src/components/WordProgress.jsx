import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./components.css";

const WordsProgress = ({ title, words, wordIcon, bgColor }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
      };

    return (
        <div className='progress-word-container'>
            <div className="progress-word-title">
                <ion-icon name={wordIcon}></ion-icon>
                <h2>{title}</h2>
            </div>

            {words.map((word, index) => 
                <div key={index} className="progress-word-box" onClick={() => handleNavigate(word.path)}>
                <span className='word-names'>{word.categWord}</span>
                <div className="progress-word-bar">
                    <span className="progress-per-word" style={{ width: word.wordPercentage, backgroundColor: bgColor}}>
                        <span className="tooltip" style={{ backgroundColor: bgColor, '--tooltip-bg-color': bgColor }}>{word.wordPercentage}</span>
                    </span>
                </div>
            </div>
            )}
        </div>
    )
}

export default WordsProgress;
