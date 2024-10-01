import React from "react";
import ContentCSS from "./Content.module.css";
import Card from "./Card";

const Content = () => {

  return (
    <>
      <div className={ContentCSS.container}>
        <h1 className={ContentCSS.container__heading}>SinodeStudios</h1>
        <p className={ContentCSS.container__subheading}>
          Naše malé Reactí studio
        </p>
      </div>
      <div className={ContentCSS.projects}>
        <h2 className={ContentCSS.projects__heading}>Naše projekty</h2>
        <div className={ContentCSS.projects__cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
export default Content;
