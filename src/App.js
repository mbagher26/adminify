import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './components/Routes';
import Header from './components/header/Header';

function App() {

  const Router = useRoutes(routes)

  return (
    <div className="App">
      <Header/>
      {Router}
    </div>
  );
}

export default App;
