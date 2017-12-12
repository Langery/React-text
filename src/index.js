import React from 'react';
import ReactDOM from 'react-dom';
import './layouts/Tyle.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Home from './paging/Home';
import About from './paging/About';

import Cycle from './paging/LifeCycle'

var style = {fontWeight:"normal",color:'orange'} // css
var order = {listStyleType:"none",margin:'10px 0'}



const BasicExample = () => (
  <Router>
    <div>
      <HomeLayout>
        <Link to="/" style={{color:'pink'}} className="Link">Merry Christmas</Link>
        <Link to="/about" style={{color:'green'}} className="Link">Santa Claus</Link>
        <Link to="/topics" style={{color:'orange'}}>About Legend</Link>
      </HomeLayout>
      

      <hr style={{width:'100',height:'1px',background:'black'}}/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Topics = ({ match }) => (
  <div>
    <h2 style={style}>About Legend</h2>
    <ul style={order}>
      <li>
        <Link to={`${match.url}/Christmas Tree`}>
         Christmas Tree
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Reindeer`}>
          Reindeer
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Christmas Gift`}>
          Christmas Gift
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3 className="fontweight" style={{color:'orange'}}>Please Select a Legend.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

ReactDOM.render(<BasicExample/>, document.getElementById('root'));


