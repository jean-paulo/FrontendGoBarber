import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

/** Importa tudo que tem dentro da lib de validação Yup na variável Yup */
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {//eslint-disable-line

    try {
      /* zera os erros pq se tiver dado erro e depois concertar o erro ainda continuaria em tela */
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'), // required significa que é obrigatório
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;
