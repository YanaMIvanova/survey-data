export const users = {
    data: [
        {
            autoId: 2,
            id: '828383b5-be1b-4922-9e32-116270bb9310',
            name: 'First Last',
            firstName: 'First',
            lastName: 'Last',
            username: 'user',
            picture: null,
            email: 'email@example.com',
            administrativeCode: null,
            phone: null,
            meta: {
                publicUrl: 'user',
                publicUrlTuned: false,
                acceptedTerms: null,
                lastLogin: '2020-08-16T15:50:23',
                created: '2020-08-16T13:01:08',
                description: null,
                mailValidated: false,
                mailNotified: false,
                authentication: null,
                personalWorkspace: true,
                locale: 'fr',
            },
            publicUrl: 'user',
            permissions: {
                open: true,
                contact: false,
                edit: true,
                administrate: true,
                delete: true,
            },
            restrictions: {
                locked: false,
                disabled: false,
                removed: false,
                dates: [null, '2100-01-01T00:00:00'],
            },
            roles: [
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'adbca818-fcf4-4967-8be0-dbb457459033',
                    type: 1,
                    name: 'ROLE_ADMIN',
                    translationKey: 'admin',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'b5540d73-6ce5-427c-b289-e9c9f86f0187',
                    type: 4,
                    name: 'ROLE_USER_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'd5324b09-3bbe-46cf-8879-b522f32441b4',
                    type: 2,
                    name: 'ROLE_WS_MANAGER_0ed7cca2-5bdc-45ea-861a-7473c398dec6',
                    translationKey: 'manager',
                    workspace: { id: '0ed7cca2-5bdc-45ea-861a-7473c398dec6' },
                    context: 'user',
                },
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'group',
                },
            ],
            groups: [{ id: 'cfcf6d2b-0221-4928-9167-50302382dc4c', name: 'ROLE_USER' }],
            mainOrganization: {
                id: '9d889f12-a63d-4b8e-a284-197724c769e3',
                name: 'default',
                code: '6924d9ec-d391-4758-a0a4-0bc0bb26b2c6',
                email: null,
                type: 'internal',
                parent: null,
                meta: { default: true, position: 1 },
                limit: { users: -1 },
                managers: [],
                locations: [],
            },
            administratedOrganizations: [],
        },
        {
            autoId: 3,
            id: '6b8f48ac-009a-48c9-9d41-9bc77fc31bf0',
            name: 'Second Last2',
            firstName: 'Second',
            lastName: 'Last2',
            username: 'user2',
            picture: null,
            email: 'email2@example.com',
            administrativeCode: null,
            phone: null,
            meta: {
                publicUrl: 'user2',
                publicUrlTuned: false,
                acceptedTerms: null,
                lastLogin: null,
                created: '2020-08-16T13:01:50',
                description: null,
                mailValidated: false,
                mailNotified: false,
                authentication: null,
                personalWorkspace: true,
                locale: 'fr',
            },
            publicUrl: 'user2',
            permissions: {
                open: true,
                contact: true,
                edit: true,
                administrate: true,
                delete: true,
            },
            restrictions: {
                locked: false,
                disabled: false,
                removed: false,
                dates: [null, '2100-01-01T00:00:00'],
            },
            roles: [
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'adbca818-fcf4-4967-8be0-dbb457459033',
                    type: 1,
                    name: 'ROLE_ADMIN',
                    translationKey: 'admin',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'de58f54b-781c-4b77-b158-495631c17d58',
                    type: 4,
                    name: 'ROLE_USER_USER2',
                    translationKey: 'user2',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '378948b6-5345-42fe-ae68-06bf9c376594',
                    type: 2,
                    name: 'ROLE_WS_MANAGER_f85e7906-8cf7-4c12-aec9-d029ac521a6e',
                    translationKey: 'manager',
                    workspace: { id: 'f85e7906-8cf7-4c12-aec9-d029ac521a6e' },
                    context: 'user',
                },
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'group',
                },
            ],
            groups: [{ id: 'cfcf6d2b-0221-4928-9167-50302382dc4c', name: 'ROLE_USER' }],
            mainOrganization: {
                id: '9d889f12-a63d-4b8e-a284-197724c769e3',
                name: 'default',
                code: '6924d9ec-d391-4758-a0a4-0bc0bb26b2c6',
                email: null,
                type: 'internal',
                parent: null,
                meta: { default: true, position: 1 },
                limit: { users: -1 },
                managers: [],
                locations: [],
            },
            administratedOrganizations: [],
        },
        {
            autoId: 4,
            id: '0680a8c3-c230-46cc-9eec-b720fedbc8a3',
            name: 'Third Last3',
            firstName: 'Third',
            lastName: 'Last3',
            username: 'user3',
            picture: null,
            email: 'email3@example.com',
            administrativeCode: null,
            phone: null,
            meta: {
                publicUrl: 'user3',
                publicUrlTuned: false,
                acceptedTerms: null,
                lastLogin: null,
                created: '2020-08-16T13:01:56',
                description: null,
                mailValidated: false,
                mailNotified: false,
                authentication: null,
                personalWorkspace: true,
                locale: 'fr',
            },
            publicUrl: 'user3',
            permissions: {
                open: true,
                contact: true,
                edit: true,
                administrate: true,
                delete: true,
            },
            restrictions: {
                locked: false,
                disabled: false,
                removed: false,
                dates: [null, '2100-01-01T00:00:00'],
            },
            roles: [
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'adbca818-fcf4-4967-8be0-dbb457459033',
                    type: 1,
                    name: 'ROLE_ADMIN',
                    translationKey: 'admin',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '0fb49124-c98a-4f59-814c-037f82417cfb',
                    type: 4,
                    name: 'ROLE_USER_USER3',
                    translationKey: 'user3',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '5c777c48-08fc-4a86-919f-2618f3cd3f65',
                    type: 2,
                    name: 'ROLE_WS_MANAGER_cb0d5f42-8727-4cce-99c3-2b026a6fa2f0',
                    translationKey: 'manager',
                    workspace: { id: 'cb0d5f42-8727-4cce-99c3-2b026a6fa2f0' },
                    context: 'user',
                },
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'group',
                },
            ],
            groups: [{ id: 'cfcf6d2b-0221-4928-9167-50302382dc4c', name: 'ROLE_USER' }],
            mainOrganization: {
                id: '9d889f12-a63d-4b8e-a284-197724c769e3',
                name: 'default',
                code: '6924d9ec-d391-4758-a0a4-0bc0bb26b2c6',
                email: null,
                type: 'internal',
                parent: null,
                meta: { default: true, position: 1 },
                limit: { users: -1 },
                managers: [],
                locations: [],
            },
            administratedOrganizations: [],
        },
        {
            autoId: 5,
            id: '5d7bedff-8ad2-4312-9d40-4b36932b5d59',
            name: 'Forth Last4',
            firstName: 'Forth',
            lastName: 'Last4',
            username: 'user4',
            picture: null,
            email: 'email4@example.com',
            administrativeCode: null,
            phone: null,
            meta: {
                publicUrl: 'user4',
                publicUrlTuned: false,
                acceptedTerms: null,
                lastLogin: null,
                created: '2020-08-16T13:02:01',
                description: null,
                mailValidated: false,
                mailNotified: false,
                authentication: null,
                personalWorkspace: true,
                locale: 'fr',
            },
            publicUrl: 'user4',
            permissions: {
                open: true,
                contact: true,
                edit: true,
                administrate: true,
                delete: true,
            },
            restrictions: {
                locked: false,
                disabled: false,
                removed: false,
                dates: [null, '2100-01-01T00:00:00'],
            },
            roles: [
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'adbca818-fcf4-4967-8be0-dbb457459033',
                    type: 1,
                    name: 'ROLE_ADMIN',
                    translationKey: 'admin',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '127f8c18-16f2-4623-996b-596c0d5cf1cd',
                    type: 4,
                    name: 'ROLE_USER_USER4',
                    translationKey: 'user4',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '78ff4295-2644-448b-9546-3ce7763385f5',
                    type: 2,
                    name: 'ROLE_WS_MANAGER_1b1f4fc7-a76e-47b7-a587-6f0700b64c7d',
                    translationKey: 'manager',
                    workspace: { id: '1b1f4fc7-a76e-47b7-a587-6f0700b64c7d' },
                    context: 'user',
                },
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'group',
                },
            ],
            groups: [{ id: 'cfcf6d2b-0221-4928-9167-50302382dc4c', name: 'ROLE_USER' }],
            mainOrganization: {
                id: '9d889f12-a63d-4b8e-a284-197724c769e3',
                name: 'default',
                code: '6924d9ec-d391-4758-a0a4-0bc0bb26b2c6',
                email: null,
                type: 'internal',
                parent: null,
                meta: { default: true, position: 1 },
                limit: { users: -1 },
                managers: [],
                locations: [],
            },
            administratedOrganizations: [],
        },
        {
            autoId: 6,
            id: 'a4050954-3080-4a99-8b79-1a1f8d9103aa',
            name: 'Fifth Last5',
            firstName: 'Fifth',
            lastName: 'Last5',
            username: 'user5',
            picture: null,
            email: 'email5@example.com',
            administrativeCode: null,
            phone: null,
            meta: {
                publicUrl: 'user5',
                publicUrlTuned: false,
                acceptedTerms: null,
                lastLogin: null,
                created: '2020-08-16T13:02:06',
                description: null,
                mailValidated: false,
                mailNotified: false,
                authentication: null,
                personalWorkspace: true,
                locale: 'fr',
            },
            publicUrl: 'user5',
            permissions: {
                open: true,
                contact: true,
                edit: true,
                administrate: true,
                delete: true,
            },
            restrictions: {
                locked: false,
                disabled: false,
                removed: false,
                dates: [null, '2100-01-01T00:00:00'],
            },
            roles: [
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: 'adbca818-fcf4-4967-8be0-dbb457459033',
                    type: 1,
                    name: 'ROLE_ADMIN',
                    translationKey: 'admin',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '82585303-004b-4d6d-9623-25ea23309ceb',
                    type: 4,
                    name: 'ROLE_USER_USER5',
                    translationKey: 'user5',
                    workspace: null,
                    context: 'user',
                },
                {
                    id: '7906128b-1f2c-4822-ad41-a4edd642a7fd',
                    type: 2,
                    name: 'ROLE_WS_MANAGER_e403e3ef-0a7e-4c0e-ae97-cd484832ed51',
                    translationKey: 'manager',
                    workspace: { id: 'e403e3ef-0a7e-4c0e-ae97-cd484832ed51' },
                    context: 'user',
                },
                {
                    id: 'b09e412a-4752-46a8-bcff-dd422b1fcc91',
                    type: 1,
                    name: 'ROLE_USER',
                    translationKey: 'user',
                    workspace: null,
                    context: 'group',
                },
            ],
            groups: [{ id: 'cfcf6d2b-0221-4928-9167-50302382dc4c', name: 'ROLE_USER' }],
            mainOrganization: {
                id: '9d889f12-a63d-4b8e-a284-197724c769e3',
                name: 'default',
                code: '6924d9ec-d391-4758-a0a4-0bc0bb26b2c6',
                email: null,
                type: 'internal',
                parent: null,
                meta: { default: true, position: 1 },
                limit: { users: -1 },
                managers: [],
                locations: [],
            },
            administratedOrganizations: [],
        },
    ],
    totalResults: 5,
    page: 0,
    pageSize: -1,
    filters: [],
    sortBy: null,
}
