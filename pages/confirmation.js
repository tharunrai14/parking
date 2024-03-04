import React from 'react';

const Confirmation = () => {
    const joke = "Pranked";

    return (
        <div>
            <h1>Confirmation Page</h1>
            <p>Your transaction has been confirmed!</p>
            <img src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5bdd0bd497ba8ee2cfa3a9c4c05dcec6.jpg'/>
            <p>{joke}</p>
        </div>
    );
};

export default Confirmation;