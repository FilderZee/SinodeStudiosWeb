import React from "react";
import ContentCSS from "./Content.module.css";

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
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
          <div className={ContentCSS.projects__card}>
            <h3 className={ContentCSS.projects__card__heading}>NewProject</h3>
            <p className={ContentCSS.projects__card__text}>
              Some random text about our beautiful project
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
