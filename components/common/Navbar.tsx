import React, { useContext } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { OpenSidebarContext } from "../../lib/context/OpenSidebarContext";
import styles from "../../styles/Navbar.module.css";
import CustomDropdown from "./Dropdown";

const Navbar = () => {
  const { isActive, handleActive } = useContext(OpenSidebarContext);

  return (
    <header className={`${styles.navbar} ${!isActive && styles.sidebarClose}`}>
      <div className={styles.navbarHeading}>
        <span className={styles.openSidebar} onClick={handleActive}>
          <i className="bi bi-list"></i>
        </span>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.searchWrapper}>
        <InputGroup>
          <InputGroup.Prepend>
            <i className="bi bi-search"></i>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>

      <CustomDropdown />
    </header>
  );
};

export default Navbar;
