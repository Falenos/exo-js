import React from 'react';
import styles from './styles.scss';
import {fetchData, fetchUserData, fetchUserRepos} from './Container.api';

const UserDetails = ({userData}) => {
	return (
		<div>I have data</div>	
	);
};

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
				{userData && <UserDetails userData={userData}/>}
			</div>
		);
	}
}