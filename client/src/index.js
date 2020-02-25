import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MemberContainer from './containers/MemberContainer';
import NoMatch from './components/NoMatch';

const Home = () => {
    return (
        <Fragment>
            <Router>
                <SearchBar />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/member/:memberID" component={MemberContainer} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </Fragment>
    )
}

ReactDOM.render(<Home />, document.getElementById('root'));

