interface IProgressBar {
  value: number;
  maxValue: number;
  label?: '%' | string;
  circles?: boolean;
}

export default IProgressBar;
