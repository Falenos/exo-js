import React from 'react';
import styles from './Container.scss';
import UserInfo from '../UserInfo/UserInfo';
import ReposList from '../ReposList/ReposList';
import {getEndPoints, fetchData, fetchUserData, fetchUserRepos} from './Container.api';

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
		const {userName, userData} = this.state;
		if (!userData || userName !== userData.login) {
			this.getData(this.state.userName);
		}
	};

	handleCallError = (error, totalReset) => {
		console.warn(error);
		this.setState({
			...(totalReset ? {userData: null} : {}),
			userRepos: null
		});
	};

	getData = user => {
		const endPoints = getEndPoints(user);		
		fetchData(endPoints.userInfo)
			.then(jsonData => {
				this.setState({userData: jsonData});

				fetchData(endPoints.userRepos)
					.then(jsonData => this.setState({userRepos: jsonData}))
					.catch(this.handleCallError);
			})
			.catch((...args) => this.handleCallError(...args, true));
	}

	render() {
		const {userName, userData, userRepos} = this.state;
		return (
			<div className='container'>
				<h1>Who's Github</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						<span className='input-label'>Enter a User Name : </span> 
						<input type='text' value={userName} onChange={this.handleChange} />
					</label>
					<input type='submit' value='Generate'/>
				</form>
				{userData && <UserInfo userData={userData}/>}
				{userRepos && <ReposList userRepos={userRepos}/>}
			</div>
		);
	}
}