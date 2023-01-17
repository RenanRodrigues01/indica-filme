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
          <>
            <span>{value}: <p onClick={() => setEditing(true)}>{campo}</p></span>
          </>
        );
    }
}

export default Editing
