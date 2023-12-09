import { Role } from "./Role";


export class User {
  user_id!: number;
  username!: string;
  email!: string;
  password!: string;
  roles!: Role[];
  enabled!: boolean;
  verificationcode!: string;

}