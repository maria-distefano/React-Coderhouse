import React from 'react';
import { HashLoader } from "react-spinners";

const override = {
    position: 'absolute',
    top: '40%',
    left: '40%',
};

function Spinner() {

    return (
        <HashLoader
        className="spinner" color={'#626b69'} cssOverride={override}  size={80} />
    )
}

export default Spinner