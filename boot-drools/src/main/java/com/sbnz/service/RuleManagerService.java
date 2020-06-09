package com.sbnz.service;

import com.sbnz.model.*;
import org.apache.maven.shared.invoker.*;
import org.drools.template.ObjectDataCompiler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.*;

@Service
public class RuleManagerService {

    @Autowired
    private Environment env;

    public Config getConfig(){
        
    }

    public Config setConfig() {

    }

    public void invokeCleanInstallKjar(){
        String path = System.getProperty("user.dir") + "/../kjar/pom.xml";
        InvocationRequest request = new DefaultInvocationRequest();
        request.setPomFile((new File(path)));
        request.setGoals(Arrays.asList("clean", "install"));

        Invoker invoker = new DefaultInvoker();
        String var = env.getProperty("config.mvn.path");
        invoker.setMavenHome(new File(var));

        try{
            invoker.execute(request);
        } catch(MavenInvocationException e) {
            e.printStackTrace();
        }
    }

    public String applyTemplate(String test){
        ObjectDataCompiler objectDataCompiler = new ObjectDataCompiler();

        String groups = generateGroups(objectDataCompiler);
        String cations = generateCations(objectDataCompiler);
        String anions = generateAnions(objectDataCompiler);
        String substances = generateSubstances(objectDataCompiler);

        return formatDRL(groups, cations, anions, substances);
    }


    private String generateSubstances(ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamSubstance = this.loadTemplate("templateSubstance.drt");

        ArrayList<Object> argsListSubstance = new ArrayList<>();
        argsListSubstance.add(new TemplateSubstance("colorless", "crystals", "Silver", "SO4", "Silver sulfate - Ag2SO4"));
        argsListSubstance.add(new TemplateSubstance("colorless", "solid", "Silver", "NO3", "Silver nitrate - AgNO3"));

        return objectDataCompiler.compile(argsListSubstance, templateStreamSubstance);
    }


    private String generateAnions(ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamAnion = this.loadTemplate("templateAnion.drt");

        ArrayList<Object> argsListAnion = new ArrayList<>();
        argsListAnion.add(new TemplateAnion("SO4", "\"noYellowSedimentInNH42MoO4\", \"noGasInBaOH2\", \"noCrystalSedimentInCaCl2\", \"whiteSedimentInBaCl2\", \"noRingInH2SO4\", \"noVinegarSmellInH2SO4\""));
        argsListAnion.add(new TemplateAnion("PO4", "\"noWhiteSedimentInBaCl2\", \"noGasInBaOH2\", \"noCrystalSedimentInCaCl2\", \"yellowSedimentInNH42MoO4\", \"noRingInH2SO4\", \"noVinegarSmellInH2SO4\""));

        return objectDataCompiler.compile(argsListAnion, templateStreamAnion);
    }

    private String generateCations(ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamCation = this.loadTemplate("templateCation.drt");

        ArrayList<Object> argsListCation = new ArrayList<>();
        argsListCation.add(new TemplateCation(1, "Silver", "\"warmWaterInsoluble\", \"solubleInNH4OH\", \"whiteWithHNO3\""));
        argsListCation.add(new TemplateCation(2, "Iron", "\"darkRedSedimentFromNH4OH\""));

        return objectDataCompiler.compile(argsListCation, templateStreamCation);
    }

    private String generateGroups(ObjectDataCompiler objectDataCompiler){
        InputStream templateStreamGroup = this.loadTemplate("templateGroup.drt");

        ArrayList<Object> argsListGroup = new ArrayList<>();
        argsListGroup.add(new TemplateGroup(4, "\"insolubleRawIn(NH4)2CO3\", \"insolubleRawIn(NH4)2CO3butSolubleInCH3COOH\", \"noReactionWithHCl\", \"solubleRawInNH4OH\""));
        argsListGroup.add(new TemplateGroup(3, "\"noReactionWithHCl\", \"solubleRawInNH4OH\", \"solubleRawIn(NH4)2S\""));
        argsListGroup.add(new TemplateGroup(2, "\"insolubleRawInNH4OH\", \"noReactionWithHCl\""));
        argsListGroup.add(new TemplateGroup(1, "\"colorlessSolutionWithWater\", \"reactionWithHCl\""));

        return objectDataCompiler.compile(argsListGroup, templateStreamGroup);
    }

    private InputStream loadTemplate(String fileName) {
        File initialFile = new File(System.getProperty("user.dir") + "/src/main/resources/" + fileName);
        try {
            return new FileInputStream(initialFile);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String formatDRL(String groups, String cations, String anions, String substances) {
        return "\n" +
                "package substanceRules\n" +
                "import java.util.ArrayList\n" +
                "import com.sbnz.model.Color\n" +
                "import com.sbnz.model.Structure\n" +
                "import com.sbnz.model.Experiment\n" +
                "import com.sbnz.model.Substance\n" +
                "import com.sbnz.model.ResponseDTO\n" +
                "import com.sbnz.model.Cation\n" +
                "import com.sbnz.model.CationGroup\n" +
                "import com.sbnz.model.Anion\n" +
                "import java.util.List\n" +
                "import java.util.Arrays\n" +
                "\n\n//-------------- GROUPS --------------" +
                groups +
                "\n\n//---------- CATIONS -------------" +
                cations +
                "\n\n//---------- ANIONS -------------" +
                anions +
                "\n\n//---------- SUBSTANCES -------------" +
                substances +
                "\n\n//------------------ QUERIES --------------------------\n" +
                "query \"allNeededExperimentsPresent\"  (List experiments)\n" +
                "    $allExperiments : List() from collect(Experiment())\n" +
                "    $n: Number(intValue >= experiments.size()) from accumulate (\n" +
                "            Experiment(experiments.contains(code))\n" +
                "            from $allExperiments,\n" +
                "            init(int count = 0;),\n" +
                "            action(count += 1;)\n" +
                "            result(count)\n" +
                "    )\n" +
                "end"
                ;
    }
}
