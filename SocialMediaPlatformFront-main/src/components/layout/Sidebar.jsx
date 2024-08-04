import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarDesktopNav from "./SidebarDesktopNav";

function Sidebar() {
  return (
    <aside className={`${styles.aside} `}>
      <SidebarHeader />
      <SidebarDesktopNav />
    </aside>
  );
}

export default Sidebar;
