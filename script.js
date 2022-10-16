const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
async function getAnimal() {
  let result = await fetch(url);
  let animal = await result.json();

  console.log(animal);
  // Display image
  document.getElementById('animal-image').src = animal.image_link;
  // Display name and latin name
  document.getElementById('caption-result').innerHTML = animal.name + " <em>(" + animal.latin_name + ")</em>";
  // Display lifespan
  document.getElementById('lifespan').innerHTML = animal.lifespan + " years";
  // Display habitat
  document.getElementById('habitat').innerHTML = animal.habitat;
  // Display weight
  document.getElementById('weight').innerHTML = animal.weight_min + " to " + animal.weight_max + " lbs"
  // Display diet
  document.getElementById('diet').innerHTML = animal.diet;
  // Display geographical range
  document.getElementById('geo_range').innerHTML = animal.geo_range;
}

document.getElementById("new-animal").addEventListener('click', getAnimal);