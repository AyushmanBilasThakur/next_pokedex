import Link from 'next/link';
import React from 'react'

function SinglePokemon({pokemon, error,}) {

    if(pokemon){
        return (
            <div className='container p-4'>
                <Link href="/">
                    <a className='text-violet-400 hover:underline'> &lt;- back</a>
                </Link>
                <h3 className='text-5xl text-center font-bold'>{pokemon.name.toUpperCase()}</h3>

                <img className="block m-auto" src={pokemon.image} width={300} height={300}/>

                <h3 className='text-center text-lg font-bold'>Abilities: </h3>
                <ul className='flex justify-center gap-5'>
                    {
                        pokemon.abilities.map((ability,i) => (
                            <li key={i}>{ability.ability.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                {error}
            </div>
        )
    }
}

export default SinglePokemon


export async function getServerSideProps(context){
    let pokemon = null;
    let error = null;
    try {
        const id = context.params.id;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if(res.status != 200){
            throw new Error("Pokemon not found!");
        }
        const data = await res.json();

        pokemon = {...data, image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + id).slice(-3)}.png`};
    } catch (err) {
        console.log(err);
        error = err;
    }

    return {
        props:{
            pokemon,
            error
        }
    }
}