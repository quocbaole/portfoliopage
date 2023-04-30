import './App.scss';

import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';

import Header from './components/Header';

import ContactPage from './screens/ContactPage';

function App() {


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
