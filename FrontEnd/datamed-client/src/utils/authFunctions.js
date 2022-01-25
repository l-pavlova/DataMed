import userService from '../services/userService'

export const login = async (userData) => {
    try {
        return await userService.loginUser(userData)
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const signupDoc = async (userData, isDoc) => {
    try {
        console.log(userData);
        isDoc ? userService.registerDoc(userData)
            .then(doc => console.log(doc)) : userService.registerPatient(userData)
                .then(user => {
                    console.log(user);
                    return user
                });
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const logout = async () => {
    return await userService.logout();//do whatever with it afterwards
}

