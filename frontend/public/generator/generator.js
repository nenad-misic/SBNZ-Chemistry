var withoutImport = drl.split('// ------------------ CATIONS ------------------------')[1];
var cations = withoutImport.split('// ------------------ ANIONS ------------------------')[0]
var anions = withoutImport.split('// ------------------ ANIONS ------------------------')[1].split('// ------------------ SUBSTANCES ------------------------')[0]
var sub = withoutImport.split('// ------------------ ANIONS ------------------------')[1].split('// ------------------ SUBSTANCES ------------------------')[1]

debugger;
var anion_rules = anions.split('\n\n').filter(e => e!='');
var an = anion_rules.map(e => {
    let old = e.split('$s : ResponseDTO();')[1].split('then')[0]
    
    let old_v = e.split('$s : ResponseDTO();')[1].split('then')[0].split('\n').filter(x => x!='').map(x => x.trim());

    let old_v_lista = old_v.map(e => e.split('==')[1]?.substring(2)?.slice(0, -2)).filter(e => e);
    let n = `
        allNeededExperimentsPresent(Arrays.asList(${old_v_lista.map(e => `"${e}"`).join(', ')});)
    `

    return e.replace(old, n);
}).join('\n\n');

var cation_rules = cations.split('\n\n').filter(e => e!='');
var cn = cation_rules.map(e => {
    let old = e.split('$s : ResponseDTO();')[1].split('then')[0]
    
    let old_v = e.split('$s : ResponseDTO();')[1].split('then')[0].split('\n').filter(x => x!='').map(x => x.trim());

    let old_v_lista = old_v.map(e => e.split('==')[1]?.substring(2)?.slice(0, -2)).filter(e => e);
    let n = `
        allNeededExperimentsPresent(Arrays.asList(${old_v_lista.map(e => `"${e}"`).join(', ')});)
    `

    return e.replace(old, n);
}).join('\n\n');

document.getElementById('code-container').innerHTML = `
    ${drl.split('// ------------------ CATIONS ------------------------')[0]}
    // ------------------ CATIONS ------------------------
    ${cn}
    // ------------------ ANIONS ------------------------
    ${an}
    // ------------------ SUBSTANCES ------------------------
    ${sub.split('\n\n').map(e => {
        if(e != ''){
        let name = e.split('rule')[1].split('\n')[0]
        
        return `
rule${name}
salience $previous
    when
        countPreviousOfName(${name}, $previous;)
    ${e.split('when')[1]}
`;}
    }).join('\n\n')}
    // ------------------ QUERIES --------------------------
    query "allNeededExperimentsPresent"  (List experiments)
        $allExperiments : List() from collect(Experiment())
        $n: Number(intValue >= experiments.size()) from accumulate (
                Experiment(experiments.contains(code))
                from $allExperiments,
                init(int count = 0;),
                action(count += 1;)
                result(count)
        )
    end
`;