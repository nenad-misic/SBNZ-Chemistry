var cationGroups = drlx.split('// ------------------ CATION-GROUPS ------------------------')[1].split('// ------------------ CATIONS ------------------------')[0];
var cations = drlx.split('// ------------------ CATIONS ------------------------')[1].split('// ------------------ ANIONS ------------------------')[0];
var anions = drlx.split('// ------------------ ANIONS ------------------------')[1].split('// ------------------ SUBSTANCES ------------------------')[0];
var substances = drlx.split('// ------------------ SUBSTANCES ------------------------')[1].split('// ------------------ QUERIES --------------------------')[0];

var config = {
    groups: [],
    cations: [],
    anions: [],
    substances: []
}

cationGroups.split('\n\n').filter(e=>e.trim() !== '').map(e => {
    let experiments = e.split('allNeededExperimentsPresent(Arrays.asList(')[1].split(');)')[0].split(',').map(x=>x.trim().replace('"', '').replace('"', ''));
    let number = e.split('insert(new CationGroup("')[1].split('"));')[0];
    config.groups.push({experiments, number, enabled: true});
})

cations.split('\n\n').filter(e => e.trim() !== '').map(e => {
    let experiments = e.split('allNeededExperimentsPresent(Arrays.asList(')[1].split(');)')[0].split(',').map(x=>x.trim().replace('"', '').replace('"', ''));
    let number = e.split('exists CationGroup(code == "')[1].split('");')[0];
    let name = e.split('insert(new Cation("')[1].split('"));')[0];
    config.cations.push({experiments, number, name, enabled: true});
})

anions.split('\n\n').filter(e => e.trim() !== '').map(e => {
    let experiments = e.split('allNeededExperimentsPresent(Arrays.asList(')[1].split(');)')[0].split(',').map(x=>x.trim().replace('"', '').replace('"', ''));
    let name = e.split('insert(new Anion("')[1].split('"));')[0];
    config.anions.push({experiments, name, enabled: true});
})

substances.split('\n\n').filter(e => e.trim() !== '').map(e => {
    let color = e.split('Color(answer == "')[1].split('")')[0];
    let structure = e.split('Structure(answer == "')[1].split('")')[0];
    let cation = e.split('exists Cation(element == "')[1].split('")')[0];
    let anion = e.split('exists Anion(element == "')[1].split('")')[0];
    let name = e.split('$s.addSolution("')[1].split('");')[0];
    config.substances.push({color, structure, cation, anion, name, enabled: true});

})

document.getElementById('code-container').innerHTML = JSON.stringify(config, null, '\t');