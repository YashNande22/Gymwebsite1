const form = document.querySelector('form');
const foodSelect = document.querySelector('#food-select');
const caloriesInput = document.querySelector('#calories-input');
const dietList = document.querySelector('#diet-list');

const MAX_CALORIES = 1500; // set the maximum caloric value for the diet list

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const foodOption = foodSelect.options[foodSelect.selectedIndex];
  const foodName = foodOption.value;
  const foodCalories = parseInt(foodOption.getAttribute('data-calories'));
  const caloriesToAdd = parseInt(caloriesInput.value);

  const totalCalories = calculateTotalCalories();
  const remainingCalories = MAX_CALORIES - totalCalories;

  if (caloriesToAdd <= remainingCalories) {
    const listItem = document.createElement('li');
    listItem.textContent = `${foodName} (${caloriesToAdd} calories)`;
    dietList.appendChild(listItem);

    caloriesInput.value = '';
  } else {
    alert(`You can only add up to ${remainingCalories} calories to your diet list.`);
  }
});

function calculateTotalCalories() {
  let totalCalories = 0;

  for (const listItem of dietList.children) {
    const calories = parseInt(listItem.textContent.match(/\d+/));
    totalCalories += calories;
  }

  return totalCalories;
}
