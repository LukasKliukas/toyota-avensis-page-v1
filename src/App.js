import './App.css';
import Header from './components/Header/Header.jsx';

function App() {
  const buttonObj = [
    {
      title: 'Home',
      link: '/home',
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
    </div>
  );
}

export default App;
