interface IPage {
    params: Promise<{ slug: string[] }>
}
export default async function Page(props:IPage){ 

	const { slug } = await props.params;
	return <div>Slug: {slug && slug.join('/')}</div>
}
