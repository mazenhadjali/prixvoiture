
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import { CREATE_VERSION, GET_MODELE_BY_ID } from "../Apis";
import {  useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";
import { FICHE } from "../routeConstants";

function Modele() {
    const navigate = useNavigate();
    const [create, setCreate] = useState(false)

    const [modele, setModele] = useState([]);
    const { idModele } = useParams()

    useEffect(() => {
        axiosInstance.get(GET_MODELE_BY_ID.replace(":idModele", idModele)).then((response: AxiosResponse) => {
            setModele(response.data)
        })
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nom = formData.get('nom') as string;
        const prix = formData.get('prix') as string;
        const annee = formData.get('annee') as string;
        const difference = formData.get('difference') as string;

        if (nom && prix && annee && difference) {
            axiosInstance.post(CREATE_VERSION, {
                modele: modele?._id,
                nom,
                difference: parseInt(difference, 10),
                prix: parseInt(prix, 10),
                annee: parseInt(annee, 10)
            }).then(response => {
                    setModele(prev => ({
                        ...prev,
                        versions: [...prev.versions, response.data]
                    }));
                    setCreate(false);
                });
        }
    };

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between items-center my-3">
                    <h1 className="text-2xl font-bold mb-4 text-main flex items-center">Marque: {modele?.marque?.nom} </h1>
                    <h1 className="text-2xl font-bold mb-4 text-main flex items-center">Modele: {modele?.nom}</h1>
                    {
                        (!create && <Button type="submit" onClick={() => { setCreate(true) }}>Ajouter Version</Button>)
                        || <form className=" rounded-lg p-2 border border-2 w-full max-w-sm" onSubmit={handleSubmit}>
                            <div className="flex items-center flex-wrap border-b border-main py-2">
                                <input type="text" id="nom" name="nom" placeholder="Nom version !" className="mb-4 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                <input type="number" id="prix" name="prix" placeholder="Prix de Nouveau !" className="mb-4 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                <input type="number" id="annee" name="annee" placeholder="Annee !" className="mb-4 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                <input type="number" id="difference" name="difference" placeholder="Difference !" className="mb-4 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                <Button type="submit">Ajouter</Button>
                                <Button type="reset" onClick={() => { setCreate(false) }}>Annuler</Button>
                            </div>
                        </form>
                    }
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black uppercase bg-gray-100 ">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">NOM Version</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Date Creation</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Date Dernier MAJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modele?.versions?.map((version) =>
                            <tr className="" key={version._id} style={{ cursor: "pointer" }} onClick={()=>{navigate(FICHE.replace(":idVersion",version._id))}}>
                                <td className="px-6 py-4">{version._id}</td>
                                <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{version.nom}</td>
                                <td className="px-6 py-4 hidden md:table-cell"> {version.createdAt} </td>
                                <td className="px-6 py-4 hidden md:table-cell"> {version.updatedAt} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    )
}

export default Modele;