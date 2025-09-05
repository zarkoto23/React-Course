import { useEffect, useState } from "react";
import UserListItem from "./UserListItem";
import userServices from "../services/userServices";
import Pagination from "./Pagination";
import Create from "./Create";
import Details from "./Details";
import Delete from "./Delete";
import Search from "./Search";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGetOne, setSelectedGetOne] = useState(null);
  const [editingUser, setEditinUser] = useState(null);
  const [showDelModal, setShowDelModal] = useState(false);
  const [userToDel, setUserToDel] = useState(null);

  const [allUsers, setAllUsers] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [criteriaValue, setCriteriaValue] = useState("Not");

  useEffect(() => {
    userServices.getAll().then((result) => {
      setUsers(result);
      setAllUsers(result);
    });
  }, []);

  const onSearchClickHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    const criteria = formData.get("criteria");

    setSearchValue(search);
    setCriteriaValue(criteria);

    if (!search) {
      return;
    }

    console.log(search, criteria);

    const filteredUsers = allUsers.filter((usr) => {
      if (criteria === "Not") {
        return (
          usr.firstName.toLowerCase().includes(search.toLowerCase()) ||
          usr.lastName.toLowerCase().includes(search.toLowerCase()) ||
          usr.email.toLowerCase().includes(search.toLowerCase()) ||
          usr.phoneNumber.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        const value = usr[criteria]?.toLowerCase();
        return value?.includes(search.toLowerCase());
      }
    });

    setUsers(filteredUsers);
  };

  const handleClearSearch = (e) => {
    e.preventDefault();

    setUsers(allUsers);

    console.log("onclear");
  };

  function onCloseCreateHandler() {
    setShowCreateBtn(false);
  }

  function onSaveClickHandler(e) {
    e.preventDefault();
    const newUserData = Object.fromEntries(new FormData(e.target));

    if (editingUser?._id) {
      const updatedData = { ...newUserData, createdAt: editingUser.createdAt };

      userServices
        .update(editingUser._id, updatedData)
        .then((result) =>
          setUsers(users.map((u) => (u._id === result._id ? result : u)))
        );
      setShowCreateBtn(false);
      setEditinUser(null);
    } else {
      userServices
        .create(newUserData)
        .then((result) => setUsers([...users, result]));
      setShowCreateBtn(false);
      setEditinUser(null);
    }
  }

  const infoBtnClickHandler = (_id) => {
    userServices.getOne(_id).then((result) => {
      setSelectedGetOne(result);
      setShowInfo(true);
    });
  };

  const onEditClickHandler = (user) => {
    setEditinUser(user);
    setShowCreateBtn(true);
  };

  const openDelModal = (user) => {
    setUserToDel(user);
    setShowDelModal(true);
  };

  const confirmDel = () => {
    setShowDelModal(false);

    userServices.delUser(userToDel._id);

    setUsers(users.filter((u) => u._id !== userToDel._id));
  };

  const closeDel = () => {
    setUserToDel(null);
    setShowDelModal(false);
  };

  return (
    <main className="main">
      <section className="card users-container">
        <Search onSearch={onSearchClickHandler} onClear={handleClearSearch} />

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  First name
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                    ></path>
                  </svg>
                </th>
                <th>
                  Last name
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                    ></path>
                  </svg>
                </th>
                <th>
                  Email
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                    ></path>
                  </svg>
                </th>
                <th>
                  Phone
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-down"
                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                    ></path>
                  </svg>
                </th>
                <th>
                  Created
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-down"
                    className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                    ></path>
                  </svg>
                </th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  onInfoBtn={infoBtnClickHandler}
                  onEditBtn={() => onEditClickHandler(user)}
                  onDelBtn={() => openDelModal(user)}
                />
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="btn-add btn"
          onClick={() => {
            setShowCreateBtn(true);
            setEditinUser(null);
          }}
        >
          Add new user
        </button>
        <Pagination />
      </section>
      {showCreateBtn && (
        <Create
          onClose={onCloseCreateHandler}
          onSave={onSaveClickHandler}
          initialData={editingUser}
        />
      )}

      {showDelModal && (
        <Delete
          userToDel={userToDel}
          onConfirm={confirmDel}
          onCloseDel={closeDel}
        />
      )}

      {showInfo && (
        <Details user={selectedGetOne} onCloseInfo={() => setShowInfo(false)} />
      )}
    </main>
  );
}
