import React from "react";
import PropTypes from "prop-types";

const StatisticsScreen = (props) => {
  const {onButtonClickProfile, onButtonClickTask, buttonClickMenuHandler, buttonClickArrowHandler} = props;
  
  return (
    <main className="main">
      <nav className="main__nav">
        <button onClick={buttonClickMenuHandler} className="main__btn" type="button" aria-label="toggle"></button>
        <img className="main__img" src="img/svg/logo.svg" alt="Logo"/>
        <ul className="main__list">
          <li className="main__item">
            <img className="main__image" src="img/svg/profile.svg" alt="Logo"/>
            <a onClick={onButtonClickProfile} className="main__link">Мой профиль</a> 
          </li>
          <li className="main__item">
            <img className="main__image" src="img/svg/task.svg" alt="Logo"/>
            <a onClick={onButtonClickTask} className="main__link">Список задач</a>
          </li>
          <li className="main__item">
            <img className="main__image" src="img/svg/statistics.svg" alt="Logo"/>
            <a className="main__link main__link--active">Статистика</a>
          </li>
        </ul>
      </nav>
      <section className="main__profile main__profile--width">
        <button onClick={buttonClickArrowHandler} className="main__arrow" type="button" aria-label="toggle"></button>
        <h2 className="main__text">Статистика</h2>
      </section>
    </main>
  )
}

StatisticsScreen.propTypes = {
  onButtonClickProfile: PropTypes.func.isRequired,
  onButtonClickTask: PropTypes.func.isRequired,
  buttonClickMenuHandler: PropTypes.func.isRequired,
  buttonClickArrowHandler: PropTypes.func.isRequired
}

export default StatisticsScreen;