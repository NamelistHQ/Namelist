// Generated by kea-typegen on Wed, 01 Jan 2025 22:08:16 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { CreateContactProps } from './createContactLogic'
import type { CreateContactRequest } from '../data/models'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from 'kea-forms'

export interface createContactLogicType extends Logic {
    actionCreators: {
        setCreateContactFormValue: (key: FieldName, value: any) => ({
            type: "set create contact form value (scenes.contacts.create.createContactLogic)";
            payload: {
                name: FieldName;
                value: any;
            };
        });
        setCreateContactFormValues: (values: DeepPartial<CreateContactRequest>) => ({
            type: "set create contact form values (scenes.contacts.create.createContactLogic)";
            payload: {
                values: DeepPartial<CreateContactRequest>;
            };
        });
        setCreateContactFormManualErrors: (errors: Record<string, any>) => ({
            type: "set create contact form manual errors (scenes.contacts.create.createContactLogic)";
            payload: {
                errors: Record<string, any>;
            };
        });
        touchCreateContactFormField: (key: string) => ({
            type: "touch create contact form field (scenes.contacts.create.createContactLogic)";
            payload: {
                key: string;
            };
        });
        resetCreateContactForm: (values?: CreateContactRequest) => ({
            type: "reset create contact form (scenes.contacts.create.createContactLogic)";
            payload: {
                values?: CreateContactRequest;
            };
        });
        submitCreateContactForm: () => ({
            type: "submit create contact form (scenes.contacts.create.createContactLogic)";
            payload: {
                value: boolean;
            };
        });
        submitCreateContactFormRequest: (createContactForm: CreateContactRequest) => ({
            type: "submit create contact form request (scenes.contacts.create.createContactLogic)";
            payload: {
                createContactForm: CreateContactRequest;
            };
        });
        submitCreateContactFormSuccess: (createContactForm: CreateContactRequest) => ({
            type: "submit create contact form success (scenes.contacts.create.createContactLogic)";
            payload: {
                createContactForm: CreateContactRequest;
            };
        });
        submitCreateContactFormFailure: (error: Error, errors: Record<string, any>) => ({
            type: "submit create contact form failure (scenes.contacts.create.createContactLogic)";
            payload: {
                error: Error;
                errors: Record<string, any>;
            };
        });
    };
    actionKeys: {
        "set create contact form value (scenes.contacts.create.createContactLogic)": "setCreateContactFormValue";
        "set create contact form values (scenes.contacts.create.createContactLogic)": "setCreateContactFormValues";
        "set create contact form manual errors (scenes.contacts.create.createContactLogic)": "setCreateContactFormManualErrors";
        "touch create contact form field (scenes.contacts.create.createContactLogic)": "touchCreateContactFormField";
        "reset create contact form (scenes.contacts.create.createContactLogic)": "resetCreateContactForm";
        "submit create contact form (scenes.contacts.create.createContactLogic)": "submitCreateContactForm";
        "submit create contact form request (scenes.contacts.create.createContactLogic)": "submitCreateContactFormRequest";
        "submit create contact form success (scenes.contacts.create.createContactLogic)": "submitCreateContactFormSuccess";
        "submit create contact form failure (scenes.contacts.create.createContactLogic)": "submitCreateContactFormFailure";
    };
    actionTypes: {
        setCreateContactFormValue: "set create contact form value (scenes.contacts.create.createContactLogic)";
        setCreateContactFormValues: "set create contact form values (scenes.contacts.create.createContactLogic)";
        setCreateContactFormManualErrors: "set create contact form manual errors (scenes.contacts.create.createContactLogic)";
        touchCreateContactFormField: "touch create contact form field (scenes.contacts.create.createContactLogic)";
        resetCreateContactForm: "reset create contact form (scenes.contacts.create.createContactLogic)";
        submitCreateContactForm: "submit create contact form (scenes.contacts.create.createContactLogic)";
        submitCreateContactFormRequest: "submit create contact form request (scenes.contacts.create.createContactLogic)";
        submitCreateContactFormSuccess: "submit create contact form success (scenes.contacts.create.createContactLogic)";
        submitCreateContactFormFailure: "submit create contact form failure (scenes.contacts.create.createContactLogic)";
    };
    actions: {
        setCreateContactFormValue: (key: FieldName, value: any) => void;
        setCreateContactFormValues: (values: DeepPartial<CreateContactRequest>) => void;
        setCreateContactFormManualErrors: (errors: Record<string, any>) => void;
        touchCreateContactFormField: (key: string) => void;
        resetCreateContactForm: (values?: CreateContactRequest) => void;
        submitCreateContactForm: () => void;
        submitCreateContactFormRequest: (createContactForm: CreateContactRequest) => void;
        submitCreateContactFormSuccess: (createContactForm: CreateContactRequest) => void;
        submitCreateContactFormFailure: (error: Error, errors: Record<string, any>) => void;
    };
    asyncActions: {
        setCreateContactFormValue: (key: FieldName, value: any) => Promise<any>;
        setCreateContactFormValues: (values: DeepPartial<CreateContactRequest>) => Promise<any>;
        setCreateContactFormManualErrors: (errors: Record<string, any>) => Promise<any>;
        touchCreateContactFormField: (key: string) => Promise<any>;
        resetCreateContactForm: (values?: CreateContactRequest) => Promise<any>;
        submitCreateContactForm: () => Promise<any>;
        submitCreateContactFormRequest: (createContactForm: CreateContactRequest) => Promise<any>;
        submitCreateContactFormSuccess: (createContactForm: CreateContactRequest) => Promise<any>;
        submitCreateContactFormFailure: (error: Error, errors: Record<string, any>) => Promise<any>;
    };
    defaults: {
        createContactForm: CreateContactRequest;
        isCreateContactFormSubmitting: boolean;
        showCreateContactFormErrors: boolean;
        createContactFormChanged: boolean;
        createContactFormTouches: Record<string, boolean>;
        createContactFormManualErrors: Record<string, any>;
    };
    events: {};
    key: undefined;
    listeners: {};
    path: [
        "scenes",
        "contacts",
        "create",
        "createContactLogic"
    ];
    pathString: "scenes.contacts.create.createContactLogic";
    props: CreateContactProps;
    reducer: (state: any, action: any, fullState: any) => {
        createContactForm: CreateContactRequest;
        isCreateContactFormSubmitting: boolean;
        showCreateContactFormErrors: boolean;
        createContactFormChanged: boolean;
        createContactFormTouches: Record<string, boolean>;
        createContactFormManualErrors: Record<string, any>;
    };
    reducers: {
        createContactForm: (state: CreateContactRequest, action: any, fullState: any) => CreateContactRequest;
        isCreateContactFormSubmitting: (state: boolean, action: any, fullState: any) => boolean;
        showCreateContactFormErrors: (state: boolean, action: any, fullState: any) => boolean;
        createContactFormChanged: (state: boolean, action: any, fullState: any) => boolean;
        createContactFormTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>;
        createContactFormManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>;
    };
    selector: (state: any) => {
        createContactForm: CreateContactRequest;
        isCreateContactFormSubmitting: boolean;
        showCreateContactFormErrors: boolean;
        createContactFormChanged: boolean;
        createContactFormTouches: Record<string, boolean>;
        createContactFormManualErrors: Record<string, any>;
    };
    selectors: {
        createContactForm: (state: any, props?: any) => CreateContactRequest;
        isCreateContactFormSubmitting: (state: any, props?: any) => boolean;
        showCreateContactFormErrors: (state: any, props?: any) => boolean;
        createContactFormChanged: (state: any, props?: any) => boolean;
        createContactFormTouches: (state: any, props?: any) => Record<string, boolean>;
        createContactFormManualErrors: (state: any, props?: any) => Record<string, any>;
        createContactFormTouched: (state: any, props?: any) => boolean;
        createContactFormValidationErrors: (state: any, props?: any) => DeepPartialMap<CreateContactRequest, ValidationErrorType>;
        createContactFormAllErrors: (state: any, props?: any) => Record<string, any>;
        createContactFormHasErrors: (state: any, props?: any) => boolean;
        createContactFormErrors: (state: any, props?: any) => DeepPartialMap<CreateContactRequest, ValidationErrorType>;
        isCreateContactFormValid: (state: any, props?: any) => boolean;
    };
    sharedListeners: {};
    values: {
        createContactForm: CreateContactRequest;
        isCreateContactFormSubmitting: boolean;
        showCreateContactFormErrors: boolean;
        createContactFormChanged: boolean;
        createContactFormTouches: Record<string, boolean>;
        createContactFormManualErrors: Record<string, any>;
        createContactFormTouched: boolean;
        createContactFormValidationErrors: DeepPartialMap<CreateContactRequest, ValidationErrorType>;
        createContactFormAllErrors: Record<string, any>;
        createContactFormHasErrors: boolean;
        createContactFormErrors: DeepPartialMap<CreateContactRequest, ValidationErrorType>;
        isCreateContactFormValid: boolean;
    };
    _isKea: true;
    _isKeaWithKey: false;
}