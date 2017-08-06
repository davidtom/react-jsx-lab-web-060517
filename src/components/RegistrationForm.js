import React from "react"

class RegistrationForm extends React.Component {
  render() {
    return (
      <form action="#" method="post">
        <input type="text" name="registration[text]"/>
        <input type="password" name="registration[password]"/>
        <button type="submit" name="button">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm
