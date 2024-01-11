import { Link } from "react-router-dom";
import styles from "./welcome.module.scss";
import { UI_KIT_PATH } from "@/utils/const/const";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1>welcome</h1>
      <Link to={UI_KIT_PATH}>UI KIT PATH</Link>
    </div>
  );
};

export default Welcome;
