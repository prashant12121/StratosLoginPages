import "./superuser.css";
import { useState } from 'react';

function SuperUser(){

    const [name, setName] = useState("");
    const [organisation_name, setOrgName] = useState("");
    const[user_role, setRoleName] = useState("");

    return(
        <div className="rows">
            <div className="columns1"></div>
            <div className="columns2">
                <h1 className="headings">STRATOSALLY</h1>
                <div className="inputfield">
                <form >
                                <label  className="username">Name <br/>
                                <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}/></label><br/>
                                <label  className="organisation_name">Name of the Organization <br/>
                                <input className="input" type="text" value={organisation_name} onChange={(e) => setOrgName(e.target.value)}/></label><br/>
                                <label  className="user_role">What is your role at your Organization? <br/>
                                <input className="input" type="text" value={user_role} onChange={(e) => setRoleName(e.target.value)}/></label><br/>
                        </form>
                </div>
                <span className="choose">Choose your avatar</span>
                <div className="avatars">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    )
}

export default SuperUser;