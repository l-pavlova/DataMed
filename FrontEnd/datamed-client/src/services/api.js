const api = {
    //userControlers
    getUser: userName => `/users/${userName}`,
    getPatientById: id => `/patients/${id}`,
    registerDoc: () => `/doctors`,
    updateDoc: id => `/doctors/${id}`,
    updatePatient: id => `/patients/${id}`,
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
    downloadRecord: (filename,id) => `/patient-records/download?filename=${filename}&id=${id}`,

    //templateController
    downloadTemplate: (filename) => `/templates/download?filename=${filename}`,
    addTemplate: () => `/templates`,
    getTemplates: () => `/templates`,

    //vladi magic
    logout: () => `/logout`,
}

export default api;
