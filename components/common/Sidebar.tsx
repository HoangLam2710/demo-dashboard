import React, { useContext } from "react";
import { OpenSidebarContext } from "../../lib/context/OpenSidebarContext";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  const { isActive } = useContext(OpenSidebarContext);

  return (
    <div className={`${styles.sidebar} ${!isActive && styles.sidebarClose}`}>
      <div className={styles.sidebarBrand}>
        <h1>
          <i className="bi bi-layers-fill"></i> <span>Swagsoft</span>
        </h1>
      </div>

      <div className={styles.sidebarMenu}>
        <ul>
          <li>
            <a href="#" className={styles.active}>
              <i className="bi bi-house"></i> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-briefcase"></i> <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-bag"></i> <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-basket"></i> <span>Invetory</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-circle"></i> <span>Accounts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-list-task"></i> <span>Tasks</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
