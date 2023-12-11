import { Link, useParams } from "react-router-dom";
import logo from './../assets/logo.png';
import { QUESTIONNAIRESIMPLE_MARQUE, QUESTIONNAIRESIMPLE_MARQUE_DETAILLE } from "../routeConstants";
import { useEffect, useState } from "react";
import { GET_MODELE_BY_ID_MARQUE } from "../Apis";
import axiosInstance from "../axios-instance";

function QuestionnaireSimpleMarque() {

    const [modeles, setModeles] = useState([]);

    const { idMarque } = useParams();

    useEffect(() => {
        axiosInstance.get(GET_MODELE_BY_ID_MARQUE.replace(":idMarque", idMarque)).then((response) => {
            setModeles(response.data)
        })
    }, [])
    return (
        <body className="h-screen body-bg ">
            <section className="body-bg h-full dark:bg-gray-900 flex justify-center">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
                    <div className="place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">3. Choisir le Modele:</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
                        {modeles.map(modele => (<Link to={QUESTIONNAIRESIMPLE_MARQUE_DETAILLE.replace(":idModele", modele._id)} className="mx-3 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-white-100 hover:scale-105 focus:ring-4 focus:ring-white-100">
                            {modele.marque.nom}: {modele.nom}
                        </Link>)
                        )}
                    </div>
                    <div className="lg:mt-0 lg:col-span-5">
                        <img src={logo} alt="mockup" />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default QuestionnaireSimpleMarque;