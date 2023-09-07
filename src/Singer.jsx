export default function Singer({singer}){
    // console.log(singer)
    return (
        <>
            <h3>Id: {singer.id}</h3>
            <h4>Name: {singer.name}</h4>
            <p style={{marginBottom: '40px'}}>Age: {singer.age}</p>
        </>
    )
}