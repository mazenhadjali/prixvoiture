import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../routeConstants";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-main h-screen flex items-center justify-center p-5">
            <div className="container  text-center bg-white h-full rounded-lg">
                <div className="flex items-center justify-center h-full">
                    <div>
                        <h1 className="text-6xl font-bold text-main mb-10" data-wow-delay="1s">Prix Voiture</h1>
                        <h1 className="text-4xl font-bold text-second mb-10" data-wow-delay="1s">Estimer le prix de vos voiture </h1>
                        <div className="text-center mb-10 wow fadeInUp animated" data-wow-delay="1.2s" >
                            <button className="mt-6 py-2 px-4 border-4 border-second font-bold text-main rounded-full text-lg font-semibold animate-bounce hover:text-main hover:bg-white "
                                onClick={() => {
                                    navigate(LOGIN)
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;