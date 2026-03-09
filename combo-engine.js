(() => {
  const uniquePush = (list, text) => {
    if (text && !list.includes(text)) {
      list.push(text);
    }
  };

  const chipsetMeta = {
    A320: { vendor: "amd", socket: "AM4", tier: "entry", pcie: 3 },
    B350: { vendor: "amd", socket: "AM4", tier: "mid", pcie: 3 },
    X370: { vendor: "amd", socket: "AM4", tier: "high", pcie: 3 },
    B450: { vendor: "amd", socket: "AM4", tier: "mid", pcie: 3 },
    X470: { vendor: "amd", socket: "AM4", tier: "high", pcie: 3 },
    A520: { vendor: "amd", socket: "AM4", tier: "entry", pcie: 3 },
    B550: { vendor: "amd", socket: "AM4", tier: "mid", pcie: 4 },
    X570: { vendor: "amd", socket: "AM4", tier: "high", pcie: 4 },
    A620: { vendor: "amd", socket: "AM5", tier: "entry", pcie: 4 },
    B650: { vendor: "amd", socket: "AM5", tier: "mid", pcie: 5 },
    B650E: { vendor: "amd", socket: "AM5", tier: "mid", pcie: 5 },
    X670: { vendor: "amd", socket: "AM5", tier: "high", pcie: 5 },
    X670E: { vendor: "amd", socket: "AM5", tier: "high", pcie: 5 },
    B850: { vendor: "amd", socket: "AM5", tier: "mid", pcie: 5 },
    X870: { vendor: "amd", socket: "AM5", tier: "high", pcie: 5 },
    X870E: { vendor: "amd", socket: "AM5", tier: "high", pcie: 5 },
    H410: { vendor: "intel", socket: "LGA1200", tier: "entry", pcie: 3 },
    B460: { vendor: "intel", socket: "LGA1200", tier: "mid", pcie: 3 },
    H470: { vendor: "intel", socket: "LGA1200", tier: "mid", pcie: 3 },
    Z490: { vendor: "intel", socket: "LGA1200", tier: "high", pcie: 3 },
    H510: { vendor: "intel", socket: "LGA1200", tier: "entry", pcie: 4 },
    B560: { vendor: "intel", socket: "LGA1200", tier: "mid", pcie: 4 },
    H570: { vendor: "intel", socket: "LGA1200", tier: "mid", pcie: 4 },
    Z590: { vendor: "intel", socket: "LGA1200", tier: "high", pcie: 4 },
    H610: { vendor: "intel", socket: "LGA1700", tier: "entry", pcie: 4 },
    B660: { vendor: "intel", socket: "LGA1700", tier: "mid", pcie: 5 },
    H670: { vendor: "intel", socket: "LGA1700", tier: "mid", pcie: 5 },
    Z690: { vendor: "intel", socket: "LGA1700", tier: "high", pcie: 5 },
    B760: { vendor: "intel", socket: "LGA1700", tier: "mid", pcie: 5 },
    H770: { vendor: "intel", socket: "LGA1700", tier: "mid", pcie: 5 },
    Z790: { vendor: "intel", socket: "LGA1700", tier: "high", pcie: 5 },
    H810: { vendor: "intel", socket: "LGA1851", tier: "entry", pcie: 5 },
    B860: { vendor: "intel", socket: "LGA1851", tier: "mid", pcie: 5 },
    Z890: { vendor: "intel", socket: "LGA1851", tier: "high", pcie: 5 }
  };

  const BENCHMARK_SOURCES = [
    {
      label: "PassMark CPU: Ryzen 3 1200 (single-thread and overall baseline)",
      url: "https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+3+1200&id=3029"
    },
    {
      label: "PassMark CPU: Ryzen 5 5600 (modern mid-tier baseline)",
      url: "https://www.cpubenchmark.net/cpu.php?cpu=AMD+Ryzen+5+5600&id=4811"
    },
    {
      label: "PassMark CPU: Core i5-12400F (modern mid-tier baseline)",
      url: "https://www.cpubenchmark.net/cpu.php?id=4681&cpu=Intel+Core+i5-12400F"
    },
    {
      label: "TechSpot: GeForce GTX 1660 review and relative GPU positioning",
      url: "https://www.techspot.com/review/1813-geforce-gtx-1660-mega-benchmark/"
    },
    {
      label: "AMD Ryzen 5 8500G specs (Native PCIe lanes 14/10)",
      url: "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8500g.html"
    },
    {
      label: "AMD Ryzen 5 8600G specs (Native PCIe lanes 20/16)",
      url: "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8600g.html"
    },
    {
      label: "AMD Ryzen 7 8700G specs (Native PCIe lanes 20/16)",
      url: "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-7-8700g.html"
    },
    {
      label: "AMD Ryzen 5 4600G support specs (Native PCIe lanes 24/20)",
      url: "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-4000-series/amd-ryzen-5-4600g.html"
    },
    {
      label: "AMD Ryzen 3 2200G support specs (PCIe 3.0 x8 graphics link)",
      url: "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-2000-series/amd-ryzen-3-2200g.html"
    },
    {
      label: "AMD Ryzen 3 3200G support specs (PCIe 3.0 x8 graphics link)",
      url: "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-3-3200g.html"
    },
    {
      label: "Intel Core i3-10100 specs (Max PCIe lanes: 16)",
      url: "https://www.intel.com/content/www/us/en/products/sku/203473/intel-core-i310100-processor-6m-cache-up-to-4-30-ghz/specifications.html"
    },
    {
      label: "Intel Core Ultra 5 245 specs (Max PCIe lanes: 20)",
      url: "https://www.intel.com/content/www/us/en/products/sku/241058/intel-core-ultra-5-processor-245-24m-cache-up-to-5-10-ghz/specifications.html"
    }
  ];

  const COMMUNITY_SOURCES = [
    {
      label: "Tom's Hardware: Ryzen 3 1200 + GTX 1660 discussion (mentions slight bottleneck risk)",
      url: "https://forums.tomshardware.com/threads/i-want-to-pair-my-ryzen-3-1200-with-a-new-gpu-a-1660.3583721/"
    },
    {
      label: "Tom's Hardware: CPU for GTX 1660 thread (frequent Ryzen 5 2600 recommendation)",
      url: "https://forums.tomshardware.com/threads/cpu-for-gtx-1660.3473641/"
    },
    {
      label: "r/buildapc: GTX 1080 Ti + Ryzen 5 2600 pairing experiences",
      url: "https://www.reddit.com/r/buildapc/comments/bpbzlt/will_i_be_bottlenecking_my_system_with_a_gtx/"
    },
    {
      label: "Tom's Hardware: Ryzen 5 7600 + RTX 4060 Ti bottleneck discussion",
      url: "https://forums.tomshardware.com/threads/amd-ryzen-5-7600-and-rtx-4060-ti-bottleneck.3858382/"
    },
    {
      label: "Intel Arc desktop quick start (ReBAR guidance)",
      url: "https://www.intel.com/content/www/us/en/support/articles/000091128/graphics/intel-arc-dedicated-graphics-family.html"
    }
  ];

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

  const AMD_LANE_OVERRIDES = [
    {
      pattern: /\b8500G\b/i,
      total: 14,
      usable: 10,
      gpu: 4,
      nvme: 2,
      chipset: 4,
      source: "AMD 8500G specs (Native PCIe lanes 14/10)."
    },
    {
      pattern: /\b(8600G|8700G)\b/i,
      total: 20,
      usable: 16,
      gpu: 8,
      nvme: 4,
      chipset: 4,
      source: "AMD 8600G/8700G specs (Native PCIe lanes 20/16)."
    },
    {
      pattern: /\b4600G\b/i,
      total: 24,
      usable: 20,
      gpu: 16,
      nvme: 4,
      chipset: 4,
      source: "AMD 4600G support specs (Native PCIe lanes 24/20)."
    },
    {
      pattern: /\b3400G\b/i,
      total: 20,
      usable: 16,
      gpu: 8,
      nvme: 4,
      chipset: 4,
      source: "AMD 3400G support specs (Native PCIe lanes 20/16)."
    },
    {
      pattern: /\b(2200G|2400G|3200G)\b/i,
      total: null,
      usable: null,
      gpu: 8,
      nvme: 4,
      chipset: 4,
      source: "AMD support specs list PCIe 3.0 x8 for graphics; total native lane count is not explicitly listed on these pages."
    },
    {
      pattern: /\b(5500GT|5600G|5600GT|5700G)\b/i,
      total: 24,
      usable: 20,
      gpu: 16,
      nvme: 4,
      chipset: 4,
      source: "Inferred from AMD Cezanne/Renoir desktop support specs (4600G/5700 family lane behavior).",
      inferred: true
    }
  ];

  const WEAK_4C4T_MODELS = /\b(1200|1300X|2200G|3200G)\b/i;
  const ENTRY_APU_4C4T_MODELS = /\b(2200G|3200G)\b/i;

  const resolveAmdLaneProfile = ({ label, isG }) => {
    const override = AMD_LANE_OVERRIDES.find((item) => item.pattern.test(label || ""));
    if (override) {
      return override;
    }

    if (isG) {
      return {
        total: 24,
        usable: 20,
        gpu: 16,
        nvme: 4,
        chipset: 4,
        source: "Defaulted to desktop Ryzen APU lane profile (review this model manually if exact AMD specs differ).",
        inferred: true
      };
    }

    return {
      total: 24,
      usable: 20,
      gpu: 16,
      nvme: 4,
      chipset: 4,
      source: "Desktop Ryzen CPU standard lane profile."
    };
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

      const laneProfile = resolveAmdLaneProfile({ label: normalized, isG });
      const isWeak4c4t = WEAK_4C4T_MODELS.test(normalized);
      const isEntryApu4c4t = ENTRY_APU_4C4T_MODELS.test(normalized);

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
        totalLanes: laneProfile.total,
        usableLanes: laneProfile.usable,
        gpuLanes: laneProfile.gpu,
        nvmeLanes: laneProfile.nvme,
        chipsetLinkLanes: laneProfile.chipset,
        laneSource: laneProfile.source,
        laneSourceInferred: Boolean(laneProfile.inferred),
        isG,
        isX,
        isX3d,
        isX600: tier === 5 && /\b\d{4,5}X\b/i.test(normalized) && /600\b/.test(String(model || "")),
        isWeak4c4t,
        isEntryApu4c4t,
        hasSevereGpuLaneLimit: laneProfile.gpu <= 4
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

      return {
        type: "cpu",
        vendor: "intel",
        label: normalized,
        architecture: parseIntelArchitecture(generation, isCoreUltra),
        socket,
        tier,
        generation,
        model,
        pcie: isCoreUltra || generation >= 12 ? 5 : generation === 11 ? 4 : 3,
        totalLanes: generation >= 11 || isCoreUltra ? 20 : 16,
        usableLanes: generation >= 11 || isCoreUltra ? 20 : 16,
        gpuLanes: 16,
        nvmeLanes: generation >= 11 || isCoreUltra ? 4 : 0,
        chipsetLinkLanes: null,
        laneSource: "Intel ARK max PCIe lanes vary by generation (10th-gen class often 16, newer mainstream desktop classes 20).",
        laneSourceInferred: false,
        isK: /\bK(F|S)?\b/i.test(normalized) || /\d{3,5}K(F|S)?\b/i.test(normalized),
        is600Class: /\b\d{4,5}\b/.test(String(model || "")) && /600\b/.test(String(model || "")),
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
      usableLanes: null,
      gpuLanes: null,
      nvmeLanes: null,
      chipsetLinkLanes: null,
      laneSource: null,
      laneSourceInferred: false
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
        pcie: 3
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
      generationGroup
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
    if (cpu.totalLanes != null && cpu.usableLanes != null) {
      uniquePush(lines, `Native PCIe lanes (total/usable): ${cpu.totalLanes}/${cpu.usableLanes}`);
    }
    if (cpu.gpuLanes != null) {
      uniquePush(lines, `Direct GPU lane budget: x${cpu.gpuLanes}`);
    }
    if (cpu.nvmeLanes != null) {
      uniquePush(lines, `Direct NVMe lane budget: x${cpu.nvmeLanes}`);
    }
    if (cpu.hasSevereGpuLaneLimit) {
      uniquePush(lines, "Warning: this CPU exposes only x4 lanes to the dGPU slot, so discrete-GPU pairing headroom is severely limited.");
    }
    if (cpu.laneSource) {
      uniquePush(lines, cpu.laneSourceInferred ? `Lane source note (inferred): ${cpu.laneSource}` : `Lane source: ${cpu.laneSource}`);
    }

    return lines;
  };

  const describeMotherboard = (board) => {
    if (!board) {
      return [];
    }

    return [
      `Chipset: ${board.chipset}`,
      board.socket ? `Socket family: ${board.socket}` : "Socket family: unknown",
      `Chipset PCIe generation target: up to Gen ${board.pcie}`,
      `Tier class: ${board.tier}`
    ];
  };

  const describeGpu = (gpu) => {
    if (!gpu) {
      return [];
    }

    return [`Architecture: ${gpu.architecture}`, `Typical interface: PCIe Gen ${gpu.pcie} x${gpu.interfaceLanes}`];
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

  const cpuStrengthScore = (cpu) => {
    if (!cpu) {
      return 1;
    }

    let score = 3;

    if (cpu.vendor === "amd") {
      if (cpu.tier === 3) score = 2;
      if (cpu.tier === 5) score = 4;
      if (cpu.tier === 7) score = 6;
      if (cpu.tier === 9) score = 8;

      if (cpu.series && cpu.series <= 1000) score -= 2;
      else if (cpu.series && cpu.series <= 2000) score -= 1;
      else if (cpu.series && cpu.series >= 7000) score += 2;
      else if (cpu.series && cpu.series >= 5000) score += 1;

      if (cpu.isG) score -= 1;
      if (cpu.gpuLanes != null && cpu.gpuLanes <= 8) score -= 1;
      if (cpu.hasSevereGpuLaneLimit) score -= 2;
      if (cpu.isWeak4c4t) score -= 2;
      if (cpu.isX3d) score += 1;
    }

    if (cpu.vendor === "intel") {
      if (cpu.tier === 3) score = 3;
      if (cpu.tier === 5) score = 5;
      if (cpu.tier === 7) score = 7;
      if (cpu.tier === 9) score = 8;

      if (cpu.generation && cpu.generation <= 10) score -= 2;
      else if (cpu.generation === 11) score -= 1;
      else if (cpu.generation && cpu.generation >= 13 && cpu.generation <= 14) score += 1;
      else if (cpu.generation && cpu.generation >= 15) score += 2;

      if (cpu.isCoreUltra) score += 1;
    }

    return Math.max(1, Math.min(9, score));
  };

  const singleMotherboardForCpu = (cpu) => {
    if (!cpu) {
      return null;
    }

    if (cpu.vendor === "amd") {
      if (cpu.socket === "AM4") {
        if (cpu.tier === 3) {
          if (cpu.series && cpu.series <= 2000) {
            return {
              model: "A320",
              description: "Entry AM4 baseline for first/second-gen Ryzen 3 with legacy platform support."
            };
          }

          return {
            model: "A520",
            description: "Entry AM4 pick for newer Ryzen 3 loads where a simple platform is still enough."
          };
        }

        if (cpu.tier === 5) {
          if (cpu.series && cpu.series <= 2000) {
            return {
              model: "B450",
              description: "Balanced AM4 path for older Ryzen 5 generations on PCIe 3-era CPUs."
            };
          }

          if (cpu.isX600 || (!cpu.isG && cpu.pcie >= 4)) {
            return {
              model: "B550",
              description: "Balanced AM4 pick to preserve PCIe 4 support and reduce upgrade friction."
            };
          }

          return {
            model: "B450",
            description: "Practical AM4 pick for lighter Ryzen 5 variants where full PCIe 4 is not critical."
          };
        }

        if (cpu.tier === 7) {
          if (cpu.series && cpu.series <= 2000) {
            return {
              model: "B450",
              description: "Community-typical pairing for Ryzen 7 1000/2000 with PCIe 3-focused workloads."
            };
          }

          return {
            model: "B550",
            description: "Recommended AM4 base for Ryzen 7 3000+ to expose PCIe 4 path properly."
          };
        }

        if (cpu.tier === 9) {
          return {
            model: "X570",
            description: "High-end AM4 recommendation for Ryzen 9 class CPUs and stronger I/O demand."
          };
        }
      }

      if (cpu.socket === "AM5") {
        if (cpu.tier === 9) {
          return {
            model: "X670",
            description: "High-end AM5 recommendation for Ryzen 9 class with stronger platform headroom."
          };
        }

        return {
          model: "B650",
          description: "Mainstream AM5 recommendation for Ryzen 5/7 class and PCIe 5-ready platform path."
        };
      }
    }

    if (cpu.vendor === "intel") {
      if (cpu.socket === "LGA1200") {
        if (cpu.tier === 3) {
          return {
            model: "H510",
            description: "Simple Intel entry recommendation for i3 class on LGA1200."
          };
        }

        if (cpu.isK || cpu.tier >= 7) {
          return {
            model: "Z590",
            description: "Recommended for K / upper Intel tiers on LGA1200 due stronger VRM and tuning headroom."
          };
        }

        return {
          model: "B560",
          description: "Balanced LGA1200 choice for most i5 non-K builds."
        };
      }

      if (cpu.socket === "LGA1700") {
        if (cpu.tier === 3) {
          return {
            model: "H610",
            description: "Entry LGA1700 recommendation for i3 class systems."
          };
        }

        if (cpu.isK || cpu.tier >= 7) {
          return {
            model: "Z790",
            description: "Recommended for K / upper Intel tiers on LGA1700 where sustained power and tuning matter."
          };
        }

        return {
          model: "B760",
          description: "Balanced LGA1700 pick for mainstream i5 non-K performance and expansion."
        };
      }

      if (cpu.socket === "LGA1851") {
        if (cpu.tier === 3) {
          return {
            model: "H810",
            description: "Entry LGA1851 recommendation for lower Core Ultra tiers."
          };
        }

        if (cpu.isK || cpu.tier >= 7) {
          return {
            model: "Z890",
            description: "Top LGA1851 recommendation for high-tier or K-class Core Ultra builds."
          };
        }

        return {
          model: "B860",
          description: "Mainstream LGA1851 choice for balanced Core Ultra 5/7 usage."
        };
      }
    }

    return null;
  };

  const singleGpuTripletForCpu = (cpu) => {
    const score = cpuStrengthScore(cpu);

    const pick = (vendor, model, description) => ({ vendor, model, description });

    if (cpu?.hasSevereGpuLaneLimit) {
      return [
        pick("NVIDIA", "Not Recommended (Use iGPU)", "This CPU only exposes PCIe x4 to the GPU slot, so a discrete NVIDIA card is generally a bad match."),
        pick("AMD", "Not Recommended (Use iGPU)", "This CPU only exposes PCIe x4 to the GPU slot, which heavily limits dedicated GPU scaling."),
        pick("Intel", "Not Recommended (Use iGPU)", "This CPU only exposes PCIe x4 to the GPU slot, making Arc pairing generally impractical.")
      ];
    }

    if (cpu?.isEntryApu4c4t) {
      return [
        pick("NVIDIA", "GTX 1050 Ti 4GB", "For entry 4c/4t APUs like 2200G/3200G, GTX 1060-class cards are frequently CPU-limited."),
        pick("AMD", "RX 570 4GB", "Safer top-end legacy pairing for low-thread APUs before heavy CPU bottlenecks dominate."),
        pick("Intel", "Arc A310", "Lowest Arc tier only; weak 4c/4t APUs are not good Arc pairing targets.")
      ];
    }

    if (score <= 1) {
      return [
        pick("NVIDIA", "GTX 1060 6GB", "For CPUs like Ryzen 3 1200, forum guidance is to stay around GTX 1060 class to avoid heavy bottlenecks."),
        pick("AMD", "RX 570 8GB", "Safer legacy pairing for 4c/4t low single-core CPUs to keep frame pacing more consistent."),
        pick("Intel", "Arc A380", "Lowest Arc tier recommendation for weaker CPUs; keep ReBAR enabled for expected performance.")
      ];
    }

    if (score <= 2) {
      return [
        pick("NVIDIA", "GTX 1660 SUPER 6GB", "Balanced legacy-modern pick for lower mainstream CPUs without overshooting GPU class."),
        pick("AMD", "RX 6600 8GB", "Common value pairing for entry-to-mid CPU tiers at 1080p."),
        pick("Intel", "Arc A580", "Entry Arc recommendation on platforms with stable ReBAR support.")
      ];
    }

    if (score <= 4) {
      return [
        pick("NVIDIA", "RTX 3060 12GB", "Frequent community recommendation for mid CPU tiers without overspending GPU power."),
        pick("AMD", "RX 6700 XT 12GB", "Balanced mid-tier pairing that avoids strong CPU bottlenecks in many 1080p/1440p cases."),
        pick("Intel", "Arc A750", "Solid mid-tier Arc pick when platform supports ReBAR properly.")
      ];
    }

    if (score <= 6) {
      return [
        pick("NVIDIA", "RTX 4060 Ti 8GB", "Community-consistent mid/high pairing for modern 6-core to 8-core CPUs."),
        pick("AMD", "RX 7700 XT 12GB", "Strong upper-mid pairing without jumping to very CPU-demanding flagship GPU tiers."),
        pick("Intel", "Arc A770 16GB", "Upper Arc pairing for stronger CPUs, still dependent on good ReBAR platform support.")
      ];
    }

    if (score <= 7) {
      return [
        pick("NVIDIA", "RTX 4070 SUPER 12GB", "High-tier pairing suitable for strong CPUs while keeping bottleneck risk moderate."),
        pick("AMD", "RX 7800 XT 16GB", "High-tier Radeon match for stronger CPU classes in 1440p-focused builds."),
        pick("Intel", "Arc B580", "Best-current Intel Arc recommendation for stronger CPU tiers.")
      ];
    }

    return [
      pick("NVIDIA", "RTX 4080 SUPER 16GB", "High-end pick for top CPU tiers where GPU scaling remains meaningful."),
      pick("AMD", "RX 7900 XT 20GB", "High-end Radeon pick for top-tier CPU platforms."),
      pick("Intel", "Arc B580", "Current Intel Arc flagship-like practical recommendation; ReBAR remains important.")
    ];
  };

  const gpuPerformanceTier = (gpu) => {
    if (!gpu?.label) {
      return 3;
    }

    const label = gpu.label.toUpperCase();

    if (gpu.vendor === "nvidia") {
      const rtxMatch = label.match(/RTX\s*(\d{4})/i);
      if (rtxMatch) {
        const model = Number(rtxMatch[1]);

        if (model <= 2060) return 2;
        if (model <= 3060) return 3;
        if (model <= 4060) return 4;
        if (model <= 5050) return 3;
        if (model <= 5060) return 4;
        if (model <= 5070) return 5;
        return 6;
      }

      const gtxMatch = label.match(/GTX\s*(\d{3,4})/i);
      if (gtxMatch) {
        const model = Number(gtxMatch[1]);
        if (model <= 1060) return 1;
        if (model <= 1660) return 2;
        return 3;
      }
    }

    if (gpu.vendor === "amd") {
      const rxMatch = label.match(/RX\s*(\d{3,4})/i);
      if (rxMatch) {
        const model = Number(rxMatch[1]);

        if (model < 1000) {
          if (model <= 580) return 1;
          return 2;
        }

        if (model >= 5000 && model < 6000) {
          if (model <= 5500) return 2;
          return 3;
        }

        if (model >= 6000 && model < 7000) {
          if (model <= 6600) return 3;
          if (model <= 6750) return 4;
          return 5;
        }

        if (model >= 7000 && model < 9000) {
          if (model <= 7600) return 4;
          if (model <= 7800) return 5;
          return 6;
        }

        if (model >= 9000) {
          if (model <= 9060) return 5;
          return 6;
        }
      }
    }

    if (gpu.vendor === "intel") {
      if (/A310|A380/i.test(label)) return 1;
      if (/A580/i.test(label)) return 2;
      if (/A750|A770|B570/i.test(label)) return 3;
      if (/B580/i.test(label)) return 5;
      return 3;
    }

    return 3;
  };

  const singleCpuForGpu = (gpu) => {
    if (!gpu) {
      return null;
    }

    if (gpu.vendor === "nvidia" && gpu.generationGroup === "gtx10") {
      return {
        model: "Ryzen 5 2600",
        description: "Community pairing guidance for GTX 10 high-end cards (including 1080 Ti class) often lands around Ryzen 5 2600."
      };
    }

    if (gpu.vendor === "nvidia" && (gpu.generationGroup === "gtx16" || gpu.generationGroup === "rtx20")) {
      return {
        model: "Ryzen 5 3600",
        description: "Common practical baseline for GTX 16 / RTX 20 class cards with improved frame-time stability versus older quad-core CPUs."
      };
    }

    const tier = gpuPerformanceTier(gpu);

    if (tier <= 1) {
      return {
        model: "Ryzen 5 2600",
        description: "Conservative baseline for legacy and entry GPUs where older 4c/4t CPUs frequently bottleneck."
      };
    }

    if (tier === 2) {
      return {
        model: "Ryzen 5 3600",
        description: "Balanced mainstream baseline for lower-mid GPUs without jumping to expensive platform tiers."
      };
    }

    if (tier === 3) {
      return {
        model: "Core i5-12400F",
        description: "Modern 6-core baseline for entry modern GPUs (such as RTX 5050 class) without the overkill of high-end 8-core parts."
      };
    }

    if (tier === 4) {
      return {
        model: "Ryzen 5 7600",
        description: "Strong upper-mid baseline for cards around RTX 4060 Ti / RX 7600 XT class."
      };
    }

    if (tier === 5) {
      return {
        model: "Ryzen 7 9700X",
        description: "High-tier baseline for stronger 1440p-focused GPUs where CPU frame pacing matters more."
      };
    }

    return {
      model: "Ryzen 7 9700X",
      description: "High-end baseline for top-tier GPUs while avoiding unrealistic flagship CPU recommendations."
    };
  };

  const singleMotherboardForGpu = (gpu) => {
    if (!gpu) {
      return null;
    }

    if (gpu.vendor === "intel") {
      return {
        model: "B760",
        description: "Recommended to keep ReBAR support straightforward on modern Intel platforms for Arc stability/performance."
      };
    }

    if (gpu.pcie >= 5) {
      return {
        model: "B650E",
        description: "Modern PCIe Gen5-ready baseline for latest GPU tiers."
      };
    }

    if (gpu.pcie === 4) {
      return {
        model: "B550",
        description: "Practical PCIe Gen4 baseline for mainstream modern GPUs."
      };
    }

    return {
      model: "B450",
      description: "Good cost-effective baseline for legacy PCIe Gen3 GPU tiers."
    };
  };

  const singleCpuForBoard = (board) => {
    if (!board) {
      return null;
    }

    if (board.vendor === "amd") {
      if (["A320", "A520"].includes(board.chipset)) {
        return {
          model: "Ryzen 5 3600",
          description: "Reasonable upper target for entry AM4 boards while keeping CPU load realistic."
        };
      }

      if (["B450"].includes(board.chipset)) {
        return {
          model: "Ryzen 5 5600",
          description: "Popular AM4 upgrade path with wide board support and balanced gaming behavior."
        };
      }

      if (["B550"].includes(board.chipset)) {
        return {
          model: "Ryzen 7 5700X",
          description: "Balanced upper AM4 target with PCIe 4-capable platform path."
        };
      }

      if (["X570"].includes(board.chipset)) {
        return {
          model: "Ryzen 9 5900X",
          description: "High-end AM4 pairing target for stronger workstation/gaming loads."
        };
      }

      if (["A620"].includes(board.chipset)) {
        return {
          model: "Ryzen 5 7600",
          description: "Practical AM5 baseline target on entry AM5 chipset."
        };
      }

      if (["B650", "B650E", "B850"].includes(board.chipset)) {
        return {
          model: "Ryzen 7 7700",
          description: "Balanced AM5 target for mainstream/high gaming use."
        };
      }

      return {
        model: "Ryzen 9 7900X",
        description: "High-end AM5 target for X670/X870 class boards."
      };
    }

    if (board.vendor === "intel") {
      if (["H410", "H510"].includes(board.chipset)) {
        return {
          model: "Core i3-10100",
          description: "Entry CPU target aligned with lower-power board tier."
        };
      }

      if (["H610", "H810"].includes(board.chipset)) {
        return {
          model: board.socket === "LGA1851" ? "Core Ultra 5 245" : "Core i3-12100F",
          description: "Entry-modern CPU target matched to H-tier board constraints."
        };
      }

      if (["B460", "B560", "B660", "B760", "B860", "H670", "H770"].includes(board.chipset)) {
        return {
          model: board.socket === "LGA1200" ? "Core i5-11400" : board.socket === "LGA1851" ? "Core Ultra 5 245" : "Core i5-13400F",
          description: "Balanced mid-tier CPU target for mainstream Intel chipset classes."
        };
      }

      return {
        model: board.socket === "LGA1200" ? "Core i7-11700K" : board.socket === "LGA1851" ? "Core Ultra 7 265K" : "Core i7-13700K",
        description: "High-tier CPU target for Z-class board capabilities."
      };
    }

    return null;
  };

  const singleGpuTripletForBoard = (board) => {
    if (!board) {
      return [];
    }

    const pick = (vendor, model, description) => ({ vendor, model, description });

    if (board.pcie <= 3) {
      return [
        pick("NVIDIA", "GTX 1060 6GB", "Safer legacy pairing for PCIe Gen3-oriented boards."),
        pick("AMD", "RX 570 8GB", "Conservative legacy Radeon pairing for older platform lanes."),
        pick("Intel", "Arc A380", "Entry Arc option; verify ReBAR support on this board first.")
      ];
    }

    if (board.pcie === 4) {
      return [
        pick("NVIDIA", "RTX 4060 8GB", "Balanced modern pairing for PCIe Gen4-capable board path."),
        pick("AMD", "RX 7600 XT 16GB", "Modern mainstream pairing with good Gen4 utilization."),
        pick("Intel", "Arc A750", "Practical Arc pick for boards with stable ReBAR support.")
      ];
    }

    return [
      pick("NVIDIA", "RTX 4070 SUPER 12GB", "High-tier pairing suited for newer chipset lane capacity."),
      pick("AMD", "RX 7800 XT 16GB", "High-tier Radeon pairing for Gen5-capable board classes."),
      pick("Intel", "Arc B580", "Best current Intel Arc recommendation on newer board classes.")
    ];
  };

  const evaluate = (selections) => {
    const cpu = analyzeCpu(selections?.cpu?.label || "");
    const motherboard = analyzeMotherboard(selections?.motherboard || null);
    const gpu = analyzeGpu(selections?.gpu?.label || "");

    return {
      cpu,
      motherboard,
      gpu,
      recommendations: [],
      warnings: [],
      snapshots: {
        cpu: describeCpu(cpu),
        motherboard: describeMotherboard(motherboard),
        gpu: describeGpu(gpu)
      }
    };
  };

  const buildComboFromSeed = (seed) => {
    const result = {
      anchorType: seed?.type || null,
      anchorLabel: seed?.label || "",
      selectedDetails: [],
      cpuRecommendation: null,
      motherboardRecommendation: null,
      gpuRecommendations: [],
      notes: [],
      benchmarkSources: BENCHMARK_SOURCES,
      communitySources: COMMUNITY_SOURCES
    };

    if (!seed?.type || !seed?.label) {
      uniquePush(result.notes, "No part selected yet. Pick one part first to generate combo guidance.");
      return result;
    }

    if (seed.type === "cpu") {
      const cpu = analyzeCpu(seed.label);
      result.selectedDetails = describeCpu(cpu);
      result.motherboardRecommendation = singleMotherboardForCpu(cpu);
      result.gpuRecommendations = singleGpuTripletForCpu(cpu);

      uniquePush(result.notes, "The motherboard recommendation is a single target, not a range, to keep the build path clear.");
      uniquePush(result.notes, "GPU recommendations are one model per vendor to reduce bottleneck variance from overpowered cards.");
      if (cpu?.isG) {
        uniquePush(result.notes, "Ryzen G reminder: use two identical RAM DIMMs at the highest stable frequency.");
      }
    }

    if (seed.type === "gpu") {
      const gpu = analyzeGpu(seed.label);
      result.selectedDetails = describeGpu(gpu);
      result.cpuRecommendation = singleCpuForGpu(gpu);
      const cpuFromRecommendation = analyzeCpu(result.cpuRecommendation?.model || "");
      result.motherboardRecommendation = singleMotherboardForCpu(cpuFromRecommendation) || singleMotherboardForGpu(gpu);

      uniquePush(result.notes, "This is a single CPU + motherboard target for the selected GPU to avoid broad ambiguous ranges.");
      uniquePush(result.notes, "Motherboard is derived from the recommended CPU socket to avoid invalid mixes (example: AM5 CPU on AM4 B550).");
      if (gpu?.vendor === "intel") {
        uniquePush(result.notes, "Intel Arc note: community and Intel docs repeatedly highlight ReBAR as important for expected performance.");
      }
    }

    if (seed.type === "motherboard") {
      const board = analyzeMotherboard(seed);
      result.selectedDetails = describeMotherboard(board);
      result.cpuRecommendation = singleCpuForBoard(board);
      result.gpuRecommendations = singleGpuTripletForBoard(board);

      uniquePush(result.notes, "CPU and GPU outputs are reduced to concrete single picks for each lane of choice.");
    }

    if (!result.cpuRecommendation && seed.type !== "cpu") {
      uniquePush(result.notes, "No CPU recommendation could be derived for this exact selection.");
    }

    if (!result.motherboardRecommendation && seed.type !== "motherboard") {
      uniquePush(result.notes, "No motherboard recommendation could be derived for this exact selection.");
    }

    if (!result.gpuRecommendations.length && seed.type !== "gpu") {
      uniquePush(result.notes, "No GPU recommendation set could be derived for this exact selection.");
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
