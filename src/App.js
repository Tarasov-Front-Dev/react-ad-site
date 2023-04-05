import { Provider } from 'react-redux';
import './App.css';
import MyOnlineShopApp from './components/MyOnlineShopApp';
import { store } from './components/store';

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <MyOnlineShopApp/>
      </main>
    </Provider>
  );
}