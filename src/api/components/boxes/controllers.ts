import { prismaClient, Prisma } from "../../../../prisma/client";

const createBox = async (req: any, res: any) => {
    try {
        const set: Prisma.BoxCreateInput = req.body;
        const createdBox = await prismaClient.box.create({
            data: set,
        });
        res.json(createdBox);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const getBox = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const box = await prismaClient.box.findUnique({
            where: {
                id: id,
            },
        });
        res.json(box);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const updateBox = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const box: Prisma.BoxUpdateInput = req.body;
        const updatedBox = await prismaClient.box.update({
            where: {
                id: id,
            },
            data: box,
        });
        res.json(updatedBox);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const deleteBox = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const deletedBox = await prismaClient.box.delete({
            where: {
                id: id,
            },
        });
        res.json(deletedBox);
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
};

const updateBoxVocabluaries = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { vocabularies } = req.body;
        console.log(vocabularies)
        const box = await prismaClient.box.update({
            where: {
                id: id,
            },
            data: {
                vocabularies: {
                    set: vocabularies,
                },
            },
        });
        res.json(box);
    }
    catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
}

export default { createBox, getBox, updateBox, deleteBox, updateBoxVocabluaries };