const joke1 = document.getElementById("joke1");
const joke2 = document.getElementById("joke2");
const joke3 = document.getElementById("joke3");
const joke4 = document.getElementById("joke4");
const joke5 = document.getElementById("joke5");
const jokesContainer = document.getElementById("jokesContainer");

const jokeArray = [joke1, joke2, joke3, joke4, joke5];

let jokeCount = 1;

const options = {
    method: 'GET',
    url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
    headers: {
      'X-RapidAPI-Key': '678639b2d7mshf6865195cd069dbp129380jsn9e3c087ecb78',
      'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
  };


  
async function initialLoad() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        response.data.forEach((joke) => {
            const jokeText = document.createElement("p");
            jokeText.innerHTML = joke.joke;
            jokesContainer.appendChild(jokeText);
        });
    } catch (error) {
        console.error(error);
    }
  }

await initialLoad();