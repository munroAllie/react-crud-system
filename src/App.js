import React, { Component } from "react";
import "./App.css";
import "../src/assets/css/bootstrap.css";
import "../src/assets/font/web-fonts-with-css/css/fontawesome-all.css";
// import "../src/assets/css/light-bootstrap-dashboard.css";
import Table from "./Components/table";
import Form from "./Components/form";
import Header from "./Components/header";

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: "John", lastName: "Doe" },
      { id: 2, firstName: "Jane", lastName: "Smith" },

    ],
    firstName: "",
    lastName: "",
    formInvalid: false,
    id: 3,
    editingContacts: [],
  };

  formChangeHandler = event => {
    let item = event.target.id;
    this.setState({
      [item]: event.target.value,
      formInvalid: false
    });
  };

  resetFormHandler = () => {
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  submitFormHandler = () => {
    if (this.state.firstName && this.state.lastName) {
      let contacts = this.state.contacts.slice();
      const newContacts = {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      };
      contacts.push(newContacts);
      let newId = this.state.id + 1;
      this.setState({
        contacts: contacts,
        id: newId
      });
      this.resetFormHandler();
    } else {
      this.invalidFormHandler();
    }
  };

  invalidFormHandler = () => {
    if (this.state.firstName.length !== 0 && this.state.lastName.length !== 0) {
      this.setState({
        formInvalid: false
      });
    } else {
      this.setState({
        formInvalid: true
      });
    }
  };

  deleteContactHandler = contactIndex => {
    let contacts = this.state.contacts.slice();
    let editingContacts = this.state.editingContacts.slice();
    contacts.splice(contactIndex, 1);
    editingContacts.splice(contactIndex, 1);
    this.setState({
      contacts: contacts,
      editingContacts: editingContacts
    });
  };

  editContactHandler = contactId => {
    const editingContacts = this.state.editingContacts;
    editingContacts.push(contactId);
    this.setState({
      editingContacts: editingContacts
    });
  };

  saveContactHandler = (contactId) => {
    const editingContacts = this.state.editingContacts.slice();
    const contactIdPosition = editingContacts.indexOf(contactId);
    editingContacts.splice(contactIdPosition, 1);
    this.setState({
      editingContacts: editingContacts
    });
  };

  dataChangeHandler = event => {
    const dataKey = event.target.getAttribute('data-key');
    const id = parseInt(dataKey);
    const type = event.target.id;
    const position = event.target.getAttribute('data-index');
     let firstNameVal = '';
     let lastNameVal = '';
     const contacts = this.state.contacts.slice();
      if (type === "firstName"){
        firstNameVal = event.target.value;
        lastNameVal = this.state.contacts[position].lastName;
      } else {
        firstNameVal = this.state.contacts[position].firstName;
        lastNameVal = event.target.value; 
      } 
    const updateContact = {id: id, firstName: firstNameVal, lastName: lastNameVal};
    contacts[position] = updateContact;
    this.setState({
      contacts: contacts
      
    })


    
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="card" style={{ padding: "10px", margin: "10px" }}>
            <Form
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              change={this.formChangeHandler}
              reset={this.resetFormHandler}
              submit={this.submitFormHandler}
              invalid={this.state.formInvalid}
            />
          </div>
          <div className="card" style={{ padding: "10px", margin: "10px" }}>
            <Table
              contacts={this.state.contacts}
              deleteContact={this.deleteContactHandler}
              editContact={this.editContactHandler}
              editingContacts={this.state.editingContacts}
              saveContact={this.saveContactHandler}
              dataChange={this.dataChangeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
