import React ,{Component} from 'react';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component{

	constructor(){
        super();
		this.state={
			searchfield:"",
			robots:[]
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}))
	}
	
	onsubmit= (event)=>{
		this.setState({searchfield:event.target.value}) 

	}



	render(){
		const filterrobots= this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (!this.state.robots){
			return(
				<h1>Loading</h1>
				)
		}
		else{
		 return(
	   <div className="tc">
		<h1 className="f1"> Robofriends</h1>
		<Searchbox searchfield={this.onsubmit}/>
		<Scroll>
         <CardList robots={filterrobots} />
        </Scroll>
		
	   </div>
		);
		}

	}
	
}

export default App;