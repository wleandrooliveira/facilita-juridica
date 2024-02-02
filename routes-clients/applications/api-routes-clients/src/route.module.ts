import {Module} from "@nestjs/common";
import {RotaService} from "./route.service";
import {ClientService} from "./client.service";
import {RotaController} from "./route.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Client} from "./client/entities/client.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [RotaController],
    providers: [RotaService, ClientService],
})
export class RotaModule {}