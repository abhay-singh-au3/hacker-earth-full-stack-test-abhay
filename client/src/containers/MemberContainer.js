import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Member from '../components/Member';

const MemberContainer = props => {
  const [member, setMember] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios(`/member/${props.match.params.memberID}`);
        setMember(result.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [])

  return (
    <Fragment>
      <div className="container d-flex mt-5 justify-content-center">
        {isError && <div>Seems like we dont have data of that particular ID..</div>}
        {!member
          ? <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          : <Member data={member} />}
      </div>
    </Fragment>
  )
}

export default MemberContainer