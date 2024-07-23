import { createImmutableObject } from "./immutable.js";

const classNames = document
  .querySelectorAll("div")
  .map((element) => element.className);

//demonstration
console.log(classNames);

const testObject = { one: "one" };
createImmutableObject(testObject);

//@ts-expect-error for demo purposes, this will error in the console
testObject.two = "two";
