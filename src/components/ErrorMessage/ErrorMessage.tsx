import { Link, useRouteError } from "react-router-dom";
import styles from "./error.module.scss";
import { INITIAL_PATH } from "@/utils/const/const";

const ErrorMessage: React.FC = (): JSX.Element => {
  const error = useRouteError() as Error;

  return (
    <div className={styles.errormessage}>
      <h2 className={styles.errormessage__title}>Error message:</h2>
      <h3 className={styles.errormessage__message}>{error.message}</h3>
      <Link className={`${styles.error__btn} btn`} to={INITIAL_PATH}>
        Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
