export interface DecodedToken {
  sub:   string;
  name:  string;
  roles: string[];
  exp:   number;
  iss:   string;
  aud:   string;
}
