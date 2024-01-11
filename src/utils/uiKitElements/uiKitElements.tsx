import Btn from "@/components/Btn/Btn";
import styles from './uikitelements.module.scss';

export const uiKitElements = [
<div className={`${styles.font} ${styles.spacemono}`}>
<h2 className={styles.font__title}>
  <span>font:</span>
  <span>Space Mono</span>
</h2>
<div className={styles.font__items}>
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>H4</h4>
  <h5>H5</h5>
  <div>Base(body)</div>
  <div>Caption</div>
</div>
</div>,

<div className={`${styles.font} ${styles.worksans}`}>
<h2 className={styles.font__title}><span>font:</span><span>Work Sans</span></h2>
<div className={styles.font__items}>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>
  <h5>H5</h5>
  <div>Base(body)</div>
  <div>Caption</div>
</div>
</div>,
<>
  <h2>button:</h2>
  <Btn>btn</Btn>
</>, 
<div>3</div>,
<div>4</div>
];
