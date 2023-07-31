import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Kryteria zaliczenia
// Użyj tego szablonu projektu React jako punktu wyjścia dla swojej aplikacji.
// https://github.com/goitacademy/react-homework-template#readme
// Stworzone repozytorium goit-react-hw-07-phonebook.
// Wykorzystana biblioteka Redux Toolkit.
