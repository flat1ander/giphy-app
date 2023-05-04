import React from 'react';

const GiphyDisplay = ({giph}) => {
    const loaded = () => {
        return (
            <img src={giph} alt='Giph Image Placeholder' />
        );
};

const loading = () => {
    return <h1>No Giph to Display</h1>;
}
    return giph ? loaded() : loading ();
}







export default GiphyDisplay;