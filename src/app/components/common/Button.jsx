import React from "react";

const Button = ({ text, type }) => {
	if (type === "primary")
		return <button className="btn btn-primary">{text}</button>;
	if (type === "success")
		return <button className="btn btn-success">{text}</button>;
	if (type === "secondary")
		return <button className="btn btn-secondary">{text}</button>;
	if (type === "accent")
		return <button className="btn btn-accent">{text}</button>;
	if (type === "error")
		return <button className="btn btn-error">{text}</button>;
};

export default Button;
