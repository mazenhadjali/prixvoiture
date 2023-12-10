
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import { GET_FICHE_BY_ID_VERSION, GET_OPTIONS_BY_FICHE_ID } from "../Apis";
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
                setFiche(response.data._id)
            })
        })

    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">

            </div>
        </React.Fragment >
    )
}

export default FicheTechnique;