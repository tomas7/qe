import logo from './logo.svg';
import './App.css';
import {Image} from 'cloudinary-react';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Image cloudName="dwefdgjdu" publicId="sample" width="300" crop="scale"/>
    </div>
  );
}

export default App;
