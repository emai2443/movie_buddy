import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitRegister = (event) => {
    event.preventDefault(); //Need to be put in React or form will not be sent
    if (name !== "" || email !== "" || password !== "") {
      // Cheaking if the user didnt put anything in
      fetch("http://localhost:3000/register", {
        //Posting to Server ->Database
        method: "post", //Method of post
        headers: { "Content-Type": "application/json" }, //CHange this depending on what type of infromation you need to send
        body: JSON.stringify({ name: name, email: email, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // CREATE THE LOAD USER FUNCTION
          // loadUser(data);
          // create a function to change the page route
        });
    } else {
      event.preventDefault();
    }
    console.log(email);
    console.log(name);
    console.log(password);
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 blue-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name-address">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
