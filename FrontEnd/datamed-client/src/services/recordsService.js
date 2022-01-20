import api from "./api";
import requester from "./requester";


const recordsService = {
    getRecord: (patientId) => requester(api.getRecord(patientId)).get(),
    getRecords: (patientId) => requester(api.getRecords(patientId)).get(),
    addRecord: async (formData) => await requester(api.addRecord()).create(formData),
    addMultipleRecords: async (formData) => await requester(api.addMultipleRecords()).create(formData),
}

export default recordsService;