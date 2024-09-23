import "./normaluser.css"
import { useState } from 'react';

 function NormalUser(){

        const [name, setName] = useState("");

    return(
        <div className="row">
                <div className="column1">

                </div>
                
                <div className="column2">
                        <div className="heading">
                                <h1>STRATOSALLY</h1>
                        </div>
                        <div>    
                        <form >
                                <label  className="username">Name <br/>
                                <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
                        </form>
                        </div>
                        <span>Choose your avatar</span><br/>
                        <div className="avatar">         
                                <div className="shadow">
                                </div>
                                <div className="shadow">
                                </div> 
                                <div className="shadow">
                        </div>   
                 </div>  
                </div>

        </div>
    )
}

export default NormalUser;