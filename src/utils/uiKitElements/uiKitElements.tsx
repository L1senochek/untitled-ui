import Btn from '@/components/Btn/Btn';
import styles from './uikitelements.module.scss';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Toggle from '@/components/Toggle/Toggle';
import Checkbox from '@/components/Checkbox/Checkbox';
import Tooltip from '@/components/Tooltip/Tooltip';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Badge from '@/components/Badge/Badge';
import IconArrow from '@/components/Icons/IconArrow/IconArrow';
import IconPlus from '@/components/Icons/IconPlus/IconPlus';
import Dropdown from '@/components/Dropdown/Dropdown';
import IconSearch from '@/components/Icons/IconSearch/IconSearch';

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
    <Input type="text" placeholder="example text" />
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
    <ProgressBar maxValue={4} value={1} />
    <ProgressBar maxValue={10} value={4} label="%" />
    <ProgressBar maxValue={10} value={7} label="example" />
    <ProgressBar maxValue={10} value={5} circles />
    <ProgressBar maxValue={10} value={1} circles />
  </div>,

  <div className={styles.badges} key={9}>
    <h2>Badges:</h2>
    <Badge title="Label" />
    <Badge
      title="Label"
      childrenLeft={
        <IconArrow direction="up" className={styles.badges__arrow_up} />
      }
    />
    <Badge
      title="Label"
      badgeClass={styles.badges__badgeright}
      badgeTitleClass={styles.badges__badgeright_title}
      childrenRight={
        <IconArrow direction="right" className={styles.badges__arrow_right} />
      }
    />
    <Badge title="Label" childrenRight={<IconArrow direction="down" />} />
    <Badge
      title="Label"
      badgeClass={styles.badges__badgeright}
      badgeTitleClass={styles.badges__badgeright_title}
      childrenRight={<IconArrow direction="left" />}
    />
    <Badge title="Label" childrenRight={<IconPlus direction="x" />} />
    <Badge title="Label" childrenRight={<IconPlus direction="plus" />} />
  </div>,

  <div className={styles.dropdown} key={10}>
    <h2>Dropdown:</h2>
    <Dropdown
      options={['test1', 'test2', 'test3', 't4', 't5', 't6', 't7', 't8', 't9']}
    />
    <Dropdown
      options={['user1', 'user2', 'user3', 'us4', 'us5', 'us6', 'us7']}
      label="search"
      icon={<IconSearch />}
    />
  </div>,
];
