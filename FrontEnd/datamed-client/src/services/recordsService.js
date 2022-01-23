import api from "./api";
import requester from "./requester";


const recordsService = {
    getRecord: (patientId, filename) => requester(api.getRecord(patientId, filename)).get(),
    getRecords: (patientId) => requester(api.getRecords(patientId)).get(),
    addRecord: async (formData, patientId) => await requester(api.addRecord(patientId)).createWithFile(formData),
    addProfilePicPatient: async (formData, patientId) => await requester(api.uploadPatientPic(patientId)).patchWithFile(formData),
    addProfilePicDoc: async (formData, patientId) => await requester(api.uploadDocPic(patientId)).patchWithFile(formData),
    addTemplate: async (formData) => await requester(api.addTemplate()).createWithFile(formData),
    downloadTemplate: (name) => requester(api.downloadTemplate(name)).get(),
    getTemplates: () => requester(api.getTemplates()).get(),
    downloadRecord: (name, id) => requester(api.downloadRecord(name, id)).getBlob(),
}

export default recordsService;