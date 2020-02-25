import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Table from '../components/Table';


const TableContainer = () => {
    const [members, setMembers] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        async function fetchData() {
            const result = await axios('/member')
            setMembers([...result.data])
        }
        fetchData()
    }, [])

    const next = () => {
        setMembers([])
        setPage(page + 1)
        axios.get(`/member/page/${page}`)
            .then(res => setMembers([...res.data]))
            .catch(err => console.log(err))
    }

    const prev = () => {
        if (page === 1) { return }
        setMembers([])
        setPage(page - 1)
        axios.get(`/member/page/${page}`)
            .then(res => setMembers([...res.data]))
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <span className="badge badge-secondary">Page: {page}</span>
            {
                members.length > 0
                    ? <Table data={members} />
                    : <div className="d-flex justify-content-center">
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
            <div className="btn-group">
                <button onClick={prev} className="btn btn-secondary">Previous</button>
                <button onClick={next} className="btn btn-secondary">Next</button>
            </div>
        </Fragment>
    )

}

export default TableContainer