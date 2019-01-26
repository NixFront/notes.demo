import React,{ Component } from 'react';
import '../App.css';
import {Animated} from "react-animated-css";

const Form = props => (

			<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={ props.isVisible }>
			<div id="Title">
				<form className = "Title__form" onSubmit = { props.getWeather }>
				<h1 className = "Title__form-text">Введите город</h1>
					<input className = "Title__form-input" type = "text" 
						placeholder = "введите город" name = "city"/>
					<button className = "Tittle__form-btn">Узнать!</button>
					{ props.error && <p className={"Title__form-error " + props.animate}> Ошибка: {props.error} </p> }
				</form>
			</div>
			</Animated>
);
export default Form;