function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
        .then(response => response.json())
        .then(data => {
            if (data.joke) {
                // Single-part joke
                document.getElementById('joke').textContent = data.joke;
            } else {
                // Two-part joke
                document.getElementById('joke').textContent = `${data.setup} ... ${data.delivery}`;
            }
        })
        .catch(error => {
            document.getElementById('joke').textContent = 'Failed to fetch joke.';
            console.error('Error fetching joke:', error);
        });
}

// Load a joke on initial page load
window.onload = getJoke;
