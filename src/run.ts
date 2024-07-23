import { createImmutableObject } from "./immutable.js";

const classNames = document
  .querySelectorAll("div")
  .map((element) => element.className);
console.log(classNames);

const testObject = { one: "one" };
createImmutableObject(testObject);

//@ts-expect-error this will error in the console
testObject.two = "two";
