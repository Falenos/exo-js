import React from 'react';
import moment from 'moment';

const UserInfo = ({name, login, createdAt, bio, publicGists, publicRepos}) => {
	const createdDate = moment(new Date(createdAt)).format('LL');
	return (
		<div>
			<hr/>
			<h2>About this User</h2>
			<div>{`${name} is a GitHub community member since ${createdDate}`}</div>
			{bio && <div>{bio}</div>}
			<div>At his <a target='_blank' href={`https://github.com/${login}`}>profile</a> page you can explore {publicRepos} public Repositories and {publicGists} Gists</div>
			<hr/>
		</div>
	);
};

export default UserInfo;