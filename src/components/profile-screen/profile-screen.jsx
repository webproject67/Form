import React from "react";
import PropTypes from "prop-types";

const ProfileScreen = (props) => {
  const {onButtonClickTask, onButtonClickStatistics} = props;

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    const name = document.querySelector("[name=name]");
    const surname = document.querySelector("[name=surname]");
    const textError = document.querySelectorAll(".main__text-error");
    const submit = document.querySelector(".main__submit");
    
    if (!name.value) {
      textError[0].classList.add("main__text-error--opacity");
      name.classList.add("main__name--border");
    } else if (!surname.value) {
      textError[0].classList.remove("main__text-error--opacity");
      name.classList.remove("main__name--border");
      textError[1].classList.add("main__text-error--opacity");
      surname.classList.add("main__name--border");
    } else {
      textError[1].classList.remove("main__text-error--opacity");
      surname.classList.remove("main__name--border");
      submit.classList.add("main__submit--width");
      submit.value = 'Спасибо! Форма отправлена!'
    }
  };

  const onButtonClickMenu = () => {
    const button = document.querySelector(".main__btn");
    const list = document.querySelector(".main__list");
    button.classList.toggle("main__btn--open");
    list.classList.toggle("main__list--display");
  }
  
  const onButtonClickArrow = () => {
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
        <button onClick={onButtonClickMenu} className="main__btn" type="button" aria-label="toggle"></button>
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
        <button onClick={onButtonClickArrow} className="main__arrow" type="button" aria-label="toggle"></button>
        <h2 className="main__text">Мой профиль</h2>
        <form onSubmit={onSubmitClick} className="main__form">
          <div className="main__wrapper">
            <div className="main__data">
              <label htmlFor="name">Имя</label>
              <input className="main__name" type="text" name="name" id="name"/>
              <p className="main__text-error">Пожалуйста заполните поле</p>
              <label htmlFor="surname">Фамилия</label>
              <input className="main__surname" type="text" name="surname" id="surname"/>
              <p className="main__text-error">Пожалуйста заполните поле</p>
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