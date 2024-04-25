import { userApiSlice } from "./userApiSlice";

describe('userApiSlice', () => {

    test('useLoginMutation hook is generated', () => {
        const { useLoginMutation } = userApiSlice;
        expect(useLoginMutation).toBeDefined();
    });

    test('useLogoutMutation hook is generated', () => {
        const { useLogoutMutation } = userApiSlice;
        expect(useLogoutMutation).toBeDefined();
    });

});