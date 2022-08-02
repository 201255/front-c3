import React, {useState} from "react";
import "../asset/style/Recover_pass.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reset_pass() {

    const querystring = window.location.search
    const params = new URLSearchParams(querystring)

    const data = useState({
        password: ''
    })

    const url = 'http://18.207.215.184/api/user/update_password'
    const navigator = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        var raw = JSON.stringify({
          "email": params.get('email'),
        });
        if (values.password1 === values.password) {
            const data = values
            axios.put(url,{
                email: params.get('email'),
                password: data.password
            })
            .then(response => {
                console.log(response.data);
                Swal.fire(
                    ''+response.data.err+'!',
                    '',
                    'success'
                )
            })
            navigator('/')
        }
        else {
            Swal.fire(
                'password Error!',
                'Validate that they are the same',
                'error'
            )
        }

    }

    return(
        <div className="container w-75 mt-5 bg-danger rounder shadow">
        <div className="row align-items-stretch">
            <div className="col bg1 d-none d-lg-block col-md-5 col-lg-10 col-xl-6 rounder">
                
            </div>


            <div className="col p-5 rounder-end">
                <div className="text-end">
                </div>
                <h2 className="fw-bold text-center text-white py-5">Restore Password</h2>
                <form className="was" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label  className="form-label text-white">Write your new password</label>
                        <input type="password" className="form-control" placeholder="Password" required {...register("password1",{
                                required: {
                                    value: true,
                                    message: "The required field",
                                },
                                minLength:{
                                    value: 8,
                                    message: "The password must have a minimum of 8 characters"
                                }
                            })}></input>
                            {errors.password1 && <span className="text-danger">{errors.password1.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label  className="form-label text-white">Confirm your password</label>
                        <input type="password" className="form-control" placeholder="Password" required {...register("password",{
                                required: {
                                    value: true,
                                    message: "The required field",
                                },
                                minLength:{
                                    value: 8,
                                    message: "The password must have a minimum of 8 characters",
                                }
                            })}></input>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-dark text-white">Restore</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Reset_pass;