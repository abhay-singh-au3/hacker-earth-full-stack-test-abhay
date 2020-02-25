import React, { Fragment } from 'react';


const Member = props =>
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <h1 className="display-4 text-center">Member Details</h1>
                    <table className="table table-dark">
                        <tr>
                            <th scope="row">Member ID</th>
                            <td>{props.data.member_id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Loan Amount</th>
                            <td>$ {props.data.loan_amnt}</td>
                        </tr>
                        <tr>
                            <th scope="row">Term</th>
                            <td>{props.data.term}</td>
                        </tr>
                        <tr>
                            <th scope="row">Interset Rate</th>
                            <td>{props.data.int_rate} %</td>
                        </tr>
                        <tr>
                            <th scope="row">Installment</th>
                            <td>$ {props.data.installment}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grade</th>
                            <td>{props.data.grade}</td>
                        </tr>
                        <tr>
                            <th scope="row">Designation</th>
                            <td>{props.data.emp_title}</td>
                        </tr>
                        <tr>
                            <th scope="row">Work Experience</th>
                            <td>{props.data.emp_length}</td>
                        </tr>
                        <tr>
                            <th scope="row">Annual Income</th>
                            <td>$ {props.data.annual_inc}</td>
                        </tr>
                        <tr>
                            <th scope="row">Home Ownership</th>
                            <td>{props.data.home_ownership}</td>
                        </tr>
                        <tr>
                            <th scope="row">Verification Status</th>
                            <td className={
                                props.data.verification_status === "Verified" || props.data.verification_status === "Source Verified" ? "text-success" : "text-danger"
                            }>{props.data.verification_status}</td>
                        </tr>
                        <tr>
                            <th scope="row">Loan Issue Date</th>
                            <td>{props.data.issue_d}</td>
                        </tr>
                        <tr>
                            <th scope="row">Loan Status</th>
                            <td>{props.data.laon_status}</td>
                        </tr>
                        <tr>
                            <th scope="row">Desc</th>
                            <td>{props.data.desc}</td>
                        </tr>
                        <tr>
                            <th scope="row">Purpose</th>
                            <td>{props.data.purpose}</td>
                        </tr>
                        <tr>
                            <th scope="row">Title</th>
                            <td>{props.data.title}</td>
                        </tr>
                        <tr>
                            <th scope="row">State</th>
                            <td>{props.data.addr_state}</td>
                        </tr>
                        <tr>
                            <th scope="row">Last payment date</th>
                            <td>{props.data.last_pymnt_d}</td>
                        </tr>
                        <tr>
                            <th scope="row">Last payment amount</th>
                            <td>$ {props.data.last_pymnt_amnt}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </Fragment>

    export default Member