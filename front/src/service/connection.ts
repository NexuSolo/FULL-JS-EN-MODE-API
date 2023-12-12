const url = 'http://localhost:8080/api/utilisateur/';

// Use the fetch function to send a GET request to the server
// eslint-disable-next-line no-unused-vars
function getUsers(){
    fetch(url)
        .then(response => response.json()) // Process the response as JSON
        .then(data => {
            // Use the data from the server
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}
