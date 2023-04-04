import { Provider } from 'react-redux';
import './App.css';
import MyOnlineShopApp from './components/MyOnlineShopApp';
import { createStore } from 'redux';

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <MyOnlineShopApp/>
      </main>
    </Provider>
  );
}


const defaultState = {
  productType: 'Все',
  min: 0,
  max: 35000000,
  rangeMIN: 0,
  rangeMAX: 35000000,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'Недвижимость':
      return {...state, productType: 'Недвижимость'}
    case 'Ноутбук':
      return {...state, productType: 'Ноутбук'}
    case 'Фотоаппарат':
      return {...state, productType: 'Фотоаппарат'}
    case 'Автомобиль':
      return {...state, productType: 'Автомобиль'}
    case 'MIN':
      return {...state, min: action.payload}
    case 'MAX':
      return {...state, max: action.payload}
      case 'rangeMIN':
        return {...state, rangeMIN: action.payload}
      case 'rangeMAX':
        return {...state, rangeMAX: action.payload}
    default:
      return {
        ...state,
        productType: 'Все',
        min: 0,
        max: 35000000,
        rangeMIN: 0,
        rangeMAX: 35000000,
      }
  }
}
const store = createStore(reducer)