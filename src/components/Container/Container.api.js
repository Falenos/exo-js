export const getEndPoints = user => {
  return {
    userInfo: `https://api.github.com/users/${user}`,
    userRepos: `https://api.github.com/users/${user}/repos`
  };
};

export const fetchData = path => {
  return fetch(path, {method: 'get'})
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('Network response was not ok.');
  })
};