import { prismaClient } from './client'

async function main() {

    const en = await prismaClient.language.create({
        data: {
            languageCode: 'en',
            languageName: 'English',
        },
    })
    const de = await prismaClient.language.create({
        data: {
            languageCode: 'de',
            languageName: 'Deutsch',
        },
    })
    console.log(en, de)
}
main()
    .then(async () => {
        await prismaClient.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prismaClient.$disconnect()
        process.exit(1)
    })