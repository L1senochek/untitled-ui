import IFAQItems from '@/model/components/Home/FAQItems/FAQItems';
import styles from './questions-answers.module.scss';
import { FAQItems, iconAttribute } from './FAQItems/FAQItems';
import { useState } from 'react';

const QuestionsAnswers: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleToggleAnswer = (index: number): void => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  const handleMouseEnter = (index: number): void => setHoveredIndex(index);

  const handleMouseLeave = (): void => setHoveredIndex(null);

  return (
    <div className={styles.faq}>
      {FAQItems.map((item: IFAQItems, index: number) => (
        <div
          key={`FAQItems${index}`}
          className={styles.faq__item}
          onClick={() => handleToggleAnswer(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {index !== 0 && <hr className={styles.faq__divider} />}
          <div className={styles.faq__content}>
            <div className={styles.faq__content_wrapper}>
              <h4 className={styles.faq__content_question}>{item.questions}</h4>
              <p
                className={`${styles.faq__content_answer} ${
                  activeIndex === index || hoveredIndex === index
                    ? styles.showanswer
                    : ''
                }`}
              >
                {item.answers}
              </p>
            </div>
            <div className={styles.faq__content_icon}>
              <img
                className={`${styles.faq__content_img} ${
                  activeIndex === index || hoveredIndex === index
                    ? styles.minus
                    : ''
                }`}
                alt={
                  activeIndex === index || hoveredIndex === index
                    ? iconAttribute.minus.name
                    : iconAttribute.plus.name
                }
                src={
                  activeIndex === index || hoveredIndex === index
                    ? iconAttribute.minus.src
                    : iconAttribute.plus.src
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsAnswers;
