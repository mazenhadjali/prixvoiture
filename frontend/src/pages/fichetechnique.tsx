
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import { CREATE_OPTION, GET_FICHE_BY_ID_VERSION, GET_OPTIONS_BY_FICHE_ID } from "../Apis";
import { useParams } from "react-router-dom";
import Button from "../components/button";

function FicheTechnique() {

    const [fiche, setFiche] = useState(null);
    const [options, setOptions] = useState([])
    const { idVersion } = useParams()

    useEffect(() => {
        axiosInstance.get(GET_FICHE_BY_ID_VERSION.replace(":idVersion", idVersion)).then(async (response: AxiosResponse) => {
            setFiche(response.data)
            await axiosInstance.get(GET_OPTIONS_BY_FICHE_ID.replace(":idFiche", response.data._id)).then((response: AxiosResponse) => {
                setOptions(response.data)
            })
        })

    }, [])

    const handleSubmit = async (optionparent: string, fichetechnique: string, nom: string, valeur: string) => {
        try {
            const response = await axiosInstance.post(CREATE_OPTION, {
                optionparent,
                fichetechnique,
                nom,
                valeur
            });

            if (!response.data.optionparent) {
                setOptions(prev => ([...prev, { ...response.data, suboptions: [] }]));
            } else {
                setOptions(prev => prev.map(parent => {
                    if (parent._id === response?.data?.optionparent) {
                        return ({
                            ...parent,
                            suboptions: [...parent.suboptions, response.data]
                        });
                    }
                    return parent;
                }));
            }
        } catch (error) {
            // Handle the error appropriately, maybe set an error state or log it
            console.error('Error adding option:', error);
        }

    };

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center text-purple-500 m-2 mb-5">Fiche Technique</h1>
                <div className="flex justify-around">
                    <h1 className="text-xl font-bold text-center text-purple-500 m-2"><span className="text-black">Nom Version</span>: {fiche?.version?.nom}</h1>
                    <h1 className="text-xl font-bold text-center text-purple-500 m-2"><span className="text-black">Annee</span>: {fiche?.version?.annee}</h1>
                    <h1 className="text-xl font-bold text-center text-purple-500 m-2"><span className="text-black">Prix</span>: {fiche?.version?.prix}</h1>
                </div>
                <div className="container bg-gray-100 border-2 rounded-lg p-2">

                    <form className="flex justify-around p-2 m-2" onSubmit={(event) => { event.preventDefault(); handleSubmit(null, fiche?._id, event.currentTarget.nom.value, 0) }}>
                        <h1 className="text-xl text-main font-bold">Ajouter Option:</h1>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <label className="block text-main font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="nom">
                                    Label:
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input id="nom" type="text" placeholder="Nom d'option..." name="nom" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                            </div>
                        </div>
                        <Button type="submit">Ajouter</Button>
                    </form>
                </div>
                {
                    options?.map(parent => (
                        <div className="m-4 container bg-gray-100 border-2 rounded-lg p-2" key={parent._id}>
                            <h1 className="text-sm text-gray-500 font-bold">id: {parent._id}</h1>
                            <div className=" grid gap-4 gap-y-2 text-sm grid-cols-3">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-start">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="valeur">
                                                Label:
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <label className="text-center block text-lg text-main font-bold mb-1 md:mb-0 pr-4" htmlFor="valeur">
                                                {parent?.nom}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-100 border-2 rounded-lg p-1 col-span-2">
                                    <form className=" m-2 flex justify-around" onSubmit={(event) => { event.preventDefault(); handleSubmit(parent?._id, fiche?._id, event.currentTarget.nom.value, event.currentTarget.valeur.value) }}>
                                        <h1 className="text-md text-blue-700 font-bold md:flex md:items-center">Ajouter Sous-Option:</h1>
                                        <div className="md:flex md:items-center">
                                            <div className="md:w-1/3">
                                                <label className="block text-main font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="nom">
                                                    Label :
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <input id="nom" type="text" placeholder="Nom d'option..." name="nom" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center">
                                            <div className="md:w-1/3">
                                                <label className="block text-main font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="valeur">
                                                    Valeur
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <input required type="text" id="valeur" placeholder="Valeur" name="valeur" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-main leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                                            </div>
                                        </div>
                                        <Button type="submit">Ajouter</Button>
                                    </form>


                                    {parent?.suboptions?.map(suboption => (<div className="bg-gray-100 border-2 rounded-lg p-1 col-span-2">
                                        <h1 className="text-md text-gray-500 font-bold">Sous-Option: {suboption._id}</h1>
                                        <form className="flex justify-around" onSubmit={(event) => { event.preventDefault(); handleSubmit(parent?._id, fiche?._id, event.currentTarget.nom.value, event.currentTarget.valeur.value) }}>
                                            <div className="md:flex md:items-center">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="nom">
                                                        Label:
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <label className="block text-main font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="valeur">
                                                        {suboption?.nom}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="md:flex md:items-center">
                                                <div className="md:w-1/3">
                                                    <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="nom">
                                                        Valeur:
                                                    </label>
                                                </div>
                                                <div className="md:w-2/3">
                                                    <label className="block text-main font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="valeur">
                                                        {suboption?.valeur}
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment >
    )
}

export default FicheTechnique;