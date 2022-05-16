const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit Tests for ExplorerService class", () => {
        
    const explorers = Reader.readJsonFile("explorers.json");   

    test('Get list of explorersByMission in node ', () => {
        const result = ExplorerService.filterByMission(explorers, "node");
        expect( result[0].mission ).toBe("node");         
    });

    test('Get list of getAmountOfExplorersByMission', () => {              
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);          
    });

    test('Get list of Usernames By Mission', () => {        
        const usernamesInNode  = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toContain('ajolonauta2');         
    });    
});