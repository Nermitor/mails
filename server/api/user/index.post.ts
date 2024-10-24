import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    await prisma.user.create({
        data: await readBody(event)
    })

    setResponseStatus(event, 201)
})