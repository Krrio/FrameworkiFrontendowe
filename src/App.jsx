// src/App.jsx
import React, { useReducer } from 'react';
import './App.css';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Pages from './pages/Lab1Pages';
import BooksPage from './pages/BooksPage';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Lab2 from './pages/Lab2';
import Lab2Main from './pages/Lab2Main';
import Lab3 from './pages/Lab3';
import Lab4Page from './pages/Lab4Page';
import EditForm from './components/EditForm';
import CreateForm from './components/CreateForm';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';

// Początkowy stan aplikacji
const initialData = [
  { id: 1, name: "Ala", rating: 3 },
  { id: 2, name: "Ela", rating: 5 },
  { id: 3, name: "Karol", rating: 7 },
];

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Pages /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2", urlPattern: "/lab2/:id", element: <Lab2 /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3 /> },
  { id: 5, label: "Laboratorium 4", url: "/lab4", urlPattern: "/lab4", element: <Lab4Page /> },
  { id: 6, url: "/lab4/edit", element: <EditForm /> },
  { id: 7, urlPattern: "/lab4/add", element: <CreateForm /> },
];

function App() {
  const [state, appDispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/lab2" element={<Lab2Main />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
