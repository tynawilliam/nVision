import React from 'react';

function upload() {
    return (
        <div>
            <form method='POST' action='/api/uploads/' encType='multipart/form-data'>
                <input type='file' name='file' />
                <input type='submit' value='Upload' />
            </form>
        </div>
    )
}

export default upload
