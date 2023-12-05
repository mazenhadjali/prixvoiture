import Role from "./roleInterface";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  dob: number;
  tel: string;
  email: string;
  username: string;
  roles: Role[];
}
export default User;