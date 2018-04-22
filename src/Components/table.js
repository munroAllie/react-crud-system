import React from "react";
import Person from "./person";


const Table = props => {
  const persons = props.contacts.map((contact, index) => {
    return (
      <Person
        index={index}
        key={contact.id}
        id={contact.id}
        editingContacts={props.editingContacts}
        firstName={contact.firstName}
        lastName={contact.lastName}
        dataChange={props.dataChange}
        deleteContact={() => props.deleteContact(index)}
        saveContact={() => props.saveContact(contact.id)}
        editContact={() => props.editContact(contact.id)}
      />
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{persons}</tbody>
      </table>
    </div>
  );
};

export default Table;
