import api from "./api";
import requester from "./requester";


const recordsService = {
    getRecord: (patientId) => requester(api.getRecord(patientId)).get(),
    getRecords: (patientId) => requester(api.getRecords(patientId)).get(),
    addRecord: async (formData, patientId) => await requester(api.addRecord(patientId)).createWithFile(formData),
    addProfilePicPatient: async (formData, patientId) => await requester(api.uploadPatientPic(patientId)).createWithFile(formData),
    addProfilePicDoc: async (formData, patientId) => await requester(api.uploadDocPic(patientId)).createWithFile(formData),
    addMultipleRecords: async (formData, patientId) => await requester(api.addMultipleRecords(patientId)).createWithFile(formData),
    addTemplate: async (formData) => await requester(api.addTemplate()).createWithFile(formData),
    downloadTemplate: (name) => requester(api.downloadTemplate(name)).get(),
    downloadRecord: (name, id) => requester(api.downloadRecord(name, id)).getBlob(),
}

export default recordsService;