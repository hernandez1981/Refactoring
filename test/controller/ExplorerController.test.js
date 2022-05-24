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
});