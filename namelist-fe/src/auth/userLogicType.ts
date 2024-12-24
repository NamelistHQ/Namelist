// Generated by kea-typegen on Mon, 23 Dec 2024 23:28:27 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { UserType } from '../domain/types'

export interface userLogicType extends Logic {
    actionCreators: {
        loadUser: () => ({
            type: "load user (src.userLogic)";
            payload: {};
        });
        logout: () => ({
            type: "logout (src.userLogic)";
            payload: {
                value: true;
            };
        });
        loadUserSuccess: (user: UserType | null, payload?: {}) => ({
            type: "load user success (src.userLogic)";
            payload: {
                user: UserType | null;
                payload?: {};
            };
        });
        loadUserFailure: (error: string, errorObject?: any) => ({
            type: "load user failure (src.userLogic)";
            payload: {
                error: string;
                errorObject?: any;
            };
        });
    };
    actionKeys: {
        "load user (src.userLogic)": "loadUser";
        "logout (src.userLogic)": "logout";
        "load user success (src.userLogic)": "loadUserSuccess";
        "load user failure (src.userLogic)": "loadUserFailure";
    };
    actionTypes: {
        loadUser: "load user (src.userLogic)";
        logout: "logout (src.userLogic)";
        loadUserSuccess: "load user success (src.userLogic)";
        loadUserFailure: "load user failure (src.userLogic)";
    };
    actions: {
        loadUser: () => void;
        logout: () => void;
        loadUserSuccess: (user: UserType | null, payload?: {}) => void;
        loadUserFailure: (error: string, errorObject?: any) => void;
    };
    asyncActions: {
        loadUser: () => Promise<any>;
        logout: () => Promise<any>;
        loadUserSuccess: (user: UserType | null, payload?: {}) => Promise<any>;
        loadUserFailure: (error: string, errorObject?: any) => Promise<any>;
    };
    defaults: {
        user: UserType | null;
        userLoading: boolean;
    };
    events: {};
    key: undefined;
    listeners: {
        "logout": ((action: {
            type: "logout (src.userLogic)";
            payload: {
                value: true;
            };
        }, previousState: any) => void | Promise<void>)[];
    };
    path: [
        "src",
        "userLogic"
    ];
    pathString: "src.userLogic";
    props: Record<string, unknown>;
    reducer: (state: any, action: any, fullState: any) => {
        user: UserType | null;
        userLoading: boolean;
    };
    reducers: {
        user: (state: UserType | null, action: any, fullState: any) => UserType | null;
        userLoading: (state: boolean, action: any, fullState: any) => boolean;
    };
    selector: (state: any) => {
        user: UserType | null;
        userLoading: boolean;
    };
    selectors: {
        user: (state: any, props?: any) => UserType | null;
        userLoading: (state: any, props?: any) => boolean;
    };
    sharedListeners: {};
    values: {
        user: UserType | null;
        userLoading: boolean;
    };
    _isKea: true;
    _isKeaWithKey: false;
}