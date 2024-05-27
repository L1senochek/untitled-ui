import legalTabs from './legalTabs';
import ILegalTabText from './legalText';

interface ITab {
  name: legalTabs;
  content: ILegalTabText[];
}

export default ITab;
