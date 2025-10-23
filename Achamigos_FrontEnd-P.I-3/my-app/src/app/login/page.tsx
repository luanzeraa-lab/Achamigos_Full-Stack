"use client";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";




const Login = () => {

  const validation = Yup.object({
          emailcpf: Yup.string().required("Campo obrigatório"),
          password: Yup.string().required("Campo obrigatório"),
      })
  
      const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#ffeccf]">

        <Nav2 />

        <main className="flex-1 flex flex-col">

          <Formik
                initialValues={{emailcpf:"", password:""}}
                validationSchema={validation}
                onSubmit={(valores)=>{
                    console.log(valores.emailcpf);
                    console.log(valores.password);
                    router.push("/PaginaUsuario")
                }}>
                <Form>
                    <div className='mt-4 d-flex justify-center'>
                        <div className="text-center col-4">
                            <p className='font-bold text-2xl'>Login</p>
                            
                            <label htmlFor="emailcpf">Email ou CPF</label>
                            <Field
                            type="text"
                            name="emailcpf"
                            className="form-control"
                            id="emailcpf"
                             />
                             <ErrorMessage name='emailcpf' component="div"/>
                            
                             <label htmlFor="password" className="mt-2">Senha</label>
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                        />
                        <ErrorMessage name="password" component="div" />
                           
                           <button className="border-2 rounded-full bg-[#ff8110] w-20 mt-2" type="submit">Entrar</button>
                            
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p id="ou">OU</p>
                        <p className="mt-2 font-bold text-2xl">Cadastre-Se</p>
                        <input className="border-2 rounded-full bg-[#ff8110] w-20 m-2"
                        type="button" value="Cadastrar" onClick={()=>{router.push("/CadastroUsuario")}} />
                    </div>

                </Form>    
            </Formik>

        </main>

        <Footer />
      </div>
    </>
  );
};
export default Login;