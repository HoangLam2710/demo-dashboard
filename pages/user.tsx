import React from "react";
import AddButton from "../components/userList/AddButton";
import FilterUser from "../components/userList/FilterUser";
import TableUser from "../components/userList/TableUser";
import UserListContextProvider from "../lib/context/UserListContext";
import styles from "../styles/User.module.css";

const user = () => {
  return (
    <>
      <UserListContextProvider>
        <div className={styles.headerUser}>
          <FilterUser />
          <AddButton />
        </div>
        <TableUser />
      </UserListContextProvider>
    </>
  );
};

export default user;
