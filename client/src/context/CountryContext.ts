import { createContext } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
//assign value of get country request to a variable

export const CountryContext = createContext({ country: "us", setCountry: {} as Dispatch<SetStateAction<string>> });
