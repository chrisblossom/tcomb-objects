/* @flow */

type ObjectTypes = {
  exists: string;
  sometimesExists?: string;

  // If any other keys exist, they should follow this pattern:
  [field: string]: {
    some: number;
  };
};

const passes_flow1 = (): ObjectTypes => {
  return {
    exists: 'some string',
    other: {
      some: 123,
    },
  };
};

const passes_flow2 = (): ObjectTypes => {
  return {
    exists: 'some string',
  };
};

const passes_flow3 = (): ObjectTypes => {
  return {
    exists: 'some string',
    sometimesExists: 'other string',
  };
};

const passes_flow4 = (): ObjectTypes => {
  return {
    exists: 'some string',
    sometimesExists: 'other string',
    other: {
      some: 123,
    },
  };
};

const fails_flow1 = (): ObjectTypes => {
  return {
    exists: 'some string',
    sometimesExists: 'other string',
    other: {
      some: 'should be a number',
    },
  };
};

console.log(passes_flow1());
console.log(passes_flow2());
console.log(passes_flow3());
console.log(passes_flow4());
console.log(fails_flow1());
