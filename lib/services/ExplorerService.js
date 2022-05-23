class ExplorerService {

    static filterByMission(explorers, mission){        
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;        
    }

    static getAmountOfExplorersByMission(explorers, mission) {     
        const explorersByMission_getAmount = explorers.filter((explorer) => explorer.mission === mission);        
        return explorersByMission_getAmount.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission_getUsernames  = explorers.filter((explorer) => explorer.mission === mission);        
        let result = [];
        explorersByMission_getUsernames.forEach(exp => {
            result.push(exp.githubUsername);
        });
        return result;
    }
}

module.exports = ExplorerService;