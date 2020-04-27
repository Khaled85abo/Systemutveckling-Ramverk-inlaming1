import React from "react";
import "../style/_card.scss";


const Booking = ()=>{
    return(
        <div className={"cards-dev"}>
        <div className={"card"}>

            <h5>Time booked with</h5>
            <h3>English teacher</h3>
            <p>Lorem Aposem </p>
            <p>23-9-2020, kl 15:00-17:00</p>
            <p>price 1000kr / 2 hours</p>
            <div className={"two-btns-dev"}>
                <button className={"book-btn"}>Unbook</button>
                <button className={"book-btn"}>Edit</button>
            </div>
        </div>

    </div>
    )
}

export default Booking;