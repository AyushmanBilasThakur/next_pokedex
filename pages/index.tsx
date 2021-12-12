import Link from "next/link";

export default function Home({pokemon, error}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Pokedex App</h1>

      {pokemon ? (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
          {pokemon && pokemon.map((p,i) => (
            <Link href={`/pokemon/${i + 1}`} key={i}>  
              <a className="shadow-sm p-4 hover:shadow-lg hover:cursor-pointer bg-gray-100 rounderd-lg">
                <img className="block m-auto" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + (i + 1)).slice(-3)}.png`} width={100} height={100}/>
                <h3 className="text-lg text-center">{p.name}</h3>
              </a>
            </Link>
        ))}
      </div>) : (
        <div>
          {error}
        </div>
      )}

    </div>
  )
}

export const getStaticProps = async() => {
  let pokemon = null;
  let error = null;
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=200");
    const data = await res.json();
    pokemon = data.results;
  } catch (err) {
    console.log(err);
    error = err;
  }
  
  return {
    props: {
      pokemon,
      error
    }
  }
}
