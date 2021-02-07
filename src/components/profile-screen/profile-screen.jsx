import React from "react";

const ProfileScreen = () => (
  <main className="main">
		<nav className="main__nav">
			<button className="main__btn" type="button" aria-label="toggle"></button>
			<img className="main__img" src="img/svg/logo.svg" alt="Logo"/>
			<ul className="main__list">
				<li className="main__item">
					<img className="main__image" src="img/svg/profile.svg" alt="Logo"/>
					<a className="main__link" href="#">Мой профиль</a> 
				</li>
				<li className="main__item">
					<img className="main__image" src="img/svg/task.svg" alt="Logo"/>
					<a className="main__link" href="#">Список задач</a>
				</li>
				<li className="main__item">
					<img className="main__image" src="img/svg/statistics.svg" alt="Logo"/>
					<a className="main__link" href="#">Статистика</a>
				</li>
			</ul>
			<button className="main__arrow" type="button" aria-label="toggle"></button>
		</nav>
		<section className="main__profile">
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
);

export default ProfileScreen;