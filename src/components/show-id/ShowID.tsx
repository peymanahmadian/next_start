"use client";

import { useParams } from "next/navigation";

export default function ShowID() {
	const params = useParams();
	const id = params?.id ?? "";
	return <div>Client Component get ID: {String(id)}</div>;
}
