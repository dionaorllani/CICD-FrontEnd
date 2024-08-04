import styles from "./HeaderIcon.module.css";

function HeaderIcon({ children, onClick  }) {
  return (
    <span className={`${styles.iconBox}`} onClick={onClick}>
      {children}
      {/* This shold be rendered conditionaly only if there are new un openened notifications */}
      {/* <span className={styles.newNotifications}></span> */}
    </span>
  );
}

export default HeaderIcon;
