import React from 'react';

const Repo = ({name, description, language, forks = 0, watchers = 0}) => {
	return (
		<div className='repository-wrapper'>
			<h3>{name}</h3>
			{description && <div>{description}</div>} 
			{language && <div>Language: {language}</div>}
			<div>{`Forks: ${forks} | Watchers: ${watchers}`}</div>
			<hr/>
		</div>
	);
};

export default Repo;