import React, {PureComponent} from 'react';
import styles from './InputForm.scss';

export default class Container extends PureComponent {
	constructor(props) {
		super (props);
		this.inputRef = React.createRef();
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.handleSubmit(this.inputRef.current.value);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='input-form'>
				<label>
					<span className='input-label'>Enter a User Name : </span> 
					<input type='text' ref={this.inputRef}/>
				</label>
				<input type='submit' value='Generate'/>
			</form>
		);
	}
}