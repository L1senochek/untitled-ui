import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

interface ICheckboxLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
interface ICheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface ICheckbox extends LabelHTMLAttributes<HTMLLabelElement> {
  labelProps?: ICheckboxLabelProps;
  inputProps?: ICheckboxInputProps;
  labelTitle?: string;
}

export default ICheckbox;
