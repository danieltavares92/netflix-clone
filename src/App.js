import './App.css';
import Navbar from './components/Navbar'
import Row from './components/Row'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title='Em alta'/>
      <Row title='Comédia'/>
      <Row title='Suspense'/>
    </div>
  );
}

export default App;
