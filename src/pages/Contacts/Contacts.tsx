import IContactsFormData from '@/model/pages/Contacts/ContactsFormData';
import styles from './contacts.module.scss';
import contactsImg from '@/assets/img/contacts/contacts.png';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaContacts } from '@/utils/validation/schema';
import Input from '@/components/Input/Input';
import contactFormField from './contactFormField/contactFormField';
import Btn from '@/components/Btn/Btn';
import Textarea from '@/components/Textarea/Textarea';
import Checkbox from '@/components/Checkbox/Checkbox';
import { LEGAL_PATH } from '@/utils/const/const';

const Contacts: React.FC = (): JSX.Element => {
  const methods = useForm<IContactsFormData>({
    resolver: yupResolver(schemaContacts),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IContactsFormData> = (data): void => {
    if (methods.formState.isValid) {
      try {
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__leftside}>
        <img
          className={styles.contacts__leftside_img}
          src={contactsImg}
          alt={'contacts'}
          loading="lazy"
        />
      </div>
      <div className={styles.contacts__rightside}>
        <div className={styles.contacts__rightside_head}>
          <h1 className={styles.contacts__rightside_heading}>
            Let`s level up your brand, together
          </h1>
          <p className={styles.contacts__rightside_text}>
            You can reach us anytime via{' '}
            <a href="mailto:hi@untitledui.com">hi@untitledui.com</a>
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            className={styles.contacts__rightside_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.contacts__rightside_form_fields}>
              {contactFormField.map((field, index) => (
                <Input
                  key={`ContactFormFields${field.name}${index}`}
                  inputName={field.name}
                  titleLabel={field.titleLabel}
                  type={field.type}
                  placeholder={field.placeholder}
                  fieldsForm="register"
                />
              ))}
              <Textarea
                inputName="textField"
                titleLabel="Message"
                placeholder=""
              />
              <Checkbox
                registerInputName="acceptPolicy"
                labelTitle={`You agree to our friendly <a href='${LEGAL_PATH}'><u>privacy policy</u></a>.`}
                labelProps={{ htmlFor: 'firstCheckboxSquare' }}
                inputProps={{ id: 'firstCheckboxSquare' }}
                square
              />
            </div>
            <Btn type="submit" variantBtn="primary">
              Send message
            </Btn>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Contacts;
