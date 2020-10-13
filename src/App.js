import React, { Component } from 'react';
import './App.css';

class App extends React.Component{

	constructor(props)
	{
		super(props);
		this.state = {
			ip1 : "",
			ip2 : "",
			op : ""
		};
	}


	add = (event) => {

		if(this.state.ip1 == "" || this.state.ip2 == "")
		{
			alert("Inputs should only contain numbers!!");
			return;
		}

		let val1 = Number(this.state.ip1);
		let val2 = Number(this.state.ip2);
		let ans = val1 + val2;

		this.setState({op:ans});
	}

	subtract = (event) => {

		if(this.state.ip1 == "" || this.state.ip2 == "")
		{
			alert("Inputs should only contain numbers!!");
			return;
		}

		let val1 = Number(this.state.ip1);
		let val2 = Number(this.state.ip2);
		let ans = val1 - val2;

		this.setState({op:ans});
	}

	multiply = (event) => {
		
		if(this.state.ip1 == "" || this.state.ip2 == "")
		{
			alert("Inputs should only contain numbers!!");
			return;
		}

		let val1 = Number(this.state.ip1);
		let val2 = Number(this.state.ip2);
		let ans = val1 * val2;

		this.setState({op:ans});
	}

	divide = (event) => {

		if(this.state.ip1 == "" || this.state.ip2 == "")
		{
			alert("Inputs should only contain numbers!!");
			return;
		}

		let val1 = Number(this.state.ip1);
		let val2 = Number(this.state.ip2);
		let ans = val1 / val2;

		this.setState({op:ans});
	}

	clear = () => 
	{
		this.setState({ip1:"",ip2:"",op:""});
	}


	render()
	{
		return (

			<div className = "App">

				<h1>Calculator</h1>

				<input id="input_one" type="number" placeholder="Input One"
				onChange={(event) => {this.setState({ip1:event.target.value})}} value={this.state.ip1}/>

				<br/> <br/>

				<input id="input_two" type="number" placeholder="Input Two"
				onChange={(event) => {this.setState({ip2:event.target.value})}} value={this.state.ip2}/>

				<br/> <br/>

				<button id="plus" onClick={this.add}> + </button>
				<button id="minus" onClick={this.subtract}> - </button>
				<button id="mulitply" onClick={this.multiply}> x </button>
				<button id="divide" onClick={this.divide}> / </button>
				<br/> <br/>
				<button id="clear" onClick={this.clear}>Clear</button>

				<br/> <br/>

				<input id="output" type="text" placeholder="Output" value={this.state.op} readonly/>





			</div>
		);

	}

}

export default App;
