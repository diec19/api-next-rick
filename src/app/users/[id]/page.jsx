
async function getUser(id){
            
       const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
       const data = await res.json();
       return data

  
}

async function UserPage({params}){

   const user=await getUser(params.id)



  return (
    <div className='bg-black text-white'>
          <img src={user.image} alt="" />
          <h3 className="">{user.name}</h3>
          <h4>{user.species}</h4>
          <p>{user.location.name}</p>
    </div>
  )
}

export default UserPage