import React,{ Component } from 'react';
import {Animated} from "react-animated-css";

const GetWeather = props => (
	<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={ !props.isVisible }>
			<div className = "weather clouds">
				{ props.city && <p> Город: {props.city} </p> }
				{ props.country && <p>Страна: {props.country} </p> }
				{ props.temp && <p>Температура: {props.temp} <sup>o</sup> </p> }
				{ props.humidity && <p> Влажность: {props.humidity} % </p> }
				{ props.desc && <p> Описание: {props.desc} </p> }
			</div>
	</Animated>
);
export default GetWeather;