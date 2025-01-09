const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const mealsContainer = document.getElementById('meals-container');
const showAllButton = document.getElementById('show-all-button');

let allMeals = [];

async function fetchMeals(query) {
  console.log('Fetching meals for query:', query);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await response.json();
  console.log('Fetched meals:', data.meals);
  return data.meals || [];
}
async function fetchMeals(query) {
    console.log('Fetching meals for query:', query);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    console.log('Fetched meals:', data.meals);
    return data.meals || [];
  }
  
  function renderMeals(meals, limit = 5) {
    console.log('Rendering meals:', meals);
    mealsContainer.innerHTML = '';
    const mealsToShow = meals.slice(0, limit);
  
    mealsToShow.forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card', 'p-3');
      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-fluid">
        <h5 class="mt-2">${meal.strMeal}</h5>
        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
        <p>${meal.strInstructions.slice(0, 100)}...</p>
      `;
      mealsContainer.appendChild(mealCard);
    });
  
    if (meals.length > limit) {
      showAllButton.style.display = 'block';
    } else {
      showAllButton.style.display = 'none';
    }
  }
  
  searchButton.addEventListener('click', async () => { 
    const query = searchInput.value.trim(); 
    if (!query) { 
      console.log('Query is empty'); 
      return; 
    }
  
    allMeals = await fetchMeals(query);
    renderMeals(allMeals);
  });
  
  showAllButton.addEventListener('click', () => {
    renderMeals(allMeals, allMeals.length);
  });