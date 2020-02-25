import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <Fragment>
        <div className="list-group">
            {
                props.data.map(obj =>
                    <Link to={`/member/${obj.member_id}`} className="list-group-item">{obj.member_id}</Link>
                )
            }
        </div>
    </Fragment>