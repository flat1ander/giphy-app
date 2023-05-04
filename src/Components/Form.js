import React from 'react';

const Form = (props) => {
    const [formData, setFormData] = React.useState({
        searchTerm: '',
    });
    //handleChange
    const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    }
    //handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        props.giphySearch(formData.searchTerm);
    }
    // Returned JSX
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='searchTerm' 
                onChange={handleChange}
                value={formData.searchTerm}
                />
                <input type='submit' value = 'submit' />
            </form>
        </div>
    )
}

export default Form;