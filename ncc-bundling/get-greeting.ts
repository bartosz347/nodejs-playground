// a simplest package that came to my mind – to test dependencies bundling
import kebabcase from "lodash.kebabcase";

export const getGreeting = (name: string) => `Hello ${kebabcase(name)}`;
