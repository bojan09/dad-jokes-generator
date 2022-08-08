const jokeElement = document.querySelector("#joke");
const jokeButton = document.querySelector("#joke-btn");

const generateJoke = async () => {
  const jokeConfig = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", jokeConfig);

  const data = await res.json();

  jokeElement.innerHTML = data.joke;
};

generateJoke();
jokeButton.addEventListener("click", generateJoke);
