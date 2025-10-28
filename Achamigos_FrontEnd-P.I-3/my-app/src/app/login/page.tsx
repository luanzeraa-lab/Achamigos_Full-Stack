'use client';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '../../components/Button';
import * as Yup from 'yup';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const validation = Yup.object({
    emailcpf: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const router = useRouter();

  return (
    <>
    
      <Nav2 />
      <main className="min-h-screen flex flex-col bg-[#fffffe] mt-[6rem]">
        <Formik
          initialValues={{ emailcpf: '', password: '' }}
          validationSchema={validation}
          onSubmit={(valores) => {
            console.log(valores.emailcpf);
            console.log(valores.password);
            router.push('/PaginaUsuario');
          }}
        >
          <Form>
            <div className="mt-4 d-flex justify-center">
              <div className=" flex flex-col text-start col-4">
                <p className=" self-center font-bold text-[1.5rem]">Login</p>

                <label htmlFor="emailcpf" className="font-[700] mb-1">
                  Nome de usuário ou Email
                </label>
                <Field
                  type="text"
                  name="emailcpf"
                  placeholder="Digite seu nome de usuário ou Email"
                  className="form-control text-[14px]"
                  id="emailcpf"
                />
                <ErrorMessage name="emailcpf" component="div" />

                <label htmlFor="password" className="mt-4 mb-1 font-[700]">
                  Senha
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  className="form-control text-[14px]"
                  id="password"
                />
                <ErrorMessage name="password" component="div" />

                <Button  type="submit" title="Entrar" className='w-full mt-4 mb-3' />

                <Button 
                  title="Fazer cadastro"
                  onClick={() => {
                    router.push('/CadastroUsuario');
                  }} className='w-full mt-2'
                />
              </div>
            </div>
          </Form>
        </Formik>
      </main>
      <Footer/>
    </>
  );
};
export default Login;
