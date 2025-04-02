import { Controller, Get, Post } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        return "Hello I am from rider coordinates"
    }
}
