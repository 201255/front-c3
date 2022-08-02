import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style/Log_in.css";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigator = useNavigate()
    const data = useState({
        email: '',
        password: '',
        validat: ''
    })

    const url = 'http://18.207.215.184/api/user/login'

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values => {
        const data = values;

        console.log(data);
        axios.post(url, {
            email: data.email,
            password: data.password,
            validat: data.validat
        })
            .then(res => {
                if (res.request.status === 200) {
                    if (data.email === "hshhdh5112565uhuyuquhq@ids.upchiapas.edu.mx") {
                        Swal.fire(
                            'Welcome!',
                            '' + res.data.data.name + '',
                            'success'
                        )
                        navigator('/Shop')
                    } else {
                        Swal.fire(
                            'Welcome!',
                            '' + res.data.data.name + '',
                            'success'
                        )
                        navigator('/Index')
                    }

                }
            })
            .catch(err => {
                Swal.fire(
                    'Error!',
                    '' + err.response.data.error + '',
                    'error'
                )


            })


    }


    return (
        <section className="vh-100 bg-danger">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card border-radius">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid border-radius: 1rem 0 0 1rem;" />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">


                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3 color: #ff6219;"></i>
                                            <span className="h1 fw-bold mb-0">BEGINNING</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3 letter-spacing: 1px;">Sign into your account</h5>

                                        <form className="was" noValidate onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form2Example17">Write your email</label>
                                                <input type="text" className="form-control form-control-lg" id="email" placeholder="Email" required {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "the required field",
                                                    },
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email"
                                                    }
                                                })}></input>
                                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Write your password</label>
                                                <input type="password" className="form-control form-control-lg" placeholder="Password" required {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "the required field",
                                                    },
                                                    minLength: {
                                                        value: 8,
                                                        message: "The password must have a minimum of 8 characters"
                                                    }
                                                })}></input>
                                                {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
                                            </div>
                                            <div>
                                                <span className="fw-bold text-dark"> Do not you remember your password?  <a className="small text-muted" href="/Recover_pass">Recover your password</a></span>
                                            </div>
                                            <div>
                                                <p className="mb-5 pb-lg-2">
                                                <span className="fw-bold text-dark">You do not have an account? <a className="link-secondary" href="/Sign_up">Create account</a></span>
                                                </p>
                                              
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
}
export default Login;