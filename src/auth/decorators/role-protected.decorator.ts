import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces';
export const meta_roles = 'roles';

export const RoleProtected = (...args: ValidRoles[]) =>
  SetMetadata(meta_roles, args);
