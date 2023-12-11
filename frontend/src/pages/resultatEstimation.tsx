import { useSearchParams } from 'react-router-dom';
import logo from './../assets/logo.png';
function ResultatEstimation() {

    const [searchParams] = useSearchParams();

    // Get the query parameters
    const marque = searchParams.get('marque');
    const modele = searchParams.get('modele');
    const version = searchParams.get('version');
    const km = searchParams.get('km');
    const date = searchParams.get('date');
    const etat = searchParams.get('etat');
    const estimation = searchParams.get('estimation');
    return (
        <body className="h-screen body-bg ">
            <section className="body-bg h-full dark:bg-gray-900 flex justify-center">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
                    <div className=" rounded-lg container p-2 m-1 border border-2 place-self-center mr-auto lg:col-span-7">
                        <h1 className="mb-4 max-w-2xl text-white text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">Estimation :</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
                        <div className="  ">
                            <div className="mb-4 md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Marque:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {marque}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Modele:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {modele}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Version:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {version}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        kilométrage:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {km}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:items-center">
                                <div className="">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Date Mise En circulation:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {date}
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:items-center">
                                <div className="">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Etat de voiture:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {etat}
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div className="mb-4 md:flex md:items-center">
                                <div className="">
                                    <label className="block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        Etat de voiture:
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <label className="md:text-right block text-white font-bold  mb-1 md:mb-0 pr-4" htmlFor="nom">
                                        {estimation} DT
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5">
                        <img src={logo} alt="mockup" />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default ResultatEstimation;