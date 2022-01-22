import api from "./api";
import requester from "./requester";


const recordsService = {
    getRecord: (patientId, filename) => requester(api.getRecord(patientId, filename)).get(),
    getRecords: (patientId) => requester(api.getRecords(patientId)).get(),
    addRecord: async (formData, patientId) => await requester(api.addRecord(patientId)).createWithFile(formData),
    addProfilePicPatient: async (formData, patientId) => await requester(api.uploadPatientPic(patientId)).patchWithFile(formData),
    addProfilePicDoc: async (formData, patientId) => await requester(api.uploadDocPic(patientId)).patchWithFile(formData),
    addTemplate: async (formData) => await requester(api.addTemplate()).createWithFile(formData),
}

export default recordsService;