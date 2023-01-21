



function Card(data) {
  return (
    <li className='item' style={{ border: "1px solid black", width: "300px",borderRadius:'5px', boxShadow: 'rgba(0 , 0, 0, 0.5) 0px 5px 15px', }}>

        <img style={{ border: "1px solid black", width: "300px",borderRadius:'5px'  }}  src={data.img} alt='hvgn'/>
        <div style={{padding:'10px'}}>
        <h1>
        {data.id}.   
        {data.name}
      </h1>

      <p>{data.population}</p>
      <p>{data.region}</p>
      <p>{data.capital}</p>
        </div>
      
    </li>
  );
}
export default Card;
