import {authReducer, InitialStateAuthType, setAuthUserData} from "./auth-reducer";

test("add data and change isAuth default", () => {
    const initialState: InitialStateAuthType = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    };

    const action = setAuthUserData(3, "neakhai@gmail.com", "microla6")
    const endState = authReducer(initialState, action)

    expect(endState.email).toBe("neakhai@gmail.com")
    expect(endState.isAuth).toBe(true)


})