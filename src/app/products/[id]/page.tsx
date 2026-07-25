import ShowID from "@/components/show-id/ShowID";
import { Metadata } from "next";
import {notFound} from "next/navigation";
type PageProps = {
	params:Promise<{id:number}>;
};
export const generateMetadata=async({params}:PageProps):Promise<Metadata>=>{
	return {
		title:`Product ${(await params).id}`
	}
};
export default async function ProductPage(props:PageProps) {
	const { id } = await props.params;
	if(id>5) return notFound();
	return <>
		<ShowID/>

	<div>Server components take this ID: {id}</div>
	</>;
}
