import React from "react";

const Loader = () => {
	return (
		<div className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
			<span className="loading loading-bars loading-lg"></span>
		</div>
	);
};

export default Loader;
