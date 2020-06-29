axios.get('http://localhost:8080/config').then(data=>{
    let groups = data.data.groups;
    let cations = data.data.cations;
    let anions = data.data.anions;
    let substances = data.data.substances;

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
    document.getElementById('save').addEventListener('click', () => {
     let config = JSON.parse(JSON.stringify(data.data));
     config.userRules = window.editor.getValue();
     config.userRules=config.userRules=='// Write your drl rules here...'?'':config.userRules;
     axios.post('http://localhost:8080/config', config).then(data => { window.location.href = 'index.html'}).catch(err => alert('error'));
    })
});

