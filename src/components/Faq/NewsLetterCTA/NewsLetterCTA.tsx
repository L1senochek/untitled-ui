import styles from './newsletter-cta.module.scss';
import ContentSubheading from '@/components/ContentSubheading/ContentSubheading';
import Btn from '@/components/Btn/Btn';
import Input from '@/components/Input/Input';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { schemaEmail } from '@/utils/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import IFaqFormData from '@/model/pages/Faq/faqFormData';
import HoverArrow from '@/components/HoverArrow/HoverArrow';
import imgNewsLetterCTA from '@/assets/img/faq/newsLetterCTA.png';

const NewsLetterCTA: React.FC = (): JSX.Element => {
  const methods = useForm<IFaqFormData>({
    resolver: yupResolver(schemaEmail),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFaqFormData> = (data): void => {
    if (methods.formState.isValid) {
      try {
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.newsletter}>
      <ContentSubheading
        subheading=""
        heading="Sign up for our newsletter"
        text={
          'Be the first to know about releases and industry news and insights.'
        }
      />
      <FormProvider {...methods}>
        <form
          className={styles.newsletter__emailcapture}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.newsletter__emailcapture_inputfield}>
            <Input type="text" placeholder="example text" inputName="email" />
            <h4 className={styles.newsletter__emailcapture_hint}>
              We care about your data in our privacy policy
            </h4>
          </div>
          <Btn variantBtn="secondary">Subscribe</Btn>
        </form>
      </FormProvider>
      <div className={styles.newsletter__emailcapture_cta}>
        <HoverArrow text="Olivia Rhye" />
        <img
          className={styles.newsletter__emailcapture_img}
          src={imgNewsLetterCTA}
          alt="NewsLetter CTA"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NewsLetterCTA;