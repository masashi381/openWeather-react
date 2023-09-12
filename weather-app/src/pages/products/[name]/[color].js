import { useRouter } from "next/router";

export default function color() {
	const router = useRouter();
	const { name, color } = router.query;
	return (
		<h1>
			This is {color} of {name} page
		</h1>
	);
}
