import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/theme/layout';
import Home from './components/home';
import Menu from './components/category/menu';

function App() {
  return (
    <Layout>
      <div className="App">
        <Home />
        <Menu />
      </div>
    </Layout>
  );
}

export default App;
