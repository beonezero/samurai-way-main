import React from 'react';
import preloader from "../../../assets/images/Spinner.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;