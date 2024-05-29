import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

interface ICheckboxLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
interface ICheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

interface ICheckbox extends LabelHTMLAttributes<HTMLLabelElement> {
  labelProps?: ICheckboxLabelProps;
  inputProps?: ICheckboxInputProps;
  labelTitle?: string | TrustedHTML;
  registerInputName?: string;
  square?: boolean;
}

export default ICheckbox;
