let getHeaders = () => {
    let token = localStorage.getItem('auth')?localStorage.getItem('auth'):''
    return {headers: {"X-Auth-Token": token}};
}

let rerenderTable = (groups, cations, anions, substances) => {
    document.getElementById('groups').innerHTML = ``
    document.getElementById('cations').innerHTML = ``
    document.getElementById('anions').innerHTML = ``
    document.getElementById('substances').innerHTML = ``
    groups.forEach(e => {
        document.getElementById('groups').innerHTML += `
        <tr>
            <td>Group${e.number}</td>
            <td>${e.allNeededExperiments}</td>
            <td><input id="${e.number}" class="grp_check" type="checkbox" ${e.enabled?'checked':''}></td>
        </tr>`
    });

    cations.forEach(e => {
        document.getElementById('cations').innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>Group${e.number}</td>
            <td>${e.allNeededExperiments}</td>
            <td><input id="${e.name}" class="cat_check" type="checkbox" ${e.enabled?'checked':''}></td>
        </tr>`
    });

    anions.forEach(e => {
        document.getElementById('anions').innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.allNeededExperiments}</td>
            <td><input id="${e.name}" class="an_check" type="checkbox" ${e.enabled?'checked':''}></td>
        </tr>`
    });

    substances.forEach(e => {
        document.getElementById('substances').innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.color}</td>
            <td>${e.structure}</td>
            <td>${e.cation}</td>
            <td>${e.anion}</td>
            <td><input id="${e.name}" class="sub_check" type="checkbox" ${e.enabled?'checked':''}></td>
        </tr>`
    })

    document.querySelectorAll('.sub_check').forEach(input=> {
        input.addEventListener('change', (evt) => {
            substances = substances.map(e => {
                if(e.name == evt.target.id)
                    e.enabled = !e.enabled;
                return e;
            })
        })
    })
    
    document.querySelectorAll('.an_check').forEach(input=> {
        input.addEventListener('change', (evt) => {
            anions = anions.map(e => {
                if(e.name == evt.target.id)
                    e.enabled = !e.enabled;
                return e;
            })
        })
    })

    document.querySelectorAll('.cat_check').forEach(input=> {
        input.addEventListener('change', (evt) => {
            cations = cations.map(e => {
                if(e.name == evt.target.id)
                    e.enabled = !e.enabled;
                return e;
            })
        })
    })

    document.querySelectorAll('.grp_check').forEach(input=> {
        input.addEventListener('change', (evt) => {
            groups = groups.map(e => {
                if(e.number == evt.target.id)
                    e.enabled = !e.enabled;
                return e;
            })
        })
    })
}

axios.get('http://localhost:8080/config', getHeaders()).then(data=>{
    let groups = data.data.groups;
    let cations = data.data.cations;
    let anions = data.data.anions;
    let substances = data.data.substances;
    
    rerenderTable(groups, cations, anions, substances);
    

    document.querySelector('#addGroupBtn').addEventListener('click', (e) => { 
        e.preventDefault();
        let groupName = document.querySelector('#groupNameInput').value;
        let experiments = document.querySelector('#groupExperimentInput').value;
        groups.push({enabled: true,number: groupName, allNeededExperiments: experiments.split(',').map(e => `"${e.trim()}"`).join(',')})
        rerenderTable(groups, cations, anions, substances);
        $('#newGroupModal').modal('toggle'); 
    });

    document.querySelector('#addCationBtn').addEventListener('click', (e) => { 
        e.preventDefault();
        let catName = document.querySelector('#cationNameInput').value;
        let catGrp = document.querySelector('#cationGroupInput').value;
        let catexperiments = document.querySelector('#cationExperimentInput').value;
        cations.push({enabled: true,number: catGrp, name: catName, allNeededExperiments: catexperiments.split(',').map(e => `"${e.trim()}"`).join(',')})
        rerenderTable(groups, cations, anions, substances);
        $('#newCationModal').modal('toggle'); 
        
    });

    document.querySelector('#addAnionBtn').addEventListener('click', (e) => { 
        e.preventDefault();
        let anionName = document.querySelector('#anionNameInput').value;
        let experiments = document.querySelector('#anionExperimentInput').value;
        anions.push({enabled: true,name: anionName, allNeededExperiments: experiments.split(',').map(e => `"${e.trim()}"`).join(',')})
        rerenderTable(groups, cations, anions, substances);
        $('#newAnionModal').modal('toggle'); 
    });

    document.querySelector('#addSubstanceBtn').addEventListener('click', (e) => { 
        e.preventDefault();
        let color = document.querySelector('#substanceColorInput').value;
        let structure = document.querySelector('#substanceStructureInput').value;
        let cation = document.querySelector('#substanceCationInput').value;
        let anion = document.querySelector('#substanceAnionInput').value;
        let name = document.querySelector('#substanceNameInput').value;
        substances.push({enabled: true,name, color, structure, cation, anion})
        rerenderTable(groups, cations, anions, substances);
        $('#newSubstanceModal').modal('toggle'); 
        
    });
    
    document.getElementById('save').addEventListener('click', () => {
     let config = JSON.parse(JSON.stringify(data.data));
     config.userRules = window.editor.getValue();
     config.userRules=config.userRules=='// Write your drl rules here...'?'':config.userRules;
     axios.post('http://localhost:8080/config', config, getHeaders()).then(data => { window.location.href = 'index.html'}).catch(err => alert('error'));
    })
});

