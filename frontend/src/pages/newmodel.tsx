
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { CREATE_MODELE, GET_ALL_MARQUES } from "../Apis";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { MODELES } from "../routeConstants";

function NewModelepage() {
    const navigate = useNavigate();
    const [marques, setMarques] = useState([])

    useEffect(() => {
        axiosInstance.get(GET_ALL_MARQUES).then((response => {
            setMarques(response.data)
        }))
    }, [])


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nom = event.currentTarget.nom.value || null
        const marque = event.currentTarget.marque.value || null

        if (nom) {
            axiosInstance.post(CREATE_MODELE, { nom, marque }).then(response => {
                navigate(MODELES)
            })
        }
    };

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <div>
                    <h1 className="text-center font-bold text-main text-3xl my-10">Creer Nouveau Modèle :</h1>
                </div>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                        <label htmlFor="marque" className="block text-main text-sm font-bold mb-2 ml-3">Sélectionner Marque</label>
                        <select id="marque" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                            {marques.map((marque) => {
                                return <option key={marque._id} value={marque._id}>{marque.nom}</option>
                            })}
                        </select>
                    </div>
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                        <label className="block text-main text-sm font-bold mb-2 ml-3" htmlFor="nom">Nom</label>
                        <input required type="text" id="nom" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <Button additionalClass={"m-2 float-right"} type="submit">Valider</Button>
                </form>
            </div>
        </React.Fragment >
    )
}

export default NewModelepage;