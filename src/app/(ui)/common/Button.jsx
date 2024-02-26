import React from "react";

const Button = ({ text, type }) => {
	const base = "rounded-none text-white";
	if (type === "primary")
		return <button className={`btn btn-primary ${base}`}>{text}</button>;
	if (type === "success")
		return <button className={`btn btn-success ${base}`}>{text}</button>;
	if (type === "secondary")
		return <button className={`btn btn-secondary ${base}`}>{text}</button>;
	if (type === "accent")
		return <button className={`btn btn-accent ${base}`}>{text}</button>;
	if (type === "error")
		return <button className={`btn btn-error ${base}`}>{text}</button>;
};

export default Button;
