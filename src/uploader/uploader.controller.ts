import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  StreamableFile,
  Req,
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { CreateUploaderDto } from './dto/create-uploader.dto';
import { UpdateUploaderDto } from './dto/update-uploader.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { join, resolve } from 'path';

import { Response, Request } from 'express';
import { createReadStream } from 'fs';

interface response {
  status: boolean;
  data: unknown;
  message: string;
  function: string;
}

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images/',
        filename: (req, file, cb) => {
          const mypath = join('./', 'public/images');
          cb(null, `${new Date().valueOf()}_${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() response: Response,
    @Req() req: Request,
  ): void {
    if (!file) {
      const res: response = {
        data: [],
        function: 'uploadFile',
        status: false,
        message: 'Unable to store image',
      };

      response.send(res);
      response.end();
    }
    const filePath = `/public/images/${file.filename}`;

    const filename = `${req.protocol}://${req.get('Host')}${filePath.replace(
      /\\/g,
      '/',
    )}`;

    const res: response = {
      data: filename,
      function: 'uploadFile',
      status: true,
      message: 'image store sussfully',
    };

    response.send(res);
    response.end();
  }
}
