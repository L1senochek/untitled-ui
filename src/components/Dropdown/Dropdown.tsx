import IDropdown from '@/model/components/Dropdown/Dropdown';
import styles from './dropdown.module.scss';
import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const Dropdown: React.FC<IDropdown> = ({
  options,
  onSelect,
  label,
  icon,
  ...rest
}): JSX.Element => {
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  useEffect(() => {
    const filtered = options.filter((option: string) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  useEffect(() => {
    if (optionsRef.current && focusedIndex !== null) {
      const focusedItem = optionsRef.current.children[focusedIndex];
      if (focusedItem) {
        focusedItem.scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }
  }, [focusedIndex]);

  useEffect(() => {
    console.log(currentOption);
    if (onSelect) {
      onSelect(currentOption);
    }
  }, [currentOption, onSelect]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === filteredOptions.length - 1
          ? 0
          : prevIndex + 1
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0
          ? filteredOptions.length - 1
          : prevIndex - 1
      );
    } else if (e.key === 'Enter' && focusedIndex !== null) {
      e.preventDefault();
      const selectedOption = filteredOptions[focusedIndex];
      setCurrentOption(selectedOption);
    }
  };

  const handleOptionClick = (option: string, index: number) => {
    console.log(option, index);
    setCurrentOption(option);
    setFocusedIndex(index);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFocusedIndex(null);
    setCurrentOption(e.target.value);
  };

  const handleInputFocus = () => setIsInputFocused(true);

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setFocusedIndex(null);
  };

  return (
    <div className={styles.dropdown}>
      {label && (
        <label className={styles.dropdown__label}>
          <h3>{label}</h3>
        </label>
      )}
      <div
        className={`${styles.dropdown__wrapper}${
          label ? ` ${styles['label']}` : ''
        }${isInputFocused ? ` ${styles['focused']}` : ''}`}
      >
        {icon && <div className={styles.dropdown__icon}>{icon}</div>}
        <input
          {...rest}
          value={currentOption || searchTerm || ''}
          autoComplete="on"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={styles.dropdown__input}
        />
      </div>
      {filteredOptions.length > 0 && (
        <div className={styles.dropdown__options} ref={optionsRef}>
          {filteredOptions.map((option, index) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option, index)}
              className={`${styles.dropdown__item} ${
                index === focusedIndex || option === currentOption
                  ? styles['focused']
                  : ''
              }`}
            >
              <h2 className={styles.dropdown__content}>{option}</h2>
              {option === currentOption && (
                <div className={styles.dropdown__checkmark}></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
