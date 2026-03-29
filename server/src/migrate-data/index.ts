import { prisma } from '../lib/prisma.js'

async function createRole() {
    const data = [
        { id: 1, role_name: "Doctor" },
        { id: 2, role_name: "Admin" },
        { id: 3, role_name: "Super Admin" },
        { id: 4, role_name: "Nurse" },
        { id: 5, role_name: "Patient" },
        { id: 6, role_name: "Lab Operator" },
        { id: 7, role_name: "Desk Operator" },
    ]

    const response = await prisma.role.createMany({ data })
    return response
}

createRole()