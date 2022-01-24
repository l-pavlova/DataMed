import userService from '../services/userService'

export const login = async (userData) => {
    try {
        await userService.loginUser(userData)
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

export const logout = async () => {
    //just clear session cookie
    document.cookie = "JSESSIONID= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
}

