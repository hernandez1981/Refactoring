const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService class", () => {  

    test('Get a list of the explorers in node, if the score is divisible by 5 and 3,set the property trick and the value FIZZBUZZ', () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const fizz15 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(fizz15.trick).toBe("FIZZBUZZ");
    }); 

    test('Get a list of the explorers in node if the score is just divisible by 5, set the property trick and the value BUZZ', () => {        
        const explorer5 = {name: "Explorer5", score: 5}
        const fizz5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(fizz5.trick).toBe("BUZZ");
    });

    // test('Get a list of the explorers in node if the score is just divisible by 3, set the property trick and the value FIZZ', () => {        
    //     const explorer3 = {name: "Explorer3", score: 3}
    //     const fizz3 = FizzbuzzService.applyValidationInExplorer(explorer3);
    //     expect(fizz3.trick).toBe("FIZZ");
    // });

    // test('Get a list of the explorers in node if the score not is divisible, set the property trick and the score value ', () => {    
    //     const explorer1 = { name: "Explorer1", score: 1};
    //     const fizz1 = FizzbuzzService.applyValidationInExplorer(explorer1);
    //     expect(fizz1.trick).toBe(1);
    // });
});