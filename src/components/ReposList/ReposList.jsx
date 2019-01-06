import React from 'react';
import Repo from '../Repo/Repo';

const ReposList = ({userRepos}) => {

	return (
		<div>
			<h2>Repositories</h2>
			{userRepos.length ? 
				userRepos.map(({id, name, description, language, stargazers_count, watchers_count}) => {
					return (
						<Repo
							key={id}
							name={name}
							description={description}
							language={language}
							stargazers_count={stargazers_count}
							watchers_count={watchers_count}/>
					);
				}) : <span>This User has no public Repositories as of now.</span>
			}
		</div>	
	);
};

export default ReposList;