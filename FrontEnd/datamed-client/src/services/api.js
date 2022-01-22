const api = {
    //userControlers
    getUser: userName => `/users/${userName}`,
    getPatientById: id => `/patients/${id}`,
    registerDoc: () => `/doctors`,
    registerPatient: () => `/patients`,
    findPatients: (firstName, lastName, egn) => `/patients?firstName=${firstName}&lastName=${lastName}&egn=${egn}`,
    logginUser: () => `/login`,
    updateUser: () => `/user`,
    uploadPatientPic: (id) => `/patients/${id}`,
    //uploadPatientPic: (id) => `/patients/addProfilePic`,
    /*uploadPatientPic: (id,formData) => `/patients/addProfilePic?id=${id}&picture${formData}`,*/
    uploadDocPic: (id) => `/doctors/${id}`,

    //medicalRecordController
    addRecord: patientId => `/patient-records?id=${patientId}`,
    getRecords: patientId => `/patient-records?id=${patientId}`,
    getRecord: (patientId, filename) => `/patient-records?id=${patientId}&file=${filename}`,
	addTemplate: () => `/templates`,
}

export default api;
