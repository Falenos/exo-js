import React from 'react';
import Repo from '../Repo/Repo';

const ReposList = ({userRepos}) => {

	return (
		<div>
			{userRepos.map(({id, name, description, language, stargazers_count, watchers_count}) => {
				return (
					<Repo
						key={id}
						name={name}
						description={description}
						language={language}
						stargazers_count={stargazers_count}
						watchers_count={watchers_count}/>
				);
			})}
		</div>	
	);
};

export default ReposList;