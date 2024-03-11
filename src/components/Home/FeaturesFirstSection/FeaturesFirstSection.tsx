import styles from './features-first-section.module.scss';
import IconCheckMark from '@/components/Icons/IconCheckMark/IconCheckMark';
import { containers } from './checkItems/checkItems';
import ICheckItems from '@/model/components/Home/FeaturesFirstSection/checkItems';

const FeaturesFirstSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.featuressection}>
      <div className={styles.featuressection__container}>
        <h2 className={styles.featuressection__subheading}>Features</h2>
        <h1 className={styles.featuressection__heading}>
          Analytics that feels like it’s from the future
        </h1>
        <p className={styles.featuressection__text}>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      {containers.map((container, index) => (
        <div className={styles.featuressection__container} key={index}>
          <div className={styles.featuressection__content}>
            <div className={styles.featuressection__content_wrapper}>
              {container.content.icon}
              <div className={styles.featuressection__content_text}>
                <h1 className={styles.featuressection__content_heading}>
                  {container.content.heading}
                </h1>
                <p className={styles.featuressection__content_supportingtext}>
                  {container.content.subheading}
                </p>
              </div>
            </div>
            <div className={styles.featuressection__content_checkitems}>
              {container.content.checkItems.map(
                (item: ICheckItems, index: number) => (
                  <div
                    className={styles.featuressection__content_item}
                    key={item.text + index}
                  >
                    <IconCheckMark />
                    <div className={styles.featuressection__content_checktext}>
                      {item.text}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.featuressection__content}>
            <img src={container.img} alt={container.alt} />
          </div>
        </div>
      ))}
      <div className={styles.featuressection__container}></div>
      <div className={styles.featuressection__container}></div>
    </div>
  );
};
export default FeaturesFirstSection;
