import api from "./api";
import requester from "./requester";


const userService = {
    getUser: (userName, userPass) => requester(api.getUser(userName, userPass)).get(),
    registerDoc: async(userData) => await requester(api.registerDoc()).create(userData),
    registerPatient: async(userData) => await requester(api.registerPatient()).create(userData),
    findPatients: async(firstName, lastName, EGN) => await requester(api.findPatients(firstName, lastName, EGN)).get(),
}

export default userService;