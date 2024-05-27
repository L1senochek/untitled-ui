import legalTabs from '@/model/pages/Legal/legalTabs';
import humanFriendlyText from './humanFriendly';
import legalnonsense from './legalnonsense';
import ITab from '@/model/pages/Legal/tab';

const tabs: ITab[] = [
  { name: legalTabs.HUMAN_FRIENDLY, content: humanFriendlyText },
  { name: legalTabs.LEGAL_NONSENSE, content: legalnonsense },
];

export default tabs;
