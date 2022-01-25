const api = {
    //userControlers
    getUser: userName => `/users/${userName}`,
    getPatientById: id => `/patients/${id}`,
    getDoctorById: id => `/doctors/${id}`,
    registerDoc: () => `/doctors`,
    registerPatient: () => `/patients`,
    updateDoc: id => `/doctors/${id}`,
    updatePatient: id => `/patients/${id}`,
    findPatients: (firstName, lastName, egn) => `/patients?firstName=${firstName}&lastName=${lastName}&egn=${egn}`,
    logginUser: () => `/login`,
    updateUser: () => `/user`,
    uploadPatientPic: (id) => `/patients/${id}`,
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
