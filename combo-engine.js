(() => {
  const uniquePush = (list, text) => {
    if (text && !list.includes(text)) {
      list.push(text);
    }
  };

  const chipsetMeta = {
    A320: {
      vendor: "amd",
      socket: "AM4",
      tier: "entry",
      pcie: 3,
      lanesNote: "Entry AM4 expansion. CPU PCIe lanes are the main performance path."
    },
    B350: {
      vendor: "amd",
      socket: "AM4",
      tier: "mid",
      pcie: 3,
      lanesNote: "Mainstream AM4 expansion with moderate PCIe lane budget."
    },
    X370: {
      vendor: "amd",
      socket: "AM4",
      tier: "high",
      pcie: 3,
      lanesNote: "High-end first-gen AM4 routing with larger I/O budget."
    },
    B450: {
      vendor: "amd",
      socket: "AM4",
      tier: "mid",
      pcie: 3,
      lanesNote: "Balanced AM4 chipset for PCIe 3 era Ryzen builds."
    },
    X470: {
      vendor: "amd",
      socket: "AM4",
      tier: "high",
      pcie: 3,
      lanesNote: "High-end AM4 chipset optimized for strong PCIe 3 configurations."
    },
    A520: {
      vendor: "amd",
      socket: "AM4",
      tier: "entry",
      pcie: 3,
      lanesNote: "Modern entry AM4 chipset with basic expansion capability."
    },
    B550: {
      vendor: "amd",
      socket: "AM4",
      tier: "mid",
      pcie: 4,
      lanesNote: "Mainstream AM4 chipset that unlocks PCIe 4 paths with compatible CPUs."
    },
    X570: {
      vendor: "amd",
      socket: "AM4",
      tier: "high",
      pcie: 4,
      lanesNote: "High-end AM4 chipset with broad PCIe 4 expansion."
    },
    A620: {
      vendor: "amd",
      socket: "AM5",
      tier: "entry",
      pcie: 4,
      lanesNote: "Entry AM5 chipset with limited expansion compared to B/X options."
    },
    B650: {
      vendor: "amd",
      socket: "AM5",
      tier: "mid",
      pcie: 5,
      lanesNote: "Mainstream AM5 chipset for balanced PCIe 5 ready builds."
    },
    B650E: {
      vendor: "amd",
      socket: "AM5",
      tier: "mid",
      pcie: 5,
      lanesNote: "Enhanced B650 routing with stronger guaranteed high-speed PCIe links."
    },
    X670: {
      vendor: "amd",
      socket: "AM5",
      tier: "high",
      pcie: 5,
      lanesNote: "High-end AM5 chipset with wider lane budget and I/O scale."
    },
    X670E: {
      vendor: "amd",
      socket: "AM5",
      tier: "high",
      pcie: 5,
      lanesNote: "Flagship AM5 routing with strongest PCIe lane flexibility."
    },
    B850: {
      vendor: "amd",
      socket: "AM5",
      tier: "mid",
      pcie: 5,
      lanesNote: "Newer mainstream AM5 chipset class with PCIe 5 focus."
    },
    X870: {
      vendor: "amd",
      socket: "AM5",
      tier: "high",
      pcie: 5,
      lanesNote: "Newer high-end AM5 chipset targeting high lane and I/O needs."
    },
    X870E: {
      vendor: "amd",
      socket: "AM5",
      tier: "high",
      pcie: 5,
      lanesNote: "Top AM5 chipset class for max PCIe 5 expansion planning."
    },
    H410: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "entry",
      pcie: 3,
      lanesNote: "Entry Intel 400-series chipset with basic expansion lanes."
    },
    B460: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "mid",
      pcie: 3,
      lanesNote: "Mainstream Intel 400-series lane budget for general-purpose builds."
    },
    H470: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "mid",
      pcie: 3,
      lanesNote: "Upper mainstream Intel 400-series lane and I/O profile."
    },
    Z490: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "high",
      pcie: 3,
      lanesNote: "High-end Intel 400-series platform with stronger tuning headroom."
    },
    H510: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "entry",
      pcie: 4,
      lanesNote: "Entry Intel 500-series class; basic but newer PCIe-era platform."
    },
    B560: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "mid",
      pcie: 4,
      lanesNote: "Balanced Intel 500-series lane profile with wider compatibility."
    },
    H570: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "mid",
      pcie: 4,
      lanesNote: "Upper mainstream Intel 500-series chipset lane map."
    },
    Z590: {
      vendor: "intel",
      socket: "LGA1200",
      tier: "high",
      pcie: 4,
      lanesNote: "High-end LGA1200 chipset with expanded high-speed routing."
    },
    H610: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "entry",
      pcie: 4,
      lanesNote: "Entry LGA1700 chipset, often minimal lane and VRM provisioning."
    },
    B660: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "mid",
      pcie: 5,
      lanesNote: "Mainstream LGA1700 chipset with stronger PCIe lane flexibility."
    },
    H670: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "mid",
      pcie: 5,
      lanesNote: "Upper mainstream LGA1700 chipset with broader expansion."
    },
    Z690: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "high",
      pcie: 5,
      lanesNote: "High-end LGA1700 platform for high I/O and tuning workloads."
    },
    B760: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "mid",
      pcie: 5,
      lanesNote: "Mainstream updated LGA1700 chipset for PCIe 5 era builds."
    },
    H770: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "mid",
      pcie: 5,
      lanesNote: "Upper mainstream LGA1700 lane budget and connectivity."
    },
    Z790: {
      vendor: "intel",
      socket: "LGA1700",
      tier: "high",
      pcie: 5,
      lanesNote: "High-end LGA1700 class for demanding PCIe and platform loads."
    },
    H810: {
      vendor: "intel",
      socket: "LGA1851",
      tier: "entry",
      pcie: 5,
      lanesNote: "Entry LGA1851 chipset with modern baseline PCIe capability."
    },
    B860: {
      vendor: "intel",
      socket: "LGA1851",
      tier: "mid",
      pcie: 5,
      lanesNote: "Mainstream LGA1851 chipset class for current Intel desktop."
    },
    Z890: {
      vendor: "intel",
      socket: "LGA1851",
      tier: "high",
      pcie: 5,
      lanesNote: "High-end LGA1851 chipset with top platform expansion targets."
    }
  };

  const amdMidAm5 = ["B650", "B650E", "B850", "X670", "X670E", "X870", "X870E"];
  const amdHighAm5 = ["X670", "X670E", "X870", "X870E"];

  const intelBOrZ = [
    "B460",
    "B560",
    "B660",
    "B760",
    "B860",
    "Z490",
    "Z590",
    "Z690",
    "Z790",
    "Z890"
  ];

  const intelZOnly = ["Z490", "Z590", "Z690", "Z790", "Z890"];

  const stringTailNumber = (value) => {
    const match = String(value || "").match(/(\d{3,5})/);
    return match ? Number(match[1]) : null;
  };

  const normalizeChipsetLabel = (selection) => {
    if (!selection) {
      return "";
    }

    const raw = selection.optionLabel || selection.label || selection.optionId || "";
    return String(raw).trim().toUpperCase();
  };

  const parseRyzenArchitecture = (model, label) => {
    if (!model) {
      return "Ryzen desktop";
    }

    if (model >= 9000) {
      return "Zen 5";
    }

    if (model >= 8000) {
      return "Zen 4 (Desktop APU)";
    }

    if (model >= 7000) {
      return "Zen 4";
    }

    if (model >= 5000) {
      return "Zen 3";
    }

    if (model >= 4000) {
      return "Zen 2 (Desktop APU)";
    }

    if (model >= 3000) {
      if (/3200G|3400G/i.test(label)) {
        return "Zen+ (Desktop APU)";
      }
      return "Zen 2";
    }

    if (model >= 2000) {
      if (/2200G|2400G/i.test(label)) {
        return "Zen (Desktop APU)";
      }
      return "Zen+";
    }

    return "Zen 1";
  };

  const parseIntelArchitecture = (generation, isCoreUltra) => {
    if (isCoreUltra) {
      return "Arrow Lake (Core Ultra desktop)";
    }

    const map = {
      10: "Comet Lake",
      11: "Rocket Lake",
      12: "Alder Lake",
      13: "Raptor Lake",
      14: "Raptor Lake Refresh"
    };

    return map[generation] || "Intel Core desktop";
  };

  const analyzeCpu = (label) => {
    if (!label) {
      return null;
    }

    const normalized = String(label).trim();
    const lower = normalized.toLowerCase();

    if (lower.includes("ryzen")) {
      const tierMatch = normalized.match(/ryzen\s+([3579])/i);
      const tier = tierMatch ? Number(tierMatch[1]) : null;
      const model = stringTailNumber(normalized);
      const isG = /\b\d{4,5}G(T)?\b/i.test(normalized);
      const isX = /\b\d{4,5}X(3D|T)?\b/i.test(normalized);
      const isX3d = /X3D/i.test(normalized);
      const architecture = parseRyzenArchitecture(model, normalized);
      const socket = model && model >= 7000 ? "AM5" : "AM4";
      const series = model ? Math.floor(model / 1000) * 1000 : null;

      let pcie = 3;
      if (model) {
        if (model >= 9000) {
          pcie = 5;
        } else if (model >= 8000) {
          pcie = 4;
        } else if (model >= 7000) {
          pcie = isG ? 4 : 5;
        } else if (model >= 5000) {
          pcie = isG || /5500\b|5500GT|5600G|5600GT|5700G/i.test(normalized) ? 3 : 4;
        } else if (model >= 3000) {
          pcie = isG || /3200G|3400G/i.test(normalized) ? 3 : 4;
        }
      }

      const totalLanes = isG ? 20 : 24;
      const gpuLanes = isG ? 8 : 16;

      return {
        type: "cpu",
        vendor: "amd",
        label: normalized,
        architecture,
        socket,
        tier,
        model,
        series,
        pcie,
        totalLanes,
        gpuLanes,
        isG,
        isX,
        isX3d,
        isX600: tier === 5 && /\b\d{4,5}X\b/i.test(normalized) && /600\b/.test(String(model || ""))
      };
    }

    if (/(core\s+i|core\s+ultra|pentium|celeron)/i.test(normalized)) {
      const isCoreUltra = /core\s+ultra/i.test(normalized);
      const tierMatch = normalized.match(/core\s+i([3579])/i) || normalized.match(/core\s+ultra\s+([579])/i);
      const tier = tierMatch ? Number(tierMatch[1]) : /pentium|celeron/i.test(normalized) ? 3 : null;

      let generation = null;
      const model = stringTailNumber(normalized);
      if (isCoreUltra) {
        generation = 20;
      } else if (model) {
        const text = String(model);
        generation = text.length >= 5 ? Number(text.slice(0, 2)) : Number(text.slice(0, 1));
      }

      let socket = null;
      if (isCoreUltra || generation >= 15) {
        socket = "LGA1851";
      } else if (generation >= 12) {
        socket = "LGA1700";
      } else if (generation >= 10) {
        socket = "LGA1200";
      }

      const architecture = parseIntelArchitecture(generation, isCoreUltra);
      const pcie = isCoreUltra || generation >= 12 ? 5 : generation === 11 ? 4 : 3;
      const totalLanes = generation >= 11 || isCoreUltra ? 20 : 16;

      return {
        type: "cpu",
        vendor: "intel",
        label: normalized,
        architecture,
        socket,
        tier,
        generation,
        model,
        pcie,
        totalLanes,
        gpuLanes: 16,
        isK: /\bK(F|S)?\b/i.test(normalized) || /\d{3,5}K(F|S)?\b/i.test(normalized),
        is600Class: /\b\d{4,5}\b/.test(String(model || "")) && /600\b/.test(String(model || "")),
        is400Class: /\b\d{4,5}\b/.test(String(model || "")) && /400\b/.test(String(model || "")),
        isCoreUltra
      };
    }

    return {
      type: "cpu",
      vendor: null,
      label: normalized,
      architecture: "Unknown CPU",
      socket: null,
      tier: null,
      pcie: 3,
      totalLanes: null,
      gpuLanes: null
    };
  };

  const analyzeMotherboard = (selection) => {
    const chipset = normalizeChipsetLabel(selection);
    if (!chipset) {
      return null;
    }

    const meta = chipsetMeta[chipset];
    if (!meta) {
      return {
        type: "motherboard",
        label: chipset,
        chipset,
        vendor: null,
        socket: null,
        tier: "entry",
        pcie: 3,
        lanesNote: "Unknown chipset profile."
      };
    }

    return {
      type: "motherboard",
      label: chipset,
      chipset,
      ...meta
    };
  };

  const gpuInterfaceByModel = (label) => {
    if (/RTX\s*4060|RTX\s*4060\s*TI|RTX\s*3050|RTX\s*5050|RTX\s*5060/i.test(label)) {
      return 8;
    }

    if (/RX\s*6500\s*XT|RX\s*6400/i.test(label)) {
      return 4;
    }

    if (/RX\s*6600|RX\s*6600\s*XT|RX\s*6650\s*XT|RX\s*5500\s*XT|ARC\s*A380|ARC\s*A310/i.test(label)) {
      return 8;
    }

    if (/ARC\s*A770|ARC\s*A750|ARC\s*A580|ARC\s*B580|ARC\s*B570/i.test(label)) {
      return 16;
    }

    return 16;
  };

  const analyzeGpu = (label) => {
    if (!label) {
      return null;
    }

    const normalized = String(label).trim();
    const lower = normalized.toLowerCase();

    let vendor = null;
    let architecture = "Unknown GPU architecture";
    let pcie = 3;
    let generationGroup = "unknown";

    if (lower.includes("rtx") || lower.includes("gtx")) {
      vendor = "nvidia";

      if (/RTX\s*50/i.test(normalized)) {
        architecture = "Blackwell";
        generationGroup = "rtx50";
        pcie = 5;
      } else if (/RTX\s*40/i.test(normalized)) {
        architecture = "Ada Lovelace";
        generationGroup = "rtx40";
        pcie = 4;
      } else if (/RTX\s*30/i.test(normalized)) {
        architecture = "Ampere";
        generationGroup = "rtx30";
        pcie = 4;
      } else if (/RTX\s*20/i.test(normalized)) {
        architecture = "Turing";
        generationGroup = "rtx20";
        pcie = 3;
      } else if (/GTX\s*16/i.test(normalized)) {
        architecture = "Turing (GTX)";
        generationGroup = "gtx16";
        pcie = 3;
      } else if (/GTX\s*10/i.test(normalized)) {
        architecture = "Pascal";
        generationGroup = "gtx10";
        pcie = 3;
      }
    } else if (lower.includes("arc")) {
      vendor = "intel";
      pcie = 4;
      if (/\bB\d{3}\b/i.test(normalized)) {
        architecture = "Battlemage";
        generationGroup = "arcb";
      } else {
        architecture = "Alchemist";
        generationGroup = "arca";
      }
    } else if (lower.includes("rx") || lower.includes("vega") || lower.includes("radeon")) {
      vendor = "amd";

      if (/RX\s*9\d{3}/i.test(normalized)) {
        architecture = "RDNA 4";
        generationGroup = "rx9000";
        pcie = 5;
      } else if (/RX\s*7\d{3}/i.test(normalized)) {
        architecture = "RDNA 3";
        generationGroup = "rx7000";
        pcie = 4;
      } else if (/RX\s*6\d{3}/i.test(normalized)) {
        architecture = "RDNA 2";
        generationGroup = "rx6000";
        pcie = 4;
      } else if (/RX\s*5\d{3}/i.test(normalized)) {
        architecture = "RDNA 1";
        generationGroup = "rx5000";
        pcie = 4;
      } else if (/RX\s*4\d{2}|RX\s*5\d{2}|VEGA|RADEON\s+VII/i.test(normalized)) {
        architecture = "GCN / Polaris / Vega";
        generationGroup = "legacy-rx";
        pcie = 3;
      }
    }

    return {
      type: "gpu",
      label: normalized,
      vendor,
      architecture,
      pcie,
      interfaceLanes: gpuInterfaceByModel(normalized),
      generationGroup,
      isEntryRtx: /RTX\s*(3050|3060|4060|5050|5060)/i.test(normalized),
      isLegacyNvidia: /GTX\s*10|GTX\s*16|RTX\s*20/i.test(normalized),
      isLegacyAmd: /RX\s*4\d{2}|RX\s*5\d{2}|VEGA|RADEON\s+VII|RX\s*5\d{3}/i.test(normalized)
    };
  };

  const describeCpu = (cpu) => {
    if (!cpu) {
      return [];
    }

    const lines = [];
    uniquePush(lines, `Architecture: ${cpu.architecture}`);
    if (cpu.socket) {
      uniquePush(lines, `Socket platform: ${cpu.socket}`);
    }
    uniquePush(lines, `CPU PCIe capability: Gen ${cpu.pcie}`);

    if (cpu.totalLanes && cpu.gpuLanes) {
      uniquePush(lines, `Typical CPU lane map: ${cpu.totalLanes} total lanes (${cpu.gpuLanes} for GPU + 4 NVMe + chipset link)`);
    }

    if (cpu.vendor === "amd" && cpu.isG) {
      uniquePush(lines, "Ryzen G note: usually reduced PCIe GPU lane width (often x8), so memory tuning matters more.");
    }

    return lines;
  };

  const describeMotherboard = (board) => {
    if (!board) {
      return [];
    }

    const lines = [];
    uniquePush(lines, `Chipset: ${board.chipset}`);
    if (board.socket) {
      uniquePush(lines, `Socket family: ${board.socket}`);
    }
    uniquePush(lines, `Chipset PCIe generation target: up to Gen ${board.pcie}`);
    uniquePush(lines, `Tier class: ${board.tier}`);
    uniquePush(lines, board.lanesNote);
    return lines;
  };

  const describeGpu = (gpu) => {
    if (!gpu) {
      return [];
    }

    const lines = [];
    uniquePush(lines, `Architecture: ${gpu.architecture}`);
    uniquePush(lines, `Typical interface: PCIe Gen ${gpu.pcie} x${gpu.interfaceLanes}`);
    if (gpu.isEntryRtx) {
      uniquePush(lines, "Entry RTX note: reduced lane-width models are more sensitive to old PCIe platforms.");
    }
    return lines;
  };

  const describeSelection = (type, selection) => {
    if (type === "cpu") {
      return describeCpu(analyzeCpu(selection?.label || ""));
    }

    if (type === "motherboard") {
      return describeMotherboard(analyzeMotherboard(selection));
    }

    if (type === "gpu") {
      return describeGpu(analyzeGpu(selection?.label || ""));
    }

    return [];
  };

  const recommendBoardFromCpu = (cpu) => {
    if (!cpu) {
      return [];
    }

    const lines = [];

    if (cpu.vendor === "amd") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Ryzen 3: A320/A520 class boards are acceptable targets.");
      }

      if (cpu.tier === 5) {
        if (cpu.isX600) {
          uniquePush(lines, "Ryzen 5 X600 models: target B550 (AM4) or B650/B850 (AM5) for PCIe headroom.");
        } else {
          uniquePush(lines, "Ryzen 5 non-X600 models: entry chipsets can work, but B-series gives stronger long-term stability.");
        }
      }

      if (cpu.tier === 7) {
        if (cpu.socket === "AM4" && cpu.series && cpu.series <= 2000) {
          uniquePush(lines, "Ryzen 7 1000/2000: B450 is typically enough because these CPUs are PCIe 3 focused.");
        } else if (cpu.socket === "AM4") {
          uniquePush(lines, "Ryzen 7 3000+ AM4: use at least B550 to leverage PCIe 4 capability.");
        } else {
          uniquePush(lines, "Ryzen 7 AM5: use at least B650/B850 tier motherboard.");
        }
      }

      if (cpu.tier === 9) {
        if (cpu.socket === "AM4") {
          uniquePush(lines, "Ryzen 9 AM4: target X570 class motherboards.");
        } else {
          uniquePush(lines, "Ryzen 9 AM5: target X670/X870 class motherboards.");
        }
      }

      if (cpu.isG) {
        uniquePush(lines, "All Ryzen G models: use 2 identical RAM DIMMs at the highest stable speed; avoid mixed kits.");
      }
    }

    if (cpu.vendor === "intel") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Intel i3: Hx10 entry boards are valid choices.");
      }

      if (cpu.tier === 5) {
        if (cpu.isK) {
          uniquePush(lines, "Intel i5 K models: at least B-series board, with Z-series recommended.");
        } else if (cpu.is600Class) {
          uniquePush(lines, "Intel i5 x600 models: avoid weak entry boards; good H610 minimum, B-series recommended.");
        } else {
          uniquePush(lines, "Intel i5 non-K lower classes can run on entry boards, though B-series remains preferred.");
        }
      }

      if (cpu.tier === 7 || cpu.tier === 9) {
        uniquePush(lines, "Intel i7/i9: use strong B-series minimum, Z-series recommended.");
      }
    }

    return lines;
  };

  const recommendCpuForGpu = (gpu) => {
    if (!gpu) {
      return [];
    }

    const lines = [];

    if (gpu.pcie >= 4) {
      uniquePush(lines, "PCIe Gen4/Gen5 GPU selected: prefer CPU + motherboard combo that can expose PCIe 4+ lanes.");
    }

    if (gpu.vendor === "nvidia" && gpu.generationGroup === "gtx10") {
      uniquePush(lines, "GTX 10-series fits best with i3, Ryzen 3, entry Ryzen 5, and 1st-gen Ryzen 7 class pairings.");
      if (/1080\s*TI/i.test(gpu.label)) {
        uniquePush(lines, "GTX 1080 Ti class usually benefits from Ryzen 5 2600 / i5-level and up, not low-end CPUs.");
      }
    }

    if (gpu.isEntryRtx) {
      uniquePush(lines, "Entry RTX cards pair best with AM5 or Intel 12th-gen+ when possible for cleaner PCIe behavior.");
    }

    if (gpu.vendor === "amd" && gpu.isLegacyAmd) {
      uniquePush(lines, "Legacy Radeon cards are often balanced with Ryzen 3/5 or i3/i5 class systems and PCIe 3/4 boards.");
    }

    return lines;
  };

  const validateCpuBoardMatch = (cpu, board, warnings) => {
    if (!cpu || !board) {
      return;
    }

    if (cpu.vendor && board.vendor && cpu.vendor !== board.vendor) {
      uniquePush(warnings, "CPU vendor and motherboard vendor family do not match.");
      return;
    }

    if (cpu.socket && board.socket && cpu.socket !== board.socket) {
      uniquePush(warnings, `Socket mismatch: CPU expects ${cpu.socket} while board is ${board.socket}.`);
      return;
    }

    if (cpu.vendor === "amd") {
      if (cpu.tier === 7) {
        if (cpu.socket === "AM4" && cpu.series && cpu.series <= 2000) {
          if (board.chipset === "A320" || board.chipset === "A520") {
            uniquePush(warnings, "Ryzen 7 1000/2000 is better matched to B450 or better than A-class entry chipsets.");
          }
        } else if (cpu.socket === "AM4" && !["B550", "X570"].includes(board.chipset)) {
          uniquePush(warnings, "Ryzen 7 3000+ should be on B550 or X570 to align with PCIe 4 capability.");
        } else if (cpu.socket === "AM5" && !amdMidAm5.includes(board.chipset)) {
          uniquePush(warnings, "Ryzen 7 AM5 should use at least B650/B850 class boards.");
        }
      }

      if (cpu.tier === 9) {
        if (cpu.socket === "AM4" && board.chipset !== "X570") {
          uniquePush(warnings, "Ryzen 9 AM4 is recommended on X570-class boards.");
        }

        if (cpu.socket === "AM5" && !amdHighAm5.includes(board.chipset)) {
          uniquePush(warnings, "Ryzen 9 AM5 is recommended on X670/X870 class boards.");
        }
      }

      if (cpu.tier === 5 && cpu.isX600) {
        if (cpu.socket === "AM4" && !["B550", "X570"].includes(board.chipset)) {
          uniquePush(warnings, "Ryzen 5 X600 AM4 models should be paired to B550/X570 for better PCIe 4 usage.");
        }

        if (cpu.socket === "AM5" && !amdMidAm5.includes(board.chipset)) {
          uniquePush(warnings, "Ryzen 5 X600 AM5 models should be paired to B650/B850 or higher.");
        }
      }
    }

    if (cpu.vendor === "intel") {
      if (cpu.tier === 5) {
        if (cpu.isK && !intelBOrZ.includes(board.chipset)) {
          uniquePush(warnings, "Intel i5 K models should be on at least B-series boards; Z-series is preferred.");
        }

        if (cpu.is600Class && ["H410", "H510"].includes(board.chipset)) {
          uniquePush(warnings, "Intel i5 x600 models are better on stronger H610/B-series boards than H410/H510.");
        }
      }

      if ((cpu.tier === 7 || cpu.tier === 9) && !intelBOrZ.includes(board.chipset)) {
        uniquePush(warnings, "Intel i7/i9 are not ideal on entry H-chipsets. Use strong B-series or Z-series boards.");
      }

      if (cpu.isK && intelBOrZ.includes(board.chipset) && !intelZOnly.includes(board.chipset)) {
        uniquePush(warnings, "K-series CPUs work on B-series, but Z-series is recommended for full tuning capability.");
      }
    }
  };

  const validateGpuPath = (cpu, board, gpu, warnings) => {
    if (!gpu) {
      return;
    }

    if (cpu && gpu.pcie > cpu.pcie) {
      uniquePush(
        warnings,
        `GPU expects PCIe Gen ${gpu.pcie} path, but selected CPU lane capability is closer to Gen ${cpu.pcie}.`
      );
    }

    if (board && gpu.pcie > board.pcie) {
      uniquePush(
        warnings,
        `GPU expects PCIe Gen ${gpu.pcie} path, but selected chipset class is closer to Gen ${board.pcie}.`
      );
    }

    if (cpu?.vendor === "amd" && cpu.isG && gpu.pcie >= 4) {
      uniquePush(
        warnings,
        "Ryzen G + PCIe 4 GPU: monitor reduced GPU lane-width behavior and use fast matched dual-channel RAM."
      );
    }
  };

  const evaluate = (selections) => {
    const cpu = analyzeCpu(selections?.cpu?.label || "");
    const motherboard = analyzeMotherboard(selections?.motherboard || null);
    const gpu = analyzeGpu(selections?.gpu?.label || "");

    const recommendations = [];
    const warnings = [];

    if (cpu) {
      recommendBoardFromCpu(cpu).forEach((line) => uniquePush(recommendations, line));
    }

    if (gpu) {
      recommendCpuForGpu(gpu).forEach((line) => uniquePush(recommendations, line));
    }

    validateCpuBoardMatch(cpu, motherboard, warnings);
    validateGpuPath(cpu, motherboard, gpu, warnings);

    const selectedCount = Number(Boolean(selections?.cpu)) + Number(Boolean(selections?.motherboard)) + Number(Boolean(selections?.gpu));

    if (selectedCount === 0) {
      uniquePush(
        recommendations,
        "Select a CPU, motherboard chipset, or GPU first. The assistant will build a compatibility combo as you choose parts."
      );
    }

    if (selectedCount === 1) {
      uniquePush(
        recommendations,
        "Select the other two categories so the engine can resolve socket, chipset tier, and PCIe generation fit end-to-end."
      );
    }

    return {
      cpu,
      motherboard,
      gpu,
      recommendations,
      warnings,
      snapshots: {
        cpu: describeCpu(cpu),
        motherboard: describeMotherboard(motherboard),
        gpu: describeGpu(gpu)
      }
    };
  };

  const boardSuggestionsFromCpu = (cpu) => {
    const lines = [];
    if (!cpu) {
      return lines;
    }

    recommendBoardFromCpu(cpu).forEach((line) => uniquePush(lines, line));

    if (cpu.vendor === "amd") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Chipset targets: A320 / A520 (AM4 entry class).");
      } else if (cpu.tier === 5) {
        if (cpu.isX600) {
          uniquePush(
            lines,
            cpu.socket === "AM4"
              ? "Chipset targets: B550 or X570."
              : "Chipset targets: B650 / B650E / B850 (or higher)."
          );
        } else {
          uniquePush(
            lines,
            cpu.socket === "AM4"
              ? "Chipset targets: A320/A520/B450/B550 based on board quality goals."
              : "Chipset targets: A620 for basic, B650/B850 for balanced builds."
          );
        }
      } else if (cpu.tier === 7) {
        uniquePush(
          lines,
          cpu.socket === "AM4" && cpu.series && cpu.series <= 2000
            ? "Chipset targets: B450 or X470."
            : cpu.socket === "AM4"
              ? "Chipset targets: B550 or X570."
              : "Chipset targets: B650/B850 minimum."
        );
      } else if (cpu.tier === 9) {
        uniquePush(lines, cpu.socket === "AM4" ? "Chipset target: X570." : "Chipset targets: X670/X670E/X870/X870E.");
      }
    }

    if (cpu.vendor === "intel") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Chipset targets: H410/H510/H610/H810 or B-series.");
      } else if (cpu.tier === 5) {
        if (cpu.isK) {
          uniquePush(lines, "Chipset targets: B660/B760/B860 minimum, Z690/Z790/Z890 preferred.");
        } else if (cpu.is600Class) {
          uniquePush(lines, "Chipset targets: good H610 minimum, B-series preferred.");
        } else {
          uniquePush(lines, "Chipset targets: H-series works, B-series preferred for better VRM and expansion.");
        }
      } else if (cpu.tier === 7 || cpu.tier === 9) {
        uniquePush(lines, "Chipset targets: strong B-series or Z-series.");
      }
    }

    return lines;
  };

  const gpuSuggestionsFromCpu = (cpu) => {
    const lines = [];
    if (!cpu) {
      return lines;
    }

    if (cpu.vendor === "amd") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Good GPU range: GTX 10/16, RTX 2060/3050 class, RX 500 to RX 6600 class.");
      } else if (cpu.tier === 5) {
        uniquePush(lines, "Good GPU range: RTX 3060/4060 up to RTX 4070 class, RX 6600 to RX 7800 XT class.");
      } else {
        uniquePush(lines, "Good GPU range: RTX 4070 Ti/4080+ and RX 7900 class can be paired appropriately.");
      }
    }

    if (cpu.vendor === "intel") {
      if (cpu.tier === 3) {
        uniquePush(lines, "Good GPU range: GTX 10/16, RTX 20/entry RTX 30, RX 500/RX 5000 class.");
      } else if (cpu.tier === 5) {
        uniquePush(lines, "Good GPU range: RTX 3060/4060 to RTX 4070 class, RX 6600 to RX 7800 XT class.");
      } else {
        uniquePush(lines, "Good GPU range: upper RTX and Radeon tiers based on PSU/cooling envelope.");
      }
    }

    if (cpu.pcie <= 3) {
      uniquePush(lines, "PCIe Gen 3 CPU path: avoid lane-sensitive new GPUs if possible, or pair with strong Gen 4 board/CPU upgrade path.");
    }

    return lines;
  };

  const cpuSuggestionsFromGpu = (gpu) => {
    const lines = [];
    if (!gpu) {
      return lines;
    }

    recommendCpuForGpu(gpu).forEach((line) => uniquePush(lines, line));

    if (gpu.vendor === "nvidia" && gpu.generationGroup === "gtx10") {
      uniquePush(lines, "CPU targets: i3 class, Ryzen 3 class, entry Ryzen 5 class, and 1st-gen Ryzen 7 class.");
      if (/1080\s*TI/i.test(gpu.label)) {
        uniquePush(lines, "Stronger target for GTX 1080 Ti: Ryzen 5 2600/3600 class or Core i5 10400+ class.");
      }
    }

    if (gpu.isEntryRtx) {
      uniquePush(lines, "CPU targets: Ryzen 5 5600 (non-G) or Ryzen 5 7600 class; Intel Core i5 12400+ class.");
    }

    if (gpu.vendor === "amd" && gpu.isLegacyAmd) {
      uniquePush(lines, "CPU targets: Ryzen 3/5 or Intel i3/i5 class for balanced legacy pairings.");
    }

    if (gpu.vendor === "intel") {
      uniquePush(lines, "CPU targets: modern ReBAR-friendly platforms (Ryzen 5000 non-G+ or Intel 10th+ preferred).");
    }

    return lines;
  };

  const boardSuggestionsFromGpu = (gpu) => {
    const lines = [];
    if (!gpu) {
      return lines;
    }

    if (gpu.pcie <= 3) {
      uniquePush(lines, "Chipset targets: B450/A520/H510/H610 class platforms are usually enough.");
    } else if (gpu.pcie === 4) {
      uniquePush(lines, "Chipset targets: B550/X570/B650 (AMD) or B660/B760/Z690/Z790 (Intel). ");
    } else {
      uniquePush(lines, "Chipset targets: B650E/X670E/X870E (AMD) or Z790/Z890 class (Intel). ");
    }

    return lines;
  };

  const cpuSuggestionsFromBoard = (board) => {
    const lines = [];
    if (!board) {
      return lines;
    }

    if (board.vendor === "amd") {
      if (board.socket === "AM4") {
        if (["A320", "A520"].includes(board.chipset)) {
          uniquePush(lines, "Best CPU targets: Ryzen 3, entry Ryzen 5, and carefully chosen Ryzen 7 1000/2000.");
        }

        if (board.chipset === "B450") {
          uniquePush(lines, "Best CPU targets: Ryzen 3/5 and Ryzen 7 1000/2000 class.");
        }

        if (board.chipset === "B550") {
          uniquePush(lines, "Best CPU targets: Ryzen 5/7/9 3000+ where PCIe 4 is desired.");
        }

        if (board.chipset === "X570") {
          uniquePush(lines, "Best CPU targets: Ryzen 7/9 AM4 high-end pairings.");
        }
      } else if (board.socket === "AM5") {
        if (board.chipset === "A620") {
          uniquePush(lines, "Best CPU targets: Ryzen 5 7000/8000 and selected Ryzen 7 models.");
        } else if (["B650", "B650E", "B850"].includes(board.chipset)) {
          uniquePush(lines, "Best CPU targets: Ryzen 5/7 and many Ryzen 9 models.");
        } else {
          uniquePush(lines, "Best CPU targets: Ryzen 7/9 AM5 high-end stack.");
        }
      }
    }

    if (board.vendor === "intel") {
      if (board.tier === "entry") {
        uniquePush(lines, "Best CPU targets: Intel i3 and lower-power i5 non-K models.");
      } else if (board.tier === "mid") {
        uniquePush(lines, "Best CPU targets: Intel i5/i7 non-K and selected K models.");
      } else {
        uniquePush(lines, "Best CPU targets: Intel K-series, i7, and i9 class CPUs.");
      }
    }

    return lines;
  };

  const gpuSuggestionsFromBoard = (board) => {
    const lines = [];
    if (!board) {
      return lines;
    }

    if (board.pcie <= 3) {
      uniquePush(lines, "Best GPU ranges: GTX 10/16, RTX 20, RX 400/500, Vega, RX 5000.");
    } else if (board.pcie === 4) {
      uniquePush(lines, "Best GPU ranges: RTX 30/40 entry-mid, RX 6000/7000, Arc A/B series.");
    } else {
      uniquePush(lines, "Best GPU ranges: latest RTX/Radeon stacks including PCIe 5-focused builds.");
    }

    return lines;
  };

  const buildComboFromSeed = (seed) => {
    const result = {
      anchorType: seed?.type || null,
      anchorLabel: seed?.label || "",
      selectedDetails: [],
      cpuSuggestions: [],
      motherboardSuggestions: [],
      gpuSuggestions: [],
      notes: []
    };

    if (!seed?.type || !seed?.label) {
      uniquePush(result.notes, "No part selected yet. Pick one part first to generate combo guidance.");
      return result;
    }

    if (seed.type === "cpu") {
      const cpu = analyzeCpu(seed.label);
      result.selectedDetails = describeCpu(cpu);
      result.cpuSuggestions.push("Selected CPU is the anchor component.");
      boardSuggestionsFromCpu(cpu).forEach((line) => uniquePush(result.motherboardSuggestions, line));
      gpuSuggestionsFromCpu(cpu).forEach((line) => uniquePush(result.gpuSuggestions, line));
      if (cpu?.isG) {
        uniquePush(result.notes, "Ryzen G reminder: use 2 identical RAM DIMMs at high stable frequency.");
      }
    }

    if (seed.type === "gpu") {
      const gpu = analyzeGpu(seed.label);
      result.selectedDetails = describeGpu(gpu);
      result.gpuSuggestions.push("Selected GPU is the anchor component.");
      cpuSuggestionsFromGpu(gpu).forEach((line) => uniquePush(result.cpuSuggestions, line));
      boardSuggestionsFromGpu(gpu).forEach((line) => uniquePush(result.motherboardSuggestions, line));
      if (gpu?.pcie >= 4) {
        uniquePush(result.notes, "For this GPU, prefer CPU + motherboard that can expose PCIe Gen 4 or Gen 5 lanes.");
      }
    }

    if (seed.type === "motherboard") {
      const board = analyzeMotherboard(seed);
      result.selectedDetails = describeMotherboard(board);
      result.motherboardSuggestions.push("Selected motherboard is the anchor component.");
      cpuSuggestionsFromBoard(board).forEach((line) => uniquePush(result.cpuSuggestions, line));
      gpuSuggestionsFromBoard(board).forEach((line) => uniquePush(result.gpuSuggestions, line));
      if (board?.tier === "entry") {
        uniquePush(result.notes, "Entry chipset reminder: keep expectations aligned for VRM quality and expansion headroom.");
      }
    }

    if (!result.cpuSuggestions.length) {
      uniquePush(result.cpuSuggestions, "No CPU direction available for this seed yet.");
    }

    if (!result.motherboardSuggestions.length) {
      uniquePush(result.motherboardSuggestions, "No motherboard direction available for this seed yet.");
    }

    if (!result.gpuSuggestions.length) {
      uniquePush(result.gpuSuggestions, "No GPU direction available for this seed yet.");
    }

    return result;
  };

  window.comboEngine = {
    evaluate,
    analyzeCpu,
    analyzeMotherboard,
    analyzeGpu,
    describeSelection,
    buildComboFromSeed
  };
})();