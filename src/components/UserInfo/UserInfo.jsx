import React from 'react';

const UserInfo = ({userData}) => {
	const {name, login, created_at, bio, public_gists, public_repos, followers} = userData;
	return (
		<div>
			<div>{`${name} is a GitHub community member since ${created_at}`}</div>
			{bio && <div>{bio}</div>}
			<div>At his <a href={`https://github.com/${login}`}>profile</a> page you can explore {public_repos} public Repositories and {public_gists} Gists</div>
		</div>
	);
};

export default UserInfo;