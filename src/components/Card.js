
import React, {useState,useEffect } from 'react';




const Card = ({name, email, id, url}) => {
const [ime, setIme] = useState([])
const [type, setType] = useState([])
const [type2, setType2] = useState([])
const [ind, setInd] = useState('')

async function fetchPokemon (url) {
const fetched = await fetch(url)
const pokemons = await fetched.json()
await setIme(pokemons.sprites.front_default)
await setType(pokemons.types[0].type.name)
if (pokemons.types[1])
{
	{await setType2("/" + pokemons.types[1].type.name)}
}
else{
	{await setType2("")}
}
if (pokemons.id < 894)
{await setInd(pokemons.id)}
else
{
	await setInd('special')
}
}
/*const [weight, setWeight] =useState([])*/
useEffect(() => {

fetchPokemon(url)

	})

/*useEffect(() => {
fetch(url)
	.then(digis => digis.json())
	.then(digim => {
		setIme(digim.sprites.front_default)
		setWeight(digim.weight)
		setType(digim.types[0].type.name)
		if (digim.types[1])
			{setType2("/" + digim.types[1].type.name)}
		setInd(digim.id)

	})
	})*/



	return (
		<div className='tc bg-light-green dib bg3 pa3 ma2 grow bw2 shadow-5'>
		<h2>#{ind} {name}</h2>
		<img alt='photo' src={ime}/>
		<div>

		</div>
		<p>{type}{type2}</p>
		{/*<p>weight : {weight}</p>*/}
		</div>
		)
}


export default Card;

//http://localhost:3000/