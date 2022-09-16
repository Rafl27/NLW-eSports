import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();
app.use(express.json());
app.use(cors())

const prisma = new PrismaClient({
    //logs every query made
    log: ['query']
});

//list all games and ad count
app.get("/games", async (req, res) => {
    const games = await prisma.game.findMany({
        //include is basically a join
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return res.json(games)
})

//list ads by game id
app.get('/games/:id/ads', async (request, response) => {

    const gameId = request.params.id;
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
    return response.json(ads.map(ad => {
        return {
            //...ad quer dizer que vou pegar todo o ad atual e atualizar apenas weekDays
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }));
})

//get discord by id
app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;
    //nesse caso se usa OrThrow no caso de ser passado um ID inexistente, nesse momento acontecerá um throw, basicamente um erro
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return res.json({
        discord: ad.discord
    })

})

//create a new ad
app.post("/games/:id/ads", async (req, res) => {
    const gameId = req.params.id
    const body : any = req.body
    
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return res.status(201).json(ad)
  
})

app.listen(3333, () => { console.log('running') })