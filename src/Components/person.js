import React from "react";

const Person = (props) => {
   let editing = false;
  for (let i = 0; i <= props.editingContacts.length; i++) {
    if(props.id === props.editingContacts[i]){
       editing = true;
    }
  }

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
      <input 
        type="text" 
        data-index={props.index}
        data-key={props.id}
        className={`form-control ${editing === false ? 'disabled' : null}`}
        id="firstName" 
        placeholder="enter first name" 
        value={props.firstName} 
        onChange={props.dataChange}  
      />
      </td>
      <td>
      <input 
        type="text" 
        data-index={props.index}
        data-key={props.id}
        className={`form-control ${editing === false ? 'disabled' : null}`} 
        id="lastName"
        placeholder="enter last name" 
        value={props.lastName} 
        onChange={props.dataChange} 
      />
      </td>
      <td>
      { editing === false ?
        <div className="btn btn-primary">
          <i className="fas fa-pencil-alt" onClick={props.editContact} />
        </div> :
      <div className="btn btn-success">
        <i className="far fa-save" onClick={props.saveContact}/>
      </div> }
        <div className="btn btn-danger" onClick={props.deleteContact}>
          <i className="fas fa-trash-alt" />
        </div>

      </td>
    </tr>
  );
};

export default Person;
