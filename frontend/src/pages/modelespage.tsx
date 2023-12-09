
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import { GET_ALL_MODELES } from "../Apis";
import { Link, useNavigate } from "react-router-dom";
import { MODELE, NEWMODEL } from "../routeConstants";

function Modelespage() {

    const [modeles, setModeles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get(GET_ALL_MODELES).then((response: AxiosResponse) => {
            setModeles(response.data)
        })
    }, [])

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between items-center my-3">
                    <h1 className="text-2xl font-bold mb-4 text-main flex items-center">List de tous les Modeles :</h1>
                    <Link to={NEWMODEL} className="p-2 rounded-full bg-main font-bold text-white">Creer nouveau modele</Link>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black uppercase bg-gray-100 ">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">NOM</th>
                            <th scope="col" className="px-6 py-3">MARQUE</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Date Creation</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Date Dernier MAJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modeles?.map((modele) =>
                            <tr className="" key={modele._id} style={{ cursor: "pointer" }} onClick={() => { navigate(MODELE.replace(":idModele",modele._id )) }}>
                                <td className="px-6 py-4">{modele._id}</td>
                                <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{modele.nom}</td>
                                <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{modele.marque.nom}</td>
                                <td className="px-6 py-4 hidden md:table-cell"> {modele.createdAt} </td>
                                <td className="px-6 py-4 hidden md:table-cell"> {modele.updatedAt} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    )
}

export default Modelespage;