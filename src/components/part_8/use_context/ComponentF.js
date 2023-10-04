import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const ComponentF = () => {
    const user = useContext(UserContext);

    return (
        <div>ComponentF - {user}</div>
    )
}

export default ComponentF;