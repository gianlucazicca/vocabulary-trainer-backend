import { prismaClient, Prisma } from "../../../../prisma/client";

const createUser = async (req: any, res: any) => {
    try {
        const user: Prisma.UserCreateInput = req.body;
        const createdUser = await prismaClient.user.create({
            data: user,
        });
        res.json(createdUser);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const getUser = async (req: any, res: any) => {
    try {
        const { id } = req.body;
        const user = await prismaClient.user.findUnique({
            where: {
                id: id,
            },
        });
        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const updateUser = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const user: Prisma.UserUpdateInput = req.body;
        const updatedUser = await prismaClient.user.update({
            where: {
                id: id,
            },
            data: user,
        });
        res.json(updatedUser);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
}

export default { createUser, getUser, updateUser };