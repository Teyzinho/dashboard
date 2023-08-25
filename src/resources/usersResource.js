import AdminJs from 'adminjs'

import User from '../models/user.js'

//Configurações do resource do user (Propriedades e regras para o adminJs)
export default {
    resource: User,
    options: {
        parent: {
            icon: 'User',
        },
        actions: {
            resetPassword: {
                actionType: 'record', //3 dots
                icon: 'Password',
                handler: async (request, response, context) => {
                    return {
                        record: context.record.toJSON()
                    }
                }
            }
        },
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position: 2,
                isVisible: { list: true, filter: false, show: true, edit: false },
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'admin', label: 'Administrador' },
                    { value: 'manager', label: 'Gerente' },
                    { value: 'developer', label: 'Desenvolvedor' },
                ]
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo' },
                    { value: 'archeved', label: 'Arquivado' },
                ]
            },
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false },
            },
            updatedAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false },
            },
            password: {
                isVisible: false,
            },
            password_hash: {
                isVisible: false,
            }
        }
    }

}