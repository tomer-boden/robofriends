import React, {Component, useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../components/robots';
import Scroll from '../components/Scroll'
import './App2.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App2 (){
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchField] = useState('')
	const [start, setStart] = useState(0)
	const [end, setEnd] = useState(0)

useEffect(() => {
/*	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => setRobots(users));*/


//pokemon

	fetch(`https://pokeapi.co/api/v2/pokemon?limit=${start}&offset=${end}`)
	.then(pokemons => pokemons.json())
	.then(pokemon => 
		/*console.log(pokemon.results)*/
		setRobots(pokemon.results))
}, [start, end])
	
function onSearchChange  (event) {
	setSearchField(event.target.value)
	}

function onStartChange(event){
	setStart(event.target.value)
}

function onEndChange(event){
	if(event.target.value >= 1)
	setEnd(event.target.value -1)
	else
	setEnd(0)
}

const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

   
	/*console.log(event.target.value);
	console.log(filterRobots);*/
							
		/*const {robots, searchfield} = this.state;*/
		
		return !robots.length ? 
			<h1 className="tc">loading</h1> :
		(
		<div className="tc">
		<h1>pokedex</h1>
		<SearchBox searchChange ={onSearchChange} place = "search pokemon"/>
		<div className="box">
		<h3>show:</h3>
		<SearchBox searchChange ={onStartChange} place = "20"/>
		<h3>from:</h3>
		<SearchBox searchChange ={onEndChange} place = "1"/>
		</div>
		<Scroll>
		<ErrorBoundry>
		<CardList robots={filterRobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>
		);
}


export default App2;






















/*class App2 extends Component {
	constructor(){
		super()
		this.state ={
			robots : [],
			searchfield: ''}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots : users}));
					}

   onSearchChange = (event) => {
	this.setState({searchfield : event.target.value})*/
	
	/*console.log(event.target.value);
	console.log(filterRobots);*/
/*								}
	render(){
		const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? 
			<h1 className="tc">loading</h1> :
		(
		<div className="tc">
		<h1>robofriends</h1>
		<SearchBox searchChange ={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<CardList robots={filterRobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>
		);
							}	
			}


export default App2;*/