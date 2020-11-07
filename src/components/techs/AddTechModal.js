import React, { useState } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";


const AddTechModal = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    const onSubmit = () => {
        if(fName === "" || lName === "") {
            M.toast({html: "Please enter the first and last name"})
        } else {
            console.log(fName, lName);
            setFName("");
            setLName("");
        }
      
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="fName"
                            value={fName}
                            onChange={e => setFName(e.target.value)}
                                />
                        <label htmlFor="fName" className="active">
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lName"
                            value={lName}
                            onChange={e => setLName(e.target.value)}
                                />
                        <label htmlFor="lName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect blue btn"
                >
                    Enter
                </a>
            </div>
        </div>
    )
}

export default AddTechModal
