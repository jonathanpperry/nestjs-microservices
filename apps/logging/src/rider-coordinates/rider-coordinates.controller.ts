import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private riderCoordinatesService: RiderCoordinatesService) { }

    @Get()
    getRiderCoordinates() {
        return "Hello I am from rider coordinates"
    }

    @Post()
    async saveRiderCoordinates(
        @Body()
        createCoordinateDTO: CreateCoordinatesDTO
    ) {
        return this.riderCoordinatesService.saveRiderCoordinates(createCoordinateDTO)
    }

}
