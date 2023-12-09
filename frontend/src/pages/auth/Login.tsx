import { connect } from "react-redux";
import { setUser } from "../../store/actions/user";
import { Dispatch } from "redux";
import { RootState } from "../../store/reducers";
import axios, { AxiosResponse } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAccessToken } from "../../store/actions/system";
import logo from './../../assets/logo.png';
import { useToast } from "../../toast/ToastProvider";
import { DASHBOARD } from "../../routeConstants";
import User from "../../interfaces/userInterface";
import { BASEURL } from "../../Apis";

interface Props {
    email: string;
    firstname: string;
    lastname: string;
    token: string;
    setAccessToken?: (accessToken: string) => void;
}

function Login(props: Partial<Props>) {

    const navigate: NavigateFunction = useNavigate();
    const toast = useToast();

    const [loginErr, setLoginErr] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const emailInput = event.currentTarget.email.value;
        const passwordInput = event.currentTarget.password.value;

        try {
            await axios.post(BASEURL + "auth/login", {
                email: emailInput,
                password: passwordInput,
            }).then((response: AxiosResponse) => {
                const accessToken = response.data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                props.setAccessToken?.(accessToken)
            }).then(() => {
                toast?.pushSuccess("Welcome Back", 3000)
                navigate(DASHBOARD)
            })

        } catch (error) {
            console.error("Login failed:", error);
            setLoginErr(true);
        }
    };



    return (
        <div className="body-bg h-screen flex-1" style={{ fontFamily: 'Lato ,sans-serif' }}>
            <div className="max-w-lg mx-auto">
                <img src={logo} alt="" />
            </div>

            <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to PrixVoiture.tn</h3>

                    {
                        (loginErr && <div className="mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-danger-700" role="alert">
                            Please put Valid Credentials
                        </div>) || <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    }
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" onSubmit={handleLogin}>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                            <input required type="email" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                            <input required type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        {/* <div className="flex justify-end">
                            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                        </div> */}
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                    </form>
                </section>
            </div>
        </div>
    );
}


const mapStateToProps = (state: RootState) => {
    return {
        username: state.user.email,
        accessToken: state.system.accessToken,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUser: (user: User) => dispatch(setUser(user)),
        setAccessToken: (accessToken: string) => dispatch(setAccessToken(accessToken))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
