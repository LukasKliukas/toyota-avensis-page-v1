import './App.css';
import Header from './components/Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FirstGen from './pages/FirstGen/FirstGen';
import SecondGen from './pages/SecondGen/SecondGen';
import ThirdGen from './pages/ThirdGen/ThirdGen';

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
        <Route path='/secondGen' element={<SecondGen />} />
        <Route path='/thirdGen' element={<ThirdGen />} />
      </Routes>
    </div>
  );
}

export default App;
