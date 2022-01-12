const api = {
    //userControler
    getUser: userName => `/users/${userName}`,
    registerDoc: () => `/users/register-doc`,
    registerPatient: () => `/register-patient`,
    logginUser: () => `/users/login`,
    updateUser: () => `/user/update`,
    
    //Other

}

export default api;
