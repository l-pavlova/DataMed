import userService from '../services/userService'

export const login = async (email, password) => {
    try {
        await userService.getUser(email, password)
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const signupDoc = async (userData, isDoc) => {
    try {
        isDoc ? userService.registerDoc(userData) : userService.registerPatient(userData);
    } catch (error) {
        console.log(error);
        return error;
    }
};

