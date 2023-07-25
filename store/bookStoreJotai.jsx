import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

//export const counter = atomWithStorage("@value", 0);
export const counter = atom(0);
