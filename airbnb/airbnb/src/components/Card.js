import React from "react"
import "./Card.css"
import Star from "../images/star.png"
import Card1 from "../images/card1.jpeg"

const Card = () => {
    return(
        <div className="card">
            <img src={Card1} alt="card-one" className="card--image"/>
            <div className="card--info">
                <img src={Star} alt="star-icon" className="card--star"/>
                <span>5.0 &ensp;</span>
                <span className="gray">(6)</span>
                <span className="gray">&#8226;USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136/</b>person</p>
        </div>
    )
}

export default Card