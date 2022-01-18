const api = {
    //userControler
    getUser: userName => `/users/${userName}`,
    registerDoc: () => `/doctors`,
    registerPatient: () => `/patients`,
    findPatients: () => `/patients/find`,
    logginUser: () => `/users/login`,
    updateUser: () => `/user/update`,
    
    //Other

}

export default api;
