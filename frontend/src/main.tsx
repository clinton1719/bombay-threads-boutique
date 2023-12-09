import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/HomePageCmp/CategoryPage.tsx';
import HomePage from './components/HomePageCmp/HomePage.tsx';
import NavBar from './components/NavBarCmp/NavBar.tsx';
import './css/main.min.css';
import store from './redux/store.ts';
import Error from './components/ErrorCmp/Error.tsx';
import AddItem from './components/AdminCmp/FormsCmp/AddItem.tsx';
import Admin from './components/AdminCmp/Admin.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />

            <Route path="/category/:category" element={<CategoryPage />}>
              <Route
                path="/category/:category/:subCategory"
                element={<CategoryPage />}
              />
            </Route>

            <Route path="/admin">
              <Route index element={<Admin />} />
              <Route path="/admin/addItem" element={<AddItem />} />
            </Route>

            <Route path="*" element={<Error />} />

            <Route errorElement={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
