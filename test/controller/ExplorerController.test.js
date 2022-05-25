const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {     

    test("Get list of Explorers by Mission ", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect( explorers[0].mission ).toBe("node");         
    });

    test("Get list of Usernames By Mission", () => {        
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesInNode).toContain("ajolonauta3");         
    });  

    test("Get amount of explorers in node", () => {              
        const explorersInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersInNode).toBe(10);          
    });       

    test("New validation in number get trick value", () => {              
        const score1 = ExplorerController.getValidationInNumber(1);
        const score3 = ExplorerController.getValidationInNumber(3);
        const score5 = ExplorerController.getValidationInNumber(5);
        const score15 = ExplorerController.getValidationInNumber(15);
        expect(score1).toBe(1);   
        expect(score3).toBe("FIZZ");   
        expect(score5).toBe("BUZZ");   
        expect(score15).toBe("FIZZBUZZ");  
    }); 

});