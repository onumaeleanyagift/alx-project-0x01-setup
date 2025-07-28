import { Address } from "cluster";

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps { 
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geolocation;
  phone: string;
  website: string;
  company: Company;

}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}