import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
    <div className="App">
      <BrowserRouter >
      <React.Fragment>
        <MyNavbar />
        <Home />
       <div className='container-fluid'>
       <Routes>
         <Route path="/home" component={Home} />
       </Routes>
      </div>
        </React.Fragment>
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
