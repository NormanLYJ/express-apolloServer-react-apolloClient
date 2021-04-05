import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "./UserQueries";

function GetUsers() {
  // make use of useQuery hook from @apollo/client
  // it returns a json with error, loading, and data
  const [users, setUsers] = useState([]);
  const { error, loading, data } = useQuery(LOAD_USERS) 
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map(val => {
        return <h1> {val.firstName}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
