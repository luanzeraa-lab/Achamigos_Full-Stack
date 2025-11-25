'use client';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '../../components/Button';

const Login = () => {
  const router = useRouter();

  const validation = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          senha: values.senha,
        }),
      });

      const data = await res.json();

      if (data.status === 'success') {
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push('/PaginaUsuario');
      } else {
        
        setFieldError('senha', data.message);
      }
    } catch (err) {
      console.error(err);
      setFieldError('senha', 'Erro ao conectar com o servidor.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Nav2 />
      <main className="min-h-screen flex flex-col bg-[#fffffe] mt-[6rem]">
        <Formik
          initialValues={{ email: '', senha: '' }}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-4 d-flex justify-center">
                <div className="flex flex-col text-start col-4">
                  <p className="self-center font-bold text-[1.5rem]">Login</p>

                  <label htmlFor="email" className="font-[700] mb-1">
                    E-mail
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Digite seu e-mail"
                    className="form-control text-[14px]"
                    id="email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                  <label htmlFor="senha" className="mt-4 mb-1 font-[700]">
                    Senha
                  </label>
                  <Field
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    className="form-control text-[14px]"
                    id="senha"
                  />
                  <ErrorMessage name="senha" component="div" className="text-red-500 text-sm" />

                  <Button type="submit" title={isSubmitting ? 'Entrando...' : 'Entrar'} className="w-full mt-4 mb-3" />

                  <Button
                    title="Fazer cadastro"
                    onClick={() => router.push('/CadastroUsuario')}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
      <Footer />
    </>
  );
};

export default Login;
