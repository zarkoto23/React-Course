import {Component} from "react";
import AdminComments from "./admin-comments/AdminComments";

export default class Admin extends Component {
  render() {
    return (
      <>
        <h1 style={{ backgroundColor: "white" }}>Admin SectiDDDDon</h1>
        <AdminComments />
      </>
    );
  }
}

// export default function Admin() {
//   return (
//     <>
//       <h1 style={{ backgroundColor: "white" }}>Admin Section</h1>

//       <p>This is admin pandel</p>
//     </>
//   );
// }
