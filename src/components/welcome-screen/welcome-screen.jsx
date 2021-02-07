import React from "react";
import PropTypes from "prop-types";

const WelcomeScreen = (props) => {
  const onSubmitClick = (evt) => {
    evt.preventDefault();

    const {onButtonClickProfile} = props;
    const login = document.querySelector("[name=login]");
    const password = document.querySelector("[name=password]");
    const form = document.querySelector(".page-main__form");
    
    if (!login.value || !password.value) {
      form.classList.add("page-main__error");
      form.classList.remove("page-main__error");
      void form.offsetWidth;
      form.classList.add("page-main__error");
    } else {
      onButtonClickProfile();
    }
  };

  return (
    <main className="page-main">
      <h1 className="visually-hidden">DANCECOLOR</h1>
      <form onSubmit={onSubmitClick} className="page-main__form">
        <img className="page-main__img" src="img/svg/logo.svg" alt="Logo"/>
        <input className="page-main__text" type="text" placeholder="Логин" name="login"/>
        <input className="page-main__password" type="password" placeholder="Пароль" name="password"/>
        <input className="page-main__submit" type="submit" value="Войти"/>
      </form>
    </main>
  );
} 

WelcomeScreen.propTypes = {
  onButtonClickProfile: PropTypes.func.isRequired
}

export default WelcomeScreen;