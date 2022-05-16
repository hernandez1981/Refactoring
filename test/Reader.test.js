const Reader = require("../lib/utils/Reader");

describe("Unit Tests for Reader class", () => {
    
    test('Get all list of the explorers of archive json', () => {         
        const explorers = Reader.readJsonFile("explorers.json"); 
        expect(explorers.length).toBe(15);
    }); 
});