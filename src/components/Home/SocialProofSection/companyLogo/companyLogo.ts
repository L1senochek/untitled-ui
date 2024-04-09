import ICompanyLogo from '@/model/components/Home/companyLogo/companyLogo';
import imgCompanyLayers from '@/assets/svg/companyLogo/Company=Layers.svg';
import imgCompanySisyphus from '@/assets/svg/companyLogo/Company=Sisyphus.svg';
import imgCompanyCircooles from '@/assets/svg/companyLogo/Company=Circooles.svg';
import imgCompanyCatalog from '@/assets/svg/companyLogo/Company=Catalog.svg';
import imgCompanyQuotient from '@/assets/svg/companyLogo/Company=Quotient.svg';
import imgCompanyHourglass from '@/assets/svg/companyLogo/Company=Hourglass.svg';

export const companyLogo: ICompanyLogo[] = [
  {
    img: imgCompanyLayers,
    name: 'Layers',
  },
  {
    img: imgCompanySisyphus,
    name: 'Sisyphus',
  },
  {
    img: imgCompanyCircooles,
    name: 'Circooles',
  },
  {
    img: imgCompanyCatalog,
    name: 'Catalog',
  },
  {
    img: imgCompanyQuotient,
    name: 'Quotient',
  },
  {
    img: imgCompanyHourglass,
    name: 'Hourglass',
  },
];
