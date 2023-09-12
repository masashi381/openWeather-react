import { useRouter } from "next/router";

export default function name() {
	const router = useRouter();
	console.log(router.query);
	return <h1>This is {router.query.name} page</h1>;
}
