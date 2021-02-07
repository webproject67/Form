import React from "react";
import PropTypes from "prop-types";

const ProfileScreen = (props) => {
  const {onButtonClickTask, onButtonClickStatistics} = props;
  
  const onButtonClick = () => {
    const button = document.querySelector(".main__arrow");
    const nav = document.querySelector(".main__nav");
    const list = document.querySelector(".main__list");
    const form = document.querySelector(".main__form");
    button.classList.toggle("main__arrow--close");
    nav.classList.toggle("main__nav--width");
    list.classList.toggle("main__list--display");
    form.classList.toggle("main__form--width");
  }

  return (
    <main className="main">
      <nav className="main__nav">
        <button className="main__btn" type="button" aria-label="toggle"></button>
        <img className="main__img" src="img/svg/logo.svg" alt="Logo"/>
        <ul className="main__list">
          <li className="main__item">
            <img className="main__image" src="img/svg/profile.svg" alt="Logo"/>
            <a className="main__link main__link--active">Мой профиль</a> 
          </li>
          <li className="main__item">
            <img className="main__image" src="img/svg/task.svg" alt="Logo"/>
            <a onClick={onButtonClickTask} className="main__link">Список задач</a>
          </li>
          <li className="main__item">
            <img className="main__image" src="img/svg/statistics.svg" alt="Logo"/>
            <a onClick={onButtonClickStatistics} className="main__link">Статистика</a>
          </li>
        </ul>
      </nav>
      <section className="main__profile">
        <button onClick={onButtonClick} className="main__arrow" type="button" aria-label="toggle"></button>
        <h2 className="main__text">Мой профиль</h2>
        <form className="main__form">
          <div className="main__wrapper">
            <div className="main__data">
              <label htmlFor="name">Имя</label>
              <input className="main__name" type="text" name="name" id="name" required/>
              <label htmlFor="surname">Фамилия</label>
              <input className="main__surname" type="text" name="surname" id="surname" required/>
            </div>
            <div className="main__change">
              <label htmlFor="password">Сменить пароль</label>
              <input className="main__password" type="text" name="password" id="password"/>
              <label htmlFor="login">Сменить логин</label>
              <input className="main__login" type="text" name="login" id="login"/>
            </div>
          </div>
          <input className="main__submit" type="submit" value="Сохранить"/>
        </form>
      </section>
    </main>
  )
}

ProfileScreen.propTypes = {
  onButtonClickTask: PropTypes.func.isRequired,
  onButtonClickStatistics: PropTypes.func.isRequired
}

export default ProfileScreen;