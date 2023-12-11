import { useNavigate, useParams } from "react-router-dom";
import logo from './../assets/logo.png';
import { useEffect, useState } from "react";
import { GET_MODELE_BY_ID, GET_VERSIONS_BY_MODELE } from "../Apis";
import axiosInstance from "../axios-instance";
import { RESULTAT_ESTIMATION } from "../routeConstants";

function QuestionnaireSimpleMarqueDetaille() {

    const navigate = useNavigate();

    const [versions, setVersions] = useState([]);

    const [modele, setModele] = useState(null)

    const { idModele } = useParams();

    useEffect(() => {
        axiosInstance.get(GET_VERSIONS_BY_MODELE.replace(":idModele", idModele)).then((response) => {
            setVersions(response.data)
        })
        axiosInstance.get(GET_MODELE_BY_ID.replace(":idModele", idModele)).then((response) => {
            setModele(response.data)
        })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault()
        const queryParams = new URLSearchParams({
            marque: modele?.marque?.nom,
            modele: modele?.nom,
            version: event.currentTarget.version.value,
            km: event.currentTarget.kilometrage.value,
            date: event.currentTarget.mec.value,
            etat: event.currentTarget.etat.value,
            estimation: "984000",
        }).toString();

        navigate(RESULTAT_ESTIMATION + "?" + queryParams)
    }

    return (
        <body className="h-screen body-bg ">
            <section className="body-bg h-full dark:bg-gray-900 flex justify-center">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
                    <div className="place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">4. Entrer les détails de votre voiture :</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>

                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Version:</label>
                                <select required id="version" name="version" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" >
                                    {versions.map(version => (<option value={version.nom}>{version.nom}</option>))}
                                </select>
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="kilometrage">Kilometrage:</label>
                                <input required type="number" id="kilometrage" name="kilometrage" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                            </div>

                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="mec">Mise En circulation:</label>
                                <input required type="date" id="mec" name="mec" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="etat">Etat:</label>
                                <select required id="etat" name="etat" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" >
                                    <option value="">Choisir l'état de votre voiture..</option>
                                    <option value="Excellent Etat">Excellent</option>
                                    <option value="Tres Bonne Etat">Tres Bonne Etat</option>
                                    <option value="Bonne Etat">Bonne Etat</option>
                                    <option value="Moyenne">Moyenne</option>
                                    <option value="Mauvais Etat">Mauvais Etat</option>
                                </select>
                            </div>
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Estimer</button>
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