import Btn from '@/components/Btn/Btn';
import styles from './uikitelements.module.scss';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Toggle from '@/components/Toggle/Toggle';
import Checkbox from '@/components/Checkbox/Checkbox';
import Tooltip from '@/components/Tooltip/Tooltip';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

export const uiKitElements = [
  <div className={`${styles.font} ${styles.spacemono}`} key={0}>
    <h2 className={styles.font__title}>
      <span>Font: </span>
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

  <div className={`${styles.font} ${styles.worksans}`} key={1}>
    <h2 className={styles.font__title}>
      <span>Font: </span>
      <span>Work Sans</span>
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
  <div className={styles.btns} key={2}>
    <h2>Button:</h2>
    <Btn variantBtn="primary">Button</Btn>
    <Btn variantBtn="primary" disabled>
      Button
    </Btn>
    <Btn variantBtn="primary" outlined>
      Button
    </Btn>
    <Btn variantBtn="primary" outlined disabled>
      Button
    </Btn>
    <Btn variantBtn="secondary">Button</Btn>
    <Btn variantBtn="tertiary">Button</Btn>
  </div>,
  <div className={styles.input} key={3}>
    <h2>Input:</h2>
    <Input titleLabel="Email" type="email" placeholder="example@example.com" />
    <Input
      titleLabel="Password"
      type="password"
      placeholder="password"
      errorMessage="error"
    />
    <Input titleLabel="search" type="search" placeholder="search" />
  </div>,
  <div className={styles.textarea} key={4}>
    <h2>Textarea:</h2>
    <Textarea placeholder="Enter a description..." />
    <Textarea
      placeholder="Enter a description..."
      errorMessage="this an a error"
    />
  </div>,
  <div className={styles.toggle} key={5}>
    <h2>Toggle:</h2>
    <Toggle />
    <Toggle disabled />
  </div>,
  <div className={styles.checkbox} key={6}>
    <h2>Checkboxes:</h2>
    <Checkbox
      labelTitle="example default"
      labelProps={{ htmlFor: 'firstCheckbox' }}
      inputProps={{ id: 'firstCheckbox' }}
    />
    <Checkbox labelTitle="exmple checked" inputProps={{ checked: true }} />
    <Checkbox labelTitle="exmple disabled" inputProps={{ disabled: true }} />
    <Checkbox
      labelTitle="exmple disabled checked"
      inputProps={{ disabled: true, checked: true }}
    />
  </div>,
  <div className={styles.tooltip} key={7}>
    <h2>Tooltip:</h2>
    <h3>light:</h3>
    <Tooltip content="tooltip" />
    <h3>dark:</h3>
    <Tooltip content="tooltip" dark />
  </div>,
  <div className={styles.progressbar} key={8}>
    <h2>Progress bar:</h2>
    <ProgressBar maxValue={4} value={2} />
  </div>,
];
