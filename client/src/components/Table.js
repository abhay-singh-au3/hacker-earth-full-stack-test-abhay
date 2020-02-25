import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <Fragment>
        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Loan Amount</th>
                    <th>Term</th>
                    <th>Interest</th>
                    <th>Installment</th>
                    <th>Grade</th>
                    <th>Loan Status</th>
                    <th>Issue Date</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(obj =>
                        <tr key={obj.member_id}>
                            <td><Link to={`/member/${obj.member_id}`}>{obj.member_id}</Link></td>
                            
                            <td>{obj.loan_amnt}</td>
                            <td>{obj.term}</td>
                            <td>{obj.int_rate}</td>
                            <td>{obj.installment}</td>
                            <td>{obj.grade}</td>
                            <td>{obj.loan_status}</td>
                            <td>{obj.issue_d}</td>
                            <td>{obj.purpose}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </Fragment>