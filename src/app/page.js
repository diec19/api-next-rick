import Ricks from "./components/Ricks";


async function fetchRick(){
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results
}

async function IndexPage(){

        const rick = await fetchRick();
  return (
    <div className='bg-black text-white '>
      
      <ul>
      
    <Ricks rick={rick}/>
</ul>
    </div>
  )
}

export default IndexPage