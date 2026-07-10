import ShowID from "@/components/show-id/ShowID";
import {notFound} from "next/navigation";
type PageProps = {
	params:Promise<{id:number}>;
};

export default async function ProductPage(props:{params:Promise<{id:number}>}) {
	const { id } = await props.params;
	if(id>5) return notFound();
	return <>
		<ShowID/>

	<div>Server components take this ID: {id}</div>
	</>;
}
