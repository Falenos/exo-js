import React from 'react';

const Repo = ({name, description, language, stargazers_count, watchers_count}) => {
	return (
		<div>
      <hr/>
			<div>{name}</div>
      {description && <div>{description}</div>}
      {language && <div>Language: {language}</div>}
      <div>{`Stars: ${stargazers_count || 0} | Watchers: ${stargazers_count || 0}`}</div>
		</div>
	);
};

export default Repo;