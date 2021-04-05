import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "./UserMutations";
import { useMutation } from "@apollo/client";

function PostUser() {
  const [firstName, setFirstName] = useState("Random First name");
  const [lastName, setLastName] = useState("Random Last name");
  const [email, setEmail] = useState("random email");
  const [password, setPassword] = useState("random password");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);  
  // make use of useMutation hook from @apollo/client
  // return the callback function, and the object containing error and data
  // the createUser callback fdunction accept one param, which is a json that has a key called variales

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    })

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default PostUser;
