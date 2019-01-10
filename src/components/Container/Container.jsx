import React from 'react';
import styles from './Container.scss';
import InputForm from '../InputForm/InputForm';
import UserInfo from '../UserInfo/UserInfo';
import ReposList from '../ReposList/ReposList';
import {getEndPoints, fetchData} from './Container.api';

export default class Container extends React.Component {
	constructor(props) {
		super (props);
		this.state = {
			userData: null,
			userRepos: null,
		};
	}

	handleSubmit = name => {
		const {userData} = this.state;
		if (!userData || name !== userData.login) {
			this.getData(name);
		}
	};

	handleCallError = (error, totalReset) => {
		console.warn(error);
		this.setState({
			...(totalReset ? {userData: null} : {}),
			userRepos: null,
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
		const {userData, userRepos} = this.state;
		return (
			<div className='container'>
				<h1>{'Who\'s Github'}</h1>
				<InputForm 
					handleSubmit={this.handleSubmit}/> 
				{userData && 
					<UserInfo 
						name={userData.name} 
						login={userData.login}
						createdAt={userData.created_at} 
						bio={userData.bio}
						publicGists={userData.public_gists} 
						publicRepos={userData.public_repos}/>}
				{userRepos && 
					<ReposList 
						userRepos={userRepos}/>}
			</div>
		);
	}
}