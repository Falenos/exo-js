import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import ReposList from '../ReposList/ReposList';
import {fetchUserData, fetchUserRepos} from './Container.api';

export default class Container extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userData: null,
			userRepos: null
		};
	}

	handleChange = event => {
    this.setState({userName: event.target.value});
  }

	handleSubmit = event => {
		event.preventDefault();
		this.fetchData(this.state.userName);
	};

	fetchData = user => {
		fetchUserData(user)
			.then(jsonData => this.setState({userData: jsonData}))
			.catch(err => {
				console.warn(error);
				this.setState({userData: null});
			})
		fetchUserRepos(user)
		.then(jsonData => this.setState({userRepos: jsonData}))
			.catch(err => {
				console.warn(error);
				this.setState({userRepos: null});
			});
	}

	render() {
		const {userName, userData, userRepos} = this.state;
		console.log(this.state);
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit}>
					<label>
						UserName: 
						<input type="text" value={userName} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<hr/>
				{userData && <UserInfo userData={userData}/>}
				<hr/>
				{userRepos && <ReposList userRepos={userRepos}/>}
			</div>
		);
	}
}