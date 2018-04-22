import React from 'react';

const Form = ( props ) => {
  const resetButton = () => {
    if (props.firstName || props.lastName) {
      return (
        <div className="btn btn-secondary" onClick={props.reset}>Reset</div>
      )
    }
  }
  const invalidForm = () => {
    if (props.invalid === true) {
      return (
        <span style={{color: '#dc3545'}} >Provide a First Name and Last Name</span>
      )
    }
  }
  return (
    <div>
    <h3>Add Contact</h3>
    <hr />
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name<span className="required" ><sup>*</sup></span></label>
              <input type="text" className="form-control" id="firstName" placeholder="enter first name" value={props.firstName} onChange={props.change} />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name<span className="required" ><sup>*</sup></span></label>
              <input type="text" className="form-control" id="lastName" placeholder="enter last name" value={props.lastName} onChange={props.change} />
            </div>

            <div className="col" style={{ marginTop: '32px' }}>
              <div className="btn btn-success" onClick={props.submit}> Submit </div>
              {resetButton()}
              </div>
          </div>
          {invalidForm()}
        </div>
      </form>
    </div>
  )
}

export default Form;
