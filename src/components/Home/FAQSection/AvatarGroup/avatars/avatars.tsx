import IAvatars from '@/model/components/Home/FAQSections/avatars';
import imgOrlandoDiggs from '@/assets/img/avatars/OrlandoDiggs.png';
import imgCompanyLayers from '@/assets/svg/companyLogo/Company=Layers.svg';
import imgKellyMyer from '@/assets/img/avatars/KellyMyer.png';
import imgCompanyCircooles from '@/assets/svg/companyLogo/Company=Circooles.svg';
import imgJoshKnight from '@/assets/img/avatars/JoshKnight.png';
import imgCompanyCatalog from '@/assets/svg/companyLogo/Company=Catalog.svg';
import imgEvelynHarrison from '@/assets/img/avatars/EvelynHarrison.png';
import imgCompanyQuotient from '@/assets/svg/companyLogo/Company=Quotient.svg';
import imgDrewCano from '@/assets/img/avatars/DrewCano.png';
import imgCompanySisyphus from '@/assets/svg/companyLogo/Company=Sisyphus.svg';

export const avatars: IAvatars[] = [
  {
    src: imgOrlandoDiggs,
    name: 'Orlando Diggs',
    company: (
      <>
        <img src={imgCompanyLayers} alt="Layers" loading="lazy" />
        <span>Layers</span>
      </>
    ),
  },
  {
    src: imgKellyMyer,
    name: 'Kelly Myer',
    company: (
      <>
        <img src={imgCompanyCircooles} alt="Circooles" loading="lazy" />
        <span>Circooles</span>
      </>
    ),
  },
  {
    src: imgJoshKnight,
    name: 'Josh Knight',
    company: (
      <>
        <img src={imgCompanyCatalog} alt="Catalog" loading="lazy" />
        <span>Catalog</span>
      </>
    ),
  },
  {
    src: imgEvelynHarrison,
    name: 'Evelyn Harrison',
    company: (
      <>
        <img src={imgCompanyQuotient} alt="Quotient" loading="lazy" />
        <span>Quotient</span>
      </>
    ),
  },
  {
    src: imgDrewCano,
    name: 'Drew Cano',
    company: (
      <>
        <img src={imgCompanySisyphus} alt="Sisyphus" loading="lazy" />
        <span>Sisyphus</span>
      </>
    ),
  },
];
