import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './components/Routes';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const Router = useRoutes(routes)

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        {Router}
      </div>
    </div>
  );
}

export default App;
