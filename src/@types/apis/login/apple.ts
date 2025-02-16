export interface AppleLoginData {
  authorization: {
    code: string;
    id_token: string;
    state: string;
  };
  user?: {
    email?: string;
    name?: {
      firstName?: string;
      lastName?: string;
    };
  };
}
