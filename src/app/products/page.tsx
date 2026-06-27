import { ObjectFetcher } from "@/components";

export default function ProductsPage() {
	return (
		<main className="flex flex-col min-h-screen items-center justify-center">
			<div>
				<h1 className="text-4xl font-bold">Product</h1>
            </div>
            <ObjectFetcher/>
	
		</main>
	);
}
