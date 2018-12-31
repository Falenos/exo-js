import React from 'react';
import styles from './styles.scss'

const Header = ({userData}) => {
	return (
		<div>I have data</div>	
	);
};

export default class Container extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			userData: null
		};
	}

	fetchData(user) {
		fetch(`https://api.github.com/users/${user}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(jsonData => this.setState({userData: jsonData}))
    .catch(err => {
			console.log(err)
    })
	};

	render() {
		const {userData} = this.state;
		return (
			<div>
				<div>Do your worst</div>
				<input type='text' placeholder='Your github userName goes here'/>
				<button onClick={() => this.fetchData('falenos')}>Generate CV</button>
				{userData && <Header userData={userData}/>}
			</div>
		);
	};
}