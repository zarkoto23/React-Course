import { useEffect, useState } from "react";
import UserListItem from "./UserListItem";
import userServices from "../services/userServices";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userServices.getAll().then((result) => {
      setUsers(result);
      console.log(users);
    });
  }, []);

  return <tbody>
 {users.map(user=>
  <UserListItem key={user._id} user={user}/>
 )}
  </tbody>;
}
