import { useState } from "react";

const Editing = ({ campo, value, callBack }) => {
    const [editing, setEditing] = useState(false);

    const updateKey =(e) => {
        if(e.key === 'Enter'){
          setEditing(false)
        }
      }

    if(editing) {
        return (
            <div>
                <label htmlFor="editi">{value}:</label>
                <input type="text" name="editi" value={campo} onKeyDown={updateKey} onChange={callBack}/>
            </div>
        );
      }else{
        return (
          <div>
            <p onClick={() => setEditing(true)}><span>{value}:</span> {campo}</p>
          </div>
        );
    }
}

export default Editing
