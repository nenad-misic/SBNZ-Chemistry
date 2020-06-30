package com.sbnz.service;

import com.sbnz.model.*;
import com.sbnz.repository.ConfigRepository;
import org.apache.maven.shared.invoker.*;
import org.drools.template.ObjectDataCompiler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class RuleManagerService {

    @Autowired
    private Environment env;

    @Autowired
    private ConfigRepository configRepository;

    public Config getConfig(){
        return configRepository.getConfig();
    }

    public void setConfig(Config config) {
        configRepository.setConfig(config);
        String drl = applyTemplate();
        overwriteDRLFile(drl);
        invokeCleanInstallKjar();
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

    public String applyTemplate(){
        ObjectDataCompiler objectDataCompiler = new ObjectDataCompiler();
        Config config = configRepository.getConfig();
        String groups = generateGroups(config.getGroups(), objectDataCompiler);
        String cations = generateCations(config.getCations(), objectDataCompiler);
        String anions = generateAnions(config.getAnions(), objectDataCompiler);
        String substances = generateSubstances(config.getSubstances(), objectDataCompiler);
        String userRules = config.getUserRules();

        return formatDRL(groups, cations, anions, substances, userRules);
    }


    private String generateSubstances(List<TemplateSubstance> substances, ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamSubstance = this.loadTemplate("templateSubstance.drt");

        ArrayList<Object> argsListSubstance = new ArrayList<>();
        for(TemplateSubstance s : substances){
            if (s.isEnabled())
                argsListSubstance.add(s);
        }
        return objectDataCompiler.compile(argsListSubstance, templateStreamSubstance);
    }


    private String generateAnions(List<TemplateAnion> anions, ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamAnion = this.loadTemplate("templateAnion.drt");

        ArrayList<Object> argsListAnion = new ArrayList<>();
        for(TemplateAnion a : anions){
            if (a.isEnabled())
                argsListAnion.add(a);
        }
        return objectDataCompiler.compile(argsListAnion, templateStreamAnion);
    }

    private String generateCations(List<TemplateCation> cations, ObjectDataCompiler objectDataCompiler) {
        InputStream templateStreamCation = this.loadTemplate("templateCation.drt");

        ArrayList<Object> argsListCation = new ArrayList<>();
        for(TemplateCation c : cations){
            if (c.isEnabled())
                argsListCation.add(c);
        }

        return objectDataCompiler.compile(argsListCation, templateStreamCation);
    }

    private String generateGroups(List<TemplateGroup> groups, ObjectDataCompiler objectDataCompiler){
        InputStream templateStreamGroup = this.loadTemplate("templateGroup.drt");

        ArrayList<Object> argsListGroup = new ArrayList<>();
        for(TemplateGroup g : groups){
            if (g.isEnabled())
                argsListGroup.add(g);
        }

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

    private String formatDRL(String groups, String cations, String anions, String substances, String userRules) {
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
                "import com.sbnz.model.PreviousSubstance\n" +
                "import java.util.List\n" +
                "import java.util.Arrays\n" +
                "\n\n//-------------- GROUPS --------------\n" +
                groups +
                "\n\n//---------- CATIONS -------------\n" +
                cations +
                "\n\n//---------- ANIONS -------------\n" +
                anions +
                "\n\n//---------- SUBSTANCES -------------\n" +
                substances +
                "\n\n//---------- USER DEFINED RULES -------------\n" +
                userRules +
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
                "end\n" +
                "\n" +
                "query \"countPreviousOfName\"  (String substanceName, Number $occurrences )\n" +
                "    $allPreviousQuestions : List() from collect(PreviousSubstance())\n" +
                "    $occurrences:= Number() from accumulate (\n" +
                "            PreviousSubstance(name.equals(substanceName), $var: this)\n" +
                "            from $allPreviousQuestions,\n" +
                "            count($var)\n" +
                "    )\n" +
                "end"
                ;
    }

    private void overwriteDRLFile(String drl){
        File fold=new File(System.getProperty("user.dir") + "/../kjar/src/main/resources/substanceRules/substanceRules.drl");
        fold.delete();
        File fnew=new File(System.getProperty("user.dir") + "/../kjar/src/main/resources/substanceRules/substanceRules.drl");

        try {
            FileWriter f2 = new FileWriter(fnew, false);
            f2.write(drl);
            f2.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
