export const fetchUserData = user => {
  return fetch(`https://api.github.com/users/${user}`, {method: 'get'})
    .then(response => response.json())
};

export const fetchUserRepos = user => {
  return fetch(`https://api.github.com/users/${user}/repos`, {method: 'get'})
    .then(response => response.json())
};