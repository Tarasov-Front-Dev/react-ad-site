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
  MIN: 9000, // Для моделирования реальной ситуации поставлю 0 - 99999999999 и сделаю обновление через useTransition. Но позже. В первую очеред нужно доделать фильтрацию и модалку для показа объявления.
  MAX: 30000000,
  rangeMIN: 9000,
  rangeMAX: 30000000,
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
    case 'Все':
      return {...state, productType: 'Все'}
    case 'MIN':
      return {...state, MIN: action.payload}
    case 'MAX':
      return {...state, MAX: action.payload}
    case 'rangeMIN':
      return {...state, rangeMIN: action.payload}
    case 'rangeMAX':
        return {...state, rangeMAX: action.payload}    
    default:
      return {
        ...defaultState,
      }
  }
}
const store = createStore(reducer)