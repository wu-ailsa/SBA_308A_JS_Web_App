import axios from "axios";

const joke1 = document.getElementById("joke1");
const joke2 = document.getElementById("joke2");
const joke3 = document.getElementById("joke3");
const joke4 = document.getElementById("joke4");
const joke5 = document.getElementById("joke5");

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
    // const jokeResults = await fetch(
    //     `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`
    //   );
    //   const data = await jokeResults.json();
    //   console.log(data);
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }

await initialLoad();