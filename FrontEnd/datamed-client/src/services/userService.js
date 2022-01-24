import api from "./api";
import requester from "./requester";


const userService = {
    loginUser: async (userData) => await requester(api.logginUser()).create(userData),
    registerDoc: async(userData) => await requester(api.registerDoc()).create(userData),
    updateDoc: async(userData) => await requester(api.updateDoc()).update(userData),
    registerPatient: async(userData) => await requester(api.registerPatient()).create(userData),
    updatePatient: async(userData, id) => await requester(api.updatePatient(id)).update(userData),
    findPatients: async(firstName, lastName, EGN) => await requester(api.findPatients(firstName, lastName, EGN)).get(),
    getPatientById: async(id) => await requester(api.getPatientById(id)).get()
}

export default userService;