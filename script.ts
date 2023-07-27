import { PrismaClient } from '@prisma/client'       
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.createMany({
        data: [{
           name: "Ankush",
           email: "ankush@test.com",
           age: 22,
        },{
            name: "Tyler",
           email: "tyler@test.com",
           age: 22,
        }]
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })
