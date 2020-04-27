import React from 'react'
import "../style/_card.scss";

export default function Home() {
    return (
        <div className={"cards-dev"}>
            <div className={"card"}>

                <h5>Book time with</h5>
                <h3>English teacher</h3>
                <p>Description: Lorem Aposem</p>
                <p>Price: 500kr/hour</p>
                <p>Course code: Eng-Conv</p>
                <button className={"book-btn"}>Book</button>

            </div>
            <div className={"card"}>

                <h5>Book time with</h5>
                <h3>French teacher</h3>
                <p>Description: Lorem Aposem</p>
                <p>Price: 500kr/hour</p>
                <p>Course code: Fre-Conv</p>
                <button className={"book-btn"}>Book</button>

            </div>
            <div className={"card"}>

                <h5>Book time with</h5>
                <h3>German teacher</h3>
                <p>Description: Lorem Aposem</p>
                <p>Price: 500kr/hour</p>
                <p>Course code: Ger-Conv</p>
                <button className={"book-btn"}>Book</button>

            </div>
        </div>  
    )
}
