import React from 'react';
import styles from './icon-documentation.module.scss';

const IconDocumentation: React.FC = (): JSX.Element => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      className={styles.documentation}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1H3.5C2.96957 1 2.46086 1.21071 2.08579 1.58579C1.71071 1.96086 1.5 2.46957 1.5 3V19C1.5 19.5304 1.71071 20.0391 2.08579 20.4142C2.46086 20.7893 2.96957 21 3.5 21H15.5C16.0304 21 16.5391 20.7893 16.9142 20.4142C17.2893 20.0391 17.5 19.5304 17.5 19V8M10.5 1L17.5 8M10.5 1V8H17.5"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconDocumentation;
