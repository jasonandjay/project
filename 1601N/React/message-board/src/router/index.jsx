import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Link
} from 'react-router-dom';
<style>
  
</style>

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({match, location}) => (
    <div>
        <h2>Topics</h2>
        <div>{
            JSON.stringify(match)
            +
            JSON.stringify(location)
        }</div>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

export default () => (
    <Router>
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><Link to="/topics?a=1&b=2">Topics</Link></li>
                <li><Link to={{
                    pathname: '/topics',
                    data: {a:1,b:2}
                }}>Topics</Link></li>
            </ul>

            <hr />

            {/* <Switch> */}
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            {/* </Switch> */}
        </div>
    </Router>
)