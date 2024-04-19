import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './components/Routes';

function App() {

  const Router = useRoutes(routes)

  return (
    <div className="App">
      {Router}
    </div>
  );
}

export default App;
