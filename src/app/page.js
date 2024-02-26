import Link from "next/link";
import Button from "./(ui)/common/Button";

export default function Home() {
	return (
		<div className="hero w-svw grow">
			<div className="hero-content text-center">
				<div className="w-full">
					<h1 className="text-5xl w-full font-bold uppercase">
						Welcome to Admin E-commerce
					</h1>
					<p className="py-6">Please SignUp to get started.</p>
					<Link href="/signup">
						<Button text={"SignUp"} type={"success"} />
					</Link>
				</div>
			</div>
		</div>
	);
}
