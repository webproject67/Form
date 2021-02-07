import React from "react";

const WelcomeScreen = () => (
  <main className="page-main">
		<h1 className="visually-hidden">DANCECOLOR</h1>
		<form className="page-main__form">
			<img className="page-main__img" src="img/svg/logo.svg" alt="Logo"/>
			<input className="page-main__text" type="text" placeholder="Логин" required/>
			<input className="page-main__password" type="password" placeholder="Пароль" required/>
			<input className="page-main__submit" type="submit" value="Войти"/>
		</form>
	</main>
);

export default WelcomeScreen;