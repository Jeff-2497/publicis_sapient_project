// Task 1
function filterPlacesByType(typePreference) {
  let filteredPlaces = [];
  // Filters through PLACES, if the type in the array matches the arugment, adds that type to the new filtered places array
  for(let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].type == typePreference) {
      filteredPlaces.push(PLACES[i]);
    }
  }
  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // creates a new card with the specified information deisplayed below
  let divNew = document.createElement("div");
  divNew.classList.add("col");
  divNew.innerHTML = `
    <div class="card h-100" onclick="centerPlaceOnMap(${place.name})">
      <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `;
  return divNew;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  let divRec = document.getElementById("recommendations");
  divRec.innerHTML = "";
  // combines the first two functions by only creating a card if it's from the filtered list that was made earlier
  for (let i = 0; i < filteredPlaces.length; i++) {
    divRec.append(createCard(filteredPlaces[i])); 
  }
}

// Task 4
function findPlaceByName(placeName) {
  for (let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].name == placeName) {
      return PLACES[i];
    }
  }
  // checks if the parameter's name matches a name in each section of the PLACES array, if so returns that section of the PLACES array
}
