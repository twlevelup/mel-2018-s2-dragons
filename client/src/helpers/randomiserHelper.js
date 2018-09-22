const randomizer = context => {
  const animalData = context.animals;

  let randomIndex = Math.floor(Math.random() * animalData.length);

  let anotherIndex = randomIndex;
  while (anotherIndex === randomIndex) {
    anotherIndex = Math.floor(Math.random() * animalData.length);
  }

  const data = {
    filename: animalData[randomIndex].filename,
    image: require(`../images/${animalData[randomIndex].filename}`),
    incorrectOption: animalData[anotherIndex].animal,
    correctOption: animalData[randomIndex].animal
  };
  return data;
};

module.exports = randomizer;
