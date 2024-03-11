import styles from './social-proof-section.module.scss';
import { companyLogo } from './companyLogo/companyLogo';
import ICompanyLogo from '@/model/components/Home/companyLogo/companyLogo';

const SocialProofSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles.socialproof}>
      <p className={styles.socialproof__text}>
        Join 4,000+ companies already growing
      </p>
      <div className={styles.socialproof__logos}>
        {companyLogo.map(
          (logo: ICompanyLogo, index: number): JSX.Element => (
            <div
              className={styles.socialproof__companylogo}
              key={logo.img + index}
            >
              <img
                className={styles.socialproof__companylogo_img}
                alt={logo.name}
                src={logo.img}
              />
              <h2 className={styles.socialproof__companylogo_name}>
                {logo.name}
              </h2>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SocialProofSection;
