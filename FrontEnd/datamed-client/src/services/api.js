const api = {
    //userControler
    getUser: userName => `/users/${userName}`,
    getPatientById: id => `/patients/${id}}`,
    registerDoc: () => `/doctors`,
    registerPatient: () => `/patients`,
    findPatients: (firstName, lastName, egn) => `/patients/find?firstName=${firstName}&lastName=${lastName}&egn=${egn}`,
    logginUser: () => `/users/login`,
    updateUser: () => `/user/update`,
    
    //Other

}

export default api;
