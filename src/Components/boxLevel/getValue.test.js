const {addTwoValues} = require("./index");
test("I am Testing the addTwovalues function", () => {
    expect(addTwoValues(1, 2)).toEqual(3);
    expect(addTwoValues(2, 2)).toEqual(4);
});