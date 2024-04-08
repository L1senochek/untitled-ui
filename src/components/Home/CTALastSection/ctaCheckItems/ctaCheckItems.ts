import ICheckItems from '@/model/components/Home/FeaturesFirstSection/checkItems';
import ICtaImage from '@/model/components/Home/ctaLastSection/ctaImg';
import imgMockupScreenMockupCTAImage from '@/assets/img/ScreenMockupCTAImage.png';
import imgScreenMockupCTAImage from '@/assets/img/ScreenMockupCTAImage.png';

export const ctaCheckItems: ICheckItems[] = [
  { text: '30-day free trial' },
  { text: 'Peronalized onboarding' },
  { text: 'Access to all features' },
];

export const ctaImage: ICtaImage = {
  imgMockup: imgMockupScreenMockupCTAImage,
  img: imgScreenMockupCTAImage,
  alt: 'ScreenWelcomeBack',
};
