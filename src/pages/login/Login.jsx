import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import './Login.scss'

export default function Login() {


    const validationSchema = Yup.object({
        email: Yup.string().email(" ").required('required'),
        password: Yup.string().matches(/^[A-Z]/g, " ").matches(/[#$^@_-]{1}/g, " ").matches(/[0-9]/g, " ").min(8).max(14).required('required')
    })
    const initialValues = {
        email: '',
        password: '',
    }
    const on = (values) => {
        console.log(values.email)
        console.log(values.password)
    }
    return (
        <div className='container'>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={on}
                validateOnChange={false}
                validateOnBlur={true}>
                {formik => {
                    return (
                        <Form>
                            <div className='text'>
                                <h1>Login</h1>
                                <div className='rows'></div>
                            </div>
                            <div className='email1'><br />
                                {formik.errors.password && formik.touched.password || formik.errors.email && formik.touched.email ? <p className='incorect'>Incorrect email or password.</p> : null}
                                <div className='email_input'>
                                    <label htmlFor="email" id='email'>Email</label>
                                    <Field type="email" name='email' className="Email" placeholder="Michel@gmail.com" /><br />
                                    <ErrorMessage name='email' component='p' />
                                </div>
                                <div className="password_input">
                                    <label htmlFor="password" id='password'>Password</label>
                                    <Field type='password' name='password' />
                                    <ErrorMessage name='password' component='p' />
                                </div>
                                <a href='#' className='Pas' rel="noreferrer noopener">Forget your password?</a>
                                <input type="submit" disabled={!formik.isValid} className="sign" value="SIGN IN"></input>

                                <Link className='CrAc' to='/Login/signup'>CREATE ACCOUNT</Link>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

