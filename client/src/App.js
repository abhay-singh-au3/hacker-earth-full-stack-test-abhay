import React, { Fragment } from 'react';
import './App.css';
import TableContainer from './containers/TableContainer';
import WidgetContainer from './containers/WidgetContainer';


function App() {
  return (
    <Fragment>
      <h1 className="display-4 text-center">Lending Club</h1>
      <hr />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <TableContainer />
          </div>
          <div className="col-md-3 col-sm-8 offset-sm-2">
            <WidgetContainer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
