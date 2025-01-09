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