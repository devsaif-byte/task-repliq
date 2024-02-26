export default function isValidPassword(password) {
	// Regular expression for a valid password:
	// - At least 8 characters long
	// - Contains at least one uppercase letter
	// - Contains at least one lowercase letter
	// - Contains at least one digit
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

	return passwordRegex.test(password);
}

// Example usage:
const password = "StrongPass123";
if (isValidPassword(password)) {
	console.log("Password is valid.");
} else {
	console.log("Password is not valid.");
}
