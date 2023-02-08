import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from 'cookie-parser';

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.enableCors({origin: true, credentials: true})
    app.use(cookieParser());
    await app.listen(PORT, () => {
        console.log(`Server has been started on ${PORT}`)
    })
}

start()