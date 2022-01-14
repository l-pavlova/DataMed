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
        console.log(userData);
        isDoc ? userService.registerDoc(userData).then(doc => console.log(doc)): userService.registerPatient(userData).then(pat => console.log(pat));
    } catch (error) {
        console.log(error);
        return error;
    }
};

