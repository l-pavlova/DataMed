import userService from '../services/userService'

export const findPatients = async (firstName, lastName, EGN) => {
    try {
        return await userService.findPatients(firstName, lastName, EGN)
    } catch (error) {
        console.log(error);
        return error;
    }
};
