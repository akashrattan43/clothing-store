import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div >
    <Switch>
      <Route path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
      {/* <Homepage /> */}
    </Switch>
    </div>
  );
}

export default App;
