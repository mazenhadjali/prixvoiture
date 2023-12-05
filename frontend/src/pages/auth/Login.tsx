import { connect } from "react-redux";
import { setUser } from "../../store/actions/user";
import { Dispatch } from "redux";
import { RootState } from "../../store/reducers";
import axios, { AxiosResponse } from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAccessToken } from "../../store/actions/system";
import Button from "../../components/button";
import { useToast } from "../../toast/ToastProvider";
import { DASHBOARD } from "../../routeConstants";
import User from "../../interfaces/userInterface";
import { BASEURL } from "../../Apis";

interface Props {
    username: string;
    roles: string[];
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
        <div className="bg-third h-screen flex items-center justify-center">
            <div className="p-5 bg-white border-2 border-second rounded-lg container max-w-lg flex-1 flex flex-col items-center justify-center text-white">
                <div className="w-full text-center">
                    <h1 className="text-6xl font-bold text-main mb-10" data-wow-delay="1s">Prix Voiture</h1>
                    <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">Sign in to your account</h2>
                </div>

                <div className="p-5 w-full">
                    {loginErr && (<div className="bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded" role="alert">
                        <strong className="font-bold">Holy smokes!</strong>
                        <span className="block sm:inline"> Please Check and enter valid Credentials !</span>
                    </div>)}
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm text-main font-bold leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm text-main font-bold leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <Button type="submit" additionalClass={"w-full"}>Sign in</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state: RootState) => {
    return {
        username: state.user.username,
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
