import { connect, kea, path, props } from 'kea'
import { forms } from 'kea-forms'
import { notifications } from '@mantine/notifications'

import type { createContactLogicType } from './createContactLogicType'
import { mainContainer } from '../../../MainContainer'
import { toastError } from '../../app/utils'
import { CreateContactRequest } from '../data/models'
import contactsLogic from '../contactsLogic'

export type CreateContactProps = {
    onSuccess?: () => void
}

const createContactLogic = kea<createContactLogicType>([
    path(['scenes', 'contacts', 'create', 'createContactLogic']),
    props({} as CreateContactProps),
    connect(() => ({
        actions: [contactsLogic, ['loadContacts']],
    })),
    forms(({ actions, props }) => ({
        createContactForm: {
            defaults: {
                email_address: null,
                phone_number: null,
                first_name: null,
                last_name: null,
            } as CreateContactRequest,
            errors: (req: CreateContactRequest) => ({
                email_address: ((!req.email_address || !/^\S+@\S+$/.test(req.email_address)) && !req.first_name) ? 'First name or valid email address is required' : null,
            }),
            submit: async (req) => {
                try {
                    const contactsRepository = mainContainer.buildContactsRepository()
                    await contactsRepository.createContact(req)

                    actions.resetCreateContactForm()
                    props.onSuccess?.()
                    actions.loadContacts()

                    notifications.show({
                        color: 'green',
                        title: 'Success',
                        message: 'Contact created',
                        radius: 'md',
                    })
                } catch (error: any) {
                    console.error(error)
                    toastError()
                }
            },
        },
    }))
])

export default createContactLogic
