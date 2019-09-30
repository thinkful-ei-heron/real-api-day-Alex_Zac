import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';

const main = function () {
  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  // console.log(api.BASE_URL);

  api.createItem('pears') 
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });

  shoppingList.bindEventListeners();
  shoppingList.render();

  
};



$(main);