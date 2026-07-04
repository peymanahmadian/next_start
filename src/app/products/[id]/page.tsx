import ShowID from "@/components/show-id/ShowID";

type PageProps = {
	params:Promise<{id:number}>;
};

export default async function ProductPage(props:{params:Promise<{id:number}>}) {
	const { id } = await props.params;
	return <>
		<ShowID/>

	<div>Server components take this ID: {id}</div>
	</>;
}
