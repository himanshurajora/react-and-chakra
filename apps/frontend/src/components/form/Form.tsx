import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomFormTextField from './components/form-text-field';
import { CustomForm } from './components/custom-form';
import CustomFormSubmitButton from './components/form-submit-button';
export default function RegisterForm() {
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container mt={9}>
      <CustomForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
      >
        <CustomFormTextField name="email" />
        <CustomFormTextField name="password" type="password" />
        <CustomFormSubmitButton />
      </CustomForm>

      {/* <Tabs display="flex" flexDir="row">
        <div style={{ minWidth: '300px' }}>
          <TabList flexDirection="column">
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
        </div>
        <div>
          <TabPanels>
            <TabPanel style={{ maxWidth: '100%' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolores amet debitis commodi, itaque quas
              molestias, quasi voluptatem nobis necessitatibus
              quisquam minus totam dicta quibusdam ullam verita tis
              quis pariatur fugit eaque molestiae. Praesentium
              explicabo, quasi cum qui libero at dolore voluptatibus
              nam, ab accusamus corporis distinctio vitae deserunt
              aliquam sequi illum fugit vel? Vel itaque at ex,
              corporis nemo quas beatae repellendus rerum natus autem
              inventore consequuntur dolore modi, dolores porro
              recusandae, nulla aperiam expedita harum ipsum ipsa.
              Reiciendis hic est, dolorum eligendi excepturi accusamus
              sunt ut inventore doloribus accusantium, ad ratione
              aperiam ducimus consectetur, iure provident. Autem
              accusantium quibusdam ex.
            </TabPanel>
            <TabPanel>
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quasi ipsam fuga necessitatibus quia iusto, vero
              ullam quibusdam dolor architecto commodi, qui minima
              voluptate dignissimos maxime voluptatem placeat hic est
              tempora laboriosam rerum, vel eaque dicta sapiente.
              Animi voluptatem repudiandae quidem sint repellendus
              eligendi optio odit deserunt asperiores tenetur! Eveniet
              modi praesentium maiores dolorem impedit quaerat sed
              velit fugiat quam? Molestias fugiat eos a praesentium.
              Neque praesentium veritatis voluptas rerum consequuntur
              hic ut quidem tempore magni, corrupti vel voluptatibus
              earum magnam assumenda? Error voluptatibus, accusantium
              eligendi ex id iusto quas, aliquam labore ipsa ipsam
              repellat blanditiis eos. Odit amet aspernatur quasi!
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs> */}
    </Container>
  );
}
