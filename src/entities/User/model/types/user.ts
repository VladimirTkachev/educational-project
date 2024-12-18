export interface User {
  id: String;
  username: string;
}

export interface UserSchema {
  authData?: User;
}
