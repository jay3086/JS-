console.log('Hello world');

const func = function () {
  console.log('this is example of function to a variable');
};

function sayHello() {
  return function () {
    console.log('Hello!');
  };
}

const myfunc = sayHello();
myfunc();
sayHello()();