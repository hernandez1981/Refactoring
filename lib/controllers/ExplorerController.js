const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

class ExplorerController {

    static getExplorersByMission(mission){        
        const explorers = Reader.readJsonFile("explorers.json");      
        return ExplorerService.filterByMission(explorers, mission);        
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");      
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");      
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getValidationInNumber(number){        
        return FizzbuzzService.applyValidationInNumber(number);
    }
}


module.exports = ExplorerController;