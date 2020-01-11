import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import axios from 'axios';
import { connect } from 'react-redux';
import { getReposByUsername } from "../redux/home/home.action";

import {Search} from '../components/search';

const useStyles = (theme=>({
	
}))

class Home extends Component {
	constructor(){
		super();
		this.state={
			username: ''
		}
	}

	handleChange = event =>{  
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSearch = (event) =>{
		if(event.key === 'Enter'){ 
			if (this.state.username !== ''){
				const username = this.state.username
				this.props.dispatch(getReposByUsername(username));
			}
		}
	}

	render(){
		const classes = this.props.classes
		const repos = this.props.repos

	  return (
	    <Container maxWidth='md' style={{display:'flex', flexDirection:'column'}}>
	    	<Search 
	    		placeHolder="Input username"
      		name="username"
      		value={this.state.username}
      		handleChange={this.handleChange}
      		handleSearch={this.handleSearch}
	    	/>
	    	{this.props.message ?
	  			(
		  		<Grid style={{display:'flex', justifyContent:'center'}}>
      			<h2>User not found</h2>
      		</Grid>
      		)
      		:
      		(
      			<Grid>
      			{repos.map((item, index)=>
			    		<Grid>
			    			<h3><a href={"https://github.com/" + item.full_name} target="_blank">{item.name}</a></h3>
							</Grid>
			    	)}
			    	</Grid>
      		)
      	}
	    </Container>
	  );
  }
}

const mapStatetoProps = state => ({
	repos: state.homeReducer.repos,
	message: state.homeReducer.message
})

export default connect(mapStatetoProps)(withStyles(useStyles)(Home));
