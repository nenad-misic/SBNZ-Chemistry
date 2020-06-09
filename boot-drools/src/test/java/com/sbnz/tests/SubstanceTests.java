package com.sbnz.tests;

import com.sbnz.model.*;
import org.junit.BeforeClass;
import org.junit.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SubstanceTests {

    KieSession kSession = null;
    static KieContainer kieContainer;

    @BeforeClass
    public static void beforeClass() {
        KieServices ks = KieServices.Factory.get();
        kieContainer = ks
                .newKieContainer(ks.newReleaseId("com.sbnzkjar", "sbnzkjar", "1.0-SNAPSHOT"));
    }

    @Test
    public void Ag3PO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("brown"));
        kieSessionSubstance.insert(new Structure("powder"));
        silver(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Silver phosphate - Ag3PO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Ag2CO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("pale yellow"));
        kieSessionSubstance.insert(new Structure("crystals"));
        silver(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Silver carbonate - Ag2CO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Ag2C2O4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        silver(kieSessionSubstance);
        c2o4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Silver oxalate - Ag2C2O4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void AgCl() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        silver(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Silver chloride - AgCl",responseDTO.getSolutions().get(0));
    }



    @Test
    public void AgNO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("colorless"));
        kieSessionSubstance.insert(new Structure("solid"));
        silver(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Silver nitrate - AgNO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void PbSO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        lead(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Lead(II) sulfate - PbSO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Pb3PO42() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        lead(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Lead(II) phosphate - Pb3(PO4)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void PbCO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("colorless"));
        kieSessionSubstance.insert(new Structure("crystals"));
        lead(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Cerussite - PbCO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void PbCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        lead(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Lead(II) chloride - PbCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void PbNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        lead(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Lead(II) nitrate - Pb(NO3)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void PbCH3COO2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        lead(kieSessionSubstance);
        ch3coo(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Lead(II) acetate - Pb(CH3COO)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void HgSO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        mercury(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Mercury(II) sulfate - HgSO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void HgCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        mercury(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Mercury(II) chloride - HgCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void HgNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("colorless"));
        kieSessionSubstance.insert(new Structure("crystals"));
        mercury(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Mercury(II) nitrate - Hg(NO3)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void HgCH3COO2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("pale yellow"));
        kieSessionSubstance.insert(new Structure("crystals"));
        mercury(kieSessionSubstance);
        ch3coo(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Mercury(II) acetate - Hg(CH3COO)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Fe2SO43() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("grayish-white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        iron(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Iron(III) sulfate - Fe2(SO4)3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void FePO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("yellow-brown"));
        kieSessionSubstance.insert(new Structure("solid"));
        iron(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Iron(III) phosphate - FePO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void FeCl3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("brown"));
        kieSessionSubstance.insert(new Structure("solution"));
        iron(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Iron(III) chloride - FeCl3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void FeNO33() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("yellow"));
        kieSessionSubstance.insert(new Structure("crystals"));
        iron(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Iron(III) nitrate - Fe(NO3)3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Al2SO43() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        aluminium(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Aluminium sulfate - Al2(SO4)3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void AlPO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        aluminium(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Aluminium phosphate - AlPO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void AlCl3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        aluminium(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Aluminium chloride - AlCl3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void AlNO33() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        aluminium(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Aluminium nitrate - Al(NO3)3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Cr2SO43() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("reddish-brown"));
        kieSessionSubstance.insert(new Structure("crystals"));
        chromium(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Chromium(III) sulfate - Cr2(SO4)3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CrCl3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("purple"));
        kieSessionSubstance.insert(new Structure("crystals"));
        chromium(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Chromium(III) chloride - CrCl3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void MnSO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        manganese(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Manganese(II) sulfate - MnSO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void MnCO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        manganese(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Manganese(II) carbonate - MnCO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void MnCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("pink"));
        kieSessionSubstance.insert(new Structure("solid"));
        manganese(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Manganese(II) chloride - MnCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void MnNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        manganese(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Manganese(II) nitrate - Mn(NO3)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void MnCH3COO2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        manganese(kieSessionSubstance);
        ch3coo(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Manganese(II) acetate - Mn(CH3COO)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void ZnSO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        zinc(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Zinc sulfate - ZnSO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Zn3PO42() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        zinc(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Zinc phosphate - Zn3(PO4)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void ZnCO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("colorless"));
        kieSessionSubstance.insert(new Structure("crystal"));
        zinc(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Smithsonite - ZnCO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void ZnCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        zinc(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Zinc chloride - ZnCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void ZnNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("colorless"));
        kieSessionSubstance.insert(new Structure("crystals"));
        zinc(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Zinc nitrate - Zn(NO3)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void ZnCH3COO2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        zinc(kieSessionSubstance);
        ch3coo(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Zinc acetate - Zn(CH3COO)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void BaCO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        barium(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Barium carbonate - BaCO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void BaC2O4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        barium(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Barium oxalate - BaC2O4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void BaCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        barium(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Barium chloride - BaCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void BaNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("crystals"));
        barium(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Barium nitrate - Ba(NO3)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CaSO4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        calcium(kieSessionSubstance);
        so4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Calcium sulfate - CaSO4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void Ca3PO42() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        calcium(kieSessionSubstance);
        po4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Tricalcium phosphate - Ca3(PO4)2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CaCO3() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        calcium(kieSessionSubstance);
        co3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Calcium carbonate - CaCO3",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CaC2O4() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("solid"));
        calcium(kieSessionSubstance);
        c2o4(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Calcium oxalate - CaC2O4",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CaCl2() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        calcium(kieSessionSubstance);
        cl(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Calcium chloride - CaCl2",responseDTO.getSolutions().get(0));
    }



    @Test
    public void CaNO32() {
        ResponseDTO responseDTO = new ResponseDTO();

        KieSession kieSessionSubstance = kieContainer.newKieSession("substanceRulesSession");
        kieSessionSubstance.insert(responseDTO);

        kieSessionSubstance.insert(new Color("white"));
        kieSessionSubstance.insert(new Structure("powder"));
        calcium(kieSessionSubstance);
        no3(kieSessionSubstance);

        kieSessionSubstance.fireAllRules();
        kieSessionSubstance.dispose();
        assertEquals(1, responseDTO.getSolutions().size());
        assertEquals("Calcium nitrate - Ca(NO3)2",responseDTO.getSolutions().get(0));
    }

    private void group1(KieSession kieSessionSubstance) {
        for(String s : Arrays.asList("colorlessSolutionWithWater", "reactionWithHCl")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void group2(KieSession kieSessionSubstance) {
        for(String s : Arrays.asList("insolubleRawInNH4OH", "noReactionWithHCl")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void group3(KieSession kieSessionSubstance) {
        for(String s : Arrays.asList("noReactionWithHCl", "solubleRawInNH4OH", "solubleRawIn(NH4)2S")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void group4(KieSession kieSessionSubstance) {
        for(String s : Arrays.asList("insolubleRawIn(NH4)2CO3", "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH", "noReactionWithHCl", "solubleRawInNH4OH")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void silver(KieSession kieSessionSubstance) {
        group1(kieSessionSubstance);
        for(String s : Arrays.asList("warmWaterInsoluble", "solubleInNH4OH", "whiteWithHNO3")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void lead(KieSession kieSessionSubstance) {
        group1(kieSessionSubstance);
        for(String s : Arrays.asList("warmWaterSoluble", "yellowWithK2CrO4")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void mercury(KieSession kieSessionSubstance) {
        group1(kieSessionSubstance);
        for(String s : Arrays.asList("warmWaterInsoluble", "greyWithNH4OH")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void iron(KieSession kieSessionSubstance) {
        group2(kieSessionSubstance);
        for(String s : Arrays.asList("darkRedSedimentFromNH4OH")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void aluminium(KieSession kieSessionSubstance) {
        group2(kieSessionSubstance);
        for(String s : Arrays.asList("whiteSedimentFromNH4OH")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void chromium(KieSession kieSessionSubstance) {
        group2(kieSessionSubstance);
        for(String s : Arrays.asList("GrayishGreenSedimentFromNH4OH")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }
    private void manganese(KieSession kieSessionSubstance) {
        group3(kieSessionSubstance);
        for(String s : Arrays.asList("insolubleRawIn(NH4)2SmeatColoredSediment")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }
    private void zinc(KieSession kieSessionSubstance) {
        group3(kieSessionSubstance);
        for(String s : Arrays.asList("insolubleRawIn(NH4)2SwhiteSediment")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void barium(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void calcium(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void so4(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "whiteSedimentInBaCl2", "noRingInH2SO4", "noVinegarSmellInH2SO4")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void po4(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noWhiteSedimentInBaCl2", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "yellowSedimentInNH42MoO4", "noRingInH2SO4", "noVinegarSmellInH2SO4")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void co3(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noWhiteSedimentInBaCl2", "noYellowSedimentInNH42MoO4", "noCrystalSedimentInCaCl2", "gasInBaOH2", "noRingInH2SO4", "noVinegarSmellInH2SO4")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void c2o4(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noWhiteSedimentInBaCl2", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "crystalSedimentInCaCl2", "noRingInH2SO4", "noVinegarSmellInH2SO4")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void cl(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("cheesySedimentInNH4OH", "noRingInH2SO4", "noVinegarSmellInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void no3(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noCheesySedimentInNH4OH", "noVinegarSmellInH2SO4", "ringInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }

    private void ch3coo(KieSession kieSessionSubstance) {
        group4(kieSessionSubstance);
        for(String s : Arrays.asList("noCheesySedimentInNH4OH", "vinegarSmellInH2SO4", "noRingInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2")){
            kieSessionSubstance.insert(new Experiment(s));
        }
    }




}
