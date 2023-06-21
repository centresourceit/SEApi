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
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { CreateUploaderDto } from './dto/create-uploader.dto';
import { UpdateUploaderDto } from './dto/update-uploader.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';

import { Response } from 'express';

interface FileParams {
  fileName: string;
}

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  // @Post()
  // create(@Body() createUploaderDto: CreateUploaderDto) {
  //   return this.uploaderService.create(createUploaderDto);
  // }

  // @Get()
  // findAll() {
  //   return this.uploaderService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploaderService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUploaderDto: UpdateUploaderDto,
  // ) {
  //   return this.uploaderService.update(+id, updateUploaderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.uploaderService.remove(+id);
  // }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images/',
        filename: (req, file, cb) => {
          cb(null, `${new Date().valueOf()}_${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const filePath = `./assets/images/${file.filename}`;
    console.log(filePath);
    console.log('done');
  }

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadsingle(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'done';
  }

  @Get('get')
  getFile(@Res() res: Response, @Body() file: FileParams) {
    console.log(file);
    console.log(__dirname);
    console.log(file.fileName);
    console.log(path.join(__dirname, '..', `/assets/images/${file.fileName}`));
    // res.sendFile(path.join(__dirname, `../assets/images/${file.fileName}`));
    res.end();
  }
}
