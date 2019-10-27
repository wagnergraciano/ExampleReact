import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _releaseName.value, 
            date: _releaseDate.value}
        );
        clearForm();
    }

    const clearForm = () =>{
        _releaseName.value = '';
        _releaseDate.value = '';
    }
    return(
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Release name" />

            <label className="sr-only" for="inlineFormInputGroupUsername2">Release name</label>
            <div className="input-group mb-2 mr-sm-2">
                <input type="text" ref={input => _releaseDate = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Release date" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Save</button>
        </form>
    )
};

export default ReleaseForm;