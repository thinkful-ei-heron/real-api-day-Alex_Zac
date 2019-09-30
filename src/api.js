const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexzac';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({ name });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem });
};

const updateItem = function (id, obj) {
  let modObj = JSON.stringify(obj);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: modObj
  });
}

export default {
  getItems,
  createItem,
  updateItem
};