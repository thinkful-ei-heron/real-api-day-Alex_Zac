import $ from 'jquery';
import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexzac';

const genFetch = function (url, obj) {
  let error;
  return fetch(url, obj)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
      }
      return res.json();
    })

    .then(data => {
      if (error) {
        error.message = data.message;
        store.error = error.message;
        return Promise.reject(error);
      }
      else {
        $('#error-box').addClass('hidden');
      }
      console.log(data);
      return data;
      
    });
};

const getItems = function () {
  return genFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({ name });
  return genFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem });
};

const updateItem = function (id, obj) {
  let modObj = JSON.stringify(obj);
  return genFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: modObj
  });
};

const deleteItem = function (id) {
  return genFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

// function deleteData(item, url) {
//   fetch(url + '/' + item, {
//     method: 'delete'
//   }).then(response =>
//     response.json().then(json => {
//       return json;
//     })
//   );
// }

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};