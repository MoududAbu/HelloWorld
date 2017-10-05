const TestSubject = require('../src//HelloWorld');


test('Prints Tuffails HelloWorld', function(){

    expect(TestSubject()).toBe('Hello World');
});

