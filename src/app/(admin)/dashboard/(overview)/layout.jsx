"use client";
import Navbar from "@/app/(ui)/dashboard/Navbar";
import Sidebar from "@/app/(ui)/dashboard/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout() {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const { user, error } = getUser();
			// console.log(user);

			if (error) {
				router.push("/");
				return;
			}
		})();
	}, []);

	return (
		<div className="leading-normal tracking-normal">
			<div className="flex ">
				<Sidebar />

				<div className="w-screen bg-white pl-0 lg:pl-64 min-h-screen">
					<Navbar />
					<div className="p-6 mb-20"></div>
				</div>
			</div>
		</div>
	);
}

async function getUser() {
	try {
		const { data } = await axios.get("/api/login");
		console.log(data);
		return { user: data, error: null };
	} catch (error) {
		return { user: null, error };
	}
}
