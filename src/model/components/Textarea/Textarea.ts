import { InputHTMLAttributes } from 'react';

interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

export default ITextArea;
