import authReducer, { setCredentials, clearCredentials } from './authSlice';

describe('authReducer', () => {
    const initialState = {
        userInfo: null
    };

    test('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    test('should handle setCredentials action', () => {
        const user = { email: 'test@test.com', password: 'test_user' };
        const action = setCredentials(user);
        const expectedState = {
            userInfo: user
        };
        expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    test('should handle clearCredentials action', () => {
        const state = {
            userInfo: { email: 'test@test.com', password: 'test_user' }
        };
        const action = clearCredentials();
        const expectedState = {
            userInfo: null
        };
        expect(authReducer(state, action)).toEqual(expectedState);
    });
});