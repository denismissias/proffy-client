import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logo} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
          </div>
          <img src={landing} alt="Plataforma de estudos" className="hero-image"/>
          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={study} alt="Estudar"/>
              Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
              <img src={giveClasses} alt="Dar aulas"/>
              Dar aulas
            </Link>
          </div>
          <span className="total-connections">
            Total de 200 conexões já realizadas
            <img src={purpleHeart} alt="Coração roxo"/>
          </span>
        </div>
      </div>
  );
}

export default Landing;