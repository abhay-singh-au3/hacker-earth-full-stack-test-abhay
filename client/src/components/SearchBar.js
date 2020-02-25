import React, { Fragment, useState } from 'react';
import { withRouter, useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SearchBar = () => {
    const history = useHistory();
    const [query, setQuery] = useState("")
    const handleChange = e => {
        setQuery(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (query.length === 7) {
            history.push(`/member/${query}`)
            window.location.reload()
        } else {
            toast.warn("Enter valid Employee ID")
        }
    }
    return (
        <Fragment>
            <div className="container-fluid bg-dark text-white mb-5 search">
                <Link to="/" style={{ color: "white"}}>Home </Link>
                <form onSubmit={handleSubmit}>
                    <ToastContainer />
                    <input type="number"
                        name="query"
                        className="form-control"
                        placeholder="Member ID.."
                        onChange={handleChange}
                        value={query}
                    />
                </form>
            </div>
        </Fragment>
    )
}

export default withRouter(SearchBar)