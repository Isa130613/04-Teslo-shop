import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getStaticFile(name: string) {
    const path = join(__dirname, '../../static/products', name);
    if (!existsSync)
      throw new BadRequestException(`No product fround with file ${name}`);
    return path;
  }
}
