import React from 'react';
import { useNavigate } from 'react-router-dom';

import ProgressCategCard from '../components/ProgressCard.jsx';
import WordsProgress from '../components/WordProgress.jsx';
import { FaChevronLeft } from "react-icons/fa6";
import './page.css';

const ProgressPage = () => {
    const navigate = useNavigate();

    const cards = [
        {progTitle: "Animal", progIcon: "paw", percentage: 75, bgColor: "#7FBCD2", numWord: "10"},
        {progTitle: "Basic Phrases", progIcon: "library", percentage: 50, bgColor: "#E3CF23", numWord: "10"},
        {progTitle: "Food", progIcon: "nutrition", percentage: 90, bgColor: "#EDB7ED", numWord: "10"},
        {progTitle: "Household Items", progIcon: "business", percentage: 25, bgColor: "tomato", numWord: "10"},
    ]

    const animal = [
        {categWord: "Ayam", wordPercentage: "86%", path: "/dialecto/content-four"},
        {categWord: "Misay", wordPercentage: "60%", path: "/dialecto/content-four"},
        {categWord: "Karabaw", wordPercentage: "100%", path: "/dialecto/content-four"},
        {categWord: "Ulot", wordPercentage: "23%", path: "/dialecto/content-four"},
        {categWord: "Halas", wordPercentage: "57%", path: "/dialecto/content-four"},
        {categWord: "Tamsi", wordPercentage: "34%", path: "/dialecto/content-four"},
        {categWord: "Buaya", wordPercentage: "74%", path: "/dialecto/content-four"},
        {categWord: "Bugsok", wordPercentage: "22%", path: "/dialecto/content-four"},
        {categWord: "Mago", wordPercentage: "15%", path: "/dialecto/content-four"},
        {categWord: "Yatot", wordPercentage: "90%", path: "/dialecto/content-four"},
    ]

    const basicPhrases = [
        {categWord: "Kaon", wordPercentage: "67%", path: "/dialecto/content-four"},
        {categWord: "Nano", wordPercentage: "74%", path: "/dialecto/content-four"},
        {categWord: "Hain", wordPercentage: "34%", path: "/dialecto/content-four"},
        {categWord: "Aga", wordPercentage: "76%", path: "/dialecto/content-four"},
        {categWord: "Mahumot", wordPercentage: "56%", path: "/dialecto/content-four"},
        {categWord: "Pahuram", wordPercentage: "34%", path: "/dialecto/content-four"},
        {categWord: "Paalayon", wordPercentage: "85%", path: "/dialecto/content-four"},
        {categWord: "Buwas", wordPercentage: "64%", path: "/dialecto/content-four"},
        {categWord: "Bulig", wordPercentage: "36%", path: "/dialecto/content-four"},
        {categWord: "Nakaturog", wordPercentage: "50%", path: "/dialecto/content-four"},
    ]

    const food = [
        {categWord: "Luto", wordPercentage: "32%", path: "/dialecto/content-four"},
        {categWord: "Monggos", wordPercentage: "50%", path: "/dialecto/content-four"},
        {categWord: "Bonay", wordPercentage: "56%", path: "/dialecto/content-four"},
        {categWord: "Utan", wordPercentage: "16%", path: "/dialecto/content-four"},
        {categWord: "Tarong", wordPercentage: "35%", path: "/dialecto/content-four"},
        {categWord: "Lasuna", wordPercentage: "76%", path: "/dialecto/content-four"},
        {categWord: "Asukar", wordPercentage: "84%", path: "/dialecto/content-four"},
        {categWord: "Lubi", wordPercentage: "34%", path: "/dialecto/content-four"},
        {categWord: "Kapayas", wordPercentage: "64%", path: "/dialecto/content-four"},
        {categWord: "Pasayan", wordPercentage: "24%", path: "/dialecto/content-four"},
    ]

    const household = [
        {categWord: "Huwataw", wordPercentage: "50%", path: "/dialecto/content-four"},
        {categWord: "Balde", wordPercentage: "46%", path: "/dialecto/content-four"},
        {categWord: "Martilyu", wordPercentage: "93%", path: "/dialecto/content-four"},
        {categWord: "Purtahan", wordPercentage: "54%", path: "/dialecto/content-four"},
        {categWord: "Kabo", wordPercentage: "24%", path: "/dialecto/content-four"},
        {categWord: "Kalo", wordPercentage: "68%", path: "/dialecto/content-four"},
        {categWord: "Higdaan", wordPercentage: "94%", path: "/dialecto/content-four"},
        {categWord: "Lingkuran", wordPercentage: "23%", path: "/dialecto/content-four"},
        {categWord: "Saraan", wordPercentage: "64%", path: "/dialecto/content-four"},
        {categWord: "Pasayan", wordPercentage: "50%", path: "/dialecto/content-four"},
    ]

    return (
        <div className='progress-wrapper'>
            <div className='progress-header'>
                <button onClick={() => navigate(-1)}>
                    <FaChevronLeft />
                </button>
                <h4>Dialecto Adventure</h4>
            </div>

            <div className="progress-card-container">
                {cards.map(card => (
                    <ProgressCategCard 
                        progTitle={card.progTitle} 
                        progIcon={card.progIcon}
                        percentage={card.percentage} 
                        bgColor={card.bgColor}
                        numWord={card.numWord}
                        textColor={card.bgColor}
                    />
                ))}
            </div>

            <div className="progress-categ-container">
                <div className="num-one-container">
                    <WordsProgress title={"Animal"} words={animal} wordIcon={"paw"} bgColor={"#7FBCD2"} />
                    <WordsProgress title={"Basic Phrases"} words={basicPhrases} wordIcon={"library"} bgColor={"#E3CF23"} />
                </div>
                <div className="num-two-container">
                    <WordsProgress title={"Foods"} words={food} wordIcon={"nutrition"} bgColor={"#EDB7ED"} />
                    <WordsProgress title={"Household Items"} words={household} wordIcon={"business"} bgColor={"tomato"} />
                </div>
            </div>
        </div>
    )
}

export default ProgressPage;
