import './assets/components/Global.css';
import Layout from './assets/components/Layout';
import Logo from "./assets/components/images/image.svg"
function App() {
  return (
    <div className="App">
      <img className="GlobalImg" src={Logo} alt="Logo"></img>
      <Layout/>
    </div>
  );
}

export default App;
