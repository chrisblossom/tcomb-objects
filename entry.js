/* @flow */

type ObjectTypes = {
  exists: string;
  sometimesExists?: string;
  [field: string]: {
    some: number;
  };
};

const test1 = (): ObjectTypes => {
  return {
    exists: 'some string',
    other: {
      some: 123,
    },
  };
};

const test2 = (): ObjectTypes => {
  return {
    exists: 'some string',
  };
};

const test3 = (): ObjectTypes => {
  return {
    exists: 'some string',
    sometimesExists: 'other string',
  };
};

const test4 = (): ObjectTypes => {
  return {
    exists: 'some string',
    sometimesExists: 'other string',
    other: {
      some: 123,
    },
  };
};

console.log(test1());
console.log(test2());
console.log(test3());
console.log(test4());
