// src/App.jsx
import React from 'react';
import './App.css';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Pages from './pages/Lab1Pages';
import BooksPage from './pages/BooksPage';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Lab2 from './pages/Lab2';
import Lab2Main from './pages/Lab2Main';

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Pages /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2", urlPattern: "/lab2/:id", element: <Lab2 /> },
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map((item) => (
          <Route key={item.id} path={item.urlPattern} element={item.element} />
        ))}
        <Route path="/lab2" element={<Lab2Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
