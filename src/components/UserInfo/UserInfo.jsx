import React from 'react';

const UserInfo = ({userData}) => {
	const {name, login, created_at, bio, public_gists, public_repos, followers} = userData;
	return (
		<div>
			<hr/>
			<h2>About this User</h2>
			<div>{`${name} is a GitHub community member since ${created_at}`}</div>
			{bio && <div>{bio}</div>}
			<div>At his <a target='_blank' href={`https://github.com/${login}`}>profile</a> page you can explore {public_repos} public Repositories and {public_gists} Gists</div>
			<hr/>
		</div>
	);
};

export default UserInfo;