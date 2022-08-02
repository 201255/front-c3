import React, { useState } from "react";
import "../asset/style/Log_in.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Sign_up() {
    const navigator = useNavigate()
    const data = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = 'http://18.207.215.184/api/user/create'



    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values => {
        console.log(values);
        const data = values
        Swal.fire(
            'Welcome!',
            'Account Created successfully',
            'success'
        )
        axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data)
            })
        navigator('/')

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

                                        <form className="was" noValidate onSubmit={handleSubmit(onSubmit)}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3 color: #ff6219;"></i>
                                                <span className="h1 fw-bold mb-0">Sin up</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3 letter-spacing: 1px;">welcome</h5>
                                            <div className="mb-4">
                                                <label className="form-label text-white">Write your name</label>
                                                <input type="text" className="form-control" placeholder="name" required {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "the required field",
                                                    }
                                                })}></input>
                                                {errors.name && <span className="text-danger">{errors.name.message}</span>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label text-white">Write your email</label>
                                                <input type="text" className="form-control" placeholder="Email" required {...register("email", {
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
                                            <div className="mb-4">
                                                <label className="form-label text-white">Write your password</label>
                                                <input type="password" className="form-control" placeholder="Password" required {...register("password", {
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
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-outline-success">check in</button>
                                            </div>

                                            <div className="my-3">
                                                <span className="fw-bold text-white">Do you have an account? <a className="link-secondary" href="/">Login</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Sign_up;