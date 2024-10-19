import React from 'react';
import logo from './logo.svg';
import './App.css';
// Importing the generated module data
import books from './data/module-data.js';
import RootLayout from './layouts/RootLayout.jsx';
import {Route, Routes} from 'react-router-dom'
import Lab1Pages from './pages/Lab1Pages.jsx';
import BooksPage from './pages/BooksPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';



function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path='/lab1' element={<Lab1Pages />}/>
        <Route path='/lab2' element={<h1>Laboratorium2</h1>}/>
        <Route path='/books/:id' element={<BooksPage />}/>
        <Route path='*' element={<NotFoundPage />}/>

      </Routes>
    </RootLayout>
  );
}

export default App;
