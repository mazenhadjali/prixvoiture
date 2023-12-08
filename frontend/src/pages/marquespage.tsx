
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import { CREATEMARQUE, GET_ALL_MARQUES } from "../Apis";
import Button from "../components/button";

function Marquespage() {

    const [marques, setMarques] = useState([]);
    const [create, setCreate] = useState(false)

    useEffect(() => {
        axiosInstance.get(GET_ALL_MARQUES).then((response: AxiosResponse) => {
            setMarques(response.data)
        })
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nom = event.currentTarget.nom.value || null

        if (nom) {
            axiosInstance.post(CREATEMARQUE, { nom }).then(response => {
                setMarques([...marques, response.data])
                setCreate(false)
            })
        }
    };



    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between items-center my-3">
                    <h1 className="text-2xl font-bold mb-4 text-main flex items-center">List des Marques</h1>
                    {
                        (!create && <Button type="submit" onClick={() => { setCreate(true) }}>Creer Marque</Button>)
                        || <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                            <div className="flex items-center border-b border-main py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" id="nom" name="nom" placeholder="Nom marque !" />
                                <Button type="submit">Creer</Button>
                                <Button type="reset" onClick={() => { setCreate(false) }}>Annuler</Button>
                            </div>
                        </form>
                    }
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black uppercase bg-gray-100 ">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">NOM</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Data Creation</th>
                            <th scope="col" className="px-6 py-3 hidden md:table-cell">Data Dernier MAJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marques?.map((marque) =>
                            <tr className="" key={marque._id} style={{ cursor: "pointer" }}>
                                <td className="px-6 py-4">{marque._id}</td>
                                <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{marque.nom}</td>
                                <td className="px-6 py-4 hidden md:table-cell"> {marque.createdAt} </td>
                                <td className="px-6 py-4 hidden md:table-cell"> {marque.updatedAt} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    )
}

export default Marquespage;