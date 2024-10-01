import React from "react";
import CardCSS from "./Card.module.css";


const Card = () => {

    return (
        <div className={CardCSS.projects__card}>
        <h3 className={CardCSS.projects_card__heading}>NewProject</h3>
        <p className={CardCSS.projects_card__text}>
            Some random text about our beautiful project
        </p>
        </div>
    );
    }
    export default Card;