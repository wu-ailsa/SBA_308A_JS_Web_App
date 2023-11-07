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

  
jokeArray.forEach((jokeButton) => {
    jokeButton.addEventListener("click", async function () {
        jokeCount = jokeArray.indexOf(jokeButton) + 1;
        await refreshJokes();
    });
});

async function removeJokes() {
    while (jokesContainer.firstChild) {
        jokesContainer.removeChild(jokesContainer.lastChild);
    }
}

async function refreshJokes() {
    removeJokes();
    let jokesTexts = await getJokes();
    jokesTexts.forEach((jokeText) => {
        jokesContainer.appendChild(jokeText);
    });
}

async function getJokes() {
    const jokesTexts = [];
    for (let i = 0; i < jokeCount; i++) {
        try {
            const response = await axios.request(options);
            response.data.forEach((joke) => {
                const jokeText = document.createElement("p");
                jokeText.innerHTML = joke.joke;
                jokesTexts.push(jokeText);
            });
        } catch (error) {
            console.error(error);
        }
    }
    return jokesTexts;
}

  
async function initialLoad() {
    refreshJokes();
  }




await initialLoad();