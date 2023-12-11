import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DASHBOARD, FICHE, LOGIN, MARQUES, MODELE, MODELES, NEWMODEL, PROFILE, QUESTIONNAIREAVANCEE, QUESTIONNAIREDETAILLE, QUESTIONNAIRESIMPLE, QUESTIONNAIRESIMPLE_MARQUE, QUESTIONNAIRESIMPLE_MARQUE_DETAILLE, REGISTER, TYPEQUESTIONNAIRE, } from './routeConstants.ts';
import DashboardLayout from './layout/index.tsx';
import store from './store/store.tsx';
import LandingPage from './pages/Landing/index.tsx';
import DashboardMainOutlet from './pages/dashboardMainOutlet/index.tsx';
import Login from './pages/auth/Login.tsx';
import AuthGard from './authProvider.tsx';
import ProfilePage from './pages/profile.tsx';
import Register from './pages/auth/Register.tsx';
import Marquespage from './pages/marquespage.tsx';
import Modelespage from './pages/modelespage.tsx';
import NewModelepage from './pages/newmodel.tsx';
import Modele from './pages/modele.tsx';
import FicheTechnique from './pages/fichetechnique.tsx';
import TypeQuestionnaire from './pages/typeQuestionnaire.tsx';
import QuestionnaireSimple from './pages/questionnaireSimple.tsx';
import QuestionnaireSimpleMarque from './pages/questionnairesimplemarque.tsx';
import QuestionnaireSimpleMarqueDetaille from './pages/questionnairesimplemarquedetaille.tsx';



const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: DASHBOARD,
    element: <AuthGard />,
    children: [
      {
        path: DASHBOARD,
        element: <DashboardLayout />,
        children: [
          { path: DASHBOARD + "/", element: <DashboardMainOutlet /> },
          { path: PROFILE, element: <ProfilePage /> },
          { path: MARQUES, element: <Marquespage /> },
          { path: MODELES, element: <Modelespage /> },
          { path: MODELE, element: <Modele /> },
          { path: NEWMODEL, element: <NewModelepage /> },
          { path: FICHE, element: <FicheTechnique /> },
        ]
      },
    ]
  },

  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: TYPEQUESTIONNAIRE,
    element: <TypeQuestionnaire />,
  },
  {
    path: QUESTIONNAIRESIMPLE,
    element: <QuestionnaireSimple />,
  },
  {
    path: QUESTIONNAIREAVANCEE,
    element: <TypeQuestionnaire />,
  },
  {
    path: QUESTIONNAIREDETAILLE,
    element: <TypeQuestionnaire />,
  },
  {
    path: QUESTIONNAIRESIMPLE_MARQUE,
    element: <QuestionnaireSimpleMarque />,
  },
  {
    path: QUESTIONNAIRESIMPLE_MARQUE_DETAILLE,
    element: <QuestionnaireSimpleMarqueDetaille />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

