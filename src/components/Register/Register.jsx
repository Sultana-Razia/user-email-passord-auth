import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.terms.checked;
        console.log(email);
        console.log(password);
        console.log(checkbox);

        //reset error 
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character');
            return;
        }
        else if (!checkbox) {
            setRegisterError('Please accept our terms and conditions');
            return;
        }


        //create user and success
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative border">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="password" className="input input-bordered" required />

                            <span className="absolute top-12 right-4 text-2xl"
                                onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />

                                }
                            </span>
                        </div>

                        <div className="flex items-center mt-4">
                            <input type="checkbox" name="terms" defaultChecked className="checkbox" />
                            <label htmlFor="terms" className="label">
                                <span className="label-text">Accept our Terms and Conditions</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                    </form>
                    <p>Already have an account? Please <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;