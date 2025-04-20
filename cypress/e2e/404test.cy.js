const baseURL = "https://toolfix.com.au";
const pages = [
  "/cdn-cgi/l/email-protection",
  "/contact-us",
  "/shipping-policy",
  "/products/rivet-nut-tools",
  "/about-us",
  "/products/rivet-tools/gesipa-cordless-rivet-tools/gesipa-cordless-rivet-tools-sub",
  "/terms-conditions",
  "/products/rivets",
  "/products/steinel",
  "/products",
  "/search",
  "/tool-repairs",
  "/register",
  "/products/eibenstock-power-tools",
  "/cart",
  "/products/rivet-nuts",
  "/new-products",
  "/?ref=https://toolfix.com.au/",
  "/products/rivet-tools",
  "/polishing-flap-wheel-100mm-100-320247",
  "/products/pin-collar-lockbolts-tools",
  "/products/rivets/aluminium-rivet-steel-stem-blind-rivets/dome-head-v1/1-8-v2",
  "/products/eibenstock-power-tools/sawing-cutting/concrete-stone-cutting-saws",
  "/products/eibenstock-power-tools/mixing/mixing-station",
  "/products/rivets/aluminium-rivet-steel-stem-blind-rivets/large-flange-v1/metric-5-0mm-diameter-v2",
  "/products/eibenstock-power-tools/grinding/hand-held-grinding-tools",
  "/products/rivet-nut-tools/apex-ace",
  "/products/rivet-tools?ref=https://toolfix.com.au/",
  "/products/rivets/aluminium-rivet-steel-stem-blind-rivets/sealed-countersunk",
  "/products/eibenstock-power-tools/drilling/heavy-duty-drills",
  "/products/rivets/aluminium-rivet-steel-stem-blind-rivets/peel-blind-rivets/dome-head-v2",
  "/contact-us?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/sawing-cutting/sword-saw",
  "/products/rivets/aluminium-rivet-steel-stem-blind-rivets",
  "/products/rivet-nuts/stainless-steel-rivet-nuts/thin-head-ribbed-v2",
  "/products/eibenstock-power-tools/polishing-calendering",
  "/products/rivet-tools/gesipa-cordless-rivet-tools/gesipa-cordless-rivet-tools-sub?ref=https://toolfix.com.au/",
  "/eibenstock-wet-dry-wall-chaser1500mm-emf1501p",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-non-ribbed/metric-rivet-nuts-v4",
  "/products/eibenstock-power-tools/grinding",
  "/login",
  "/products/rivets/monel-rivet-steel-stem-blind-rivets/dome-head-v6/1-8-v18",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-full-hex",
  "/products/rivets/all-steel-blind-rivets/dome-head-v3/5-32-v11",
  "/steinel-mobileheat-7-cordless-heat-gun-tool-only-085926",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts",
  "/products/rivets/all-stainless-steel-blind-rivets-ss304/large-flange-v2/5-32-v16",
  "/products/eibenstock-power-tools/mixing/mixing-drill-paddle",
  "/products/rivets/coloured-rivets/aluminium-steel-large-flange-coloured-rivets",
  "/products/rivets/all-aluminium-blind-rivets/sealed/3-16-v1",
  "/products/eibenstock-power-tools/drilling/diamond-core-drill-bits",
  "/products/rivet-nuts/stainless-steel-rivet-nuts/thin-head-rivet-nut-a4",
  "/products/rivet-nuts/jack-nuts",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/imperial-rivet-nuts",
  "/products/pin-collar-lockbolts-tools/steel-multigrip",
  "/products/rivet-nuts/stainless-steel-rivet-nuts/large-flange-sealed-v1",
  "/new-products/why-is-the-gesipa-powerbird-pro-so-popular",
  "/register?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/mixing/mixing-drill-hand-held",
  "/products/rivet-nuts/steel-rivet-nuts/large-flange-ribbed/metric-rivet-nuts-v3",
  "/products/rivet-nuts/steel-rivet-nuts/large-flange-non-ribbed/imperial-rivet-nuts",
  "/products/pin-collar-lockbolts-tools/steel-countersunk-head",
  "/products/eibenstock-power-tools/cutting/dry-wall-cutter",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial",
  "/products/eibenstock-power-tools/grinding/disc-diameter",
  "/products/rivet-nuts/steel-rivet-nuts/large-flange-ribbed",
  "/products/rivet-nuts/stainless-steel-rivet-nuts/thin-head-full-hex",
  "/products/rivet-nuts/stainless-steel-rivet-nuts/press-rivet-nut",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-full-hex/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/drilling/core-drilling",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v1",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-ribbed",
  "/products/rivet-nuts/stainless-steel-rivet-nuts",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-non-ribbed/metric-rivet-nuts",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-ribbed-metric-imperial/imperial-rivet-nuts",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-ribbed/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/grinding/wet-polisher",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v2",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts",
  "/products/eibenstock-power-tools/drilling/rotary-hammers",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-non-ribbed/imperial-rivet-nuts",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-ribbed-metric-imperial/metric-rivet-nuts",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-ribbed/metric-rivet-nuts",
  "/products/eibenstock-power-tools/mixing/paddle-mixer",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-full-hex/metric-rivet-nuts",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-ribbed-metric-imperial",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-full-hex/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/sawing-cutting/long-reach-saw",
  "/products/eibenstock-power-tools/mixing/mixing-drill",
  "/products/eibenstock-power-tools/mixing",
  "/products/eibenstock-power-tools/grinding/angle-grinder",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-non-ribbed/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/mixing/station",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-non-ribbed",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/cutting/wall-chaser",
  "/products/eibenstock-power-tools/mixing/tile-adhesive-mixer",
  "/products/rivet-nuts/steel-rivet-nuts/thin-head-ribbed/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/grinding/eibenstock-accessories",
  "/products/eibenstock-power-tools/sawing-cutting/diamond-wall-chaser",
  "/products/eibenstock-power-tools/mixing/tile-adhesive-mixer?ref=https://toolfix.com.au/",
  "/products/rivet-nuts/steel-rivet-nuts/large-flange-non-ribbed/metric-rivet-nuts-v1",
  "/products/rivet-nuts/steel-rivet-nuts/large-flange-non-ribbed",
  "/products/eibenstock-power-tools/grinding/surface-grinder",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts",
  "/products/eibenstock-power-tools/cutting/concrete-core-drill",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v3",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v4",
  "/products/eibenstock-power-tools/cutting/core-drill",
  "/products/eibenstock-power-tools/mixing/mixer",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v5",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/imperial-rivet-nuts",
  "/products/eibenstock-power-tools/cutting/asphalt-concrete-cutter",
  "/products/eibenstock-power-tools/cutting/dry-wall-cutter?ref=https://toolfix.com.au/",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v6",
  "/products/eibenstock-power-tools/mixing/tile-mortar-mixer",
  "/products/eibenstock-power-tools/cutting/concrete-saw",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v7",
  "/products/eibenstock-power-tools/sawing-cutting/concrete-core-drill",
  "/products/eibenstock-power-tools/sawing-cutting/dry-wall-cutter",
  "/products/eibenstock-power-tools/mixing/paint-mortar-mixer",
  "/products/eibenstock-power-tools/mixing/concrete-paint-mixer",
  "/products/eibenstock-power-tools/sawing-cutting/wall-chaser",
  "/products/eibenstock-power-tools/sawing-cutting/asphalt-cutter",
  "/products/eibenstock-power-tools/sawing-cutting/diamond-cutting-system",
  "/products/eibenstock-power-tools/sawing-cutting/concrete-saw",
  "/products/eibenstock-power-tools/grinding/surface-preparation",
  "/products/eibenstock-power-tools/cutting/wet-wall-chaser",
  "/products/eibenstock-power-tools/mixing/paint-mortar-mixer?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/mixing/paddle-mixer?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/mixing/concrete-paint-mixer?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/sawing-cutting/asphalt-cutter?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/sawing-cutting/diamond-cutting-system?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/sawing-cutting/concrete-saw?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/grinding/surface-preparation?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/cutting/wet-wall-chaser?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/mixing/mixer?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/sawing-cutting/wall-chaser?ref=https://toolfix.com.au/",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v8",
  "/products/eibenstock-power-tools/sawing-cutting/asphalt-cutter?ref=https://toolfix.com.au/",
  "/products/eibenstock-power-tools/mixing/tile-mortar-mixer?ref=https://toolfix.com.au/",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v9",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v10",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v11",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v12",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v13",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v14",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v15",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v16",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v17",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v18",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v19",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v20",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v21",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v22",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v23",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v24",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v25",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v26",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v27",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v28",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v29",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v30",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v31",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v32",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v33",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v34",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v35",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v36",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v37",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v38",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v39",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v40",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v41",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v42",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v43",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v44",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v45",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v46",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v47",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v48",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v49",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v50",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v51",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v52",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v53",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v54",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v55",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v56",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v57",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v58",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v59",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v60",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v61",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v62",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v63",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v64",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v65",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v66",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v67",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v68",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v69",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v70",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v71",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v72",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v73",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v74",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v75",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v76",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v77",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v78",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v79",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v80",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v81",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v82",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v83",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v84",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v85",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v86",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v87",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v88",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v89",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v90",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v91",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v92",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v93",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v94",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v95",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v96",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v97",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v98",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v99",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v100",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v101",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v102",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v103",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v104",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v105",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v106",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v107",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v108",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v109",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v110",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v111",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v112",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v113",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v114",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v115",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v116",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v117",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v118",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v119",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v120",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v121",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v122",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v123",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v124",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v125",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v126",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v127",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v128",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v129",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v130",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v131",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v132",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v133",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v134",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v135",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v136",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v137",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v138",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v139",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v140",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v141",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v142",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v143",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v144",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v145",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v146",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v147",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v148",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v149",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v150",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v151",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v152",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v153",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v154",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v155",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v156",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v157",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v158",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v159",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v160",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v161",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v162",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v163",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v164",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v165",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v166",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v167",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v168",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v169",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v170",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v171",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v172",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v173",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v174",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v175",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v176",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v177",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v178",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v179",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v180",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v181",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v182",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v183",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v184",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v185",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v186",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v187",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v188",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v189",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v190",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v191",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v192",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v193",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v194",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v195",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v196",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v197",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v198",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v199",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v200",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v201",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v202",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v203",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v204",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v205",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v206",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v207",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v208",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v209",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v210",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v211",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v212",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v213",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v214",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v215",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v216",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v217",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v218",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v219",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v220",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v221",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v222",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v223",
  "/products/rivet-nuts/aluminum-rivet-nuts/large-flange-non-ribbed-metric-imperial/metric-rivet-nuts-v224",
];

describe.only("404 page test", () => {
  //New optimized code
  pages.forEach((pageUrl) => {
    it(`page:${pageUrl}`, () => {
      cy.log(pageUrl);
      cy.visit(baseURL + pageUrl, { failOnStatusCode: false });
      //cy.wait(200)
      cy.contains("Sorry, page not found!").should("not.exist");
      cy.get("body").should("not.contain", "Internal Server Error");
    });
  });

  /*

//Noob code
    it("Home page",()=>{
        cy.visit(baseURL,{ failOnStatusCode: false })
        cy.get('[data-layer="Content"]').should('not.exist');   
        cy.get('body').should("not.contain","Internal Server Error")      
    })
    it("about us page",()=>{
        cy.visit(baseURL+"about-us",{ failOnStatusCode: false })
        cy.get('[data-layer="Content"]').should('not.exist');   
        cy.get('body').should("not.contain","Internal Server Error")      
    })

    it("too repairs",()=>{
        cy.visit(baseURL+"tool-repairs",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');       
        cy.get('body').should("not.contain","Internal Server Error")  
    })
    it("login",()=>{
        cy.visit(baseURL+"login",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');     
        cy.get('body').should("not.contain","Internal Server Error")    
    })
    it("contactus",()=>{
        cy.visit(baseURL+"contact-us",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');    
        cy.get('body').should("not.contain","Internal Server Error")     
    })
    it("new products",()=>{
        cy.visit(baseURL+"new-products",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');        
        cy.get('body').should("not.contain","Internal Server Error") 
    })
    it("register",()=>{
        cy.visit(baseURL+"register",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');   
        cy.get('body').should("not.contain","Internal Server Error")      
    })
    it("too repairs",()=>{
        cy.visit(baseURL+"tool-repairs",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');       
        cy.get('body').should("not.contain","Internal Server Error")  
    })
    it("products",()=>{
        cy.visit(baseURL+"products",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');  
        cy.get('body').should("not.contain","Internal Server Error")       
    })
    it("terms-conditions",()=>{
        cy.visit(baseURL+"terms-conditions",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');
        cy.get('body').should("not.contain","Internal Server Error")      
    })
    it("shipping-policy",()=>{
        cy.visit(baseURL+"shipping-policy",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');     
        cy.get('body').should("not.contain","Internal Server Error")    
    })
    it("return-policy",()=>{
        cy.visit(baseURL+"return-policy",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');   
        cy.get('body').should("not.contain","Internal Server Error")      
    })
    it("privacy-policy",()=>{
        cy.visit(baseURL+"privacy-policy",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');    
        cy.get('body').should("not.contain","Internal Server Error")     
    })
    it("eibenstock-power-tools",()=>{
        cy.visit(baseURL+"eibenstock-power-tools",{ failOnStatusCode: false })
        cy.get('.mb-6').should('not.exist');    
        cy.get('body').should("not.contain","Internal Server Error")     
    })
    */
});
