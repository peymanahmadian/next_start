interface IReviews{
    params:Promise<{id:number,page:number}>
}
export default async function Reviews(props:IReviews){
    const {id,page}=await props.params;
    return <div>my id is {id} and page is {page}</div>
}