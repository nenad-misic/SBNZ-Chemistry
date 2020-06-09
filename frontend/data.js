var substances = [
    {
      "name": "Silver sulfate",
      "boiling": 1,
      "melting": 652,
      "appearance": "Colorless crystals",
      "formula": "Ag2SO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Silver_sulfate.png/160px-Silver_sulfate.png",
      "color": "colorless",
      "structure": "crystals"
    },
    {
      "name": "Silver phosphate",
      "melting": 849,
      "appearance": "Translucent yellow  becomes opaque or discolors when impure.",
      "formula": "Ag3PO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Fosfore%C4%8Dnan_st%C5%99%C3%ADbrn%C3%BD.PNG/220px-Fosfore%C4%8Dnan_st%C5%99%C3%ADbrn%C3%BD.PNG",
      "boiling": 700
    },
    {
      "name": "Silver carbonate",
      "melting": 218,
      "appearance": "Pale yellow crystals",
      "formula": "Ag2CO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ag2CO3-bas.png/160px-Ag2CO3-bas.png",
      "boiling": 700,
      "color": "pale yellow",
      "structure": "crystals"
    },
    {
      "name": "Silver oxalate",
      "boiling": 2,
      "melting": 961,
      "appearance": "white powder",
      "formula": "Ag2C2O4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Silver_oxalate_resonance.png/220px-Silver_oxalate_resonance.png",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Silver chloride",
      "boiling": 1,
      "melting": 455,
      "appearance": "White Solid",
      "formula": "AgCl",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Chlorid_st%C5%99%C3%ADbrn%C3%BD.PNG/220px-Chlorid_st%C5%99%C3%ADbrn%C3%BD.PNG",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Silver nitrate",
      "boiling": 440,
      "melting": 209,
      "appearance": "colorless solid",
      "formula": "AgNO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Silver-nitrate-2D.svg/160px-Silver-nitrate-2D.svg.png",
      "color": "colorless",
      "structure": "solid"
    },
    {
      "name": "Lead(II) sulfate",
      "melting": 1,
      "appearance": "white solid",
      "formula": "PbSO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lead%28II%29_sulfate.jpg/244px-Lead%28II%29_sulfate.jpg",
      "boiling": 700,
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Lead(II) phosphate",
      "melting": 1,
      "appearance": "white powder",
      "formula": "Pb3(PO4)2",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yes_check.svg/7px-Yes_check.svg.png",
      "boiling": 700,
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Cerussite",
      "formula": "PbCO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Cerussite-173897.jpg/260px-Cerussite-173897.jpg",
      "melting": 700,
      "boiling": 700
    },
    {
      "name": "Lead(II) chloride",
      "boiling": 950,
      "melting": 501,
      "appearance": "white odorless solid",
      "formula": "PbCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/PbCl2precipiate.jpg/220px-PbCl2precipiate.jpg",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Lead(II) nitrate",
      "solubility": "ICSC 1000",
      "formula": "Pb(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/NFPA_704.svg/80px-NFPA_704.svg.png",
      "boiling": 700
    },
    {
      "name": "Lead(II) acetate",
      "melting": 280,
      "appearance": "White powder or colourless, efflorescent crystals",
      "formula": "Pb(CH3COO)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/PbAc2_%28jonowo%29.png/150px-PbAc2_%28jonowo%29.png",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Mercury(II) sulfate",
      "appearance": "white monoclinic crystals",
      "formula": "HgSO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kwik%28II%29sulfaat_t.png/120px-Kwik%28II%29sulfaat_t.png",
      "melting": 700,
      "boiling": 700,
      "color": "white",
      "structure": "crystals"
    },
    {
      "name": "Mercury(II) chloride",
      "boiling": 304,
      "melting": 276,
      "appearance": "colorless or white solid",
      "formula": "HgCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mercury%28II%29-chloride-xtal-1980-3D-balls.png/220px-Mercury%28II%29-chloride-xtal-1980-3D-balls.png",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Mercury(II) nitrate",
      "melting": 79,
      "appearance": "colorless crystals or white powder",
      "formula": "Hg(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Mercury_nitrate.png/150px-Mercury_nitrate.png",
      "boiling": 700,
      "color": "colorless",
      "structure": "crystals"
    },
    {
      "name": "Mercury(II) acetate",
      "melting": 179,
      "appearance": "white-yellow crystals",
      "formula": "Hg(CH3COO)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mercury%28II%29-acetate-from-xtal-1973-2D.png/256px-Mercury%28II%29-acetate-from-xtal-1973-2D.png",
      "boiling": 700,
      "color": "pale yellow",
      "structure": "crystals"
    },
    {
      "name": "Iron(III) sulfate",
      "melting": 480,
      "appearance": "grayish-white crystals",
      "formula": "Fe2(SO4)3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/S%C3%ADran_%C5%BEelezit%C3%BD.JPG/250px-S%C3%ADran_%C5%BEelezit%C3%BD.JPG",
      "boiling": 700,
      "color": "grayish-white",
      "structure": "crystals"
    },
    {
      "name": "Iron(III) phosphate",
      "melting": 250,
      "appearance": "yellow-brown solid",
      "formula": "FePO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Iron%28III%29-phosphate-pentahydrate-sample.jpg/200px-Iron%28III%29-phosphate-pentahydrate-sample.jpg",
      "boiling": 700,
      "color": "yellow-brown",
      "structure": "solid"
    },
    {
      "name": "Iron(III) chloride",
      "boiling": 316,
      "melting": 307,
      "appearance": "Green-black by reflected light; purple-red by transmitted light; yellow solid as hexahydrate; brown as aq. solution",
      "formula": "FeCl3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Iron%28III%29_chloride_hexahydrate.jpg/220px-Iron%28III%29_chloride_hexahydrate.jpg",
      "color": "brown",
      "structure": "solution"
    },
    {
      "name": "Iron(III) nitrate",
      "boiling": 125,
      "melting": 47,
      "appearance": "Pale violet crystals  hygroscopic",
      "formula": "Fe(NO3)3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ferric_nitrate_nonahydrate.jpg/220px-Ferric_nitrate_nonahydrate.jpg"
    },
    {
      "name": "Aluminium sulfate",
      "melting": 770,
      "appearance": "white crystalline solid  hygroscopic",
      "formula": "Al2(SO4)3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Aluminium_sulfate.jpg/220px-Aluminium_sulfate.jpg",
      "boiling": 700
    },
    {
      "name": "Aluminium phosphate",
      "melting": 1,
      "appearance": "White, crystalline powder",
      "formula": "AlPO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fosfore%C4%8Dnan_hlinit%C3%BD.PNG/220px-Fosfore%C4%8Dnan_hlinit%C3%BD.PNG",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Aluminium chloride",
      "boiling": 180,
      "melting": 192,
      "appearance": "white or pale yellow solid,hygroscopic",
      "formula": "AlCl3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Aluminium-trichloride-hexahydrate-white-and-yellow.jpg/150px-Aluminium-trichloride-hexahydrate-white-and-yellow.jpg",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Aluminium nitrate",
      "boiling": 150,
      "melting": 66,
      "appearance": "White crystals, solid  hygroscopic",
      "formula": "Al(NO3)3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Aluminium_nitrate.png/150px-Aluminium_nitrate.png"
    },
    {
      "name": "Chromium(III) sulfate",
      "boiling": 700,
      "melting": 90,
      "appearance": "reddish-brown crystals (anhydrous), purple crystals (hydrated)",
      "formula": "Cr2(SO4)3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chromium%28III%29_sulfate.jpg/220px-Chromium%28III%29_sulfate.jpg",
      "color": "reddish-brown",
      "structure": "crystals"
    },
    {
      "name": "Chromium(III) chloride",
      "boiling": 1,
      "melting": 1,
      "appearance": "purple (anhydrous), dark green (hexahydrate)",
      "formula": "CrCl3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chromium%28III%29-chloride-purple-anhydrous-sunlight.jpg/220px-Chromium%28III%29-chloride-purple-anhydrous-sunlight.jpg",
      "color": "purple",
      "structure": "crystals"
    },
    {
      "name": "Manganese(II) sulfate",
      "boiling": 850,
      "melting": 710,
      "appearance": "white crystals (anhydrous)  pale pink solid (hydrates)",
      "formula": "MnSO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Manganese%28II%29_sulfate_close-up.jpg/220px-Manganese%28II%29_sulfate_close-up.jpg"
    },
    {
      "name": "Manganese(II) carbonate",
      "melting": 200,
      "appearance": "White to faint pink solid",
      "formula": "MnCO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Calcium-carbonate-xtal-3D-SF.png/220px-Calcium-carbonate-xtal-3D-SF.png",
      "boiling": 700,
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Manganese(II) chloride",
      "boiling": 1,
      "melting": 654,
      "appearance": "pink solid (tetrahydrate)",
      "formula": "MnCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cis-MnCl2%28H2O%294.png/220px-Cis-MnCl2%28H2O%294.png",
      "color": "pink",
      "structure": "solid"
    },
    {
      "name": "Manganese(II) nitrate",
      "boiling": 100,
      "melting": 37,
      "appearance": "white powder",
      "formula": "Mn(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Manganese%28II%29_nitrate.svg/220px-Manganese%28II%29_nitrate.svg.png",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Manganese(II) acetate",
      "melting": 210,
      "appearance": "white crystals (anhydrous)light pink monoclinic crystals (tetrahydrate)",
      "formula": "Mn(CH3COO)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Manganese_acetate.png/220px-Manganese_acetate.png",
      "boiling": 700,
      "color": "white",
      "structure": "crystals"
    },
    {
      "name": "Zinc sulfate",
      "boiling": 740,
      "melting": 680,
      "appearance": "white powder",
      "formula": "ZnSO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Zinc_Sulfate.jpg/220px-Zinc_Sulfate.jpg",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Zinc phosphate",
      "melting": 900,
      "appearance": "white solid",
      "formula": "Zn3(PO4)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Fosfore%C4%8Dnan_zine%C4%8Dnat%C3%BD.PNG/220px-Fosfore%C4%8Dnan_zine%C4%8Dnat%C3%BD.PNG",
      "boiling": 700,
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Smithsonite",
      "formula": "ZnCO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Smithsonite-Willemite-cktsu-23a.jpg/260px-Smithsonite-Willemite-cktsu-23a.jpg",
      "melting": 700,
      "boiling": 700
    },
    {
      "name": "Zinc chloride",
      "boiling": 732,
      "melting": 290,
      "appearance": "white crystalline solid  hygroscopic and very deliquescent",
      "formula": "ZnCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Zinc_chloride.jpg/220px-Zinc_chloride.jpg"
    },
    {
      "name": "Zinc nitrate",
      "boiling": 700,
      "melting": 110,
      "appearance": "colorless, deliquescent crystals",
      "formula": "Zn(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Zinc_nitrate.png/220px-Zinc_nitrate.png",
      "color": "colorless",
      "structure": "crystals"
    },
    {
      "name": "Zinc acetate",
      "appearance": "White solid (all forms)",
      "formula": "Zn(CH3COO)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Zinc_acetate.JPG/220px-Zinc_acetate.JPG",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Barium carbonate",
      "boiling": 1,
      "melting": 811,
      "appearance": "white crystals",
      "formula": "BaCO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Barium_carbonate.png/150px-Barium_carbonate.png",
      "color": "white",
      "structure": "crystals"
    },
    {
      "name": "Barium oxalate",
      "melting": 400,
      "formula": "BaC2O4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Barium_oxalate.png/200px-Barium_oxalate.png",
      "boiling": 700
    },
    {
      "name": "Barium chloride",
      "boiling": 1,
      "melting": 962,
      "appearance": "White solid",
      "formula": "BaCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cotunnite_structure.png/220px-Cotunnite_structure.png",
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Barium nitrate",
      "melting": 592,
      "appearance": "white, lustrous crystals",
      "formula": "Ba(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Dusi%C4%8Dnan_barnat%C3%BD.JPG/220px-Dusi%C4%8Dnan_barnat%C3%BD.JPG",
      "boiling": 700,
      "color": "white",
      "structure": "crystals"
    },
    {
      "name": "Calcium sulfate",
      "melting": 1,
      "appearance": "white solid",
      "formula": "CaSO4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/CaSO4.tif/lossless-page1-220px-CaSO4.tif.png",
      "boiling": 700,
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Tricalcium phosphate",
      "appearance": "White amorphous powder",
      "formula": "Ca3(PO4)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ca3%28PO4%292_from_crystallography.jpg/220px-Ca3%28PO4%292_from_crystallography.jpg",
      "boiling": 700,
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Calcium carbonate",
      "melting": 1,
      "appearance": "Fine white powder; chalky taste",
      "formula": "CaCO3",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Calcium_carbonate.png/110px-Calcium_carbonate.png",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Calcium oxalate",
      "melting": 200,
      "appearance": "white solid",
      "formula": "CaC2O4",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Calcium_oxalate_resonance.png/150px-Calcium_oxalate_resonance.png",
      "boiling": 700,
      "color": "white",
      "structure": "solid"
    },
    {
      "name": "Calcium chloride",
      "boiling": 1,
      "melting": 772,
      "appearance": "White powder, hygroscopic",
      "formula": "CaCl2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kristallstruktur_Calciumchlorid.png/160px-Kristallstruktur_Calciumchlorid.png",
      "color": "white",
      "structure": "powder"
    },
    {
      "name": "Calcium nitrate",
      "melting": 561,
      "appearance": "colorless solid  hygroscopic",
      "formula": "Ca(NO3)2",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Calcium_nitrate.png/150px-Calcium_nitrate.png"
    }
  ];

var questions = {
    "cation": [
      {
        "id": 1,
        "question": "Da li se Vaša supstanca rastvara u vodi?",
        "answers": [
          {
            "text": "Ne, rastvaranjem supstance stvara se talog",
            "value": "insolubleInWater",
            "id": 1
          },
          {
            "text": "Da, i rastvor je bez boje",
            "value": "colorlessSolutionWithWater",
            "id": 2
          },
          {
            "text": "Da, i rastvor nije bezbojan",
            "value": "colorfulSolutionWithWater",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ]
      },
      {
        "id": 2,
        "question": "Da li Vaša supstanca pri reakciji sa razblaženom HCl daje talog?",
        "answers": [
          {
            "text": "Ne, ne dobija se talog",
            "value": "noReactionWithHCl",
            "id": 1
          },
          {
            "text": "Da, dobija se talog",
            "value": "reactionWithHCl",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 3,
        "question": "Nakon uvođenja tople vode u stvoreni talog dobija se rastvor?",
        "answers": [
          {
            "text": "Ne, talog je i dalje tu.",
            "value": "warmWaterInsoluble",
            "id": 1
          },
          {
            "text": "Da, talog se u potpunosti rastvorio.",
            "value": "warmWaterSoluble",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 4,
        "question": "U novodobijeni rastvor unesite K2CrO4. Da li je rastvor postao žut?",
        "answers": [
          {
            "text": "Ne, rastvor nije postao žut.",
            "value": "notYellowWithK2CrO4",
            "id": 1
          },
          {
            "text": "Da, rastvor je postao žut.",
            "value": "yellowWithK2CrO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 5,
        "question": "U novodobijeni rastvor unesite NH4OH. Da li se stvorio talog sive boje?",
        "answers": [
          {
            "text": "Ne, dobijen je rastvor (bez taloga)",
            "value": "solubleInNH4OH",
            "id": 1
          },
          {
            "text": "Ne, stvorio se talog druge boje",
            "value": "insolubleInNH4OH",
            "id": 2
          },
          {
            "text": "Da, stvorio se talog sive boje",
            "value": "greyWithNH4OH",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ]
      },
      {
        "id": 6,
        "question": "U novodobijeni rastvor unesite HNO3 (ili NaOH). Da li se stvorio talog bele boje?",
        "answers": [
          {
            "text": "Ne, nije se stvorio talog bele boje",
            "value": "notWhiteWithHNO3",
            "id": 1
          },
          {
            "text": "Da, stvorio se talog bele boje",
            "value": "whiteWithHNO3",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 7,
        "question": "Da li se Vaša supstanca rastvara u NH4OH (ili HNO3 ili NH4Cl)?",
        "answers": [
          {
            "text": "Ne, došlo je do pojave taloga",
            "value": "solubleRawInNH4OH",
            "id": 1
          },
          {
            "text": "Da, supstanca se rastvorila",
            "value": "insolubleRawInNH4OH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 8,
        "question": "Opišite talog koji je prethodno dobijen",
        "answers": [
          {
            "text": "Mrkocrveni, pihtijasti talog",
            "value": "darkRedSedimentFromNH4OH",
            "id": 1
          },
          {
            "text": "Beli, pihtijasti talog",
            "value": "whiteSedimentFromNH4OH",
            "id": 2
          },
          {
            "text": "Sivozeleni, pihtijasti talog",
            "value": "GrayishGreenSedimentFromNH4OH",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ]
      },
      {
        "id": 9,
        "question": "Da li se Vaša supstanca rastvara u (NH4)2S?",
        "answers": [
          {
            "text": "Ne, došlo je do pojave taloga",
            "value": "solubleRawIn(NH4)2S",
            "id": 1
          },
          {
            "text": "Da, supstanca se rastvorila",
            "value": "insolubleRawIn(NH4)2S",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 10,
        "question": "Opišite dobijeni talog",
        "answers": [
          {
            "text": "Talog je boje mesa",
            "value": "solubleRawIn(NH4)2S",
            "id": 1
          },
          {
            "text": "Talog je bele boje",
            "value": "insolubleRawIn(NH4)2S",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 11,
        "question": "Da li se Vaša supstanca rastvara u (NH4)2CO3 na temperaturi 60-70 stepeni?",
        "answers": [
          {
            "text": "Ne, stvorio se talog",
            "value": "insolubleRawIn(NH4)2CO3",
            "id": 1
          },
          {
            "text": "Da, dobija se rastvor, bez taloga",
            "value": "solubleRawIn(NH4)2CO3",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 12,
        "question": "Da li se dobijeni talog rastvara u CH3COOH?",
        "answers": [
          {
            "text": "Ne, stvorio se talog",
            "value": "insolubleRawIn(NH4)2CO3andCH3COOH",
            "id": 1
          },
          {
            "text": "Da, dobija se rastvor, bez taloga",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 13,
        "question": "Da li se dodavanjem K2Cr2O4 (ili K2Cr2O7) u dobijeni rastvor izdvaja žuti talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio žuti talog",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr",
            "id": 1
          },
          {
            "text": "Da, dobija se žuti talog",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      }
    ],
    "anion": [
      {
        "id": 14,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga razblaženom HCl (lakmus) i dodati 5 kapi BaCl2. Da li se pojavio beli talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio talog",
            "value": "noWhiteSedimentInBaCl2",
            "id": 1
          },
          {
            "text": "Da, dobija se beli talog",
            "value": "whiteSedimentInBaCl2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 15,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga sa 1-2 kapi konc. HNO3 (lakmus) i dodati (NH4)2MoO4 u višku. Da li se pojavio žuti talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio žuti talog",
            "value": "noYellowSedimentInNH42MoO4",
            "id": 1
          },
          {
            "text": "Da, dobija se žuti talog",
            "value": "yellowSedimentInNH42MoO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 16,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga sa 10 kapi mineralne kiseline (lakmus) i izdvojeni gas uvoditi u epruvetu sa Ba(OH)2. Da li je došlo do burnog izdvajanja gasa i zamućenja?",
        "answers": [
          {
            "text": "Ne, nije došlo do burnog izdvajanja gasa i zamućenja",
            "value": "noGasInBaOH2",
            "id": 1
          },
          {
            "text": "Da, došlo je do burnog izdvajanja gasa i zamućenja",
            "value": "gasInBaOH2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 17,
        "question": "U eprivetu sipati malo ispitivanog rastvora u kapima dodavati rastvor CaCl2. Da li je došlo do izdvajanja belog kristalnog taloga?",
        "answers": [
          {
            "text": "Ne, nije došlo do izdvajanja belog kristalnog taloga",
            "value": "noCrystalSedimentInCaCl2",
            "id": 1
          },
          {
            "text": "Da, došlo je do izdvajanja belog kristalnog taloga",
            "value": "crystalSedimentInCaCl2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 18,
        "question": "U epruvetu sa uzorkom dodati azotnu kiselinu do kisele reakcije i nekoliko kapi AgNO3. Da li se stvorio beo sirast talog?",
        "answers": [
          {
            "text": "Ne, nije došlo do izdvajanja beo sirast talog",
            "value": "noCheesySedimentInNH4OH",
            "id": 1
          },
          {
            "text": "Da, došlo je do izdvajanja beo sirast talog",
            "value": "cheesySedimentInNH4OH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 19,
        "question": "Rastvor za analizu zakiseliti sa razbl. H2SO4 i dodati čvrsti FeSO4 dok se ne nagradi zasićen rastvor. Dobro ga promućkati pa u rastvor pažljivo, niz zid epruvete lagano sipati konc. H2SO4. Da li je došlo do pojave prstena koji se gradi između dva sloja?",
        "answers": [
          {
            "text": "Ne, nije došlo do pojave prstena",
            "value": "noRingInH2SO4",
            "id": 1
          },
          {
            "text": "Da, došlo je do pojave prstena",
            "value": "ringInH2SO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      },
      {
        "id": 20,
        "question": "U epruvetu sa ispitivanim rastvorom dodati razblaženu H2SO4 i zagrevati. Da li se oseća miris nalik na sirće?",
        "answers": [
          {
            "text": "Ne, ne oseća se miris.",
            "value": "noVinegarSmellInH2SO4",
            "id": 1
          },
          {
            "text": "Da, oseća se miris.",
            "value": "vinegarSmellInH2SO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ]
      }
    ]
  };

var drl = `
package substanceRules
import java.util.ArrayList
import com.sbnz.model.Color
import com.sbnz.model.Structure
import com.sbnz.model.Experiment
import com.sbnz.model.Substance
import com.sbnz.model.ResponseDTO
import com.sbnz.model.Cation
import com.sbnz.model.Anion
import java.util.List


// ------------------ CATIONS ------------------------

rule "Silver"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "colorlessSolutionWithWater")
        exists Experiment(getCode() == "reactionWithHCl")
        exists Experiment(getCode() == "warmWaterInsoluble")
        exists Experiment(getCode() == "solubleInNH4OH")
        exists Experiment(getCode() == "whiteWithHNO3")
    then
        System.out.println("Silver");
        insert(new Cation("Silver"));
    end

rule "Lead"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "colorlessSolutionWithWater")
        exists Experiment(getCode() == "reactionWithHCl")
        exists Experiment(getCode() == "warmWaterSoluble")
        exists Experiment(getCode() == "yellowWithK2CrO4")
    then
        System.out.println("Lead");
        insert(new Cation("Lead"));
    end

rule "Mercury"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "colorlessSolutionWithWater")
        exists Experiment(getCode() == "reactionWithHCl")
        exists Experiment(getCode() == "warmWaterInsoluble")
        exists Experiment(getCode() == "greyWithNH4OH")
    then
        System.out.println("Mercury");
        insert(new Cation("Mercury"));
    end

rule "Iron"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawInNH4OH")
        exists Experiment(getCode() == "darkRedSedimentFromNH4OH")
        exists Experiment(getCode() == "noReactionWithHCl")
    then
        System.out.println("Iron");
        insert(new Cation("Iron"));
    end

rule "Aluminium"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawInNH4OH")
        exists Experiment(getCode() == "whiteSedimentFromNH4OH")
        exists Experiment(getCode() == "noReactionWithHCl")
    then
        System.out.println("Aluminium");
        insert(new Cation("Aluminium"));
    end

rule "Chromium"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawInNH4OH")
        exists Experiment(getCode() == "GrayishGreenSedimentFromNH4OH")
        exists Experiment(getCode() == "noReactionWithHCl")
        exists Experiment(getCode() == "solubleRawInNH4OH")
    then
        System.out.println("Chromium");
        insert(new Cation("Chromium"));
    end

rule "Manganese"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawIn(NH4)2S")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2SmeatColoredSediment")
        exists Experiment(getCode() == "noReactionWithHCl")
        exists Experiment(getCode() == "solubleRawInNH4OH")
        exists Experiment(getCode() == "solubleRawIn(NH4)2S")
    then
        System.out.println("Manganese");
        insert(new Cation("Manganese"));
    end

rule "Zinc"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawIn(NH4)2S")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2SwhiteSediment")
        exists Experiment(getCode() == "noReactionWithHCl")
        exists Experiment(getCode() == "solubleRawInNH4OH")
        exists Experiment(getCode() == "solubleRawIn(NH4)2S")
    then
        System.out.println("Zinc");
        insert(new Cation("Zinc"));
    end

rule "Barium"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr")
        exists Experiment(getCode() == "noReactionWithHCl")
        exists Experiment(getCode() == "solubleRawInNH4OH")
    then
        System.out.println("Barium");
        insert(new Cation("Barium"));
    end

rule "Calcium"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH")
        exists Experiment(getCode() == "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr")
        exists Experiment(getCode() == "noReactionWithHCl")
        exists Experiment(getCode() == "solubleRawInNH4OH")
    then
        System.out.println("Calcium");
        insert(new Cation("Calcium"));
    end

// ------------------ ANIONS ------------------------

rule "SO4"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "whiteSedimentInBaCl2")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
    then
        System.out.println("SO4");
        insert(new Anion("SO4"));
    end

rule "PO4"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "yellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
    then
        System.out.println("PO4");
        insert(new Anion("PO4"));
    end

rule "CO3"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "gasInBaOH2")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
    then
        System.out.println("CO3");
        insert(new Anion("CO3"));
    end

rule "C2O4"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "crystalSedimentInCaCl2")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
    then
        System.out.println("C2O4");
        insert(new Anion("C2O4"));
    end

rule "Cl"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "cheesySedimentInNH4OH")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
    then
        System.out.println("Cl");
        insert(new Anion("Cl"));
    end

rule "NO3"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noCheesySedimentInNH4OH")
        exists Experiment(getCode() == "noVinegarSmellInH2SO4")
        exists Experiment(getCode() == "ringInH2SO4")
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
    then
        System.out.println("NO3");
        insert(new Anion("NO3"));
    end

rule "CH3COO"
    lock-on-active true
    when
        $s : ResponseDTO();
        exists Experiment(getCode() == "noCheesySedimentInNH4OH")
        exists Experiment(getCode() == "vinegarSmellInH2SO4")
        exists Experiment(getCode() == "noRingInH2SO4")
        exists Experiment(getCode() == "noYellowSedimentInNH42MoO4")
        exists Experiment(getCode() == "noGasInBaOH2")
        exists Experiment(getCode() == "noCrystalSedimentInCaCl2")
        exists Experiment(getCode() == "noWhiteSedimentInBaCl2")
    then
        System.out.println("CH3COO");
        insert(new Anion("CH3COO"));
    end

// ------------------ SUBSTANCES ------------------------

rule "Silver sulfate - Ag2SO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "colorless")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Silver sulfate - Ag2SO4");
        $s.addSolution("Silver sulfate - Ag2SO4");

    end

rule "Silver phosphate - Ag3PO4"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Silver phosphate - Ag3PO4");
        $s.addSolution("Silver phosphate - Ag3PO4");

    end

rule "Silver carbonate - Ag2CO3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "pale yellow")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Silver carbonate - Ag2CO3");
        $s.addSolution("Silver carbonate - Ag2CO3");

    end

rule "Silver oxalate - Ag2C2O4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "C2O4")

    then
        System.out.println("Silver oxalate - Ag2C2O4");
        $s.addSolution("Silver oxalate - Ag2C2O4");

    end

rule "Silver chloride - AgCl"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Silver chloride - AgCl");
        $s.addSolution("Silver chloride - AgCl");

    end

rule "Silver nitrate - AgNO3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "colorless")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Silver")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Silver nitrate - AgNO3");
        $s.addSolution("Silver nitrate - AgNO3");

    end

rule "Lead(II) sulfate - PbSO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Lead(II) sulfate - PbSO4");
        $s.addSolution("Lead(II) sulfate - PbSO4");

    end

rule "Lead(II) phosphate - Pb3(PO4)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Lead(II) phosphate - Pb3(PO4)2");
        $s.addSolution("Lead(II) phosphate - Pb3(PO4)2");

    end

rule "Cerussite - PbCO3"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Cerussite - PbCO3");
        $s.addSolution("Cerussite - PbCO3");

    end

rule "Lead(II) chloride - PbCl2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Lead(II) chloride - PbCl2");
        $s.addSolution("Lead(II) chloride - PbCl2");

    end

rule "Lead(II) nitrate - Pb(NO3)2"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Lead(II) nitrate - Pb(NO3)2");
        $s.addSolution("Lead(II) nitrate - Pb(NO3)2");

    end

rule "Lead(II) acetate - Pb(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Lead")
        exists Anion(getElement() == "CH3COO")

    then
        System.out.println("Lead(II) acetate - Pb(CH3COO)2");
        $s.addSolution("Lead(II) acetate - Pb(CH3COO)2");

    end

rule "Mercury(II) sulfate - HgSO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Mercury")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Mercury(II) sulfate - HgSO4");
        $s.addSolution("Mercury(II) sulfate - HgSO4");

    end

rule "Mercury(II) chloride - HgCl2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Mercury")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Mercury(II) chloride - HgCl2");
        $s.addSolution("Mercury(II) chloride - HgCl2");

    end

rule "Mercury(II) nitrate - Hg(NO3)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "colorless")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Mercury")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Mercury(II) nitrate - Hg(NO3)2");
        $s.addSolution("Mercury(II) nitrate - Hg(NO3)2");

    end

rule "Mercury(II) acetate - Hg(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "pale yellow")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Mercury")
        exists Anion(getElement() == "CH3COO")

    then
        System.out.println("Mercury(II) acetate - Hg(CH3COO)2");
        $s.addSolution("Mercury(II) acetate - Hg(CH3COO)2");

    end

rule "Iron(III) sulfate - Fe2(SO4)3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "grayish-white")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Iron")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Iron(III) sulfate - Fe2(SO4)3");
        $s.addSolution("Iron(III) sulfate - Fe2(SO4)3");

    end

rule "Iron(III) phosphate - FePO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "yellow-brown")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Iron")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Iron(III) phosphate - FePO4");
        $s.addSolution("Iron(III) phosphate - FePO4");

    end

rule "Iron(III) chloride - FeCl3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "brown")
        Structure(getAnswer() == "solution")
        exists Cation(getElement() == "Iron")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Iron(III) chloride - FeCl3");
        $s.addSolution("Iron(III) chloride - FeCl3");

    end

rule "Iron(III) nitrate - Fe(NO3)3"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Iron")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Iron(III) nitrate - Fe(NO3)3");
        $s.addSolution("Iron(III) nitrate - Fe(NO3)3");

    end

rule "Aluminium sulfate - Al2(SO4)3"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Aluminium")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Aluminium sulfate - Al2(SO4)3");
        $s.addSolution("Aluminium sulfate - Al2(SO4)3");

    end

rule "Aluminium phosphate - AlPO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Aluminium")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Aluminium phosphate - AlPO4");
        $s.addSolution("Aluminium phosphate - AlPO4");

    end

rule "Aluminium chloride - AlCl3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Aluminium")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Aluminium chloride - AlCl3");
        $s.addSolution("Aluminium chloride - AlCl3");

    end

rule "Aluminium nitrate - Al(NO3)3"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Aluminium")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Aluminium nitrate - Al(NO3)3");
        $s.addSolution("Aluminium nitrate - Al(NO3)3");

    end

rule "Chromium(III) sulfate - Cr2(SO4)3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "reddish-brown")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Chromium")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Chromium(III) sulfate - Cr2(SO4)3");
        $s.addSolution("Chromium(III) sulfate - Cr2(SO4)3");

    end

rule "Chromium(III) chloride - CrCl3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "purple")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Chromium")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Chromium(III) chloride - CrCl3");
        $s.addSolution("Chromium(III) chloride - CrCl3");

    end

rule "Manganese(II) sulfate - MnSO4"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Manganese")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Manganese(II) sulfate - MnSO4");
        $s.addSolution("Manganese(II) sulfate - MnSO4");

    end

rule "Manganese(II) carbonate - MnCO3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Manganese")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Manganese(II) carbonate - MnCO3");
        $s.addSolution("Manganese(II) carbonate - MnCO3");

    end

rule "Manganese(II) chloride - MnCl2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "pink")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Manganese")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Manganese(II) chloride - MnCl2");
        $s.addSolution("Manganese(II) chloride - MnCl2");

    end

rule "Manganese(II) nitrate - Mn(NO3)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Manganese")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Manganese(II) nitrate - Mn(NO3)2");
        $s.addSolution("Manganese(II) nitrate - Mn(NO3)2");

    end

rule "Manganese(II) acetate - Mn(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Manganese")
        exists Anion(getElement() == "CH3COO")

    then
        System.out.println("Manganese(II) acetate - Mn(CH3COO)2");
        $s.addSolution("Manganese(II) acetate - Mn(CH3COO)2");

    end

rule "Zinc sulfate - ZnSO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Zinc sulfate - ZnSO4");
        $s.addSolution("Zinc sulfate - ZnSO4");

    end

rule "Zinc phosphate - Zn3(PO4)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Zinc phosphate - Zn3(PO4)2");
        $s.addSolution("Zinc phosphate - Zn3(PO4)2");

    end

rule "Smithsonite - ZnCO3"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Smithsonite - ZnCO3");
        $s.addSolution("Smithsonite - ZnCO3");

    end

rule "Zinc chloride - ZnCl2"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Zinc chloride - ZnCl2");
        $s.addSolution("Zinc chloride - ZnCl2");

    end

rule "Zinc nitrate - Zn(NO3)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "colorless")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Zinc nitrate - Zn(NO3)2");
        $s.addSolution("Zinc nitrate - Zn(NO3)2");

    end

rule "Zinc acetate - Zn(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Zinc")
        exists Anion(getElement() == "CH3COO")

    then
        System.out.println("Zinc acetate - Zn(CH3COO)2");
        $s.addSolution("Zinc acetate - Zn(CH3COO)2");

    end

rule "Barium carbonate - BaCO3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Barium")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Barium carbonate - BaCO3");
        $s.addSolution("Barium carbonate - BaCO3");

    end

rule "Barium oxalate - BaC2O4"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Barium")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Barium oxalate - BaC2O4");
        $s.addSolution("Barium oxalate - BaC2O4");

    end

rule "Barium chloride - BaCl2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Barium")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Barium chloride - BaCl2");
        $s.addSolution("Barium chloride - BaCl2");

    end

rule "Barium nitrate - Ba(NO3)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "crystals")
        exists Cation(getElement() == "Barium")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Barium nitrate - Ba(NO3)2");
        $s.addSolution("Barium nitrate - Ba(NO3)2");

    end

rule "Calcium sulfate - CaSO4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "SO4")

    then
        System.out.println("Calcium sulfate - CaSO4");
        $s.addSolution("Calcium sulfate - CaSO4");

    end

rule "Tricalcium phosphate - Ca3(PO4)2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "PO4")

    then
        System.out.println("Tricalcium phosphate - Ca3(PO4)2");
        $s.addSolution("Tricalcium phosphate - Ca3(PO4)2");

    end

rule "Calcium carbonate - CaCO3"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "CO3")

    then
        System.out.println("Calcium carbonate - CaCO3");
        $s.addSolution("Calcium carbonate - CaCO3");

    end

rule "Calcium oxalate - CaC2O4"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "solid")
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "C2O4")

    then
        System.out.println("Calcium oxalate - CaC2O4");
        $s.addSolution("Calcium oxalate - CaC2O4");

    end

rule "Calcium chloride - CaCl2"
    when
        $s : ResponseDTO();
        Color(getAnswer() == "white")
        Structure(getAnswer() == "powder")
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "Cl")

    then
        System.out.println("Calcium chloride - CaCl2");
        $s.addSolution("Calcium chloride - CaCl2");

    end

rule "Calcium nitrate - Ca(NO3)2"
    when
        $s : ResponseDTO();
        exists Cation(getElement() == "Calcium")
        exists Anion(getElement() == "NO3")

    then
        System.out.println("Calcium nitrate - Ca(NO3)2");
        $s.addSolution("Calcium nitrate - Ca(NO3)2");

    end
`

var drl_q = `
package questionRules
import java.util.ArrayList
import com.sbnz.model.Color
import com.sbnz.model.Structure
import com.sbnz.model.Experiment
import com.sbnz.model.Substance
import com.sbnz.model.ResponseDTO
import com.sbnz.model.Cation
import com.sbnz.model.Anion
import com.sbnz.model.PreviousQuestion

-- DRL
rule "Question 1 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 1, answerId == 1);
    then
        $s.setQuestionId(7);
    end

rule "Question 1 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 1, answerId == 2);
    then
        $s.setQuestionId(2);
    end

rule "Question 1 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 1, answerId == 3);
    then
        $s.setQuestionId(7);
    end

rule "Question 1 Answer 4"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 1, answerId == 4);
    then
        $s.setQuestionId(2);
    end

rule "Question 2 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 2, answerId == 1);
    then
        $s.setQuestionId(7);
    end

rule "Question 2 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 2, answerId == 2);
    then
        $s.setQuestionId(3);
    end

rule "Question 2 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 2, answerId == 3);
    then
        $s.setQuestionId(3);
    end

rule "Question 3 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 3, answerId == 1);
    then
        $s.setQuestionId(5);
    end

rule "Question 3 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 3, answerId == 2);
    then
        $s.setQuestionId(4);
    end

rule "Question 3 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 3, answerId == 3);
    then
        $s.setQuestionId(5);
    end

rule "Question 4 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 4, answerId == 1);
    then
        $s.setQuestionId(7);
    end

rule "Question 4 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 4, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 4 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 4, answerId == 3);
    then
        $s.setQuestionId(7);
    end

rule "Question 5 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 5, answerId == 1);
    then
        $s.setQuestionId(6);
    end

rule "Question 5 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 5, answerId == 2);
    then
        $s.setQuestionId(7);
    end

rule "Question 5 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 5, answerId == 3);
    then
        $s.setQuestionId(14);
    end

rule "Question 5 Answer 4"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 5, answerId == 4);
    then
        $s.setQuestionId(6);
    end

rule "Question 6 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 6, answerId == 1);
    then
        $s.setQuestionId(7);
    end

rule "Question 6 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 6, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 6 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 6, answerId == 3);
    then
        $s.setQuestionId(7);
    end

rule "Question 7 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 7, answerId == 1);
    then
        $s.setQuestionId(8);
    end

rule "Question 7 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 7, answerId == 2);
    then
        $s.setQuestionId(9);
    end

rule "Question 7 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 7, answerId == 3);
    then
        $s.setQuestionId(9);
    end

rule "Question 8 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 8, answerId == 1);
    then
        $s.setQuestionId(14);
    end

rule "Question 8 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 8, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 8 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 8, answerId == 3);
    then
        $s.setQuestionId(14);
    end

rule "Question 8 Answer 4"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 8, answerId == 4);
    then
        $s.setQuestionId(9);
    end

rule "Question 9 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 9, answerId == 1);
    then
        $s.setQuestionId(11);
    end

rule "Question 9 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 9, answerId == 2);
    then
        $s.setQuestionId(10);
    end

rule "Question 9 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 9, answerId == 3);
    then
        $s.setQuestionId(11);
    end

rule "Question 10 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 10, answerId == 1);
    then
        $s.setQuestionId(14);
    end

rule "Question 10 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 10, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 10 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 10, answerId == 3);
    then
        $s.setQuestionId(11);
    end

rule "Question 11 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 11, answerId == 1);
    then
        $s.setQuestionId(14);
    end

rule "Question 11 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 11, answerId == 2);
    then
        $s.setQuestionId(12);
    end

rule "Question 11 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 11, answerId == 3);
    then
        $s.setQuestionId(14);
    end

rule "Question 12 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 12, answerId == 1);
    then
        $s.setQuestionId(13);
    end

rule "Question 12 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 12, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 12 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 12, answerId == 3);
    then
        $s.setQuestionId(14);
    end

rule "Question 13 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 13, answerId == 1);
    then
        $s.setQuestionId(14);
    end

rule "Question 13 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 13, answerId == 2);
    then
        $s.setQuestionId(14);
    end

rule "Question 13 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 13, answerId == 3);
    then
        $s.setQuestionId(14);
    end

rule "Question 14 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 14, answerId == 1);
    then
        $s.setQuestionId(15);
    end

rule "Question 14 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 14, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 14 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 14, answerId == 3);
    then
        $s.setQuestionId(15);
    end

rule "Question 15 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 15, answerId == 1);
    then
        $s.setQuestionId(16);
    end

rule "Question 15 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 15, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 15 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 15, answerId == 3);
    then
        $s.setQuestionId(16);
    end

rule "Question 16 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 16, answerId == 1);
    then
        $s.setQuestionId(17);
    end

rule "Question 16 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 16, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 16 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 16, answerId == 3);
    then
        $s.setQuestionId(17);
    end

rule "Question 17 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 17, answerId == 1);
    then
        $s.setQuestionId(18);
    end

rule "Question 17 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 17, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 17 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 17, answerId == 3);
    then
        $s.setQuestionId(18);
    end

rule "Question 18 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 18, answerId == 1);
    then
        $s.setQuestionId(19);
    end

rule "Question 18 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 18, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 18 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 18, answerId == 3);
    then
        $s.setQuestionId(19);
    end

rule "Question 19 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 19, answerId == 1);
    then
        $s.setQuestionId(20);
    end

rule "Question 19 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 19, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 19 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 19, answerId == 3);
    then
        $s.setQuestionId(20);
    end

rule "Question 20 Answer 1"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 20, answerId == 1);
    then
        $s.setQuestionId(0);
    end

rule "Question 20 Answer 2"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 20, answerId == 2);
    then
        $s.setQuestionId(0);
    end

rule "Question 20 Answer 3"
    when
        $s : ResponseDTO();
        $previousQuestion : PreviousQuestion(questionId == 20, answerId == 3);
    then
        $s.setQuestionId(0);
    end
`

drls = `


package substanceRules
import java.util.ArrayList
import com.sbnz.model.Color
import com.sbnz.model.Structure
import com.sbnz.model.Experiment
import com.sbnz.model.Substance
import com.sbnz.model.ResponseDTO
import com.sbnz.model.Cation
import com.sbnz.model.CationGroup
import com.sbnz.model.Anion
import java.util.List
import java.util.Arrays


// ------------------ CATION-GROUPS ------------------------
rule "Group1"
    lock-on-active true
    when
        allNeededExperimentsPresent(Arrays.asList("colorlessSolutionWithWater", "reactionWithHCl");)
    then
        System.out.println("Group1");
        insert(new CationGroup("1"));
    end
rule "Group2"
    lock-on-active true
    when
        allNeededExperimentsPresent(Arrays.asList("insolubleRawInNH4OH", "noReactionWithHCl");)
    then
        System.out.println("Group2");
        insert(new CationGroup("2"));
    end

rule "Group3"
    lock-on-active true
    when
        allNeededExperimentsPresent(Arrays.asList("noReactionWithHCl", "solubleRawInNH4OH", "solubleRawIn(NH4)2S");)
    then
        System.out.println("Group3");
        insert(new CationGroup("3"));
    end
rule "Group4"
    lock-on-active true
    when
        allNeededExperimentsPresent(Arrays.asList("insolubleRawIn(NH4)2CO3", "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH", "noReactionWithHCl", "solubleRawInNH4OH");)
    then
        System.out.println("Group4");
        insert(new CationGroup("4"));
    end


// ------------------ CATIONS ------------------------
rule "Silver"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "1");
        allNeededExperimentsPresent(Arrays.asList("warmWaterInsoluble", "solubleInNH4OH", "whiteWithHNO3");)
    then
        System.out.println("Silver");
        insert(new Cation("Silver"));
    end

rule "Lead"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "1");
        allNeededExperimentsPresent(Arrays.asList("warmWaterSoluble", "yellowWithK2CrO4");)
    then
        System.out.println("Lead");
        insert(new Cation("Lead"));
    end

rule "Mercury"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "1");
        allNeededExperimentsPresent(Arrays.asList("warmWaterInsoluble", "greyWithNH4OH");)
    then
        System.out.println("Mercury");
        insert(new Cation("Mercury"));
    end

rule "Iron"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "2");
        allNeededExperimentsPresent(Arrays.asList("darkRedSedimentFromNH4OH");)
    then
        System.out.println("Iron");
        insert(new Cation("Iron"));
    end

rule "Aluminium"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "2");
        allNeededExperimentsPresent(Arrays.asList("whiteSedimentFromNH4OH");)
    then
        System.out.println("Aluminium");
        insert(new Cation("Aluminium"));
    end

rule "Chromium"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "2");
        allNeededExperimentsPresent(Arrays.asList("GrayishGreenSedimentFromNH4OH");)
    then
        System.out.println("Chromium");
        insert(new Cation("Chromium"));
    end

rule "Manganese"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "3");
        allNeededExperimentsPresent(Arrays.asList("insolubleRawIn(NH4)2SmeatColoredSediment");)
    then
        System.out.println("Manganese");
        insert(new Cation("Manganese"));
    end

rule "Zinc"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "3");
        allNeededExperimentsPresent(Arrays.asList("insolubleRawIn(NH4)2SwhiteSediment");)
    then
        System.out.println("Zinc");
        insert(new Cation("Zinc"));
    end

rule "Barium"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "4");
        allNeededExperimentsPresent(Arrays.asList("insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr");)
    then
        System.out.println("Barium");
        insert(new Cation("Barium"));
    end

rule "Calcium"
    no-loop
    when
        $s : ResponseDTO();
        exists CationGroup(code == "4");
        allNeededExperimentsPresent(Arrays.asList("insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr");)
    then
        System.out.println("Calcium");
        insert(new Cation("Calcium"));
    end
// ------------------ ANIONS ------------------------
rule "SO4"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "whiteSedimentInBaCl2", "noRingInH2SO4", "noVinegarSmellInH2SO4");)
    then
        System.out.println("SO4");
        insert(new Anion("SO4"));
    end

rule "PO4"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noWhiteSedimentInBaCl2", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "yellowSedimentInNH42MoO4", "noRingInH2SO4", "noVinegarSmellInH2SO4");)
    then
        System.out.println("PO4");
        insert(new Anion("PO4"));
    end

rule "CO3"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noWhiteSedimentInBaCl2", "noYellowSedimentInNH42MoO4", "noCrystalSedimentInCaCl2", "gasInBaOH2", "noRingInH2SO4", "noVinegarSmellInH2SO4");)
    then
        System.out.println("CO3");
        insert(new Anion("CO3"));
    end

rule "C2O4"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noWhiteSedimentInBaCl2", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "crystalSedimentInCaCl2", "noRingInH2SO4", "noVinegarSmellInH2SO4");)
    then
        System.out.println("C2O4");
        insert(new Anion("C2O4"));
    end

rule "Cl"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("cheesySedimentInNH4OH", "noRingInH2SO4", "noVinegarSmellInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2");)
    then
        System.out.println("Cl");
        insert(new Anion("Cl"));
    end

rule "NO3"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noCheesySedimentInNH4OH", "noVinegarSmellInH2SO4", "ringInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2");)
    then
        System.out.println("NO3");
        insert(new Anion("NO3"));
    end

rule "CH3COO"
    lock-on-active true
    when
        $s : ResponseDTO();
        allNeededExperimentsPresent(Arrays.asList("noCheesySedimentInNH4OH", "vinegarSmellInH2SO4", "noRingInH2SO4", "noYellowSedimentInNH42MoO4", "noGasInBaOH2", "noCrystalSedimentInCaCl2", "noWhiteSedimentInBaCl2");)
    then
        System.out.println("CH3COO");
        insert(new Anion("CH3COO"));
    end
    // ------------------ SUBSTANCES ------------------------


rule "Silver sulfate - Ag2SO4"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "crystals")
        exists Cation(element == "Silver")
        exists Anion(element == "SO4")

    then
        System.out.println("Silver sulfate - Ag2SO4");
        $s.addSolution("Silver sulfate - Ag2SO4");

    end

rule "Silver phosphate - Ag3PO4"
    when
        $s : ResponseDTO();
        Color(answer == "brown")
        Structure(answer == "powder")
        exists Cation(element == "Silver")
        exists Anion(element == "PO4")

    then
        System.out.println("Silver phosphate - Ag3PO4");
        $s.addSolution("Silver phosphate - Ag3PO4");

    end

rule "Silver carbonate - Ag2CO3"
    when
        $s : ResponseDTO();
        Color(answer == "pale yellow")
        Structure(answer == "crystals")
        exists Cation(element == "Silver")
        exists Anion(element == "CO3")

    then
        System.out.println("Silver carbonate - Ag2CO3");
        $s.addSolution("Silver carbonate - Ag2CO3");

    end

rule "Silver oxalate - Ag2C2O4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Silver")
        exists Anion(element == "C2O4")

    then
        System.out.println("Silver oxalate - Ag2C2O4");
        $s.addSolution("Silver oxalate - Ag2C2O4");

    end

rule "Silver chloride - AgCl"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Silver")
        exists Anion(element == "Cl")

    then
        System.out.println("Silver chloride - AgCl");
        $s.addSolution("Silver chloride - AgCl");

    end

rule "Silver nitrate - AgNO3"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "solid")
        exists Cation(element == "Silver")
        exists Anion(element == "NO3")

    then
        System.out.println("Silver nitrate - AgNO3");
        $s.addSolution("Silver nitrate - AgNO3");

    end

rule "Lead(II) sulfate - PbSO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Lead")
        exists Anion(element == "SO4")

    then
        System.out.println("Lead(II) sulfate - PbSO4");
        $s.addSolution("Lead(II) sulfate - PbSO4");

    end

rule "Lead(II) phosphate - Pb3(PO4)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Lead")
        exists Anion(element == "PO4")

    then
        System.out.println("Lead(II) phosphate - Pb3(PO4)2");
        $s.addSolution("Lead(II) phosphate - Pb3(PO4)2");

    end

rule "Cerussite - PbCO3"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "crystals")
        exists Cation(element == "Lead")
        exists Anion(element == "CO3")

    then
        System.out.println("Cerussite - PbCO3");
        $s.addSolution("Cerussite - PbCO3");

    end

rule "Lead(II) chloride - PbCl2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Lead")
        exists Anion(element == "Cl")

    then
        System.out.println("Lead(II) chloride - PbCl2");
        $s.addSolution("Lead(II) chloride - PbCl2");

    end

rule "Lead(II) nitrate - Pb(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Lead")
        exists Anion(element == "NO3")

    then
        System.out.println("Lead(II) nitrate - Pb(NO3)2");
        $s.addSolution("Lead(II) nitrate - Pb(NO3)2");

    end

rule "Lead(II) acetate - Pb(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Lead")
        exists Anion(element == "CH3COO")

    then
        System.out.println("Lead(II) acetate - Pb(CH3COO)2");
        $s.addSolution("Lead(II) acetate - Pb(CH3COO)2");

    end

rule "Mercury(II) sulfate - HgSO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Mercury")
        exists Anion(element == "SO4")

    then
        System.out.println("Mercury(II) sulfate - HgSO4");
        $s.addSolution("Mercury(II) sulfate - HgSO4");

    end

rule "Mercury(II) chloride - HgCl2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Mercury")
        exists Anion(element == "Cl")

    then
        System.out.println("Mercury(II) chloride - HgCl2");
        $s.addSolution("Mercury(II) chloride - HgCl2");

    end

rule "Mercury(II) nitrate - Hg(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "crystals")
        exists Cation(element == "Mercury")
        exists Anion(element == "NO3")

    then
        System.out.println("Mercury(II) nitrate - Hg(NO3)2");
        $s.addSolution("Mercury(II) nitrate - Hg(NO3)2");

    end

rule "Mercury(II) acetate - Hg(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(answer == "pale yellow")
        Structure(answer == "crystals")
        exists Cation(element == "Mercury")
        exists Anion(element == "CH3COO")

    then
        System.out.println("Mercury(II) acetate - Hg(CH3COO)2");
        $s.addSolution("Mercury(II) acetate - Hg(CH3COO)2");

    end

rule "Iron(III) sulfate - Fe2(SO4)3"
    when
        $s : ResponseDTO();
        Color(answer == "grayish-white")
        Structure(answer == "crystals")
        exists Cation(element == "Iron")
        exists Anion(element == "SO4")

    then
        System.out.println("Iron(III) sulfate - Fe2(SO4)3");
        $s.addSolution("Iron(III) sulfate - Fe2(SO4)3");

    end

rule "Iron(III) phosphate - FePO4"
    when
        $s : ResponseDTO();
        Color(answer == "yellow-brown")
        Structure(answer == "solid")
        exists Cation(element == "Iron")
        exists Anion(element == "PO4")

    then
        System.out.println("Iron(III) phosphate - FePO4");
        $s.addSolution("Iron(III) phosphate - FePO4");

    end

rule "Iron(III) chloride - FeCl3"
    when
        $s : ResponseDTO();
        Color(answer == "brown")
        Structure(answer == "solution")
        exists Cation(element == "Iron")
        exists Anion(element == "Cl")

    then
        System.out.println("Iron(III) chloride - FeCl3");
        $s.addSolution("Iron(III) chloride - FeCl3");

    end

rule "Iron(III) nitrate - Fe(NO3)3"
    when
        $s : ResponseDTO();
        Color(answer == "yellow")
        Structure(answer == "crystals")
        exists Cation(element == "Iron")
        exists Anion(element == "NO3")

    then
        System.out.println("Iron(III) nitrate - Fe(NO3)3");
        $s.addSolution("Iron(III) nitrate - Fe(NO3)3");

    end

rule "Aluminium sulfate - Al2(SO4)3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Aluminium")
        exists Anion(element == "SO4")

    then
        System.out.println("Aluminium sulfate - Al2(SO4)3");
        $s.addSolution("Aluminium sulfate - Al2(SO4)3");

    end

rule "Aluminium phosphate - AlPO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Aluminium")
        exists Anion(element == "PO4")

    then
        System.out.println("Aluminium phosphate - AlPO4");
        $s.addSolution("Aluminium phosphate - AlPO4");

    end

rule "Aluminium chloride - AlCl3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Aluminium")
        exists Anion(element == "Cl")

    then
        System.out.println("Aluminium chloride - AlCl3");
        $s.addSolution("Aluminium chloride - AlCl3");

    end

rule "Aluminium nitrate - Al(NO3)3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Aluminium")
        exists Anion(element == "NO3")

    then
        System.out.println("Aluminium nitrate - Al(NO3)3");
        $s.addSolution("Aluminium nitrate - Al(NO3)3");

    end

rule "Chromium(III) sulfate - Cr2(SO4)3"
    when
        $s : ResponseDTO();
        Color(answer == "reddish-brown")
        Structure(answer == "crystals")
        exists Cation(element == "Chromium")
        exists Anion(element == "SO4")

    then
        System.out.println("Chromium(III) sulfate - Cr2(SO4)3");
        $s.addSolution("Chromium(III) sulfate - Cr2(SO4)3");

    end

rule "Chromium(III) chloride - CrCl3"
    when
        $s : ResponseDTO();
        Color(answer == "purple")
        Structure(answer == "crystals")
        exists Cation(element == "Chromium")
        exists Anion(element == "Cl")

    then
        System.out.println("Chromium(III) chloride - CrCl3");
        $s.addSolution("Chromium(III) chloride - CrCl3");

    end

rule "Manganese(II) sulfate - MnSO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Manganese")
        exists Anion(element == "SO4")

    then
        System.out.println("Manganese(II) sulfate - MnSO4");
        $s.addSolution("Manganese(II) sulfate - MnSO4");

    end

rule "Manganese(II) carbonate - MnCO3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Manganese")
        exists Anion(element == "CO3")

    then
        System.out.println("Manganese(II) carbonate - MnCO3");
        $s.addSolution("Manganese(II) carbonate - MnCO3");

    end

rule "Manganese(II) chloride - MnCl2"
    when
        $s : ResponseDTO();
        Color(answer == "pink")
        Structure(answer == "solid")
        exists Cation(element == "Manganese")
        exists Anion(element == "Cl")

    then
        System.out.println("Manganese(II) chloride - MnCl2");
        $s.addSolution("Manganese(II) chloride - MnCl2");

    end

rule "Manganese(II) nitrate - Mn(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Manganese")
        exists Anion(element == "NO3")

    then
        System.out.println("Manganese(II) nitrate - Mn(NO3)2");
        $s.addSolution("Manganese(II) nitrate - Mn(NO3)2");

    end

rule "Manganese(II) acetate - Mn(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Manganese")
        exists Anion(element == "CH3COO")

    then
        System.out.println("Manganese(II) acetate - Mn(CH3COO)2");
        $s.addSolution("Manganese(II) acetate - Mn(CH3COO)2");

    end

rule "Zinc sulfate - ZnSO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Zinc")
        exists Anion(element == "SO4")

    then
        System.out.println("Zinc sulfate - ZnSO4");
        $s.addSolution("Zinc sulfate - ZnSO4");

    end

rule "Zinc phosphate - Zn3(PO4)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Zinc")
        exists Anion(element == "PO4")

    then
        System.out.println("Zinc phosphate - Zn3(PO4)2");
        $s.addSolution("Zinc phosphate - Zn3(PO4)2");

    end

rule "Smithsonite - ZnCO3"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "crystal")
        exists Cation(element == "Zinc")
        exists Anion(element == "CO3")

    then
        System.out.println("Smithsonite - ZnCO3");
        $s.addSolution("Smithsonite - ZnCO3");

    end

rule "Zinc chloride - ZnCl2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Zinc")
        exists Anion(element == "Cl")

    then
        System.out.println("Zinc chloride - ZnCl2");
        $s.addSolution("Zinc chloride - ZnCl2");

    end

rule "Zinc nitrate - Zn(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "colorless")
        Structure(answer == "crystals")
        exists Cation(element == "Zinc")
        exists Anion(element == "NO3")

    then
        System.out.println("Zinc nitrate - Zn(NO3)2");
        $s.addSolution("Zinc nitrate - Zn(NO3)2");

    end

rule "Zinc acetate - Zn(CH3COO)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Zinc")
        exists Anion(element == "CH3COO")

    then
        System.out.println("Zinc acetate - Zn(CH3COO)2");
        $s.addSolution("Zinc acetate - Zn(CH3COO)2");

    end

rule "Barium carbonate - BaCO3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Barium")
        exists Anion(element == "CO3")

    then
        System.out.println("Barium carbonate - BaCO3");
        $s.addSolution("Barium carbonate - BaCO3");

    end

rule "Barium oxalate - BaC2O4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Barium")
        exists Anion(element == "CO3")

    then
        System.out.println("Barium oxalate - BaC2O4");
        $s.addSolution("Barium oxalate - BaC2O4");

    end

rule "Barium chloride - BaCl2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Barium")
        exists Anion(element == "CO3")

    then
        System.out.println("Barium chloride - BaCl2");
        $s.addSolution("Barium chloride - BaCl2");

    end

rule "Barium nitrate - Ba(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "crystals")
        exists Cation(element == "Barium")
        exists Anion(element == "NO3")

    then
        System.out.println("Barium nitrate - Ba(NO3)2");
        $s.addSolution("Barium nitrate - Ba(NO3)2");

    end

rule "Calcium sulfate - CaSO4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Calcium")
        exists Anion(element == "SO4")

    then
        System.out.println("Calcium sulfate - CaSO4");
        $s.addSolution("Calcium sulfate - CaSO4");

    end

rule "Tricalcium phosphate - Ca3(PO4)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Calcium")
        exists Anion(element == "PO4")

    then
        System.out.println("Tricalcium phosphate - Ca3(PO4)2");
        $s.addSolution("Tricalcium phosphate - Ca3(PO4)2");

    end

rule "Calcium carbonate - CaCO3"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Calcium")
        exists Anion(element == "CO3")

    then
        System.out.println("Calcium carbonate - CaCO3");
        $s.addSolution("Calcium carbonate - CaCO3");

    end

rule "Calcium oxalate - CaC2O4"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "solid")
        exists Cation(element == "Calcium")
        exists Anion(element == "C2O4")

    then
        System.out.println("Calcium oxalate - CaC2O4");
        $s.addSolution("Calcium oxalate - CaC2O4");

    end

rule "Calcium chloride - CaCl2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Calcium")
        exists Anion(element == "Cl")

    then
        System.out.println("Calcium chloride - CaCl2");
        $s.addSolution("Calcium chloride - CaCl2");

    end

rule "Calcium nitrate - Ca(NO3)2"
    when
        $s : ResponseDTO();
        Color(answer == "white")
        Structure(answer == "powder")
        exists Cation(element == "Calcium")
        exists Anion(element == "NO3")

    then
        System.out.println("Calcium nitrate - Ca(NO3)2");
        $s.addSolution("Calcium nitrate - Ca(NO3)2");

    end

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
end`

var qn = {
    "questions": [
      {
        "id": 14,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga razblaženom HCl (lakmus) i dodati 5 kapi BaCl2. Da li se pojavio beli talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio talog",
            "value": "noWhiteSedimentInBaCl2",
            "id": 1
          },
          {
            "text": "Da, dobija se beli talog",
            "value": "whiteSedimentInBaCl2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          15,
          0,
          15
        ]
      },
      {
        "id": 15,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga sa 1-2 kapi konc. HNO3 (lakmus) i dodati (NH4)2MoO4 u višku. Da li se pojavio žuti talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio žuti talog",
            "value": "noYellowSedimentInNH42MoO4",
            "id": 1
          },
          {
            "text": "Da, dobija se žuti talog",
            "value": "yellowSedimentInNH42MoO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          16,
          0,
          16
        ]
      },
      {
        "id": 16,
        "question": "U eprivetu sipati malo ispitivanog rastvora, zakiseliti ga sa 10 kapi mineralne kiseline (lakmus) i izdvojeni gas uvoditi u epruvetu sa Ba(OH)2. Da li je došlo do burnog izdvajanja gasa i zamućenja?",
        "answers": [
          {
            "text": "Ne, nije došlo do burnog izdvajanja gasa i zamućenja",
            "value": "noGasInBaOH2",
            "id": 1
          },
          {
            "text": "Da, došlo je do burnog izdvajanja gasa i zamućenja",
            "value": "gasInBaOH2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          17,
          0,
          17
        ]
      },
      {
        "id": 17,
        "question": "U eprivetu sipati malo ispitivanog rastvora u kapima dodavati rastvor CaCl2. Da li je došlo do izdvajanja belog kristalnog taloga?",
        "answers": [
          {
            "text": "Ne, nije došlo do izdvajanja belog kristalnog taloga",
            "value": "noCrystalSedimentInCaCl2",
            "id": 1
          },
          {
            "text": "Da, došlo je do izdvajanja belog kristalnog taloga",
            "value": "crystalSedimentInCaCl2",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          18,
          0,
          18
        ]
      },
      {
        "id": 18,
        "question": "U epruvetu sa uzorkom dodati azotnu kiselinu do kisele reakcije i nekoliko kapi AgNO3. Da li se stvorio beo sirast talog?",
        "answers": [
          {
            "text": "Ne, nije došlo do izdvajanja beo sirast talog",
            "value": "noCheesySedimentInNH4OH",
            "id": 1
          },
          {
            "text": "Da, došlo je do izdvajanja beo sirast talog",
            "value": "cheesySedimentInNH4OH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          19,
          0,
          19
        ]
      },
      {
        "id": 19,
        "question": "Rastvor za analizu zakiseliti sa razbl. H2SO4 i dodati čvrsti FeSO4 dok se ne nagradi zasićen rastvor. Dobro ga promućkati pa u rastvor pažljivo, niz zid epruvete lagano sipati konc. H2SO4. Da li je došlo do pojave prstena koji se gradi između dva sloja?",
        "answers": [
          {
            "text": "Ne, nije došlo do pojave prstena",
            "value": "noRingInH2SO4",
            "id": 1
          },
          {
            "text": "Da, došlo je do pojave prstena",
            "value": "ringInH2SO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          20,
          0,
          20
        ]
      },
      {
        "id": 20,
        "question": "U epruvetu sa ispitivanim rastvorom dodati razblaženu H2SO4 i zagrevati. Da li se oseća miris nalik na sirće?",
        "answers": [
          {
            "text": "Ne, ne oseća se miris.",
            "value": "noVinegarSmellInH2SO4",
            "id": 1
          },
          {
            "text": "Da, oseća se miris.",
            "value": "vinegarSmellInH2SO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          0,
          0,
          0
        ]
      },
      {
        "id": 1,
        "question": "Da li se Vaša supstanca rastvara u vodi?",
        "answers": [
          {
            "text": "Ne, rastvaranjem supstance stvara se talog",
            "value": "insolubleInWater",
            "id": 1
          },
          {
            "text": "Da, i rastvor je bez boje",
            "value": "colorlessSolutionWithWater",
            "id": 2
          },
          {
            "text": "Da, i rastvor nije bezbojan",
            "value": "colorfulSolutionWithWater",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ],
        "nextQuestions": [
          7,
          2,
          7,
          2
        ]
      },
      {
        "id": 2,
        "question": "Da li Vaša supstanca pri reakciji sa razblaženom HCl daje talog?",
        "answers": [
          {
            "text": "Ne, ne dobija se talog",
            "value": "noReactionWithHCl",
            "id": 1
          },
          {
            "text": "Da, dobija se talog",
            "value": "reactionWithHCl",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          7,
          3,
          3
        ]
      },
      {
        "id": 3,
        "question": "Nakon uvođenja tople vode u stvoreni talog dobija se rastvor?",
        "answers": [
          {
            "text": "Ne, talog je i dalje tu.",
            "value": "warmWaterInsoluble",
            "id": 1
          },
          {
            "text": "Da, talog se u potpunosti rastvorio.",
            "value": "warmWaterSoluble",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          5,
          4,
          5
        ]
      },
      {
        "id": 4,
        "question": "U novodobijeni rastvor unesite K2CrO4. Da li je rastvor postao žut?",
        "answers": [
          {
            "text": "Ne, rastvor nije postao žut.",
            "value": "notYellowWithK2CrO4",
            "id": 1
          },
          {
            "text": "Da, rastvor je postao žut.",
            "value": "yellowWithK2CrO4",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          7,
          14,
          7
        ]
      },
      {
        "id": 5,
        "question": "U novodobijeni rastvor unesite NH4OH. Da li se stvorio talog sive boje?",
        "answers": [
          {
            "text": "Ne, dobijen je rastvor (bez taloga)",
            "value": "solubleInNH4OH",
            "id": 1
          },
          {
            "text": "Ne, stvorio se talog druge boje",
            "value": "insolubleInNH4OH",
            "id": 2
          },
          {
            "text": "Da, stvorio se talog sive boje",
            "value": "greyWithNH4OH",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ],
        "nextQuestions": [
          6,
          7,
          14,
          6
        ]
      },
      {
        "id": 6,
        "question": "U novodobijeni rastvor unesite HNO3 (ili NaOH). Da li se stvorio talog bele boje?",
        "answers": [
          {
            "text": "Ne, nije se stvorio talog bele boje",
            "value": "notWhiteWithHNO3",
            "id": 1
          },
          {
            "text": "Da, stvorio se talog bele boje",
            "value": "whiteWithHNO3",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          7,
          14,
          7
        ]
      },
      {
        "id": 7,
        "question": "Da li se Vaša supstanca rastvara u NH4OH (ili HNO3 ili NH4Cl)?",
        "answers": [
          {
            "text": "Ne, došlo je do pojave taloga",
            "value": "solubleRawInNH4OH",
            "id": 1
          },
          {
            "text": "Da, supstanca se rastvorila",
            "value": "insolubleRawInNH4OH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          8,
          9,
          9
        ]
      },
      {
        "id": 8,
        "question": "Opišite talog koji je prethodno dobijen",
        "answers": [
          {
            "text": "Mrkocrveni, pihtijasti talog",
            "value": "darkRedSedimentFromNH4OH",
            "id": 1
          },
          {
            "text": "Beli, pihtijasti talog",
            "value": "whiteSedimentFromNH4OH",
            "id": 2
          },
          {
            "text": "Sivozeleni, pihtijasti talog",
            "value": "GrayishGreenSedimentFromNH4OH",
            "id": 3
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 4
          }
        ],
        "nextQuestions": [
          14,
          14,
          14,
          9
        ]
      },
      {
        "id": 9,
        "question": "Da li se Vaša supstanca rastvara u (NH4)2S?",
        "answers": [
          {
            "text": "Ne, došlo je do pojave taloga",
            "value": "solubleRawIn(NH4)2S",
            "id": 1
          },
          {
            "text": "Da, supstanca se rastvorila",
            "value": "insolubleRawIn(NH4)2S",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          11,
          10,
          11
        ]
      },
      {
        "id": 10,
        "question": "Opišite dobijeni talog",
        "answers": [
          {
            "text": "Talog je boje mesa",
            "value": "solubleRawIn(NH4)2S",
            "id": 1
          },
          {
            "text": "Talog je bele boje",
            "value": "insolubleRawIn(NH4)2S",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          14,
          14,
          11
        ]
      },
      {
        "id": 11,
        "question": "Da li se Vaša supstanca rastvara u (NH4)2CO3 na temperaturi 60-70 stepeni?",
        "answers": [
          {
            "text": "Ne, stvorio se talog",
            "value": "insolubleRawIn(NH4)2CO3",
            "id": 1
          },
          {
            "text": "Da, dobija se rastvor, bez taloga",
            "value": "solubleRawIn(NH4)2CO3",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          14,
          12,
          14
        ]
      },
      {
        "id": 12,
        "question": "Da li se dobijeni talog rastvara u CH3COOH?",
        "answers": [
          {
            "text": "Ne, stvorio se talog",
            "value": "insolubleRawIn(NH4)2CO3andCH3COOH",
            "id": 1
          },
          {
            "text": "Da, dobija se rastvor, bez taloga",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOH",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          13,
          14,
          14
        ]
      },
      {
        "id": 13,
        "question": "Da li se dodavanjem K2Cr2O4 (ili K2Cr2O7) u dobijeni rastvor izdvaja žuti talog?",
        "answers": [
          {
            "text": "Ne, nije se stvorio žuti talog",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHNotYellowWithK2Cr",
            "id": 1
          },
          {
            "text": "Da, dobija se žuti talog",
            "value": "insolubleRawIn(NH4)2CO3butSolubleInCH3COOHYellowWithK2Cr",
            "id": 2
          },
          {
            "text": "Nisam u mogućnosti da izvedem ovaj eksperiment ili ništa od ponuđenog",
            "value": "impossible",
            "id": 3
          }
        ],
        "nextQuestions": [
          14,
          14,
          14
        ]
      }
    ]
  }