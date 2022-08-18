import './App.css';
import Header from './components/Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FirstGen from './pages/FirstGen/FirstGen';

function App() {
  const buttonObj = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'First Generation',
      link: '/firstGen',
    },
    {
      title: 'Second Generation',
      link: '/secondGen',
    },
    {
      title: 'Third Generation',
      link: '/thirdGen',
    },
  ];

  return (
    <div className='App'>
      <Header buttons={buttonObj} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/firstGen' element={<FirstGen />} />
      </Routes>
    </div>
  );
}

export default App;
