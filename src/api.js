const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexzac';

const getItems = function() {
  fetch(`${BASE_URL}/items`);
  // console.log(`${BASE_URL}/items`);
};
export default {
  getItems
};