import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style/Recover_pass.css";
import Swal from 'sweetalert2'
import axios from "axios";


function Recover_pass() {
  const data = useState({
    email: '',
})

  const url = 'http://18.207.215.184/api/email/send'

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    const data = values;
    axios.post(url,{
      email: data.email
    })
    .then(response => {
      console.log(response.data);
    })
    console.log(data.email);
    let timerInterval
    Swal.fire({
      title: 'send Email...',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Send!',
          '',
          'success'
        )
      }
    })
  }

  return (
    <div className="container w-75 mt-5 bg-danger rounder shadow">
      <div className="row align-items-stretch">
        <div className="row d-flex justify-content-center align-items-center h-100">

        </div>


        <div className="col p-5 rounder-end">
          <div className="text-center text-white">
          </div>
          <h2 className="fw-bold text-center text-white py-5">Recovery Password</h2>
          <p className="text-white">We will send you an email to reset your new Password</p>
          <form className="was" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="form-label text-white">Write your email</label>
              <input type="text" className="form-control" placeholder="Email" required  {...register("email", {
                required: {
                  value: true,
                  message: "The required field",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email"
                }
              })}></input>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark text-white">Restablecer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recover_pass;