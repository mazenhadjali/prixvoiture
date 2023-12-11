import { Link } from "react-router-dom";
import { LOGIN, TYPEQUESTIONNAIRE } from "../../routeConstants";
import logo from './../../assets/logo.png';

function LandingPage() {
    return (
        <body className="h-screen body-bg ">
            <section className="body-bg h-full dark:bg-gray-900 flex justify-center">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
                    <div className="place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">Estimez, suivez, partagez : Votre guide auto ultime.</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
                        <Link to={TYPEQUESTIONNAIRE} className="mx-3 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-white-100 hover:scale-105 focus:ring-4 focus:ring-white-100">
                            Estimez Votre Voiture
                        </Link>
                        <Link to={LOGIN} className=" mx-3 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-main rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-main">
                            Se Connecter
                        </Link>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5">
                        <img src={logo} alt="mockup" />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default LandingPage;