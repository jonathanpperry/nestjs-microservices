import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel: Model<RiderCoordinate>
    ) {

    }

    async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
        return await this.riderCoordinateModel.create(createCoordinateDTO);
    }
}
