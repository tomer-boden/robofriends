import React, {Component, useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../components/robots';
import Scroll from '../components/Scroll'
import './App2.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {

    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }

    }
  }
}

function App2 (){
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchField] = useState('')
	const [disshow, setDisshow] = useState(0)
	const [realshow, setRealshow] = useState(0)
	const [disfrom, setDisfrom] = useState(0)
	const [realfrom, setRealfrom] = useState(0)

useEffect(() => {
/*	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => setRobots(users));*/


//pokemon

	fetch(`https://pokeapi.co/api/v2/pokemon?limit=${disshow}&offset=${disfrom}`)
	.then(pokemons => pokemons.json())
	.then(pokemon => 
		/*console.log(pokemon.results)*/
		setRobots(pokemon.results))
}, [disshow, disfrom])
	
useEffect(() => {
	deliver (realshow, "start");
	console.log(realshow);
	}, [realshow])

useEffect(() => {
	deliver (realfrom, "end");
	console.log(realshow);
	}, [realfrom])

function onSearchChange  (event) {
	setSearchField(event.target.value)
	}

function deliver (num, type)
{
	//setDisfrom(disfrom - count)
	//setDisshow(disshow - count)
	console.log(`deliver on, disshow : ${disshow}, disfrom : ${disfrom}, num: ${num}, type : ${type}, realshow : ${realshow}, realfrom:`)
	/*let count = 0;
	if (num === "")
	{
		num = 0;
	}
	if (disshow === 0 || (num ===0 && type === "start"))
	{
		count = 20;
		console.log("this1", count);
		if (num !==0 && type === "start")
		count = 0;

	}*/
	let count = 0;
	if (realshow === 0)
	{
		count = 20;
	}
	if (type === "start")
	{
		if (parseInt(realshow) + parseInt(realfrom) + count > 983)
		{
			setDisfrom(983 - parseInt(realshow) - count);
			setDisshow(realshow);
			console.log("this2", count);
		}
		else
		{
			setDisfrom(realfrom);
			setDisshow(realshow);
		}
	}
	if (type === "end")
	{
		if (parseInt(realfrom) + parseInt(realshow) + count > 983)
		{
			setDisfrom(983- parseInt(realshow) - count);
			console.log("this3", count);
		}
		else
		{
			setDisfrom(realfrom);
			setDisshow(realshow);
		}
	}
}

function onStartChange(event){
	/*setDisshow(event.target.value)*/
	if(event.target.value)
	setRealshow(event.target.value);
	else
	setRealshow(0)
}



function onEndChange(event){
	if(event.target.value >= 1)
	/*setDisfrom(event.target.value -1)*/
	setRealfrom(event.target.value -1);


	else
	/*setDisfrom(0)*/
	setRealfrom(0);

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
		<Particles className='particles' params={particlesOptions} />
		<h1>pokedex!</h1>
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