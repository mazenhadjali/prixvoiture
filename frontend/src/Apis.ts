export const BASEURL = 'http://localhost:8000/';

export const CREATE_USER = "api/v1/users";
export const GET_ALL_USERS = "api/v1/secure/users";
export const GET_USER_BY_ID = "api/v1/users/{id}";
export const ME = "auth/me";
export const DELETE_USER_BY_ID = "api/v1/users/{id}";
export const COUNT_USERS = "api/v1/users/countusers";

export const GET_ALL_FEATURES = "api/v1/features";

export const CREATE_ROLE = "api/v1/roles";
export const GET_ALL_ROLES = "api/v1/roles";
export const ASSIGN_FEATURE = "api/v1/roles/assignfeature";
export const REVOKE_FEATURE = "api/v1/roles/revokefeature";
export const GET_ROLE_BY_NAME = "api/v1/roles/{name}";


export const CHANGE_ANY_USER_PASSWORD = "api/v1/users/changeuserpassword";
export const CHANGE_SELF_PASSWORD = "auth/changemypassword";
export const CHANGE_USER_ROLES = "api/v1/users/changeroles";

export const UPDATE_SELF_USER_DETAILS = "api/v1/users/updateselfdetails"
export const UPDATE_ANY_USER_DETAILS = "api/v1/users/updateuserdetails/{username}"


export const GET_ALL_MARQUES = "marques";

export const GET_ALL_MODELES = "modeles";
export const GET_MODELE_BY_ID = "modeles/modele/:idModele";
export const CREATEMARQUE = "marques/marque";
export const CREATE_MODELE = "modeles/modele";

export const GET_FICHE_BY_ID_VERSION = "fichetechniques/:idVersion";
export const GET_OPTIONS_BY_FICHE_ID = "options/fiche/:idFiche";

export const CREATE_OPTION = "options";


export const GET_ALL_VERSIONS = "versions";
export const GET_VERSION_BY_ID = "versions/version/:idVersion";
export const CREATE_VERSION = "versions";