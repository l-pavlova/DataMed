const api = {
    //userControlers
    getUser: userName => `/users/${userName}`,
    getPatientById: id => `/patients/${id}`,
    registerDoc: () => `/doctors`,
    registerPatient: () => `/patients`,
    findPatients: (firstName, lastName, egn) => `/patients/find?firstName=${firstName}&lastName=${lastName}&egn=${egn}`,
    logginUser: () => `/users/login`,
    updateUser: () => `/user/update`,
    uploadPatientPic: (id) => `/patients/addProfilePic?id=${id}`,
    //uploadPatientPic: (id) => `/patients/addProfilePic`,
    /*uploadPatientPic: (id,formData) => `/patients/addProfilePic?id=${id}&picture${formData}`,*/
    uploadDocPic: (id) => `/doctors/addProfilePic?id=${id}`,

    //medicalRecordController
    addRecord: patientId => `/patient-records/uploadFile?id=${patientId}`,
    addMultipleRecords: patientId => `/patient-records/uploadMultipleFiles?id=${patientId}`,
    getRecords: patientId => `/patient-records/records?id=${patientId}`,
    getRecord: patientId => `/patient-records/record?id=${patientId}`,
}

export default api;
