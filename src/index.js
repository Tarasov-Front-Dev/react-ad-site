import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode> // Выключено т.к. devtools дублируют логи. По готовности проекта включить обратно
    <App />
  // </StrictMode>
);