import { Outlet, useLocation } from "react-router";
import styles from "./uikitlayout.module.scss";

const UIKitLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <header>UI KIT Layout</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default UIKitLayout;
