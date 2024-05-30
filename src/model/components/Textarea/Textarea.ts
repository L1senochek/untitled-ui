import { InputHTMLAttributes } from 'react';

interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  inputName?: string;
  titleLabel?: string;
  customErrorMessage?: string;
}

export default ITextArea;
