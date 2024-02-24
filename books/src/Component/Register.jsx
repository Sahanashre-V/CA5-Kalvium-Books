import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useEffect } from "react";

function Register() {
    const [state, setState] = useState(false);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const FormSubmit = (data) => {
        setState(true);
    };

    // pop up for registration successful
    useEffect(() => {
        if (state === true) {
          alert("Successfully registered");
        }
      }, [state]);

    return (

        <div className="container">
            <div className="inputbox">
            <h2 className="form">Register</h2>
            <div className="message">
  {state === true ? <p className="success">Registration Successful</p> : null}
</div>

                <form onSubmit={handleSubmit(FormSubmit)}>
                    {/* input field for name  */}
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("Name", {
                                required: true,
                                minLength: {
                                    value: 3,
                                    message: "Name should be at least 3 characters"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Name character cannot exceed 30 characters"
                                }
                            })}
                        />
                        </div>
                                                {/* error message if input is not correct according to the need */}
                        <div className="error-message">
                            {errors.Name ? errors.Name.message : null}
                        </div>
                    
{/* input field for email  */}
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Enter email",
                                validate: (value) => {
                                    if (!value.includes("@")) {
                                        return "Email must include @";
                                    }
                                    return true;
                                }
                            })}
                        />
                                                {/* error message if input is not correct according to the need */}
                         </div>
                        <div className="error-message">
                            {errors.email ? errors.email.message : null}
                        </div>
                   
{/* input field for password */}
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 10,
                                    message: "Password should contain at least 10 characters"
                                },
                                validate: (value) => {
                                    if (!/[!@#$%^&*(),.\-_?":{}|<>]/.test(value)) {
                                        return "Password should contain at least one special character";
                                    }
                                    return true;
                                }
                            })}
                        />
                                                {/* error message if input is not correct according to the need */}
                         </div>
                        <div className="error-message">
                            {errors.password ? errors.password.message : null}
                        </div>
                    
{/* input field for repeating password  */}
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Repeat your password"
                            {...register("password_repeat", {
                                required: "Repeat password is required",
                                validate: (value) => {
                                    const originalPassword = getValues("password");
                                    return value === originalPassword || "Passwords do not match";
                                }
                            })}
                        />
                        {/* error message if input is not correct according to the need */}
                         </div>
                        <div className="error-message">
                            {errors.password_repeat ? errors.password_repeat.message : null}
                        </div>
                    
{/* input field for sumbit button  */}
                    <div className="input-field">
                        <input type="submit" className="submit-button" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
