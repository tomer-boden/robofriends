import React from 'react';
import Card from './Card';


/*async function fetchPokemon(url) {
  const fetchurl = await fetch(url);
  const info = await fetchurl.json();
  const plz = info.types[0].type.name;
}

function fetchnormal (url){
	return fetch(url)
		.then(function (info){
			return info.json();
		});
		.then(pokemon => pokemon.types[0].type.name)
}
function fetch10 (url){
		 fetch(user.url)
		.then(info => info.json())
		.then(pokemon => {
			return pokemon.types[0].type.name
		}
			)}

function foo (info){
	return info;

		async function fetchPokemon(url) {
  const fetchurl = await fetch(url);
  const info = await fetchurl.json();
  const plz = await info.types[0].type.name;
}

const final = (index, id, name, email, type, url) => {
	console.log(index, id, name, type);
	return (
			<Card 
			key={index}
			id= {id}
			name= {name}
			email= {email}
			type = {type}
			url = {url}
			/>
	);
}

return final(i, i, user.name, "lalalid", "lalalid", user.url)*/


			/*const ptype = (pokemon.types[0].type.name)*/

		/*	const poktype = fetchPokemon(user.url);*/
			/*console.log(poktype)*/

/*fetchnormal(user.url).then(function(info){
    console.log(info.types[0].type.name);
})*/

const CardList = ({robots}) => {
	

/*	if (true){
		throw new Error ('noooo');
	}*/
	return(
	<div>
	{robots.map((user, i) =>{
		return (
			<Card 
			key={i} 
			id={i} 
			name={user.name} 
			email="lala"
			url={user.url}
			/>
	);
	})}
    </div>
		);
}
export default CardList;


















































/*
const CardList = ({robots}) => {*/
/*	if (true){
		throw new Error ('noooo');
	}*/
/*	return(
	<div>
	{robots.map((user, i) =>{
		return (
			<Card 
			key={i} 
			id={user.id} 
			name={user.name} 
			email={user.email}
			/>
	);
	})}
    </div>
		);
}
export default CardList;*/