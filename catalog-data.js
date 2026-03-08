window.catalogData = {
  "cpu": {
    "amd": {
      "options": [
        {
          "id": "am4",
          "label": "AM4",
          "subtitle": "Ryzen 1000 to Ryzen 5000",
          "sections": [
            {
              "title": "Ryzen 1000 Series (Zen 1)",
              "items": [
                "Ryzen 3: 1200, 1300X",
                "Ryzen 5: 1400, 1500X, 1600, 1600X",
                "Ryzen 7: 1700, 1700X, 1800X"
              ]
            },
            {
              "title": "Ryzen 2000 Series (Zen+)",
              "items": [
                "Ryzen 3: 2200G",
                "Ryzen 5: 2400G, 2500X, 2600, 2600X",
                "Ryzen 7: 2700, 2700X"
              ]
            },
            {
              "title": "Ryzen 3000 Series (Zen 2)",
              "items": [
                "Ryzen 3: 3100, 3200G",
                "Ryzen 5: 3400G, 3500, 3500X, 3600, 3600X, 3600XT",
                "Ryzen 7: 3700X, 3800X, 3800XT",
                "Ryzen 9: 3900X, 3900XT, 3950X"
              ]
            },
            {
              "title": "Ryzen 4000 Series (Zen 2 / OEM + APU)",
              "items": [
                "Ryzen 3: 4100, 4300G",
                "Ryzen 5: 4500, 4600G",
                "Ryzen 7: 4700G"
              ]
            },
            {
              "title": "Ryzen 5000 Series (Zen 3)",
              "items": [
                "Ryzen 5: 5500, 5500GT, 5600, 5600G, 5600GT, 5600X, 5600X3D",
                "Ryzen 7: 5700, 5700G, 5700X, 5700X3D, 5800X, 5800X3D, 5800XT",
                "Ryzen 9: 5900X, 5900XT, 5950X"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD AM4 Chipset CPU Compatibility",
              "url": "https://www.amd.com/en/products/processors/chipsets/am4.html"
            },
            {
              "label": "AMD Ryzen 5000 Family",
              "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series.html"
            }
          ]
        },
        {
          "id": "am5",
          "label": "AM5",
          "subtitle": "Ryzen 7000 to Ryzen 9000",
          "sections": [
            {
              "title": "Ryzen 7000 Series (Zen 4)",
              "items": [
                "Ryzen 5: 7600, 7600X",
                "Ryzen 7: 7700, 7700X, 7800X3D",
                "Ryzen 9: 7900, 7900X, 7900X3D, 7950X, 7950X3D"
              ]
            },
            {
              "title": "Ryzen 8000 Series Desktop APUs",
              "items": [
                "Ryzen 5: 8500G, 8600G",
                "Ryzen 7: 8700G"
              ]
            },
            {
              "title": "Ryzen 9000 Series (Zen 5)",
              "items": [
                "Ryzen 5: 9600, 9600X",
                "Ryzen 7: 9700X",
                "Ryzen 9: 9900X, 9950X",
                "X3D lineup appears in-market by region (ex: 9800X3D / 9900X3D / 9950X3D)"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD AM5 Chipset Compatibility (Ryzen 7000/8000/9000)",
              "url": "https://www.amd.com/es/products/processors/chipsets/am5.html"
            },
            {
              "label": "AMD Ryzen 7000 Launch",
              "url": "https://www.amd.com/en/newsroom/press-releases/2022-8-29-amd-launches-ryzen-7000-series-desktop-processors-.html"
            },
            {
              "label": "AMD Ryzen 9000 Product Overview",
              "url": "https://www.amd.com/en/partner/articles/ryzen-9000-series-processors.html"
            }
          ]
        }
      ]
    },
    "intel": {
      "options": [
        {
          "id": "lga1200",
          "label": "LGA 1200",
          "subtitle": "Intel 10th and 11th Gen",
          "sections": [
            {
              "title": "10th Gen (Comet Lake)",
              "items": [
                "Core i3: 10100/10300 class",
                "Core i5: 10400/10600 class",
                "Core i7: 10700 class",
                "Core i9: 10900 class"
              ]
            },
            {
              "title": "11th Gen (Rocket Lake)",
              "items": [
                "Core i5: 11400/11600 class",
                "Core i7: 11700 class",
                "Core i9: 11900 class"
              ]
            },
            {
              "title": "Other LGA1200 Desktop Tiers",
              "items": [
                "Pentium Gold G6xxx",
                "Celeron G59xx"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel 10th/11th Gen Compatibility (LGA1200)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000056574/processors.html"
            }
          ]
        },
        {
          "id": "lga1700",
          "label": "LGA 1700",
          "subtitle": "Intel 12th to 14th Gen",
          "sections": [
            {
              "title": "12th Gen (Alder Lake)",
              "items": [
                "Core i3: 12100 class",
                "Core i5: 12400/12600 class",
                "Core i7: 12700 class",
                "Core i9: 12900 class",
                "Pentium Gold G7400 / Celeron G6900"
              ]
            },
            {
              "title": "13th Gen (Raptor Lake)",
              "items": [
                "Core i3: 13100 class",
                "Core i5: 13400/13600 class",
                "Core i7: 13700 class",
                "Core i9: 13900 class"
              ]
            },
            {
              "title": "14th Gen",
              "items": [
                "Core i3: 14100 class",
                "Core i5: 14400/14500/14600 class",
                "Core i7: 14700 class",
                "Core i9: 14900 class"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel 12th/13th/14th Compatibility (LGA1700)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000092149/processors.html"
            },
            {
              "label": "Intel 14th Gen Compatibility",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000096847/processors.html"
            }
          ]
        },
        {
          "id": "lga1851",
          "label": "LGA 1851",
          "subtitle": "Intel Core Ultra (Series 2)",
          "sections": [
            {
              "title": "Core Ultra Desktop Families",
              "items": [
                "Core Ultra 5: 245 / 245K / 245KF class",
                "Core Ultra 7: 265 / 265K / 265KF class",
                "Core Ultra 9: 285 / 285K / 285KF class"
              ]
            },
            {
              "title": "Platform Note",
              "items": [
                "Uses new LGA1851 socket",
                "Not backward compatible with older LGA1700 platforms",
                "Designed for Intel 800-series desktop chipset motherboards"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel Core Ultra Series 2 Compatibility (LGA1851)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000099798/processors.html"
            }
          ]
        }
      ]
    }
  },
  "motherboard": {
    "amd": {
      "options": [
        {
          "id": "am4",
          "label": "AM4",
          "subtitle": "AM4 chipset families and CPU compatibility",
          "sections": [
            {
              "title": "Entry-Level AM4 (A320 / A520, often called Ax20 class)",
              "items": [
                "Many budget boards ship with 2 DIMM slots only",
                "VRM heatsinks are often absent or very small on lower-end models",
                "Best paired with lower-power CPUs unless board VRM quality is verified"
              ]
            },
            {
              "title": "Mainstream AM4 Boards",
              "items": [
                "B450 and B550 are common value-performance choices",
                "Usually 4 DIMM slots on ATX/mATX models",
                "Partial/full VRM heatsinks are much more common than Ax20 boards"
              ]
            },
            {
              "title": "Performance AM4 Boards",
              "items": [
                "X470 and X570 target heavier CPUs and overclocking workloads",
                "Stronger power delivery and larger VRM heatsinks",
                "More PCIe and I/O options depending on model tier"
              ]
            },
            {
              "title": "CPU Compatibility Range",
              "items": [
                "Ryzen 1000 through Ryzen 5000 series",
                "Final support depends on motherboard BIOS version",
                "Some early boards require selective/beta BIOS for later Ryzen generations"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD AM4 Chipset CPU Compatibility",
              "url": "https://www.amd.com/en/products/processors/chipsets/am4.html"
            }
          ]
        },
        {
          "id": "am5",
          "label": "AM5",
          "subtitle": "AM5 chipset families and CPU compatibility",
          "sections": [
            {
              "title": "Entry-Level AM5",
              "items": [
                "A620 and lower-cost B840/B850 variants prioritize baseline features",
                "Some entry mATX boards can be dual-DIMM and lighter on VRM cooling",
                "Good for budget or mid-range Ryzen builds with careful board selection"
              ]
            },
            {
              "title": "Mainstream AM5",
              "items": [
                "B650/B650E and stronger B850 boards are common all-round choices",
                "Typically better VRM heatsinks, memory support, and expansion",
                "Balanced for Ryzen 5 and Ryzen 7 class systems"
              ]
            },
            {
              "title": "High-End AM5",
              "items": [
                "X670E/X670 and X870E/X870 focus on premium power delivery and connectivity",
                "Heavier VRM cooling and more expansion lanes/USB options",
                "Best suited for Ryzen 9 and sustained heavy workloads"
              ]
            },
            {
              "title": "CPU Compatibility Range",
              "items": [
                "Ryzen 7000, 8000, and 9000 series on AM5",
                "All AM5 motherboards support AM5 processors (BIOS updates may be required on older stock)"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD AM5 Chipset Compatibility",
              "url": "https://www.amd.com/es/products/processors/chipsets/am5.html"
            }
          ]
        }
      ]
    },
    "intel": {
      "options": [
        {
          "id": "lga1200",
          "label": "LGA 1200",
          "subtitle": "10th/11th Gen motherboard ecosystem",
          "sections": [
            {
              "title": "Typical LGA1200 Chipsets",
              "items": [
                "Z590, H570, B560, H510",
                "Z490, H470, B460, H410",
                "W580 / W480 (workstation segments)"
              ]
            },
            {
              "title": "CPU Range",
              "items": [
                "Intel 10th and 11th Gen desktop processors",
                "Pentium Gold and Celeron desktop SKUs in supported boards"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel 10th/11th Gen Compatibility (LGA1200)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000056574/processors.html"
            }
          ]
        },
        {
          "id": "lga1700",
          "label": "LGA 1700",
          "subtitle": "12th/13th/14th Gen motherboard ecosystem",
          "sections": [
            {
              "title": "Entry-Level LGA1700",
              "items": [
                "H610 boards can be very minimal and often only 2 DIMM slots on compact models",
                "VRM heatsinks can be absent on lower-cost variants",
                "Best for lower-power CPU pairings"
              ]
            },
            {
              "title": "Mainstream LGA1700",
              "items": [
                "B660/B760 boards are balanced for most users",
                "Commonly include better VRM cooling and 4-DIMM layouts",
                "Good fit for Core i5 and Core i7 class builds"
              ]
            },
            {
              "title": "Performance LGA1700",
              "items": [
                "Z690/Z790 boards target higher sustained power and overclocking",
                "Stronger VRM stages and larger heatsinks",
                "More I/O and expansion options"
              ]
            },
            {
              "title": "CPU Range",
              "items": [
                "Intel 12th, 13th, and 14th Gen desktop processors",
                "Some boards need BIOS updates when moving between generations"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel 12th/13th/14th Compatibility (LGA1700)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000092149/processors.html"
            }
          ]
        },
        {
          "id": "lga1851",
          "label": "LGA 1851",
          "subtitle": "Core Ultra Series 2 motherboard ecosystem",
          "sections": [
            {
              "title": "Typical LGA1851 Chipsets",
              "items": [
                "Intel 800 series desktop chipset family",
                "Common enthusiast references: Z890 / B860 / H810 tiers"
              ]
            },
            {
              "title": "CPU Range",
              "items": [
                "Intel Core Ultra desktop processors (Series 2)",
                "Not backward compatible with LGA1700 motherboards"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel Core Ultra Series 2 Compatibility (LGA1851)",
              "url": "https://www.intel.com/content/www/us/en/support/articles/000099798/processors.html"
            }
          ]
        }
      ]
    }
  },
  "gpu": {
    "nvidia": {
      "options": [
        {
          "id": "rtx50",
          "label": "GeForce RTX 50 Series",
          "subtitle": "Blackwell generation",
          "sections": [
            {
              "title": "Current Desktop Stack",
              "items": [
                "RTX 5090",
                "RTX 5080",
                "RTX 5070 Ti",
                "RTX 5070",
                "RTX 5060 Ti",
                "RTX 5060",
                "RTX 5050"
              ]
            }
          ],
          "sources": [
            {
              "label": "NVIDIA GeForce RTX 50 Series",
              "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series"
            }
          ]
        },
        {
          "id": "rtx40",
          "label": "GeForce RTX 40 Series",
          "subtitle": "Ada Lovelace generation",
          "sections": [
            {
              "title": "Current Desktop Stack",
              "items": [
                "RTX 4090",
                "RTX 4080 SUPER / RTX 4080",
                "RTX 4070 Ti SUPER / 4070 Ti / 4070 SUPER / 4070",
                "RTX 4060 Ti / RTX 4060"
              ]
            }
          ],
          "sources": [
            {
              "label": "NVIDIA GeForce RTX 40 Series",
              "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/"
            }
          ]
        },
        {
          "id": "rtx30",
          "label": "GeForce RTX 30 Series",
          "subtitle": "Ampere generation",
          "sections": [
            {
              "title": "Desktop Models (major lineup)",
              "items": [
                "RTX 3090 Ti / RTX 3090",
                "RTX 3080 Ti / RTX 3080",
                "RTX 3070 Ti / RTX 3070",
                "RTX 3060 Ti / RTX 3060",
                "RTX 3050"
              ]
            }
          ],
          "sources": [
            {
              "label": "NVIDIA GeForce RTX 30 Series",
              "url": "https://www.nvidia.com/en-my/geforce/graphics-cards/30-series/"
            }
          ]
        },
        {
          "id": "legacy-nvidia",
          "label": "Legacy NVIDIA",
          "subtitle": "GTX 10 series and newer legacy stack",
          "sections": [
            {
              "title": "GTX 10 Series (Pascal)",
              "items": [
                "GTX 1050 / 1050 Ti",
                "GTX 1060",
                "GTX 1070 / 1070 Ti",
                "GTX 1080 / 1080 Ti"
              ]
            },
            {
              "title": "GTX 16 Series (Turing GTX)",
              "items": [
                "GTX 1650 / 1650 SUPER",
                "GTX 1660 / 1660 SUPER / 1660 Ti"
              ]
            },
            {
              "title": "Early RTX Generation (legacy bucket)",
              "items": [
                "RTX 2060 / 2060 SUPER",
                "RTX 2070 / 2070 SUPER",
                "RTX 2080 / 2080 SUPER / 2080 Ti"
              ]
            }
          ],
          "sources": [
            {
              "label": "NVIDIA GeForce GTX 10 Series",
              "url": "https://www.nvidia.com/en-us/geforce/10-series/"
            },
            {
              "label": "NVIDIA GeForce GTX 16 Series",
              "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/16-series/"
            },
            {
              "label": "NVIDIA GeForce RTX 20 Series",
              "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/20-series/"
            }
          ]
        }
      ]
    },
    "intel": {
      "options": [
        {
          "id": "arcb",
          "label": "Intel Arc B-Series",
          "subtitle": "Battlemage desktop generation",
          "sections": [
            {
              "title": "Desktop Models",
              "items": [
                "Arc B580",
                "Arc B570"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel Arc B-Series (ARK)",
              "url": "https://www.intel.com/content/www/us/en/ark/products/series/240391/intel-arc-b-series-graphics.html"
            }
          ]
        },
        {
          "id": "arca",
          "label": "Intel Arc A-Series",
          "subtitle": "Alchemist desktop generation",
          "sections": [
            {
              "title": "Desktop Models",
              "items": [
                "Arc A770 (16GB / 8GB)",
                "Arc A750",
                "Arc A580",
                "Arc A380",
                "Arc A310"
              ]
            }
          ],
          "sources": [
            {
              "label": "Intel Arc A-Series (ARK)",
              "url": "https://www.intel.com/content/www/us/en/ark/products/series/227957/intel-arc-a-series-graphics.html"
            }
          ]
        }
      ]
    },
    "amd": {
      "options": [
        {
          "id": "rx9000",
          "label": "Radeon RX 9000 Series",
          "subtitle": "RDNA 4 generation",
          "sections": [
            {
              "title": "Known Desktop Models",
              "items": [
                "Radeon RX 9070 XT",
                "Radeon RX 9070",
                "Radeon RX 9060 XT (16GB)"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD Radeon RX 9000 Series",
              "url": "https://www.amd.com/en/products/graphics/desktops/radeon.html"
            }
          ]
        },
        {
          "id": "rx7000",
          "label": "Radeon RX 7000 Series",
          "subtitle": "RDNA 3 generation",
          "sections": [
            {
              "title": "Desktop Models",
              "items": [
                "RX 7900 XTX",
                "RX 7900 XT",
                "RX 7800 XT",
                "RX 7700 XT",
                "RX 7600 XT",
                "RX 7600"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD Radeon RX 7000 Series",
              "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series.html"
            }
          ]
        },
        {
          "id": "rx6000",
          "label": "Radeon RX 6000 Series",
          "subtitle": "RDNA 2 generation",
          "sections": [
            {
              "title": "Desktop Models (major lineup)",
              "items": [
                "RX 6950 XT / 6900 XT",
                "RX 6800 XT / 6800",
                "RX 6750 XT / 6700 XT",
                "RX 6650 XT / 6600 XT / 6600",
                "RX 6500 XT / 6400"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD Radeon RX 6000/7000/9000 Product Hub",
              "url": "https://www.amd.com/en/products/graphics/desktops/radeon.html"
            }
          ]
        },
        {
          "id": "legacy-amd",
          "label": "Legacy AMD",
          "subtitle": "RX 400 series and newer legacy stack",
          "sections": [
            {
              "title": "Radeon RX 400 Series (Polaris)",
              "items": [
                "RX 460",
                "RX 470",
                "RX 480"
              ]
            },
            {
              "title": "Radeon RX 500 Series and Vega",
              "items": [
                "RX 550 / 560 / 570 / 580 / 590",
                "Radeon RX Vega 56 / Vega 64",
                "Radeon VII (high-end legacy)"
              ]
            },
            {
              "title": "Radeon RX 5000 Series (RDNA 1)",
              "items": [
                "RX 5500 XT",
                "RX 5600 XT",
                "RX 5700 / RX 5700 XT"
              ]
            }
          ],
          "sources": [
            {
              "label": "AMD Radeon Product Hub",
              "url": "https://www.amd.com/en/products/graphics/desktops/radeon.html"
            },
            {
              "label": "AMD Radeon RX 5000 Series",
              "url": "https://www.amd.com/en/products/graphics/desktops/radeon/5000-series.html"
            }
          ]
        }
      ]
    }
  }
};
