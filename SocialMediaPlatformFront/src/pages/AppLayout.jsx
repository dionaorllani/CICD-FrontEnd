import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useMediaQuery } from "react-responsive";
import styles from "./AppLayout.module.css";
import { Container } from "react-bootstrap";

function AppLayout() {
  const isAboveSm = useMediaQuery({ minWidth: 576 });

  return (
    <div>
      <Header />
      <Container fluid="lg" className={styles.gridContainer}>
        {isAboveSm && <Sidebar />}
        <main className={styles.main}>
          <Outlet />
        </main>
        
      </Container>
    </div>
  );
}

export default AppLayout;
