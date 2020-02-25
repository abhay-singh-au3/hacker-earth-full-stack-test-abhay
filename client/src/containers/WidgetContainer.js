import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';

const WidgetContainer = () => {
    const [data, setData] = useState({ amount: "", status: "" })
    const [members, setMembers] = useState(null)
    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/member/widget', {amount: data.amount, status: data.status})
            .then(res => {
                if(res.status === 200) {
                    setMembers(res.data)
                }
            })
    }
    return (
        <Fragment>
            <h2 className="h4 text-primary">Search Members</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Upto Loan Amount $</label>
                    <input
                        name="amount"
                        className="form-control"
                        type="number"
                        onChange={handleChange}
                        value={data.amount}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">
                        <select
                            name="status"
                            className="form-control"
                            onChange={handleChange}
                            required
                        >
                            <option>Select</option>
                            <option value="Verified">Verified</option>
                            <option value="Not Verified">Not Verified</option>
                        </select>
                    </label>
                </div>
                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
            <div className="container mt-5">
                {
                    members ? <Widget data={members} /> : null
                }
            </div>
        </Fragment>
    )
}

export default WidgetContainer;