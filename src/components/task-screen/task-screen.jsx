import React from "react";
import PropTypes from "prop-types";

const TaskScreen = (props) => {
  const {onButtonClickProfile, onButtonClickStatistics, buttonClickMenuHandler, buttonClickArrowHandler} = props;

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
            <a className="main__link main__link--active">Список задач</a>
          </li>
          <li className="main__item">
            <img className="main__image" src="img/svg/statistics.svg" alt="Logo"/>
            <a onClick={onButtonClickStatistics} className="main__link">Статистика</a>
          </li>
        </ul>
      </nav>
      <section className="main__profile main__profile--width">
        <button onClick={buttonClickArrowHandler} className="main__arrow" type="button" aria-label="toggle"></button>
        <h2 className="main__text">Список задач</h2>
      </section>
    </main>
  )
}

TaskScreen.propTypes = {
  onButtonClickProfile: PropTypes.func.isRequired,
  onButtonClickStatistics: PropTypes.func.isRequired,
  buttonClickMenuHandler: PropTypes.func.isRequired,
  buttonClickArrowHandler: PropTypes.func.isRequired
}

export default TaskScreen;