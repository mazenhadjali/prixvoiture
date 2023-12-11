import { useParams } from "react-router-dom";
import logo from './../assets/logo.png';
import { useEffect, useState } from "react";
import { GET_VERSIONS_BY_MODELE } from "../Apis";
import axiosInstance from "../axios-instance";

function QuestionnaireSimpleMarqueDetaille() {

    const [versions, setVersions] = useState([]);

    const { idModele } = useParams();

    useEffect(() => {
        axiosInstance.get(GET_VERSIONS_BY_MODELE.replace(":idModele", idModele)).then((response) => {
            setVersions(response.data)
        })
    }, [])
    return (
        <body className="h-screen body-bg ">
            <section className="body-bg h-full dark:bg-gray-900 flex justify-center">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
                    <div className="place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">4. Entrer les detaille de votyre voiture :</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>

                        <form className="flex flex-col" >
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Version</label>
                                <select required id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" >
                                    {versions.map(version => (<option value={version._id}>{version.nom}</option>))}
                                </select>
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Kilometrage:</label>
                                <input required type="number" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                            </div>
                            {/* <div className="flex justify-end">
                            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                        </div> */}
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                        </form>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5">
                        <img src={logo} alt="mockup" />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default QuestionnaireSimpleMarqueDetaille;