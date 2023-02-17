import {getGreeting} from "./get-greeting";

console.log(getGreeting("wonderful world"));
// console.log(getGreeting(11)); // Type mismatch will be reported by Typescript when building,
//                                  with esbuild a separate step for checking types is required
