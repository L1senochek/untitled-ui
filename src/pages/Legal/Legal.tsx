import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import styles from './legal.module.scss';
import legalTabs from '@/model/pages/Legal/legalTabs';
import { useState } from 'react';
import ILegalTabText from '@/model/pages/Legal/legalText';
import tabs from './tabsText/tabs';
import ITab from '@/model/pages/Legal/tab';

const Legal: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<legalTabs>(
    legalTabs.HUMAN_FRIENDLY
  );

  const renderTabText = (tabText: ILegalTabText[]): JSX.Element[] => {
    return tabText.map(
      (text: ILegalTabText, index: number): JSX.Element => (
        <div key={`legalTab${tabText}${index}`}>
          {text.question && <h2>{text.question}</h2>}
          {text.answers.map(
            (answer: string, i: number): JSX.Element => (
              <p key={`legalTab${tabText}Answer${i}`}>{answer}</p>
            )
          )}
        </div>
      )
    );
  };

  return (
    <div className={styles.legal}>
      <ContentSubheading
        subheading="Current as of 20 Jan 2022"
        heading="Privacy Policy"
        text="Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website."
      />
      <div className={styles.legal__tabs}>
        {tabs.map(
          (tab: ITab, index: number): JSX.Element => (
            <div
              key={index}
              className={`${styles.legal__tabbtn}${
                activeTab === tab.name ? ` ${styles.activetab}` : ''
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </div>
          )
        )}
      </div>
      {tabs.map(
        (tab: ITab): false | JSX.Element[] =>
          activeTab === tab.name && renderTabText(tab.content)
      )}
    </div>
  );
};

export default Legal;
