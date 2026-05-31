// Translation Dictionary (5 Bay Area Languages)
const translations = {
    "en": {
        "eng_btn_details": "View Details →",
        "eng_back": "← Back to Central Services",
        "eng_termo_title": "Thermography Diagnostics",
        "eng_termo_code": "ENG-CENT-001",
        "eng_termo_p1": "Thermography Diagnostics is a fundamental pillar of our Central Engineering Services. It consists of completely non-invasive leak detection using high-resolution thermal imaging and acoustic sensors.",
        "eng_termo_p2": "Instead of performing costly and destructive exploratory demolitions, we use FLIR infrared technology to visualize thermal gradients inside walls and under slabs.",
        "eng_termo_tech1_title": "High-Precision Infrared Imaging",
        "eng_termo_tech1_desc": "Our cameras capture temperature differences of up to 0.1°C, showing exactly where leaked water travels.",
        "eng_termo_tech2_title": "Computerized Acoustic Analysis",
        "eng_termo_tech2_desc": "We use hypersensitive microphones with AI filters that differentiate ambient noise from the hiss caused by pressurized water escaping.",
        "eng_termo_tech3_title": "Digital Mapping and Reporting",
        "eng_termo_tech3_desc": "We deliver a comprehensive digital report through our portal, proving the issue for insurance claims and facilitating surgical repairs.",
        "eng_eco_title": "Eco-Retrofitting",
        "eng_eco_code": "ENG-CENT-002",
        "eng_eco_p1": "Eco-Retrofitting is our cutting-edge specialty to modernize existing hydraulic systems with eco-friendly materials and ultra-high efficiency water-saving components.",
        "eng_eco_p2": "We update your building's fixtures to drastically reduce water consumption without sacrificing pressure or comfort.",
        "eng_eco_tech1_title": "Proven Water Reduction",
        "eng_eco_tech1_desc": "Installation of aerated flow regulators, ultra-low consumption dual-flush toilets (UHET), and smart pressure reducing valves (PRV).",
        "eng_eco_tech2_title": "Sustainable Materials",
        "eng_eco_tech2_desc": "Exclusive use of recyclable pipes or those with low carbon impact certifications, ensuring your project has a zero environmental impact.",
        "eng_eco_tech3_title": "Savings Certification",
        "eng_eco_tech3_desc": "We deliver Return on Investment (ROI) calculations and guaranteed water savings (up to 40% monthly), suitable for applying to state rebates.",
        "eng_diseno_title": "Hydraulic Infrastructure Design",
        "eng_diseno_code": "ENG-CENT-003",
        "eng_diseno_p1": "Morales Plumbing's Hydraulic Infrastructure Design is an advanced engineering service that guarantees viability, efficiency, and scalability.",
        "eng_diseno_p2": "Our engineers use 3D modeling software and fluid dynamics simulators to calculate pressure gradients, thermal expansion, and flow velocity.",
        "eng_diseno_tech1_title": "Integrated BIM Modeling",
        "eng_diseno_tech1_desc": "Parametric design compatible with Autodesk Revit, allowing impeccable coordination with architects and contractors.",
        "eng_diseno_tech2_title": "Flow and Pressure Simulation",
        "eng_diseno_tech2_desc": "Virtual stress tests on the digital model to ensure balanced supply even during peak demand.",
        "eng_diseno_tech3_title": "Code Compliance (UPC/CPC)",
        "eng_diseno_tech3_desc": "Guaranteed approval in city inspections thanks to strict adherence to Uniform and California Plumbing Codes.",
        "eng_cobre_title": "Elite Copper Renovations",
        "eng_cobre_code": "ENG-CENT-004",
        "eng_cobre_p1": "Elite Copper Renovations represent the gold standard in hydraulic infrastructure. We replace obsolete plumbing systems with high-purity Type L and Type K copper pipes.",
        "eng_cobre_p2": "Copper provides natural antimicrobial properties that passively purify water flow and guarantee zero microplastic release.",
        "eng_cobre_tech1_title": "Precision Welding and ProPress System",
        "eng_cobre_tech1_desc": "We employ flameless mechanical joining techniques (ProPress) or lead-free aerospace-grade welding.",
        "eng_cobre_tech2_title": "Longevity and ROI",
        "eng_cobre_tech2_desc": "Lifespan expectation of over 50 years. Instantly elevates the structural valuation of the property up to 15%.",
        "eng_cobre_tech3_title": "Acoustic Quality and Constant Flow",
        "eng_cobre_tech3_desc": "The wall thickness of Type L copper eliminates water hammer and withstands extreme pressures.",
        "eng_septico_title": "Advanced Septic Engineering",
        "eng_septico_code": "ENG-CENT-005",
        "eng_septico_p1": "Our Advanced Septic Engineering division designs, deploys, and maintains off-grid effluent management systems using modern biotechnology.",
        "eng_septico_p2": "Instead of installing conventional septic tanks, we implement Aerobic Treatment Units (ATU) that process water to a purity level almost suitable for surface irrigation.",
        "eng_septico_tech1_title": "Percolation Studies and Topographic Design",
        "eng_septico_tech1_desc": "Geological evaluation of the terrain to determine the exact absorption rate and size the leach field.",
        "eng_septico_tech2_title": "Bio-Reactor Integration",
        "eng_septico_tech2_desc": "Equipment with aeration systems that exponentially accelerate solid decomposition through ultra-efficient aerobic bacteria.",
        "eng_septico_tech3_title": "Regulatory Compliance",
        "eng_septico_tech3_desc": "End-to-end permit management, ensuring the design exceeds health requirements and mitigating fines.",
        "svc_1_title": "Precision Leak Detection",
        "svc_1_p1": "At Morales Plumbing, precision is our standard. We identify hidden faults without destructive demolition.",
        "svc_1_p2": "Using FLIR thermal cameras and acoustic sensors we trace leaks behind walls or slabs. Massive savings vs. reconstruction.",
        "svc_1_good": "<strong>GOOD (Standard) \u2014 $450</strong><br>Visual/acoustic diagnostic. Standard patches for accessible leaks.",
        "svc_1_better": "<strong>BETTER (Premium) \u2014 $585</strong><br>FLIR thermal + pressure drop test. Epoxy coating repair.",
        "svc_1_best": "<strong>BEST (Ultra-Premium) \u2014 $720</strong><br>Full structural mapping and sector isolation. ProPress copper segment.",
        "svc_2_title": "Full House Repipe",
        "svc_2_p1": "A full repipe is a heart transplant for your home. Old galvanized pipes cause floods and water quality degradation.",
        "svc_2_p2": "We replace all water infrastructure with commercial-grade Copper and PEX. Eradicates cloudy water and chronic leaks.",
        "svc_2_good": "<strong>\u2705 GOOD (Standard) \u2014 $3,800</strong><br>PEX-B piping with brass Crimp fittings. Includes 100 PSI hydrostatic pressure test. UPC-certified reliable solution.",
        "svc_2_better": "<strong>\u2b50 BETTER (Premium) \u2014 $4,940</strong><br>PEX-A Uponor Expansion system. Superior flow rate, freeze-resistant, fewer mechanical fittings for lower long-term risk.",
        "svc_2_best": "<strong>\ud83c\udfc6 BEST (Ultra-Premium) \u2014 $6,080</strong><br>Type L Copper with ProPress technology (no solder, no flame). Maximum flow, natural antimicrobial properties and absolute commercial-grade durability for 50+ years.",
        "svc_3_title": "Water Filtration & Softening",
        "svc_3_p1": "Hard water destroys appliances and stains fixtures. We transform water quality from the entry point.",
        "svc_3_p2": "We install systems eliminating chlorine, heavy metals and calcium. Crystal-clear water and 30% longer appliance life.",
        "svc_3_good": "<strong>GOOD \u2014 $1,500</strong><br>Standard 32,000-grain salt-based softener.",
        "svc_3_better": "<strong>BETTER \u2014 $1,950</strong><br>Fleck 5600SXT Metered. Digital on-demand valve.",
        "svc_3_best": "<strong>BEST \u2014 $2,400</strong><br>Halo 5 Whole House. Salt-free, UV sterilization.",
        "svc_4_title": "Smart Valve Installation",
        "svc_4_p1": "If a pipe bursts on vacation, IoT Smart Valves auto-shutoff and alert your phone in seconds.",
        "svc_4_p2": "These systems monitor water flow 24/7 using AI to detect micro-leaks or catastrophic ruptures.",
        "svc_4_good": "<strong>GOOD \u2014 $350</strong><br>Commercial-grade 1/4-turn brass ball valve.",
        "svc_4_better": "<strong>BETTER \u2014 $455</strong><br>Moen Flo Smart Valve. Daily monitoring and smartphone shutoff.",
        "svc_4_best": "<strong>BEST \u2014 $560</strong><br>Phyn Plus. Ultrasonic monitoring, no moving parts, smart home integration.",
        "svc_5_title": "SeeSnake Camera Inspection",
        "svc_5_p1": "Blind diagnostics destroy properties. Our SeeSnake cameras trace problems without excavation.",
        "svc_5_p2": "We deploy military-grade self-leveling HD cameras underground for surgical repairs instead of destroying your yard.",
        "svc_5_good": "<strong>GOOD \u2014 $250</strong><br>Basic camera inspection up to 50ft. USB video delivery.",
        "svc_5_better": "<strong>BETTER \u2014 $325</strong><br>Deep SeeSnake with sonar tracking. Exact surface location.",
        "svc_5_best": "<strong>BEST \u2014 $400</strong><br>HD inspection and digital modeling. Full system mapping and CIPP report.",
        "svc_6_title": "Main Sewer Replacement",
        "svc_6_p1": "A collapsed main sewer is one of the most disruptive failures. We offer guaranteed replacements for decades.",
        "svc_6_p2": "Whether through traditional excavation or trenchless methods, we eliminate roots and fractured pipes.",
        "svc_6_good": "<strong>GOOD \u2014 $5,500</strong><br>Traditional excavation, SDR-35 PVC. Proven gravity flow solution.",
        "svc_6_better": "<strong>BETTER \u2014 $7,150</strong><br>ABS Schedule 40. Superior solid core, gravel bed, two-way cleanouts.",
        "svc_6_best": "<strong>BEST \u2014 $8,800</strong><br>Trenchless HDPE fused joints. Seamless, root-proof. Lifetime guarantee.",
        "svc_7_title": "Hybrid Heat Pump Water Heater",
        "svc_7_p1": "Still spending hundreds on inefficient water heating? Hybrid Heat Pump reaches up to 400% efficiency.",
        "svc_7_p2": "Besides qualifying for rebates, this system drastically cuts electric bills. Pays for itself in under 3 years.",
        "svc_7_good": "<strong>GOOD \u2014 $2,200</strong><br>Standard 50-gallon atmospheric heater. Direct replacement.",
        "svc_7_better": "<strong>BETTER \u2014 $2,860</strong><br>Rheem ProTerra Hybrid. Digital panel, rebate-eligible efficiency.",
        "svc_7_best": "<strong>BEST \u2014 $3,520</strong><br>Bradford White AeroTherm with Wi-Fi. Smart scheduling, quiet pump, leak sensors.",
        "svc_8_title": "Pressure Reducing Valve (PRV)",
        "svc_8_p1": "Operating above 80 PSI destroys hoses, bursts valves, and voids warranties. A PRV protects silently.",
        "svc_8_p2": "A PRV regulates flow to a safe 55-60 PSI, acting as a mechanical shield at your home entry point.",
        "svc_8_good": "<strong>GOOD \u2014 $480</strong><br>Standard residential-grade brass PRV.",
        "svc_8_better": "<strong>BETTER \u2014 $624</strong><br>Wilkins 600XL with integrated pressure gauge.",
        "svc_8_best": "<strong>BEST \u2014 $768</strong><br>Watts LFN45B with inline strainer and thermal expansion tank.",
        "svc_9_title": "Emergency Triage",
        "svc_9_p1": "When a pipe bursts at 3AM, every second counts. We arrive fast, stabilize the leak, mitigate damage.",
        "svc_9_p2": "Our rapid response squad stops catastrophic flow and restores vital service to functional areas.",
        "svc_9_good": "<strong>GOOD \u2014 $380</strong><br>Main shutoff and SharkBite temporary caps.",
        "svc_9_better": "<strong>BETTER \u2014 $494</strong><br>Sector isolation with permanent ProPress valves.",
        "svc_9_best": "<strong>BEST \u2014 $608</strong><br>Full isolation manifold. Permanent one-visit solution.",
        "svc_10_title": "CAD & Digital Tracing",
        "svc_10_p1": "Modern development requires documented precision. We trace underground lines and deliver as-built plans.",
        "svc_10_p2": "We use electromagnetic tracing and digital modeling to map your invisible network and prevent accidents.",
        "svc_10_good": "<strong>GOOD \u2014 $600</strong><br>Main line tracing with surface paint and professional schematic.",
        "svc_10_better": "<strong>BETTER \u2014 $780</strong><br>2D AutoCAD overlay integrated with property architectural plans.",
        "svc_10_best": "<strong>BEST \u2014 $960</strong><br>3D BIM/Revit modeling. Every node, pipe and valve geolocated.",
        "svc_11_title": "Tankless Water Heater",
        "svc_11_p1": "Imagine endless hot water on demand. Tankless systems only fire when you open the tap.",
        "svc_11_p2": "Save space, reduce carbon footprint, and ensure constant purified hot water without tank explosion risks.",
        "svc_11_good": "<strong>GOOD \u2014 $3,200</strong><br>Navien NPE-A2 non-condensing. Great for quick replacements.",
        "svc_11_better": "<strong>BETTER \u2014 $4,160</strong><br>Rinnai RU Sensei Condensing. 0.95 UEF, smart modulating burners.",
        "svc_11_best": "<strong>BEST \u2014 $5,120</strong><br>Navien NPE-240A2 with ComfortFlow recirculation. Instant hot water, zero wait.",
        "svc_12_title": "Backflow Preventer Assembly",
        "svc_12_p1": "If you manage a business or irrigation, a Backflow preventer is federally mandated. Avoid crippling fines.",
        "svc_12_p2": "We are certified to install, calibrate and register these assemblies that protect drinking water.",
        "svc_12_good": "<strong>GOOD \u2014 $850</strong><br>Standard Wilkins 375 RPZ. Immediate city compliance.",
        "svc_12_better": "<strong>BETTER \u2014 $1,105</strong><br>High-flow Watts Series 009. Lead-free bronze for severe commercial use.",
        "svc_12_best": "<strong>BEST \u2014 $1,360</strong><br>Febco 860 RPZ with IoT sensor. Real-time differential monitoring.",
        "svc_13_title": "Luxury Fixture Swap",
        "svc_13_p1": "A luxury bathroom requires matching hardware with precise calibration, not just aesthetics.",
        "svc_13_p2": "We perform perfectly leveled, hermetically sealed installations tested at maximum pressure.",
        "svc_13_good": "<strong>GOOD \u2014 $250</strong><br>Standard Delta/Moen installation with stainless braided supply lines.",
        "svc_13_better": "<strong>BETTER \u2014 $325</strong><br>Moen Align/Grohe spot-resist. Commercial anti-mold silicone sealing.",
        "svc_13_best": "<strong>BEST \u2014 $400</strong><br>Kohler Artifacts Smart Touch integration. Temperature calibration and sensor wiring.",
        "svc_14_title": "Water Chemistry Panel",
        "svc_14_p1": "Your tap water may look clear but contain heavy metals or chloramine. Test before investing in filters.",
        "svc_14_p2": "We provide precise scientific analysis on-site and via certified labs for a custom water treatment plan.",
        "svc_14_good": "<strong>GOOD \u2014 $150</strong><br>Rapid on-site TDS, hardness and free chlorine test.",
        "svc_14_better": "<strong>BETTER \u2014 $195</strong><br>16-point certified lab panel (heavy metals, lead, nitrates). Report in 5 days.",
        "svc_14_best": "<strong>BEST \u2014 $240</strong><br>On-site test plus permanent inline digital TDS meter for real-time monitoring.",
        "svc_15_title": "Commercial Hydro-Jetting",
        "svc_15_p1": "When scale or thick roots calcify sewer pipes, electric snakes fail. Time for industrial force.",
        "svc_15_p2": "Our Hydro-Jetting blasts at 4000+ PSI with rotating laser nozzles restoring the original pipe diameter.",
        "svc_15_good": "<strong>GOOD \u2014 $750</strong><br>Heavy augering with 7/8 sectional electric cable.",
        "svc_15_better": "<strong>BETTER \u2014 $975</strong><br>4000 PSI Hydro-Jetting. Eliminates scale and emulsified grease.",
        "svc_15_best": "<strong>BEST \u2014 $1,200</strong><br>Heavy jetting + HD camera inspection + 12-month RootX inhibitor application.",


        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",
        "nav_nexus": "Nexus Home",
        "nav_orion": "Orion Ecosystem",
        "nav_services": "Pro Engineering",
        "nav_multimedia": "Podcasts",
        "nav_about": "Mission",
        "nav_terminal": "Terminal",
        "hero_badge": "PROFESSIONAL ENGINEERING & CSLB C-36 CERTIFIED",
        "hero_title": "MORALES PLUMBING",
        "hero_desc": "Integrating over 21 years of engineering expertise with AI estimation and sustainable hydraulic design.",
        "stat_ready": "Licensed",
        "stat_eco": "ISO 14001",
        "stat_ai": "AI Active",
        "hero_explore": "View Solutions",
        "hero_joe": "Joe Assistant",
        "projects_title": "Engineering Excellence",
        "projects_desc": "Our real-world technological applications and project management systems.",
        "card_ep_title": "ORION ESTIMATOR PRO",
        "card_ep_desc": "Automated Computer Vision-based estimation with +8000 item catalog. Margin optimization >70%.",
        "card_orion_title": "ORION STRATEGIC SYSTEMS",
        "card_orion_desc": "Digital workflow solutions for high-volume projects. Smart contracts and real-time tracking.",
        "btn_pricing": "View Official Price Book",
        "service_copper_content": "High-purity copper piping systems (Types L, M, K).",
        "service_copper_purpose": "Ensure optimal thermal conductivity and extreme structural durability.",
        "service_copper_usage": "Luxury residential renovations and critical commercial systems.",
        "service_copper_potential": "Total elimination of microplastics and 50+ year lifespan.",
        "service_copper_costs": "40% reduction in recurring repair costs.",
        "service_copper_comp": "Aerospace-grade welding vs. standard local installations.",
        "service_copper_plus": "International environmental protocols and precision engineering design.",
        "service_copper_lean": "Lean processes to minimize customer downtime.",

        "service_expansion_content": "Hydraulic expansion modules for new construction areas.",
        "service_expansion_purpose": "Maintain constant and balanced pressure in expanded systems.",
        "service_expansion_usage": "Residential additions and ADU units.",
        "service_expansion_potential": "Seamless integration with existing systems without pressure drops.",
        "service_expansion_costs": "25% savings by avoiding total redesign of the main network.",
        "service_expansion_comp": "Pre-hydraulic simulation vs. conventional trial and error.",
        "service_expansion_plus": "Environmental engineering focused on volumetric flow efficiency.",
        "service_expansion_lean": "Phased installation for operational continuity.",

        "service_construction_content": "Complete hydraulic infrastructure for buildings from the ground up.",
        "service_construction_purpose": "Excellence from foundation to final finishes.",
        "service_construction_usage": "New custom residences and commercial complexes.",
        "service_construction_potential": "Maximum resource optimization and strict code compliance.",
        "service_construction_costs": "15% reduction in material costs through value engineering.",
        "service_construction_comp": "3D digital mapping vs. conventional static blueprints.",
        "service_construction_plus": "International sustainable construction certifications.",
        "service_construction_lean": "Total integration with general construction timelines.",

        "service_repair_content": "Advanced diagnostics and high-fidelity technical repair.",
        "service_repair_purpose": "Immediate restoration of functionality with minimal invasion.",
        "service_repair_usage": "Critical failures, hidden leaks, and component degradation.",
        "service_repair_potential": "Early detection through Joe AI and thermography.",
        "service_repair_costs": "Prevention of massive structural damage valued in thousands of dollars.",
        "service_repair_comp": "Precision diagnostics vs. exploratory demolition.",
        "service_repair_plus": "Environmental safety protocols in every intervention.",
        "service_repair_lean": "Optimized technical resource allocation.",

        "service_septic_content": "Advanced biodigesters and infiltration systems.",
        "service_septic_purpose": "Eco-friendly on-site wastewater treatment.",
        "service_septic_usage": "Rural properties, off-grid systems, and sensitive zones.",
        "service_septic_potential": "Total independence from municipal sewage.",
        "service_septic_costs": "Permanent elimination of sewage bills.",
        "service_septic_comp": "Advanced biological systems vs. traditional septic tanks.",
        "service_septic_plus": "Strict compliance with California regulations.",
        "service_septic_lean": "Low maintenance through intelligent design.",

        "service_water_content": "Rainwater harvesting and greywater reuse.",
        "service_water_purpose": "Maximum water autonomy and resource conservation.",
        "service_water_usage": "Smart irrigation, cleaning, and permitted domestic use.",
        "service_water_potential": "Drought resilience and water footprint reduction.",
        "service_water_costs": "Up to 60% savings on potable water consumption.",
        "service_water_comp": "Multi-level filtration engineering vs. simple rain barrels.",
        "service_water_plus": "Government-grade environmental sustainability protocols.",
        "service_water_lean": "Automation of capture and distribution cycles.",

        "btn_buy": "Buy License",
        "btn_proposal": "Strategic Framework",
        "btn_academy": "Orion Academy",
        "services_title": "Core Engineering Services",
        "service_1": "Thermography Diagnostics",
        "service_1_desc": "Non-invasive leak detection using high-resolution thermal imaging and acoustic sensors.",
        "service_2": "Eco-Retrofitting",
        "service_2_desc": "System modernization with eco-friendly materials and high-efficiency water savings (ISO 14001).",
        "service_3": "Hydraulic Infrastructure Design",
        "service_3_desc": "Expert planning of high-precision hydraulic networks for residential and commercial infrastructure.",
        "manifesto_title": "Morales Plumbing Manifesto",
        "mission_title": "MISSION",
        "mission_desc": "To lead the industry by integrating over 21 years of engineering experience with AI, delivering high-precision solutions under CSLB regulatory standards and the Uniform Plumbing Code (UPC).",
        "vision_title": "VISION",
        "vision_desc": "To be the global standard for technical plumbing and sustainable engineering — defined by constant innovation, operational excellence, and absolute integrity in every project.",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "Principal Engineer & Founder",
        "cv_link": "> ACCESS PROFESSIONAL RESUME",
        "ceo_link": "> CEO EXECUTIVE PROFILE",
        "network_link": "> NETWORK: ORION TECH",
        "joe_status": "JOE: AI ENGINEERING ASSISTANT",
        "joe_welcome": "Welcome. I am Joe. How can I assist you with project diagnostics or engineering services today?",
        "joe_intro": "Hello! I'm Joe, the AI assistant for Morales Plumbing. How can I help you today?",
        "joe_placeholder": "Ask about plumbing, services, or projects...",
        "joe_send": "SEND",
        "joe_trigger_title": "Talk to Joe · AI Assistant",
        "nav_pricebook": "Price Book",
        "nav_legal": "Legal",
        "back_home": "BACK TO HOME",
        "btn_read": "Read More",
        "pricebook_tag": "WEB APP · ACTIVE",
        "pricebook_title": "ORION PRICE BOOK v6.0 PRO",
        "nav_catalog": "Catalog",
        "nav_methodology": "Methodology",
        "nav_tiers": "Tiers",
        "nav_upsells": "Upsells",
        "nav_promotions": "Promotions",
        "nav_terms": "Terms",
        "nav_warranties": "Warranties",
        "pb_hero_badge": "Industry Standard Edition",
        "pb_hero_subtitle": "Professional Plumbing Services | Bay Area, CA",
        "pb_hero_location": "Bay Area, California",
        "pb_hero_updated": "Updated: December 2024",
        "pb_hero_details": "15 Detailed Professional Services",
        "pb_hero_rates": "Lead: $185/hr | Helper: $95/hr | Markup: 30%",
        "pb_hero_compliance": "Engineering Standard: ORION Tech | Quality Guaranteed",
        "pb_hero_powered": "Developed by NeKon AI aGent Consulting | ORION System",
        "pb_method_title": "Calculation Methodology",
        "pb_tiers_title": "Good / Better / Best System",
        "pb_upsells_title": "Upsells System",
        "pb_promotions_title": "Active Promotions",
        "pb_terms_title": "Terms and Conditions",
        "pb_warranties_title": "Warranties and Support",
        "pb_catalog_title": "Service Catalog",
        "pricebook_desc": "Industry Standard Edition with +100 Detailed Professional Services, 3 Pricing Tiers, and Integrated Upsells System.",
        "pricebook_feat1": "+100 Services",
        "pricebook_feat2": "Good/Better/Best Tiers",
        "pricebook_feat3": "Upsells & Promos",
        "card_orion_feat1": "Gogo Rooter Integration",
        "card_orion_feat2": "Cloud Syncing",
        "card_orion_feat3": "Optimized ROI",
        "btn_catalog": "View Catalog",
        "btn_demo": "VIEW DEMO",
        "system_core_tag": "SYSTEM CORE · UNDER DEVELOPMENT",
        "coming_soon": "COMING SOON",
        "coming_soon_badge": "COMING SOON",
        "footer_e2ee": "E2EE Encrypted",
        "footer_cyber": "AI Cybersecurity Active",
        "footer_rights_long": "© 2026 Morales Plumbing. All rights reserved. Content, videos, generated images, and ORION / Joe AI technology are exclusive intellectual property of Morales Plumbing and NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · All Rights Reserved · Registered Trademark",
        "nav_framework": "Strategic Framework",
        "footer_rights": "© 2026 Morales Plumbing. All rights reserved.",
        "slogan_text": "Defining the Future of Flow. Innovation for Life.",
        "contact_lic": "License",
        "pb_method_p1": "The ORION calculation methodology is based on a precision engineering approach to hydraulic costing. We use industrial-grade algorithms that consider material durability, labor intensity (categorized by Lead and Helper roles), and technical complexity. This eliminates estimation variability, providing a fixed-rate structure aligned with CSLB standards and California construction market volatility.",
        "pb_method_p2": "By integrating real-time supply chain data and high-efficiency proprietary workflow protocols, our methodology guarantees an optimized 30% markup while maintaining sustainable margins for high-fidelity technical execution. This scientific pricing approach ensures that every project is backed by verified hydraulic data and transparent resource allocation.",
        "pb_tiers_p1": "The Good/Better/Best system provides our clients with three distinct tiers of engineering solutions, tailored to different project lifecycle goals. The 'Good' tier focuses on UPC-compliant repairs and efficient restoration. The 'Better' tier introduces enhanced component durability and mid-range performance upgrades. The 'Best' tier represents the ORION Tech standard: premium industrial-grade materials, AI-integrated monitoring, and extended life-cycle warranties.",
        "pb_tiers_p2": "Each tier is designed to offer maximum value within its scope, allowing residential and commercial stakeholders to make informed decisions based on their long-term infrastructure strategy, not just immediate need.",
        "pb_upsells_p1": "Our upsell system is designed to provide proactive infrastructure protection. Beyond the primary request, we analyze the hydraulic environment to suggest critical upgrades such as smart shut-off valves, water filtration systems, and high-efficiency circulation pumps. These additions are not just options, but strategic investments in property safety.",
        "pb_upsells_p2": "Each recommendation is backed by diagnostic data, ensuring that every integration serves a functional purpose in preventing future failures and reducing long-term operational costs.",
        "pb_promo_p1": "The Morales Plumbing Promotional Framework rewards proactive maintenance and high-volume project commitments. We offer periodic incentives for entire-home repiping, seasonal water heater optimizations, and first-time ORION Tech integrations. These promotions are designed to lower the barrier to entry for high-precision engineering solutions.",
        "pb_promo_p2": "All active promotions are subject to engineering review and cannot be combined with other strategic discounts, ensuring that project quality remains the absolute priority.",
        "pb_terms_p1": "All services provided by Morales Plumbing are governed by the California Contractors State License Board (CSLB) and the Uniform Plumbing Code (UPC). Every contract includes a detailed scope of work, fixed-rate pricing (no hidden fees), and a clear technical methodology statement. Payments are structured to align with project milestones.",
        "pb_terms_p2": "Liability and dispute resolution follow California industrial standards, ensuring a professional and transparent partnership between the engineering team and the client.",
        "pb_warranty_p1": "Morales Plumbing offers a standard 1-year warranty on all labor and technical integrations, with extended warranties available for 'Best' tier systems and ORION Tech installations. Additionally, we provide flexible credit plans and a lifetime labor warranty system for complete repipes (water, drainage, or gas). Our support team utilizes IoT monitoring data to provide rapid diagnostic responses, minimizing downtime and ensuring system integrity.",
        "pb_warranty_p2": "Manufacturer warranties apply to all industrial materials used, with Morales Plumbing serving as the primary technical point of contact for all warranty-related inquiries and system audits.",
        "pb_warranty_note": "*IoT Monitoring:* Refers to the use of smart technology (Wi-Fi water shutoff valves, leak sensors, smart heaters) that send data and alerts to the cloud for rapid preventive diagnostics.",
        "pb_prose_p1": "The ORION Price Book v6.0 PRO is the operational core of Morales Plumbing, designed to provide absolute transparency in cost engineering. This catalog, updated to December 2024 for the California Bay Area, has been developed under the rigorous guidelines of the California Contractors State License Board (CSLB) and the Uniform Plumbing Code (UPC), ensuring that every technical intervention is backed by industrial safety and environmental sustainability standards.",
        "pb_prose_p2": "This document's structure prioritizes clarity for the client, eliminating complex on-site calculations and ensuring that every quote reflects the use of industrial-grade materials and precision methodologies audited by high-efficiency protocols. At Morales Plumbing, we don't just fix pipes; we engineer sustainable hydraulic systems for the next generation.",
        "pb_prose_p3": "Our approach integrates AI-driven estimation with over 21 years of field experience, allowing for a 99% accuracy rate in resource allocation and timeline projection. By choosing ORION, you are choosing a strategic infrastructure partner committed to the highest levels of technical excellence and integrity.",
        "aq_title": "ORION AQUA GUARD v1.0",
        "aq_desc": "Advanced monitoring and management of high-precision water treatment systems. Real-time pH, hardness, and filtration analytics.",
        "aq_feat1": "IoT Monitoring",
        "aq_feat2": "Automatic Backwash",
        "aq_feat3": "Purity Alerts",
        "aq_prose_p1": "ORION AQUA GUARD v1.0 represents the pinnacle of residential and commercial water purification management. This system utilizes a network of IoT sensors to continuously monitor incoming water quality, measuring variables such as hardness (grains per gallon), pH levels, and contaminant concentrations. The data is processed through our proprietary ORION engine to optimize filtration efficiency and salt consumption.",
        "aq_prose_p2": "Beyond simple softening, Aqua Guard manages multi-stage reverse osmosis units and UV sterilization systems. Users receive real-time alerts via the ORION ecosystem regarding filter life cycles and purity drops, ensuring that the water used for consumption and infrastructure remains at laboratory-grade standards.",
        "aq_prose_p3": "By integrating Aqua Guard into your hydraulic network, you extend the lifespan of all downstream appliances and fixtures. The system's predictive maintenance capabilities ensure that intervention is only required when statistically necessary, maximizing both water quality and system ROI.",
        "hn_title": "ORION HYDRAULIC NEXUS",
        "hn_desc": "CAD-integrated hydraulic design and pressure simulation for complex infrastructures. Optimized flow-volume distribution.",
        "hn_feat1": "CAD Integration",
        "hn_feat2": "Pressure Mapping",
        "hn_feat3": "Leak Simulation",
        "hn_prose_p1": "ORION HYDRAULIC NEXUS is our professional-grade design suite for planning and simulating high-pressure hydraulic infrastructures. Utilizing CAD-integrated blueprints, we create a digital twin of your plumbing system to analyze flow dynamics, pressure drops across long runs, and thermal expansion variables. This is critical for high-end residential and multi-story commercial projects where standard estimation fails.",
        "hn_prose_p2": "The system allows our engineers to stress-test the virtual network under various peak-demand scenarios, identifying potential weak points before a single pipe is installed. This methodology ensures that every fixture receives the exact UPC-required pressure, eliminating 'dead zones' and optimizing water delivery speed.",
        "hn_prose_p3": "Hydraulic Nexus also integrates with our thermography diagnostics, allowing us to overlay real-time thermal data onto original blueprints for pinpoint leak detection and infrastructure auditing. It is the definitive tool for precision plumbing engineering.",
        "wh_title": "ORION THERMO CORE v2.0",
        "wh_desc": "Smart diagnostic and optimization system for high-efficiency tankless water heaters. Predictive scaling alerts and combustion tuning.",
        "wh_feat1": "Combustion Tuning",
        "wh_feat2": "Scaling AI",
        "wh_feat3": "Energy Optimization",
        "wh_prose_p1": "ORION THERMO CORE v2.0 is the dedicated management platform for high-efficiency tankless water heating systems. Unlike traditional heaters, modern tankless units require precise combustion tuning and regular heat-exchanger descaling to maintain their 90%+ AFUE ratings. Thermo Core uses acoustic and flow sensors to detect the earliest signs of mineral accumulation.",
        "wh_prose_p2": "The platform provides automated scheduling for flush cycles based on actual usage patterns, rather than arbitrary timelines. It also monitors ignition cycles and gas-to-air ratios to ensure the system is operating at peak thermal efficiency, directly reducing monthly utility costs and carbon footprints.",
        "wh_prose_p3": "With Thermo Core, Morales Plumbing provides a 'set-and-forget' experience for premium hot water delivery. The system's integration with the ORION ecosystem allows for remote diagnostics, meaning our engineers often identify and resolve performance issues before the client even notices a drop in temperature.",
        "pb_hero_title": "ORION Price Book v6.0 PRO",
        "pb_search_placeholder": "Search service (e.g. Water Heater, Drain, AI Mapping...)",
        "cat_all": "All",
        "cat_diagnostic": "Diagnostic",
        "cat_engineering": "Engineering",
        "cat_eco": "Eco-Sustainable",
        "cat_safety": "Safety",
        "price_standard": "Standard",
        "price_member": "Member",
        "lbl_client_view": "Client View:",
        "lbl_tech_view": "Tech Spec & Materials (3 Tiers):",
        "doc_title": "STRATEGIC PROPOSAL",
        "doc_subtitle": "Mastering Smart Plumbing & Environmental Engineering",
        "sig_name": "Alex G. Espinosa",
        "profile_header_role": "Senior AI Solutions Architect | Environmental Engineer | Project Manager",
        "app_pricebook_detail": "The ORION Price Book v6.0 PRO is a cost engineering tool that standardizes service rates across the Bay Area. It utilizes a tiered system (Good/Better/Best) to offer flexible options that comply with UPC safety standards.",
        "app_mp_detail": "The Morales Plumbing (MP) Portal centralizes client communication, allowing for smart scheduling and access to technical reports generated by our Joe AI. It ensures full transparency in every project phase.",
        "app_ep_detail": "Orion Estimator Pro uses computer vision algorithms to analyze blueprints and site photos, generating Bills of Materials (BOM) and labor estimates with 99% accuracy. Integrated with +8000 items updated in real-time for the California market.",
        "app_tratamiento_title": "Water Treatment Systems",
        "app_tratamiento_detail": "The Water Treatment application manages advanced filtration and purification cycles. Provides real-time data on water hardness, pH levels, and contaminant removal efficiency, allowing for predictive maintenance of industrial RO systems.",
        "app_redes_title": "Hydraulic Network Design",
        "app_redes_detail": "Our Hydraulic Network Design app allows for simulation of complex fluid dynamics in residential and commercial environments. Uses ISO-standard algorithms to optimize pipe sizing and pressure distribution, reducing material waste and ensuring UPC/CPC compliance.",
        "app_heaters_title": "Tankless Water Heaters",
        "app_heaters_detail": "This application optimizes the installation and performance of tankless water heating systems. Calculates peak flow demands and gas pressure requirements to ensure uninterrupted hot water delivery, including a diagnostic module for troubleshooting.",
        "legal_title": "Legal Framework & Cybersecurity",
        "sec1_title": "Environmental Engineering & Sustainability",
        "sec1_legal_p1": "All content on this platform, including but not limited to corporate videos, generated 3D images, source code, and the ORION Price Book v6.0 PRO database structure, is strictly protected by intellectual property and copyright laws of the United States and the State of California.",
        "sec1_legal_li1": "Morales Plumbing retains exclusive rights to its trademark, engineering methodologies, customer base, and technical services portfolio.",
        "sec1_legal_li2": "NeKon AI aGent Consulting retains co-authorship and rights to the AI infrastructure ('Joe AI'), neural network models, computer vision diagnostic systems, and underlying ORION system automation technology.",
        "sec1_legal_p2": "Unauthorized reproduction, copying, scraping, distribution, or commercial use of any multimedia material hosted in this digital ecosystem is strictly prohibited.",
        "sec2_legal_title": "2. Cybersecurity and Data Privacy",
        "sec2_legal_p1": "Ensuring the security of our commercial (B2B) and residential (B2C) clients is an absolute priority. All our systems operate under strict industrial-grade security protocols:",
        "sec2_legal_li1": "Thermal and Infrared Detection: Structural data collection via high-res thermal cameras and precision sensors is performed exclusively for non-invasive physical diagnostic purposes.",
        "sec2_legal_li2": "Smart Contracts and Payments: All generated billing and contracts are protected with end-to-end encryption (E2EE).",
        "sec2_legal_li3": "Joe AI Interactions: Queries to Joe are analyzed anonymously to improve the predictive engine, respecting user privacy.",
        "sec3_legal_title": "3. Terms of Reference (SLA)",
        "sec3_legal_p1": "The provision of physical services and engineering execution are governed by the ORION Strategic Framework and the Price Book. By interacting with the platform:",
        "sec3_legal_li1": "Clients accept the Good/Better/Best service levels and terms aligned with the standards of the City of San Jose.",
        "sec3_legal_li2": "Labor and parts warranties strictly adhere to CSLB Class C-36 License and UPC/CPC codes.",
        "sec3_legal_li3": "Digital Diagnostic Condition: AI-generated reports are preliminary. On-site validation by a qualified technician is required for final authorization.",
        "contact_loc": "Location",
        "contact_email": "Email",
        "contact_phone": "Phone",
        "aca_back": "Back to Modules",
        "aca_mod_badge": "MODULE 01 | WEEK 1",
        "aca_hero_title": "Know ORION Tech",
        "aca_hero_desc": "Mission, vision, values, organizational structure and company culture. This module will give you the foundation to understand who we are and where we're going.",
        "aca_video_title": "Video: Organizational Structure",
        "aca_mission_title": "Our Mission",
        "aca_mission_desc": "Democratize intelligent automation for small and medium businesses, allowing them to compete with large companies using cutting-edge technology.",
        "aca_vision_title": "Our Vision",
        "aca_vision_desc": "Be the leading AI automation platform for Spanish-speaking businesses worldwide by 2028.",
        "aca_what_title": "What We Do",
        "aca_what_desc": "We create AI assistants that respond to messages 24/7 on WhatsApp, Instagram, Facebook, Telegram and more. We automate reservations, appointments, sales and customer service.",
        "aca_org_title": "Organizational Structure",
        "aca_values_title": "Our Values",
        "aca_val1_title": "Innovation",
        "aca_val1_desc": "We seek new ways to solve problems",
        "aca_val2_title": "Trust",
        "aca_val2_desc": "We do what we say",
        "aca_val3_title": "Resilience",
        "aca_val3_desc": "We don't give up on rejections",
        "aca_val4_title": "Impact",
        "aca_val4_desc": "We measure real results",
        "aca_val5_title": "Excellence",
        "aca_val5_desc": "Quality over quantity",
        "aca_global_title": "Global Presence",
        "aca_usa_title": "🇺🇸 USA (Headquarters)",
        "aca_usa_li1": "San José, California",
        "aca_usa_li2": "CEO + Executive leadership",
        "aca_usa_li3": "Primary market",
        "aca_col_title": "🇨🇴 Colombia (LATAM Hub)",
        "aca_col_li1": "Medellín",
        "aca_col_li2": "Operations Director",
        "aca_col_li3": "SDRs and Developers team",
        "aca_mex_title": "🇲🇽 México",
        "aca_mex_li1": "Mexico City",
        "aca_mex_li2": "In development - 2025",
            "service_copper_title": "Elite Copper Renovations",
        "service_copper_desc": "High-end hydraulic infrastructure with 2024 UPC compliance.",
        "service_copper_content": "Full replacement of legacy systems (Galvanized/PEX) with Type L and K Copper using certified precision brazing.",
        "service_copper_purpose": "Eliminate polymer degradation and metallic corrosion, ensuring water purity and increasing Bay Area property value.",
        "service_copper_usage": "Luxury residential projects in San Jose, Palo Alto, and Los Gatos, where durability and seismic code are critical.",
        "service_copper_potential": "Systems designed for 50+ year lifespans, 100% recyclable, and compatible with high-flow centralized filtration.",
        "service_copper_costs": "Immediate ROI through reduced insurance premiums and elimination of recurring leak repairs.",
        "service_copper_comp": "Outperforming competitors using low-density PEX and mechanical joints prone to pressure failure.",
        "service_copper_plus": "Environmental Engineering: Post-installation sanitization protocols and lead-free soldering certification.",
        "service_copper_lean": "Lean Methodology: Off-site pre-fabrication kits reducing on-site time by 40%.",

        "service_septic_title": "Advanced Septic Engineering",
        "service_septic_desc": "In-situ treatment systems for rural and eco-sustainable infrastructure.",
        "service_septic_content": "Installation of up-flow anaerobic biodigesters and smart infiltration fields with level sensors.",
        "service_septic_purpose": "Ecological waste management in off-grid areas (Saratoga/Santa Cruz Mountains), protecting local aquifers.",
        "service_septic_usage": "Large residential estates and renovations requiring strict CA Water Board compliance.",
        "service_septic_potential": "Scalable systems allowing safe on-site conversion of sludge to soil biomass.",
        "service_septic_costs": "Total elimination of municipal sewer fees and 50% reduction in pumping frequency.",
        "service_septic_comp": "Against traditional concrete tanks, we offer high-strength polymers with 0% seepage probability.",
        "service_septic_plus": "Environmental Protocols: Soil auditing and hydraulic design based on local absorption rates.",
        "service_septic_lean": "Lean Process: 48-hour modular installation via GPS-guided excavation.",

        "service_water_title": "Hydric Collection Systems",
        "service_water_desc": "Strategic rainwater capture and greywater reuse engineering.",
        "service_water_content": "Pluvial capture networks and greywater treatment systems (bathrooms/laundry) for non-potable use.",
        "service_water_purpose": "Mitigate California drought impact and reduce municipal supply dependency through hydric autonomy.",
        "service_water_usage": "Integrated systems for smart gardens and toilet flushing under extreme saving mandates.",
        "service_water_potential": "Partial hydric independence of up to 65% of annual residential consumption.",
        "service_water_costs": "Massive savings on water bills and access to state environmental conservation incentives.",
        "service_water_comp": "Custom designs vs simple rain barrels; we deliver grade-2 filtration engineering.",
        "service_water_plus": "Environmental Engineering: Integrated UV disinfection systems to prevent pathogen proliferation.",
        "service_water_lean": "Lean Process: Dynamic flow mapping to minimize electric pump usage.",

        "service_expansion_title": "Pro Hydraulic Expansions",
        "service_expansion_desc": "Strategic network expansion for renovations and ADUs.",
        "service_expansion_content": "Design and execution of new hydraulic branches for ADUs, gourmet kitchens, and master expansions.",
        "service_expansion_purpose": "Ensure additional hydraulic load does not compromise existing system pressure or integrity.",
        "service_expansion_usage": "Growing ADU market in Silicon Valley, ensuring compliance with current building codes.",
        "service_expansion_potential": "Native integration capability with smart leak detection systems for the entire property.",
        "service_expansion_costs": "Fixed pricing via Price Book v6.0, avoiding 'change order' surprises.",
        "service_expansion_comp": "Use of digital twins to simulate pressure before the first drilling.",
        "service_expansion_plus": "Morales Plus: Thermal balancing verification on expanded hot water lines.",
        "service_expansion_lean": "Lean Process: 'Just-in-Time' logistics for materials, keeping the job site clean.",

        "service_construction_title": "New Construction Engineering",
        "service_construction_desc": "Integral infrastructure design and deployment for smart buildings.",
        "service_construction_content": "Foundation-level planning, high-speed rough-in, and premium engineering finishes.",
        "service_construction_purpose": "Establish a flawless infrastructure foundation exceeding California inspection standards.",
        "service_construction_usage": "New modern residences and multi-family complexes at the technological forefront.",
        "service_construction_potential": "Native readiness for full Smart Home and hydric IoT integration.",
        "service_construction_costs": "Budget optimization through value engineering and strategic material selection.",
        "service_construction_comp": "Direct collaboration with architects via BIM files, eliminating on-site design conflicts.",
        "service_construction_plus": "Environmental Protocols: LEED certification for the hydraulic installation.",
        "service_construction_lean": "Lean Process: Concurrent task planning to reduce construction schedule by 15%.",

        "service_repair_title": "Smart Diagnosis & Repair",
        "service_repair_desc": "Technical restoration via non-invasive thermography and acoustics.",
        "service_repair_content": "Precise localization of invisible faults and surgical repairs with minimal structural interruption.",
        "service_repair_purpose": "Resolve complex plumbing issues without unnecessary massive demolitions.",
        "service_repair_usage": "Critical maintenance in inhabited residences and continuously operating commercial buildings.",
        "service_repair_potential": "Digital repair history stored in ORION ecosystem for predictive maintenance.",
        "service_repair_costs": "Avoids massive post-repair reconstruction costs by pinpointing the exact failure point.",
        "service_repair_comp": "Use of Joe AI Assistant for flow pattern analysis vs traditional 'trial and error'.",
        "service_repair_plus": "Morales Plus: Extended warranty based on digital diagnostic precision.",
        "service_repair_lean": "Lean Process: Standardized quick-repair kits for first-visit resolution.",
        "faq_title": "Q&A | Technical Hub",
        "faq_cat_plumbing": "Plumbing Systems",
        "faq_cat_eco": "Eco-Plumbing Mix",
        "faq_cat_env": "Environmental Regulations",
        "faq_q1": "Why choose copper over PEX for renovations and new construction?",
        "faq_a1": "Copper provides superior durability, fire resistance, and prevents bacterial growth. Under California UPC, it remains the gold standard for high-end value. Alternatively, PEX offers outstanding flexibility, fewer joint connections (minimizing leak points), faster installation times, and lower upfront material costs. <span class=\"comic-choice\">The choice is yours</span>: choose premium longevity and classic material value (Copper), or modern cost-efficiency and elastic resilience (PEX).",
        "faq_q2": "What are the 2026 California septic and environmental regulations?",
        "faq_a2": "Regulations focus on nitrogen reduction, groundwater protection, and water reuse efficiency. Morales Plumbing ensures 100% compliance through advanced environmental engineering and Water Board protocols. Additionally, we design standard compliant septic setups that minimize upfront system costs using standard local permit paths. <span class=\"comic-choice\">The choice is yours</span>: invest in premium ecological systems that future-proof your land beyond 2030 standards, or select a standard compliant setup focused on immediate cost efficiency.",
        "faq_q3": "How does Lean Process and Environmental Engineering benefit my project?",
        "faq_a3": "By eliminating waste and using sustainable materials, we reduce costs by 25% and timelines by 30%. Our protocols ensure a lower carbon footprint and higher infrastructure ROI. Alternatively, we offer classic construction pathways focusing on maximum custom specifications and absolute manual structural redundancy without lean scheduling limits. <span class=\"comic-choice\">The choice is yours</span>: select our fast-track Lean Eco-process for maximum efficiency, or our classic manual custom build for bespoke traditional margins.",
        "faq_q4": "Can I integrate water harvesting into my existing plumbing system?",
        "faq_a4": "Yes, we specialize in retrofitting captures and greywater systems to existing networks, significantly reducing municipal dependency and operational costs.",
        "faq_q5": "What is the advantage of the Morales Plumbing PLUS framework?",
        "faq_a5": "It combines CSLB C-36 expertise with Environmental Engineering, AI diagnostics, and Lean Process, providing a level of precision and sustainability unmatched in the local competition.",
        "faq_q6": "How does Morales Plumbing ensure UPC compliance?",
        "faq_a6": "Our engineers are CSLB C-36 certified and utilize AI-assisted code-check protocols to ensure every joint exceeds California standards. In addition, we provide traditional double-inspector physical checks and manual verification checklists for clients who prefer classic mechanical oversight. <span class=\"comic-choice\">The choice is yours</span>: choose our modern, high-precision AI-assisted digital validation, or our time-tested manual human inspection and mechanical warranties.",
        "faq_q7": "What specific 'Lean' metrics do you track?",
        "faq_a7": "We track Takt Time, Lead Time, and First-Pass Yield to ensure a predictable, zero-waste workflow for large-scale projects. At the same time, we support classic milestone-based checkpoints, standard flat-rate billing, and traditional labor-hour audits for simpler, non-technical oversight. <span class=\"comic-choice\">The choice is yours</span>: optimize your project with real-time Lean data dashboards, or manage it via straightforward, traditional project milestones.",
        "faq_q8": "How can I future-proof my infrastructure?",
        "faq_a8": "By integrating water harvesting and greywater reuse systems today, you avoid future mandates and increase property value by up to 15%. Alternatively, you can choose an ultra-reliable, passive layout focusing on high-durability classic repiping and simplified manifold configurations that minimize active mechanical parts. <span class=\"comic-choice\">The choice is yours</span>: invest in active sustainable water technologies, or select a highly reliable, low-maintenance passive loop system.",
        "app_ep_desc": "AI-driven estimator with Computer Vision for high-precision resource allocation.",
        "app_ep_title": "Orion Estimator Pro",
        "app_heaters_desc": "Smart diagnostic module for optimizing high-efficiency water heating systems.",
        "app_mp_desc": "Centralized communication portal for client management and technical reporting.",
        "app_mp_title": "MP Management Portal",
        "app_redes_desc": "Hydraulic network simulator with CAD integration and pressure mapping.",
        "app_tratamiento_desc": "Advanced management system for filtration and purification cycles.",
        "btn_close_detail": "Close Details",
        "btn_expand": "Expand Module",
        "btn_open_app": "Open Application",
        "btn_open_service": "Open Service",
        "btn_tech_details": "Technical Details",
        "close_btn": "Close",
        "eco_desc": "Integrating sustainable methodologies and ISO 14001 standards into every project.",
        "eco_title": "Eco-Sustainable Engineering",
        "pb_promotions_p1": "Access exclusive incentives for high-volume projects and seasonal infrastructure optimizations.",
        "pb_warranties_p1": "Full transparency on labor and material warranties, backed by CSLB C-36 certification.",
        "service_copper_detail": "CONTENT: Full copper piping systems (Types L, M, K) for residential and commercial infrastructure. PURPOSE: Guaranteed structural integrity and flow efficiency. USAGE: Renovations, expansions, new construction, and repairs. POTENTIAL: Life-cycle of 50+ years with zero microplastic leaching. ROI: Increases property value by 15% compared to PEX; 30% lower maintenance costs. COMPETITION: Specialized brazing and environmental protocols. PLUS: Integrated environmental engineering with Lean Construction protocols. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "service_expansion_detail": "CONTENT: Modular hydraulic expansion blocks. PURPOSE: Seamless integration of new fixtures without pressure loss. USAGE: Commercial additions and residential expansions. POTENTIAL: Infinite scalability. ROI: Scalable infrastructure. PLUS: Lean process integration. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "service_construction_detail": "CONTENT: CAD Blueprints, rough-in, and finish plumbing. PURPOSE: Build-to-code excellence (UPC/CPC). ROI: 20% lower insurance premiums. PLUS: Int'l Environmental Protocols. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "service_repair_detail": "CONTENT: Precision leak repair and component replacement. PURPOSE: Infrastructure recovery. USAGE: Emergency and scheduled maintenance. POTENTIAL: Early detection of failures. ROI: Prevents structural damage and water waste. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "service_septic_detail": "CONTENT: Bio-digesters and leach fields. PURPOSE: Sustainable waste management. ROI: Eliminates utility fees. PLUS: Lean Process + CA Water Board compliance. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "service_water_detail": "CONTENT: Multi-stage filtration and UV sterilization. PURPOSE: Self-sufficiency. ROI: 60% reduction in water utility costs. PLUS: Int'l Environmental Protocols. COPYRIGHT: © 2026 Morales Plumbing. All Rights Reserved.",
        "cat_all": "All",
        "cat_diagnostic": "Diagnostic",
        "cat_engineering": "Engineering",
        "cat_eco": "Eco-Sustainable",
        "cat_safety": "Safety",
        "contact_loc": "Location",
        "contact_email": "Email",
        "contact_phone": "Phone",
        "joe_trigger_title": "Talk to Joe · AI Assistant",
        "footer_e2ee": "Secure & Privacy-First",
        "footer_cyber": "AI-Powered Platform",
        "footer_rights_long": "© 2026 Morales Plumbing. All rights reserved. Content, videos, generated images, and ORION / Joe AI technology are the exclusive intellectual property of Morales Plumbing and NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · All Rights Reserved · Registered Trademark",
        "sec1_title": "Environmental Engineering & Sustainability",
        "sec1_desc": "We move beyond traditional plumbing by integrating environmental engineering principles into every hydraulic design. We prioritize water efficiency, safe handling of hazardous materials (CSLB C-36 Compliance), and zero ecological impact systems across the Bay Area.",
        "sec2_title": "AI Integration & Computer Vision",
        "sec2_desc": "The ORION system uses proprietary neural networks for non-invasive leak detection and infrared diagnostics. Computer vision allows us to map infrastructure with millimeter precision, optimizing costs and execution timelines.",
        "sec3_title": "Strategic Workflow (ORION Framework)",
        "sec3_desc": "Our methodology is built on the precision of smart contracts and real-time project management. From large-scale industrial projects to high-end custom residential engineering, every step is audited by our AI assistant, Joe.",
        "sec4_title": "Dynamic Execution Models",
        "sec4_desc": "We adapt our B2B and B2C methodologies through the ORION Price Book v6.0 PRO. We offer 'Labor Only' schemes for general contractors or 'Turnkey Projects' with three technology levels (Good/Better/Best), guaranteeing scalability and ironclad contracts.",
        "cv_header_role": "Senior AI Solutions Architect | Environmental Engineer | Project Manager",
        "cv_summary_title": "Professional Summary",
        "cv_summary_p": "Environmental Engineer and AI Solutions Architect with over 21 years of multi-disciplinary experience. Expert in bridging complex physical engineering systems with cutting-edge Artificial Intelligence. Licensed professional with a proven track record in California project management and ISO 14001 environmental auditing.",
        "cv_exp_title": "Professional Experience",
        "cv_edu_title": "Education & Certifications",
        "cv_skills_title": "Technical Skills",
        "cv_lang_title": "Languages",
        "spec_content": "CONTENT",
        "spec_purpose": "PURPOSE",
        "spec_usage": "USAGE",
        "spec_potential": "POTENTIAL",
        "spec_costs": "ROI / COSTS",
        "spec_comp": "COMPETITION",
        "spec_plus": "MORALES PLUS",
        "spec_lean": "LEAN PROCESS",
        "eco_podcasts_card_title": "ORION Podcast Library",
        "eco_podcasts_card_desc": "High-fidelity interactive audios and critical analyses on the AI revolution in water infrastructure and California compliance frameworks.",
        "btn_open_podcasts": "Listen to Podcasts",
        "multimedia_title": "ORION Podcast Library",
        "multimedia_subtitle": "High-Fidelity Audio In-Depth Insights & Critical Analyses",
        "mp_podcasts_title": "MP Ecosystem Series",
        "pod_type_deep_dive": "Deep Dive",
        "mp_pod_1_title": "Silicon Valley AI transforms modern plumbing",
        "btn_listen": "Listen Now",
        "pod_type_brief": "Brief",
        "mp_pod_2_title": "AI for water leak prediction",
        "pod_type_critique": "Critique",
        "mp_pod_3_title": "AI Diagnostics & Legal Liability",
        "ep_podcasts_title": "EP Estimator Pro Series",
        "ep_pod_1_title": "EP PLUMBING: Critical Analysis",
        "ep_pod_2_title": "The AI plumber in your pocket",
        "pod_type_debate": "Debate",
        "ep_pod_3_title": "Diagnostics & Legal Framework",
        "lbl_tier_good": "GOOD (Standard)",
        "lbl_tier_better": "BETTER (Premium)",
        "lbl_tier_best": "BEST (Ultra-Premium)",
        "lbl_justification": "Justification:",
        "lbl_materials": "Materials:",
        "lbl_tools": "Tools/Equipment:",
        "lbl_time": "Est. Time:",
        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",


    
    },
    "es": {
        "eng_btn_details": "Ver Detalles →",
        "eng_back": "← Volver a Servicios Centrales",
        "eng_termo_title": "Diagnóstico por Termografía",
        "eng_termo_code": "ENG-CENT-001",
        "eng_termo_p1": "El Diagnóstico por Termografía es un pilar fundamental de nuestros Servicios de Ingeniería Central. Consiste en la detección de fugas de forma totalmente no invasiva utilizando imágenes térmicas de alta resolución y sensores acústicos.",
        "eng_termo_p2": "En lugar de realizar costosas y destructivas demoliciones exploratorias, utilizamos tecnología infrarroja FLIR para visualizar los gradientes térmicos dentro de las paredes y bajo las losas.",
        "eng_termo_tech1_title": "Imágenes Infrarrojas de Alta Precisión",
        "eng_termo_tech1_desc": "Nuestras cámaras captan diferencias de temperatura de hasta 0.1°C, mostrando exactamente por dónde viaja el agua filtrada.",
        "eng_termo_tech2_title": "Análisis Acústico Computarizado",
        "eng_termo_tech2_desc": "Empleamos micrófonos hipersensibles con filtros de IA que diferencian el ruido ambiente del siseo provocado por agua a presión escapando.",
        "eng_termo_tech3_title": "Mapeo Digital y Reporte",
        "eng_termo_tech3_desc": "Entregamos un informe digital completo a través de nuestro portal, evidenciando el problema para reclamaciones de seguros y facilitando reparaciones quirúrgicas.",
        "eng_eco_title": "Eco-Retrofitting",
        "eng_eco_code": "ENG-CENT-002",
        "eng_eco_p1": "El Eco-Retrofitting es nuestra especialidad de vanguardia para modernizar sistemas hidráulicos existentes con materiales ecológicos y componentes de ahorro hídrico de ultra-alta eficiencia.",
        "eng_eco_p2": "Actualizamos los artefactos de su edificación para reducir drásticamente el consumo de agua sin sacrificar presión ni confort.",
        "eng_eco_tech1_title": "Reducción Hídrica Comprobada",
        "eng_eco_tech1_desc": "Instalación de reguladores de flujo aerados, inodoros dual-flush de ultra-bajo consumo (UHET) y válvulas inteligentes de reducción de presión (PRV).",
        "eng_eco_tech2_title": "Materiales Sustentables",
        "eng_eco_tech2_desc": "Uso exclusivo de tuberías reciclables o con certificaciones de bajo impacto de carbono, asegurando que su proyecto tenga un impacto medioambiental cero.",
        "eng_eco_tech3_title": "Certificación de Ahorro",
        "eng_eco_tech3_desc": "Entregamos cálculos de Retorno de Inversión (ROI) y ahorro hídrico garantizado (hasta un 40% mensual), apto para aplicar a rebates estatales.",
        "eng_diseno_title": "Diseño de Infraestructura Hidráulica",
        "eng_diseno_code": "ENG-CENT-003",
        "eng_diseno_p1": "El Diseño de Infraestructura Hidráulica de Morales Plumbing es un servicio avanzado de ingeniería que garantiza la viabilidad, eficiencia y escalabilidad.",
        "eng_diseno_p2": "Nuestros ingenieros utilizan software de modelado 3D y simuladores de dinámica de fluidos para calcular gradientes de presión, expansión térmica y velocidad de flujo.",
        "eng_diseno_tech1_title": "Modelado BIM Integrado",
        "eng_diseno_tech1_desc": "Diseño paramétrico compatible con Autodesk Revit, permitiendo una coordinación impecable con arquitectos y contratistas.",
        "eng_diseno_tech2_title": "Simulación de Flujo y Presión",
        "eng_diseno_tech2_desc": "Pruebas de estrés virtual en el modelo digital para garantizar un suministro equilibrado incluso durante picos máximos de demanda.",
        "eng_diseno_tech3_title": "Cumplimiento de Código (UPC/CPC)",
        "eng_diseno_tech3_desc": "Aprobación garantizada en inspecciones de la ciudad gracias a un estricto apego a los Códigos Uniformes y de California para Plomería.",
        "eng_cobre_title": "Renovaciones en Cobre (Elite)",
        "eng_cobre_code": "ENG-CENT-004",
        "eng_cobre_p1": "Las Renovaciones en Cobre Elite representan el estándar dorado en la infraestructura hidráulica. Reemplazamos sistemas obsoletos con tuberías de Cobre Tipo L y Tipo K.",
        "eng_cobre_p2": "El cobre proporciona propiedades antimicrobianas naturales que purifican pasivamente el flujo de agua y garantizan nula liberación de microplásticos.",
        "eng_cobre_tech1_title": "Soldadura de Precisión y Sistema ProPress",
        "eng_cobre_tech1_desc": "Empleamos técnicas de unión mecánica sin fuego (ProPress) o soldadura de grado aeroespacial sin plomo.",
        "eng_cobre_tech2_title": "Longevidad y Retorno de Inversión",
        "eng_cobre_tech2_desc": "Expectativa de vida útil de más de 50 años. Eleva instantáneamente la valoración estructural de la propiedad hasta en un 15%.",
        "eng_cobre_tech3_title": "Calidad Acústica y Flujo Constante",
        "eng_cobre_tech3_desc": "El espesor de las paredes de cobre Tipo L elimina el 'golpe de ariete' y soporta presiones extremas.",
        "eng_septico_title": "Ingeniería Séptica Avanzada",
        "eng_septico_code": "ENG-CENT-005",
        "eng_septico_p1": "Nuestra división de Ingeniería Séptica Avanzada diseña, despliega y mantiene sistemas de manejo de efluentes fuera de la red utilizando biotecnología moderna.",
        "eng_septico_p2": "En lugar de instalar fosas convencionales, implementamos Sistemas de Tratamiento Aeróbico (ATU) que procesan el agua a un nivel casi apto para riego.",
        "eng_septico_tech1_title": "Estudios de Percolación y Diseño Topográfico",
        "eng_septico_tech1_desc": "Evaluación geológica del terreno para determinar la tasa exacta de absorción y dimensionar el campo de lixiviación.",
        "eng_septico_tech2_title": "Integración de Bio-Reactores",
        "eng_septico_tech2_desc": "Equipamiento con sistemas de aireación que aceleran la descomposición de sólidos mediante bacterias aeróbicas ultra-eficientes.",
        "eng_septico_tech3_title": "Cumplimiento Normativo",
        "eng_septico_tech3_desc": "Gestión end-to-end de permisos, garantizando que el diseño supere requerimientos de sanidad y mitigando multas.",
        "svc_1_title": "Precision Leak Detection",
        "svc_1_p1": "En Morales Plumbing, la precision es nuestro estandar. Identificamos fallas ocultas sin demoliciones destructivas.",
        "svc_1_p2": "Usamos camaras FLIR y sensores acusticos para trazar el origen exacto de la fuga. Ahorre miles en reconstruccion.",
        "svc_1_good": "<strong>Nivel GOOD (Estandar) \u2014 $450</strong><br>Diagnostico visual y acustico basico. Parche estandar para fugas accesibles.",
        "svc_1_better": "<strong>Nivel BETTER (Premium) \u2014 $585</strong><br>Termografia FLIR y prueba de presion. Reparacion con epoxia.",
        "svc_1_best": "<strong>Nivel BEST (Ultra-Premium) \u2014 $720</strong><br>Mapeo estructural completo. Reparacion definitiva con Cobre ProPress.",
        "svc_2_title": "Full House Repipe",
        "svc_2_p1": "El Repipe no es un parche, es un trasplante de corazon para su hogar. Las tuberias viejas causan inundaciones.",
        "svc_2_p2": "Reemplazamos toda la infraestructura con cobre y PEX de grado comercial. Erradica agua turbia y fugas cronicas.",
        "svc_2_good": "<strong>\u2705 Nivel GOOD (Est\u00e1ndar) \u2014 $3,800</strong><br>Tuber\u00eda PEX-B con conectores Crimp de lat\u00f3n. Prueba de presi\u00f3n hidr\u00e1ulica a 100 PSI. Soluci\u00f3n confiable y econ\u00f3mica certificada bajo UPC.",
        "svc_2_better": "<strong>\u2b50 Nivel BETTER (Premium) \u2014 $4,940</strong><br>Tuber\u00eda PEX-A Uponor sistema de Expansi\u00f3n. Mayor caudal, resistencia total a congelamiento y m\u00ednimos conectores mec\u00e1nicos.",
        "svc_2_best": "<strong>\ud83c\udfc6 Nivel BEST (Ultra-Premium) \u2014 $6,080</strong><br>Cobre Tipo L con tecnolog\u00eda ProPress (sin soldadura, sin flama). Caudal m\u00e1ximo, propiedades antimicrobianas naturales y durabilidad absoluta de grado comercial por 50+ a\u00f1os.",
        "svc_3_title": "Water Filtration & Softening",
        "svc_3_p1": "El agua dura destruye electrodomesticos y deja manchas. Transformamos la calidad desde el punto de entrada.",
        "svc_3_p2": "Instalamos sistemas que eliminan cloro, metales pesados y calcio. Agua cristalina y 30% mas vida util en equipos.",
        "svc_3_good": "<strong>Nivel GOOD \u2014 $1,500</strong><br>Ablandador 32k granos a base de sal.",
        "svc_3_better": "<strong>Nivel BETTER \u2014 $1,950</strong><br>Fleck 5600SXT Metered digital.",
        "svc_3_best": "<strong>Nivel BEST \u2014 $2,400</strong><br>Halo 5 sin sal, sin mantenimiento, con UV.",
        "svc_4_title": "Smart Valve Installation",
        "svc_4_p1": "Si una tuberia estalla de vacaciones, las valvulas IoT cortan el agua y alertan su telefono en segundos.",
        "svc_4_p2": "Monitorizan el flujo 24/7 con IA y detectan microfugas o rupturas catastroficas.",
        "svc_4_good": "<strong>Nivel GOOD \u2014 $350</strong><br>Valvula de bola de laton 1/4 vuelta.",
        "svc_4_better": "<strong>Nivel BETTER \u2014 $455</strong><br>Moen Flo Smart. Monitoreo diario, microfugas, cierre desde app.",
        "svc_4_best": "<strong>Nivel BEST \u2014 $560</strong><br>Phyn Plus ultrasonico. Sin partes moviles, integracion Smart Home.",
        "svc_5_title": "SeeSnake Camera Inspection",
        "svc_5_p1": "El diagnostico a ciegas destruye propiedades. Nuestras camaras HD trazan el problema sin excavar.",
        "svc_5_p2": "Entregamos video del estado exacto de sus tuberias para reparaciones quirurgicas en lugar de excavar el jardin.",
        "svc_5_good": "<strong>Nivel GOOD \u2014 $250</strong><br>Inspeccion basica 50 pies, video USB.",
        "svc_5_better": "<strong>Nivel BETTER \u2014 $325</strong><br>SeeSnake con sonar. Ubicacion exacta en superficie.",
        "svc_5_best": "<strong>Nivel BEST \u2014 $400</strong><br>HD + modelado digital, mapeo completo, opciones CIPP.",
        "svc_6_title": "Main Sewer Replacement",
        "svc_6_p1": "Una linea de alcantarillado colapsada es devastadora. Ofrecemos reemplazos garantizados por decadas.",
        "svc_6_p2": "Eliminamos raices y tuberias fracturadas por excavacion tradicional o metodos sin zanja (Trenchless).",
        "svc_6_good": "<strong>Nivel GOOD \u2014 $5,500</strong><br>PVC SDR-35. Solucion probada por gravedad.",
        "svc_6_better": "<strong>Nivel BETTER \u2014 $7,150</strong><br>ABS Cedula 40. Nucleo solido, cama de grava, registros bidireccionales.",
        "svc_6_best": "<strong>Nivel BEST \u2014 $8,800</strong><br>HDPE Trenchless fusionado. Sin costura, garantia de por vida.",
        "svc_7_title": "Hybrid Heat Pump Water Heater",
        "svc_7_p1": "Gasta cientos calentando agua con gas ineficiente? La bomba de calor hibrida alcanza el 400% de eficiencia.",
        "svc_7_p2": "Califica para miles en rebates estatales y se paga solo en menos de 3 anos reduciendo su factura electrica.",
        "svc_7_good": "<strong>Nivel GOOD \u2014 $2,200</strong><br>Calentador atmosferico 50 gal estandar.",
        "svc_7_better": "<strong>Nivel BETTER \u2014 $2,860</strong><br>Rheem ProTerra Hibrido. Panel digital, rebate-eligible.",
        "svc_7_best": "<strong>Nivel BEST \u2014 $3,520</strong><br>Bradford White AeroTherm Wi-Fi. Inteligente, ultra-silencioso, sensor de fugas.",
        "svc_8_title": "Pressure Reducing Valve (PRV)",
        "svc_8_p1": "Mas de 80 PSI destruye mangueras, revienta valvulas y anula garantias. La PRV protege silenciosamente.",
        "svc_8_p2": "Regula el flujo a 55-60 PSI seguros. Un escudo mecanico que alarga la vida de cada empaque y sello.",
        "svc_8_good": "<strong>Nivel GOOD \u2014 $480</strong><br>PRV de laton residencial estandar.",
        "svc_8_better": "<strong>Nivel BETTER \u2014 $624</strong><br>Wilkins 600XL con manometro integrado.",
        "svc_8_best": "<strong>Nivel BEST \u2014 $768</strong><br>Watts LFN45B con filtro en linea y tanque de expansion termica.",
        "svc_9_title": "Emergency Triage",
        "svc_9_p1": "Una tuberia rota a las 3 AM: cada segundo cuenta. Llegamos rapido, estabilizamos la fuga, mitigamos el dano.",
        "svc_9_p2": "Detenemos el flujo catastrofico, sellamos rupturas y devolvemos el servicio vital mientras planificamos.",
        "svc_9_good": "<strong>Nivel GOOD \u2014 $380</strong><br>Cierre principal + tapones SharkBite temporales.",
        "svc_9_better": "<strong>Nivel BETTER \u2014 $494</strong><br>Aislamiento sectorial con valvulas ProPress permanentes.",
        "svc_9_best": "<strong>Nivel BEST \u2014 $608</strong><br>Manifold de aislamiento completo. Solucion permanente en una visita.",
        "svc_10_title": "CAD & Digital Tracing",
        "svc_10_p1": "El desarrollo moderno exige precision documentada. Trazamos lineas subterraneas y entregamos planos as-built.",
        "svc_10_p2": "Usamos rastreo electromagnetico y modelado digital para mapear su red invisible.",
        "svc_10_good": "<strong>Nivel GOOD \u2014 $600</strong><br>Trazado con pintura y esquema profesional con profundidades.",
        "svc_10_better": "<strong>Nivel BETTER \u2014 $780</strong><br>Superposicion AutoCAD 2D integrable con planos arquitectonicos.",
        "svc_10_best": "<strong>Nivel BEST \u2014 $960</strong><br>Modelo BIM/Revit 3D. Cada nodo y valvula geolocalizados.",
        "svc_11_title": "Tankless Water Heater",
        "svc_11_p1": "Agua caliente infinita sin esperar. El sistema Tankless se enciende solo cuando usted abre la llave.",
        "svc_11_p2": "Ahorra espacio, reduce huella de carbono y entrega agua caliente constante sin riesgo de explosion de tanque.",
        "svc_11_good": "<strong>Nivel GOOD \u2014 $3,200</strong><br>Navien NPE-A2 sin condensacion.",
        "svc_11_better": "<strong>Nivel BETTER \u2014 $4,160</strong><br>Rinnai RU Sensei condensacion (0.95 UEF). Quemadores modulantes.",
        "svc_11_best": "<strong>Nivel BEST \u2014 $5,120</strong><br>Navien NPE-240A2 con bomba ComfortFlow. Agua instantanea en todos los grifos.",
        "svc_12_title": "Backflow Preventer Assembly",
        "svc_12_p1": "Si administra un negocio o riego complejo, el preventor de contraflujo es mandato federal.",
        "svc_12_p2": "Estamos certificados para instalar, calibrar y registrar estos ensamblajes que protegen el agua potable.",
        "svc_12_good": "<strong>Nivel GOOD \u2014 $850</strong><br>Wilkins 375 RPZ. Cumplimiento inmediato.",
        "svc_12_better": "<strong>Nivel BETTER \u2014 $1,105</strong><br>Watts Serie 009 alto flujo. Bronce sin plomo, grado comercial.",
        "svc_12_best": "<strong>Nivel BEST \u2014 $1,360</strong><br>Febco 860 RPZ con sensor IoT de presion. Monitoreo en tiempo real.",
        "svc_13_title": "Luxury Fixture Swap",
        "svc_13_p1": "Un bano de lujo exige herrajeria a la altura. El reemplazo requiere calibracion precisa, no solo estetica.",
        "svc_13_p2": "Instalamos, nivelamos y probamos a maxima presion. Su herraje operara con la suavidad de fabrica.",
        "svc_13_good": "<strong>Nivel GOOD \u2014 $250</strong><br>Delta/Moen estandar. Incluye lineas de suministro trenzadas.",
        "svc_13_better": "<strong>Nivel BETTER \u2014 $325</strong><br>Moen Align / Grohe antimanchas. Silicona comercial anti-moho.",
        "svc_13_best": "<strong>Nivel BEST \u2014 $400</strong><br>Kohler Artifacts Smart Touch. Calibracion de temperatura y cableado de sensores.",
        "svc_14_title": "Water Chemistry Panel",
        "svc_14_p1": "Su agua puede verse clara y contener metales pesados o cloramina. Analizar antes de filtrar es inteligente.",
        "svc_14_p2": "Ofrecemos analisis cientifico en sitio y via laboratorios certificados para disenar el tratamiento exacto.",
        "svc_14_good": "<strong>Nivel GOOD \u2014 $150</strong><br>Test rapido TDS, dureza y cloro libre.",
        "svc_14_better": "<strong>Nivel BETTER \u2014 $195</strong><br>Panel de 16 puntos en laboratorio certificado (plomo, nitratos, VOCs).",
        "svc_14_best": "<strong>Nivel BEST \u2014 $240</strong><br>Test in-situ + medidor TDS digital permanente bajo el fregadero.",
        "svc_15_title": "Commercial Hydro-Jetting",
        "svc_15_p1": "Cuando el sarro o las raices gruesas calcifican sus drenajes, la serpiente ya no alcanza. Fuerza industrial.",
        "svc_15_p2": "Disparamos agua a +4000 PSI con boquillas rotativas que restauran la tuberia a su diametro original.",
        "svc_15_good": "<strong>Nivel GOOD \u2014 $750</strong><br>Barrena seccional 7/8 para tapones duros.",
        "svc_15_better": "<strong>Nivel BETTER \u2014 $975</strong><br>Hydro-Jetting 4000 PSI. Elimina sarro y grasa emulsificada.",
        "svc_15_best": "<strong>Nivel BEST \u2014 $1,200</strong><br>Hydro-Jetting pesado + camara HD + inhibidor RootX 12 meses.",


        "btn_view_detail": "Ver Detalle Técnico y Comercial",
        "lbl_tech_specs": "Especificaciones Técnicas",
        "nav_back": "← Volver al Catálogo",
        "nav_nexus": "Nexus Inicio",
        "nav_orion": "Ecosistema Orion",
        "nav_services": "Ingeniería Pro",
        "nav_multimedia": "Podcasts",
        "nav_about": "Misión",
        "nav_terminal": "Terminal",
        "hero_badge": "INGENIERÍA PROFESIONAL Y CERTIFICACIÓN CSLB C-36",
        "hero_title": "MORALES PLUMBING",
        "hero_desc": "Integrando más de 21 años de experiencia en ingeniería con estimación por IA y diseño hidráulico sostenible.",
        "stat_ready": "Licenciado",
        "stat_eco": "ISO 14001",
        "stat_ai": "IA Activa",
        "hero_explore": "Ver Soluciones",
        "hero_joe": "Asistente Joe",
        "projects_title": "Excelencia en Ingeniería",
        "projects_desc": "Nuestras aplicaciones tecnológicas del mundo real y sistemas de gestión de proyectos.",
        "app_ep_title": "ORION ESTIMATOR PRO",
        "app_ep_desc": "Estimación automatizada basada en Visión Artificial con catálogo de +8000 artículos. Optimización de margen >70%.",
        "app_mp_title": "MORALES PLUMBING PORTAL",
        "app_mp_desc": "Portal de comunicación con el cliente y gestión inteligente de agendamiento.",
        "app_redes_title": "HYDRAULIC REDES DESIGN",
        "app_redes_desc": "Software de diseño hidráulico avanzado para infraestructuras de gran escala.",
        "app_tratamiento_title": "AQUA GUARD MANAGEMENT",
        "app_tratamiento_desc": "Gestión remota de sistemas de purificación y monitoreo de calidad del agua.",
        "app_heaters_title": "THERMO CORE DIAGNOSTICS",
        "app_heaters_desc": "Módulo especializado en optimización y diagnóstico de calentadores de agua sin tanque.",
        "joe_status": "JOE: ASISTENTE DE INGENIERÍA POR IA",
        "joe_welcome": "Bienvenido. Soy Joe. ¿Cómo puedo ayudarte con el diagnóstico de tu proyecto o servicios de ingeniería hoy?",
        "joe_intro": "¡Hola! Soy Joe, el asistente de IA de Morales Plumbing. ¿En qué puedo ayudarte hoy? 🛠️",
        "joe_placeholder": "Pregunta sobre plomería, servicios o proyectos...",
        "joe_send": "ENVIAR",
        "joe_trigger_title": "Hablar con Joe · Asistente IA",
        "nav_pricebook": "Libro de Precios",
        "nav_legal": "Legal",
        "back_home": "VOLVER AL INICIO",
        "btn_read": "Leer más",
        "pricebook_tag": "APP WEB · ACTIVA",
        "pricebook_title": "ORION PRICE BOOK v6.0 PRO",
        "nav_catalog": "Catálogo",
        "nav_methodology": "Metodología",
        "nav_tiers": "Tiers",
        "nav_upsells": "Upsells",
        "nav_promotions": "Promociones",
        "nav_terms": "Términos",
        "nav_warranties": "Garantías",
        "pb_hero_badge": "✨ Edición Estándar de la Industria",
        "pb_hero_subtitle": "Servicios Profesionales de Plomería | Bay Area, CA",
        "pb_hero_location": "📍 Bay Area, California",
        "pb_hero_updated": "Actualizado: Diciembre 2024",
        "pb_hero_details": "15 Servicios Profesionales Detallados",
        "pb_hero_rates": "Líder: $185/hr | Ayudante: $95/hr | Margen: 30%",
        "pb_hero_compliance": "Calidad Garantizada: Servicio Personalizado en Tiempo Real",
        "pb_hero_powered": "Desarrollado por NeKon AI aGent Consulting | Sistema ORION",
        "app_pricebook_detail": "El Libro de Precios Orion v6.0 PRO es una herramienta de ingeniería de costos que estandariza las tarifas de servicio en todo el Área de la Bahía. Utiliza un sistema de niveles (Bueno/Mejor/Excelente) para ofrecer opciones flexibles que cumplen con los estándares de seguridad UPC.",
        "app_mp_detail": "El Portal Morales Plumbing (MP) centraliza la comunicación con el cliente, permitiendo el agendamiento inteligente y el acceso a reportes técnicos generados por nuestra IA Joe. Garantiza transparencia total en cada fase del proyecto.",
        "app_ep_detail": "Orion Estimator Pro utiliza algoritmos de visión artificial para analizar planos y fotos de sitio, generando listas de materiales (BOM) y estimaciones de mano de obra con un 99% de precisión. Integrado con catálogos de +8000 artículos actualizados en tiempo real para el mercado de California.",
        "app_redes_detail": "Software de diseño hidráulico con integración CAD que permite modelar flujos, presiones y gradientes térmicos. Esencial para infraestructura de alta complejidad en el Área de la Bahía.",
        "app_tratamiento_detail": "Sistema de gestión Aqua Guard para el monitoreo remoto de sistemas de purificación. Analiza la calidad del agua y automatiza los ciclos de mantenimiento preventivo.",
        "app_heaters_detail": "Módulo de diagnóstico Thermo Core especializado en calentadores de agua sin tanque de alta eficiencia. Optimiza el consumo energético y predice fallos mediante análisis de datos térmicos.",
        "btn_pricing": "Ver Libro de Precios Oficial",
        "service_copper_content": "Sistemas de tuberías de cobre (Tipos L, M, K) de alta pureza.",
        "service_copper_purpose": "Asegurar conductividad térmica óptima y durabilidad estructural extrema.",
        "service_copper_usage": "Renovaciones residenciales de lujo y sistemas comerciales críticos.",
        "service_copper_potential": "Eliminación total de microplásticos y vida útil de +50 años.",
        "service_copper_costs": "Reducción de costos de reparación recurrente en un 40%.",
        "service_copper_comp": "Calidad aeroespacial en soldaduras vs. instalaciones locales estándar.",
        "service_copper_plus": "Protocolos ambientales internacionales y diseño de ingeniería de precisión.",
        "service_copper_lean": "Procesos Lean para minimizar el tiempo de inactividad del cliente.",
        
        "service_expansion_content": "Módulos de expansión hidráulica para nuevas áreas construidas.",
        "service_expansion_purpose": "Mantener presión constante y balanceada en sistemas ampliados.",
        "service_expansion_usage": "Ampliaciones residenciales y adiciones de unidades secundarias (ADU).",
        "service_expansion_potential": "Integración transparente con sistemas existentes sin colapsos de presión.",
        "service_expansion_costs": "Ahorro del 25% al evitar rediseños totales de la red principal.",
        "service_expansion_comp": "Simulación hidráulica previa vs. prueba y error convencional.",
        "service_expansion_plus": "Ingeniería ambiental enfocada en la eficiencia del flujo volumétrico.",
        "service_expansion_lean": "Instalación por fases para continuidad operativa.",

        "service_construction_content": "Infraestructura hidráulica completa para edificios desde cero.",
        "service_construction_purpose": "Excelencia desde la cimentación hasta los acabados finales.",
        "service_construction_usage": "Nuevas residencias personalizadas y complejos comerciales.",
        "service_construction_potential": "Optimización máxima de recursos y cumplimiento riguroso de códigos.",
        "service_construction_costs": "Reducción del 15% en costos de materiales mediante ingeniería de valor.",
        "service_construction_comp": "Mapeo digital 3D vs. planos estáticos convencionales.",
        "service_construction_plus": "Certificaciones internacionales de construcción sostenible.",
        "service_construction_lean": "Integración total con cronogramas de obra generales.",

        "service_repair_content": "Diagnóstico avanzado y reparación técnica de alta fidelidad.",
        "service_repair_purpose": "Restauración inmediata de la funcionalidad con mínima invasión.",
        "service_repair_usage": "Fallas críticas, fugas ocultas y degradación de componentes.",
        "service_repair_potential": "Detección temprana mediante Joe AI y termografía.",
        "service_repair_costs": "Prevención de daños estructurales masivos valorados en miles de dólares.",
        "service_repair_comp": "Diagnóstico de precisión vs. demolición exploratoria.",
        "service_repair_plus": "Protocolos de seguridad ambiental en cada intervención.",
        "service_repair_lean": "Asignación optimizada de recursos técnicos.",

        "service_septic_content": "Biodigestores y sistemas de infiltración avanzados.",
        "service_septic_purpose": "Tratamiento in-situ de aguas residuales de forma ecológica.",
        "service_septic_usage": "Propiedades rurales, sistemas fuera de red y zonas sensibles.",
        "service_septic_potential": "Independencia total del alcantarillado municipal.",
        "service_septic_costs": "Eliminación permanente de facturas de alcantarillado.",
        "service_septic_comp": "Sistemas biológicos avanzados vs. fosas sépticas tradicionales.",
        "service_septic_plus": "Cumplimiento estricto con regulaciones de California.",
        "service_septic_lean": "Bajo mantenimiento mediante diseño inteligente.",

        "service_water_content": "Captación de lluvia y reutilización de aguas grises.",
        "service_water_purpose": "Máxima autonomía hídrica y conservación de recursos.",
        "service_water_usage": "Riego inteligente, limpieza y uso doméstico permitido.",
        "service_water_potential": "Resiliencia ante sequías y reducción de huella hídrica.",
        "service_water_costs": "Ahorro de hasta un 60% en el consumo de agua potable.",
        "service_water_comp": "Ingeniería de filtración multinivel vs. simples barriles de lluvia.",
        "service_water_plus": "Protocolos de sostenibilidad ambiental de grado gubernamental.",
        "service_water_lean": "Automatización de ciclos de captura y distribución.",

        "btn_buy": "Comprar Licencia",
        "btn_proposal": "Marco Estratégico",
        "btn_academy": "Academia Orion",
        "services_title": "Servicios de Ingeniería Core",
        "service_1": "Diagnóstico por Termografía",
        "service_1_desc": "Detección de fugas no invasiva utilizando imágenes térmicas de alta resolución y sensores acústicos.",
        "service_2": "Retroajuste Ecológico",
        "service_2_desc": "Modernización de sistemas con materiales ecológicos y ahorro de agua de alta eficiencia (ISO 14001).",
        "service_3": "Diseño de Infraestructura Hidráulica",
        "service_3_desc": "Planificación experta de redes hidráulicas de alta precisión para infraestructura residencial y comercial.",
        "manifesto_title": "Manifiesto de Morales Plumbing",
        "mission_title": "MISIÓN",
        "mission_desc": "Liderar la industria integrando más de 21 años de experiencia en ingeniería con inteligencia artificial, ofreciendo soluciones de alta precisión bajo los estándares regulatorios de la CSLB y el Código Uniforme de Plomería (UPC).",
        "vision_title": "VISIÓN",
        "vision_desc": "Ser el estándar global para la fontanería técnica y la ingeniería sostenible — definido por la innovación constante, la excelencia operativa y la integridad absoluta en cada proyecto.",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "Ingeniero Principal y Fundador",
        "cv_link": "> ACCEDER AL CURRÍCULUM PROFESIONAL",
        "ceo_link": "> PERFIL EJECUTIVO DEL CEO",
        "pb_method_title": "📐 Metodología de Cálculo",
        "pb_tiers_title": "🎯 Sistema Bueno / Mejor / Excelente",
        "spec_content": "CONTENIDO",
        "spec_purpose": "PROPÓSITO",
        "spec_usage": "USO",
        "spec_potential": "POTENCIALIDADES",
        "spec_costs": "ROI / COSTOS",
        "spec_comp": "COMPETENCIA",
        "spec_plus": "MORALES PLUS",
        "spec_lean": "LEAN PROCESS",
        "spec_copy": "COPYRIGHT",
        "pb_upsells_title": "Sistema de Ventas Adicionales",
        "pb_promotions_title": "Promociones Activas",
        "pb_terms_title": "Términos y Condiciones",
        "pb_warranties_title": "Garantías y Soporte",
        "pb_catalog_title": "Catálogo de Servicios",
        "pricebook_desc": "Edición Estándar de la Industria con +100 Servicios Profesionales Detallados, 3 Niveles de Precios y Sistema de Ventas Adicionales Integrado.",
        "pricebook_feat1": "+100 Servicios",
        "pricebook_feat2": "Niveles Bueno/Mejor/Excelente",
        "pricebook_feat3": "Ventas Adicionales y Promos",
        "card_orion_feat1": "Integración Gogo Rooter",
        "card_orion_feat2": "Sincronización en la Nube",
        "card_orion_feat3": "ROI Optimizado",
        "btn_catalog": "Ver Catálogo",
        "btn_demo": "VER DEMO",
        "btn_expand": "Expandir",
        "btn_open_app": "Abrir Aplicación",
        "btn_open_service": "Ver Servicio",
        "btn_tech_details": "Detalles Técnicos",
        "btn_close_detail": "Cerrar Detalles",
        "close_btn": "Cerrar",
        "system_core_tag": "NÚCLEO DEL SISTEMA · EN DESARROLLO",
        "coming_soon": "PRÓXIMAMENTE",
        "coming_soon_badge": "PRÓXIMAMENTE",
        "cat_all": "Todos",
        "cat_diagnostic": "Diagnóstico",
        "cat_eco": "Ecológico",
        "cat_engineering": "Ingeniería",
        "cat_safety": "Seguridad",
        "footer_e2ee": "Cifrado E2EE",
        "footer_cyber": "Ciberseguridad por IA Activa",
        "footer_rights_long": "© 2026 Morales Plumbing. Todos los derechos reservados. El contenido, videos, imágenes generadas y la tecnología ORION / Joe AI son propiedad intelectual exclusiva de Morales Plumbing and NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · Todos los derechos reservados · Marca registrada",
        "contact_email": "Correo",
        "contact_phone": "Teléfono",
        "contact_loc": "Ubicación",
        "nav_framework": "Marco Estratégico",
        "footer_rights": "© 2026 Morales Plumbing. Todos los derechos reservados.",
        "slogan_text": "Definiendo el Futuro del Flujo. Innovación para la Vida.",
        "contact_lic": "Licencia",
        "pb_method_p1": "La metodología de cálculo de ORION se basa en un enfoque de ingeniería de precisión para el costeo hidráulico. Utilizamos algoritmos de grado industrial que consideran la durabilidad del material, la intensidad de la mano de obra (categorizada por roles de Líder y Ayudante) y la complejidad técnica. Esto elimina la variabilidad de la estimación, proporcionando una estructura de tarifa fija alineada con los estándares de la CSLB y la volatilidad del mercado de la construcción en California.",
        "pb_method_p2": "Al integrar datos de la cadena de suministro en tiempo real y protocolos de flujo de trabajo de marca propia altamente eficientes, nuestra metodología garantiza un margen optimizado del 30% mientras mantiene márgenes sostenibles para una ejecución técnica de alta fidelidad. Este enfoque científico de fijación de precios asegura que cada proyecto esté respaldado por datos hidráulicos verificados y una asignación transparente de recursos.",
        "pb_tiers_p1": "El sistema Bueno/Mejor/Excelente proporciona a nuestros clientes tres niveles distintos de soluciones de ingeniería, adaptados a los diferentes objetivos del ciclo de vida del proyecto. El nivel 'Bueno' se centra en reparaciones que cumplen con el UPC y una restauración eficiente. El nivel 'Mejor' introduce una mayor durabilidad de los componentes y mejoras de rendimiento de rango medio. El nivel 'Excelente' representa el estándar de ORION Tech: materiales premium de grado industrial, monitoreo integrado por IA y garantías de ciclo de vida extendidas.",
        "pb_tiers_p2": "Cada nivel está diseñado para ofrecer el máximo valor dentro de su alcance, permitiendo a los interesados residenciales y comerciales tomar decisiones informadas basadas en su estrategia de infraestructura a largo plazo, no solo en la necesidad inmediata.",
        "pb_upsells_p1": "Nuestro sistema de ventas adicionales está diseñado para ofrecer una protección proactiva de la infraestructura. Más allá de la solicitud principal, analizamos el entorno hidráulico para recomendar actualizaciones críticas como válvulas de cierre inteligentes, sistemas de filtración de agua y bombas de recirculación de alta eficiencia. Estas adiciones no son solo opciones, sino inversiones estratégicas en la seguridad de la propiedad.",
        "pb_upsells_p2": "Cada recomendación está respaldada por datos de diagnóstico, lo que garantiza que cada integración desempeñe un papel funcional en la prevención de fallas futuras y la reducción de los costos operativos a largo plazo.",
        "pb_promo_p1": "El marco de promociones de Morales Plumbing recompensa el mantenimiento proactivo y los compromisos de proyectos de gran volumen. Ofrecemos incentivos periódicos para el cambio de tuberías en todo el hogar, optimizaciones estacionales de calentadores de agua e integraciones de ORION Tech por primera vez. Estas promociones están diseñadas para reducir la barrera de entrada a soluciones de ingeniería de alta precisión.",
        "pb_promo_p2": "Todas las promociones activas están sujetas a revisión de ingeniería y no pueden combinarse con otros descuentos estratégicos, asegurando que la calidad del proyecto siga siendo la prioridad absoluta.",
        "pb_terms_p1": "Todos los servicios proporcionados por Morales Plumbing se rigen por la Junta de Licencias del Estado de Contratistas de California (CSLB) y el Código Uniforme de Plomería (UPC). Cada contrato incluye un alcance detallado del trabajo, precios de tarifa fija (sin tarifas ocultas) y una declaración clara de la metodología técnica. Los pagos están estructurados para alinearse con los hitos del proyecto.",
        "pb_terms_p2": "La responsabilidad y la resolución de disputas siguen los estándares industriales de California, asegurando una asociación profesional y transparente entre el equipo de ingeniería y el cliente.",
        "pb_warranty_p1": "Morales Plumbing ofrece una garantía estándar de 1 año en toda la mano de obra e integraciones técnicas, con garantías extendidas disponibles para sistemas de nivel 'Excelente' e instalaciones de ORION Tech. Además, contamos con planes de crédito y sistemas de garantía en mano de obra de por vida con repipe completo, ya sea de agua, drenaje o gas. Nuestro equipo de soporte utiliza datos de monitoreo de IoT para proporcionar respuestas de diagnóstico rápidas, minimizando el tiempo de inactividad y asegurando la integridad del sistema.",
        "pb_warranty_p2": "Las garantías del fabricante se aplican a todos los materiales industriales utilizados, con Morales Plumbing como el principal punto de contacto técnico para todas las consultas relacionadas con la garantía y las auditorías del sistema.",
        "pb_warranty_note": "*Monitoreo de IoT:* Se refiere al uso de tecnología inteligente (válvulas de corte de agua Wi-Fi, sensores de fugas, calentadores inteligentes) que envían datos y alertas a la nube para un diagnóstico preventivo rápido.",
        "pb_prose_p1": "El ORION Price Book v6.0 PRO es el núcleo operativo de Morales Plumbing, diseñado para ofrecer una transparencia absoluta en la ingeniería de costos. Este catálogo, actualizado a diciembre de 2024 para el Área de la Bahía de California, ha sido desarrollado bajo los rigurosos lineamientos de la Junta de Licencias del Estado de Contratistas de California (CSLB) y el Código Uniforme de Plomería (UPC), asegurando que cada intervención técnica esté respaldada por estándares de seguridad industrial y sostenibilidad ambiental.",
        "pb_prose_p2": "La estructura de este documento prioriza la claridad para el cliente, eliminando cálculos complejos en sitio y garantizando que cada presupuesto refleje el uso de materiales de grado industrial y metodologías de precisión auditadas por protocolos de alta eficiencia. En Morales Plumbing, no solo arreglamos tuberías; diseñamos sistemas hidráulicos sostenibles para la próxima generación.",
        "pb_prose_p3": "Nuestro enfoque integra estimaciones impulsadas por IA con más de 21 años de experiencia en el campo, lo que permite una tasa de precisión del 99% en la asignación de recursos y la proyección de plazos. Al elegir ORION, está eligiendo un socio de infraestructura estratégica comprometido con los niveles más altos de excelencia técnica e integridad.",
        "aq_title": "ORION AQUA GUARD v1.0",
        "aq_desc": "Monitoreo y gestión avanzada de sistemas de tratamiento de agua de alta precisión. Análisis en tiempo real de pH, dureza y filtración.",
        "aq_feat1": "Monitoreo IoT",
        "aq_feat2": "Retrolavado Automático",
        "aq_feat3": "Alertas de Pureza",
        "aq_prose_p1": "ORION AQUA GUARD v1.0 representa la cúspide de la gestión de purificación de agua residencial y comercial. Este sistema utiliza una network de sensores IoT para monitorear continuamente la calidad del agua entrante, midiendo variables como la dureza (granos por galón), los niveles de pH y las concentraciones de contaminantes. Los datos se procesan a través de nuestro motor patentado ORION para optimizar la eficiencia de la filtración y el consumo de sal.",
        "aq_prose_p2": "Más allá del simple ablandamiento, Aqua Guard gestiona unidades de ósmosis inversa de múltiples etapas y sistemas de esterilización por UV. Los usuarios reciben alertas en tiempo real a través del ecosistema ORION sobre los ciclos de vida de los filtros y las caídas de pureza, asegurando que el agua utilizada para el consumo e infraestructura se mantenga en estándares de grado de laboratorio.",
        "aq_prose_p3": "Al integrar Aqua Guard en su red hidráulica, prolonga la vida útil de todos los electrodomésticos y accesorios aguas abajo. Las capacidades de mantenimiento predictivo del sistema aseguran que la intervención solo se requiera cuando sea estadísticamente necesario, maximizando tanto la calidad del agua como el ROI del sistema.",
        "hn_title": "ORION HYDRAULIC NEXUS",
        "hn_desc": "Diseño hidráulico integrado en CAD y simulación de presión para infraestructuras complejas. Distribución optimizada de flujo y volumen.",
        "hn_feat1": "Integración CAD",
        "hn_feat2": "Mapeo de Presión",
        "hn_feat3": "Simulación de Fugas",
        "hn_prose_p1": "ORION HYDRAULIC NEXUS es nuestra suite de diseño de grado profesional para planificar y simular infraestructuras hidráulicas de alta presión. Utilizando planos integrados en CAD, creamos un gemelo digital de su sistema de plomería para analizar la dinámica del flujo, las caídas de presión en tramos largos y las variables de expansión térmica. Esto es crítico para proyectos residenciales de alta gama y comerciales de varios pisos donde la estimación estándar falla.",
        "hn_prose_p2": "El sistema permite a nuestros ingenieros realizar pruebas de estrés en la red virtual bajo varios escenarios de demanda máxima, identificando posibles puntos débiles antes de instalar una sola tubería. Esta metodología asegura que cada accesorio reciba la presión exacta requerida por el UPC, eliminando las 'zonas muertas' y optimizando la velocidad de entrega de agua.",
        "hn_prose_p3": "Hydraulic Nexus también se integra con nuestros diagnósticos de termografía, permitiéndonos superponer datos térmicos en tiempo real sobre los planos originales para una detección de fugas y auditoría de infraestructura precisas. Es la herramienta definitiva para la ingeniería de plomería de precisión.",
        "wh_title": "ORION THERMO CORE v2.0",
        "wh_desc": "Sistema inteligente de diagnóstico y optimización para calentadores de agua sin tanque de alta eficiencia. Alertas predictivas de incrustación y ajuste de combustión.",
        "wh_feat1": "Ajuste de Combustión",
        "wh_feat2": "IA para Incrustaciones",
        "wh_feat3": "Optimización Energética",
        "wh_prose_p1": "ORION THERMO CORE v2.0 es la plataforma de gestión dedicada para sistemas de calentamiento de agua sin tanque de alta eficiencia. A diferencia de los calentadores tradicionales, las unidades modernas sin tanque requieren un ajuste de combustión preciso y una descalcificación regular del intercambiador de calor para mantener sus calificaciones AFUE de más del 90%. Thermo Core utiliza sensores acústicos y de flujo para detectar los signos más tempranos de acumulación de minerales.",
        "wh_prose_p2": "La plataforma proporciona una programación automatizada para los ciclos de lavado basada en patrones de uso reales, en lugar de cronogramas arbitrarios. También monitorea los ciclos de encendido y las relaciones gas-aire para asegurar que el sistema esté operando a su máxima eficiencia térmica, reduciendo directamente los costos mensuales de servicios públicos y la huella de carbono.",
        "wh_prose_p3": "Con Thermo Core, Morales Plumbing proporciona una experiencia de 'configurar y olvidar' para la entrega de agua caliente premium. La integración del sistema con el ecosistema ORION permite diagnósticos remotos, lo que significa que nuestros ingenieros a menudo identifican y resuelven problemas de rendimiento antes de que el cliente note siquiera una caída en la temperatura.",
        "aca_back": "Volver a Módulos",
        "aca_mod_badge": "MÓDULO 01 | SEMANA 1",
        "aca_hero_title": "Conoce ORION Tech",
        "aca_hero_desc": "Misión, visión, valores, estructura organizacional y cultura de la empresa. Este módulo te dará las bases para entender quiénes somos y hacia dónde vamos.",
        "aca_video_title": "Video: Estructura Organizacional",
        "aca_mission_title": "🎯 Nuestra Misión",
        "aca_mission_desc": "Democratizar la automatización inteligente para pequeñas y medianas empresas, permitiéndoles competir con grandes compañías utilizando tecnología de punta.",
        "aca_vision_title": "🔮 Nuestra Visión",
        "aca_vision_desc": "Ser la plataforma de automatización por IA líder para negocios de habla hispana en todo el mundo para el 2028.",
        "aca_what_title": "💡 Qué Hacemos",
        "aca_what_desc": "Creamos asistentes de IA que responden mensajes 24/7 en WhatsApp, Instagram, Facebook, Telegram y más. Automatizamos reservas, citas, ventas y atención al cliente.",
        "aca_org_title": "Estructura Organizacional",
        "aca_values_title": "Nuestros Valores",
        "aca_val1_title": "Innovación",
        "aca_val1_desc": "Buscamos nuevas formas de resolver problemas",
        "aca_val2_title": "Confianza",
        "aca_val2_desc": "Hacemos lo que decimos",
        "aca_val3_title": "Resiliencia",
        "aca_val3_desc": "No nos rendimos ante los rechazos",
        "aca_val4_title": "Impacto",
        "aca_val4_desc": "Medimos resultados reales",
        "aca_val5_title": "Excelencia",
        "aca_val5_desc": "Calidad sobre cantidad",
        "aca_global_title": "Presencia Global",
        "aca_usa_title": "🇺🇸 USA (Sede Central)",
        "aca_usa_li1": "San José, California",
        "aca_usa_li2": "CEO + Liderazgo ejecutivo",
        "aca_usa_li3": "Mercado principal",
        "aca_col_title": "🇨🇴 Colombia (LATAM Hub)",
        "aca_col_li1": "Medellín",
        "aca_col_li2": "Director de Operaciones",
        "aca_col_li3": "Equipo de SDRs y Desarrolladores",
        "aca_mex_title": "🇲🇽 México",
        "aca_mex_li1": "Ciudad de México",
        "aca_mex_li2": "En desarrollo - 2025",
        "aca_nav_next": "Módulo 2: Producto →",
        "card_ep_title": "ORION ESTIMATOR PRO",
        "card_ep_desc": "Estimación automática basada en visión por computadora con catálogo de +8000 artículos. Optimización de márgenes >70%.",
        "card_orion_title": "SISTEMAS ESTRATÉGICOS ORION",
        "card_orion_desc": "Soluciones de flujo de trabajo digital para proyectos de alto volumen. Contratos inteligentes y seguimiento en tiempo real.",
        "btn_pricing": "Ver Catálogo de Precios",
        "btn_buy": "Comprar Licencia",
        "btn_proposal": "Marco Estratégico",
        "btn_academy": "Academia Orion",
        "services_title": "Servicios de Ingeniería Central",
        "service_1": "Diagnóstico de Termografía",
        "service_1_desc": "Detección de fugas no invasiva utilizando imágenes térmicas de alta resolución y sensores acústicos.",
        "service_2": "Eco-Retrofitting",
        "service_2_desc": "Modernización del sistema utilizando materiales ecológicos y ahorro de agua de alta eficiencia (ISO 14001).",
        "service_3": "Diseño de Infraestructura Hidráulica",
        "service_3_desc": "Planificación experta de redes hidráulicas de alta precisión para infraestructura residencial y comercial.",
        "manifesto_title": "Manifiesto de Morales Plumbing",
        "mission_title": "MISIÓN",
        "mission_desc": "Liderar la industria integrando más de 21 años de experiencia en ingeniería con inteligencia artificial, ofreciendo soluciones de alta precisión bajo los estándares regulatorios de la CSLB y el Código Uniforme de Plomería (UPC).",
        "vision_title": "VISIÓN",
        "vision_desc": "Ser el estándar global para la fontanería técnica y la ingeniería sostenible — definido por la innovación constante, la excelencia operativa y la integridad absoluta en cada proyecto.",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "Ingeniero Principal y Fundador",
        "cv_link": "> ACCEDER AL CURRÍCULUM PROFESIONAL",
        "ceo_link": "> PERFIL EJECUTIVO DEL CEO",
        "network_link": "> RED: ORION TECH",
        "joe_status": "JOE: ASISTENTE DE INGENIERÍA AI",
        "service_copper_title": "Plomería de Cobre y Renovaciones",
        "service_copper_desc": "Instalaciones de cobre de alta precisión para renovaciones, ampliaciones y nuevas construcciones.",
        "service_copper_detail": "CONTENIDO: Sistemas completos de tuberías de cobre (Tipos L, M, K) para infraestructura residencial y comercial. PROPÓSITO: Integridad estructural garantizada y eficiencia de flujo. USO: Renovaciones, ampliaciones, construcciones nuevas y reparaciones. POTENCIALIDADES: Vida útil de más de 50 años, sin microplásticos. COSTOS: Reducción del 30% en mantenimiento a largo plazo vs PEX. COMPETENCIA: Superamos los estándares locales con soldadura especializada. PLUS: Ingeniería ambiental, protocolos internacionales y procesos Lean. COPYRIGHT: © 2026 Morales Plumbing. Todos los derechos reservados.",
        "service_expansion_title": "Ampliaciones de Sistemas",
        "service_expansion_desc": "Expansión hidráulica estratégica para infraestructura en crecimiento y unidades multifamiliares.",
        "service_expansion_detail": "CONTENIDO: Bloques de expansión hidráulica modular. PROPÓSITO: Integración perfecta de nuevos accesorios sin pérdida de presión. USO: Adiciones comerciales y ampliaciones residenciales. POTENCIALIDADES: Escalabilidad infinita. COSTOS: Evita el rediseño total del sistema. PLUS: Ingeniería avanzada y procesos Lean. COPYRIGHT: © 2026 Morales Plumbing. Todos los derechos reservados.",
        "service_construction_title": "Ingeniería de Construcción Nueva",
        "service_construction_desc": "Ingeniería hidráulica integral para edificios residenciales y comerciales nuevos.",
        "service_construction_detail": "CONTENIDO: Planos CAD, Rough-in y acabados de lujo. PROPÓSITO: Excelencia técnica desde cero. USO: Nuevos edificios residenciales y comerciales. POTENCIALIDADES: Valorización inmediata de la propiedad. COSTOS: Optimización de materiales mediante Lean Process. PLUS: Protocolos Ambientales Internacionales. COPYRIGHT: © 2026 Morales Plumbing. Todos los derechos reservados.",
        "service_repair_title": "Reparaciones Inteligentes",
        "service_repair_desc": "Reparaciones técnicas de emergencia utilizando diagnósticos no invasivos.",
        "service_repair_detail": "CONTENIDO: Diagnóstico por termografía y reparación de precisión. PROPÓSITO: Restauración inmediata de la operatividad. USO: Emergencias y mantenimiento preventivo. POTENCIALIDADES: Detección temprana de fallas invisibles. COSTOS: Evita daños estructurales costosos. PLUS: Joe AI Assistant para diagnósticos. COPYRIGHT: © 2026 Morales Plumbing. Todos los derechos reservados.",
        "service_copper_title": "Renovaciones en Cobre Elite",
        "service_copper_desc": "Infraestructura hidráulica de alta gama con cumplimiento UPC 2024.",
        "service_copper_content": "Sustitución integral de sistemas legados (Galvanizado/PEX) por Cobre Tipo L y K con soldadura de precisión certificada.",
        "service_copper_purpose": "Eliminar la degradación de polímeros y la corrosión metálica, asegurando la pureza del agua y aumentando la plusvalía en el Bay Area.",
        "service_copper_usage": "Proyectos residenciales de lujo en San Jose, Palo Alto y Los Gatos, donde la durabilidad y el código sísmico son críticos.",
        "service_copper_potential": "Sistemas diseñados para durar 50+ años, totalmente reciclables y compatibles con filtración centralizada de alto flujo.",
        "service_copper_costs": "ROI inmediato mediante la reducción de primas de seguro y eliminación de reparaciones recurrentes por fugas.",
        "service_copper_comp": "Superamos a la competencia que utiliza PEX de baja densidad y uniones mecánicas propensas a fallas por presión.",
        "service_copper_plus": "Ingeniería Ambiental: Protocolos de sanitización post-instalación y certificación de soldadura sin plomo.",
        "service_copper_lean": "Metodología Lean: Kit de pre-fabricación en taller que reduce el tiempo en sitio en un 40%.",

        "service_septic_title": "Ingeniería Séptica Avanzada",
        "service_septic_desc": "Sistemas de tratamiento in-situ para infraestructura rural y eco-sostenible.",
        "service_septic_content": "Instalación de biodigestores anaeróbicos de flujo ascendente y campos de infiltración inteligentes con sensores de nivel.",
        "service_septic_purpose": "Gestión ecológica de residuos en áreas fuera de la red (Saratoga/Santa Cruz Mountains), protegiendo mantos acuíferos locales.",
        "service_septic_usage": "Propiedades residenciales extensas y renovaciones que requieren cumplimiento estricto con las juntas de agua de CA.",
        "service_septic_potential": "Sistemas escalables que permiten la conversión de lodos en biomasa segura para suelos.",
        "service_septic_costs": "Eliminación total de tarifas de alcantarillado municipal y reducción del 50% en frecuencia de bombeo.",
        "service_septic_comp": "Frente a tanques de concreto tradicionales, ofrecemos polímeros de alta resistencia con 0% de probabilidad de filtración.",
        "service_septic_plus": "Protocolos Ambientales: Auditoría de suelos y diseño hidráulico basado en tasas de absorción locales.",
        "service_septic_lean": "Lean Process: Instalación modular en 48 horas mediante excavación guiada por GPS.",

        "service_water_title": "Sistemas de Recolección Hídrica",
        "service_water_desc": "Ingeniería de captura de lluvia y reutilización de aguas grises estratégicas.",
        "service_water_content": "Redes de captura pluvial y sistemas de tratamiento de aguas grises (baños/lavandería) para uso no potable.",
        "service_water_purpose": "Mitigar el impacto de la sequía en California y reducir la dependencia de suministros municipales mediante autonomía hídrica.",
        "service_water_usage": "Sistemas integrados en jardines inteligentes y flushing de sanitarios bajo normativas de ahorro extremo.",
        "service_water_potential": "Independencia hídrica parcial de hasta el 65% del consumo anual residencial.",
        "service_water_costs": "Ahorro masivo en facturas de agua y acceso a incentivos estatales por conservación ambiental.",
        "service_water_comp": "Diseños personalizados frente a barriles de lluvia simples; nosotros entregamos ingeniería de filtración de grado 2.",
        "service_water_plus": "Ingeniería Ambiental: Sistemas de desinfección UV integrados para prevenir la proliferación de patógenos.",
        "service_water_lean": "Lean Process: Mapeo de flujo dinámico para minimizar el uso de bombas eléctricas.",

        "service_expansion_title": "Ampliaciones Hidráulicas Pro",
        "service_expansion_desc": "Expansión estratégica de redes para renovaciones y anexos (ADUs).",
        "service_expansion_content": "Diseño y ejecución de nuevas ramificaciones hidráulicas para ADUs, cocinas gourmet y expansiones maestras.",
        "service_expansion_purpose": "Asegurar que la carga hidráulica adicional no comprometa la presión o integridad del sistema existente.",
        "service_expansion_usage": "Creciente mercado de ADUs en Silicon Valley, garantizando cumplimiento con el código de construcción vigente.",
        "service_expansion_potential": "Capacidad de integración con sistemas inteligentes de detección de fugas para toda la propiedad.",
        "service_expansion_costs": "Precios cerrados mediante el Price Book v6.0, evitando sorpresas de 'cambio de orden'.",
        "service_expansion_comp": "Uso de gemelos digitales para simular presión antes de la primera perforación.",
        "service_expansion_plus": "Morales Plus: Verificación de balanceo térmico en líneas de agua caliente expandidas.",
        "service_expansion_lean": "Lean Process: Logística 'Just-in-Time' para materiales, manteniendo el sitio de obra limpio.",

        "service_construction_title": "Ingeniería de Obra Nueva",
        "service_construction_desc": "Diseño y despliegue integral de infraestructura para edificios inteligentes.",
        "service_construction_content": "Planificación desde el nivel de cimentación, rough-in de alta velocidad y acabados de ingeniería premium.",
        "service_construction_purpose": "Establecer una base de infraestructura impecable que exceda los estándares de inspección de California.",
        "service_construction_usage": "Nuevas residencias modernas y complejos multifamiliares de vanguardia tecnológica.",
        "service_construction_potential": "Preparación nativa para integración completa con Smart Home e IoT hídrico.",
        "service_construction_costs": "Optimización del presupuesto mediante ingeniería de valor y selección estratégica de materiales.",
        "service_construction_comp": "Colaboración directa con arquitectos mediante archivos BIM, eliminando conflictos de diseño en sitio.",
        "service_construction_plus": "Protocolos Ambientales: Certificación LEED para la instalación hidráulica.",
        "service_construction_lean": "Lean Process: Planificación de tareas concurrentes para reducir el cronograma de obra en un 15%.",

        "service_repair_title": "Diagnóstico y Reparación Smart",
        "service_repair_desc": "Restauración técnica mediante termografía y acústica no invasiva.",
        "service_repair_content": "Localización precisa de fallas invisibles y reparaciones quirúrgicas con mínima interrupción estructural.",
        "service_repair_purpose": "Resolver problemas complejos de plomería sin necesidad de demoliciones masivas innecesarias.",
        "service_repair_usage": "Mantenimiento crítico en residencias habitadas y edificios comerciales de operación continua.",
        "service_repair_potential": "Historial digital de reparaciones almacenado en el ecosistema ORION para mantenimiento predictivo.",
        "service_repair_costs": "Evita el costo masivo de reconstrucción post-reparación al localizar el punto exacto de falla.",
        "service_repair_comp": "Uso de Joe AI Assistant para análisis de patrones de flujo vs. 'prueba y error' tradicional.",
        "service_repair_plus": "Morales Plus: Garantía extendida basada en la precisión del diagnóstico digital.",
        "service_repair_lean": "Lean Process: Estandarización de kits de reparación rápida para resolución en la primera visita.",
        "faq_title": "P&R | Centro Técnico",
        "faq_cat_plumbing": "Sistemas de Plomería",
        "faq_cat_eco": "Mezcla de Eco-Plomería",
        "faq_cat_env": "Regulaciones Ambientales",
        "faq_q1": "¿Por qué usar cobre en lugar de PEX para construcciones nuevas?",
        "faq_a1": "El cobre proporciona una durabilidad superior, resistencia al fuego y previene el crecimiento bacteriano. Bajo el UPC de California, sigue siendo el estándar de oro para el valor de alta gama. Por otro lado, el PEX ofrece una flexibilidad excepcional, menos conexiones de unión (reduciendo puntos de fuga), instalación más rápida y menores costos iniciales de material. <span class=\"comic-choice\">La decisión es suya</span>: elija la longevidad premium y el valor clásico del cobre, o la rentabilidad moderna y la resiliencia elástica del PEX.",
        "faq_q2": "¿Cuáles son las regulaciones sépticas y ambientales de California para 2026?",
        "faq_a2": "Las regulaciones se centran en la reducción de nitrógeno, protección de aguas subterráneas y eficiencia en la reutilización de agua. Morales Plumbing garantiza el 100% de cumplimiento mediante ingeniería avanzada y protocolos de la Junta de Agua. Además, diseñamos sistemas sépticos estándar que minimizan los costos iniciales utilizando rutas de permisos locales tradicionales. <span class=\"comic-choice\">La decisión es suya</span>: invierta en sistemas ecológicos avanzados para anticiparse a las normas de 2030, o seleccione una configuración estándar de bajo costo inmediato.",
        "faq_q3": "¿Cómo beneficia el Proceso Lean y la Ingeniería Ambiental a mi proyecto?",
        "faq_a3": "Al eliminar desperdicios y usar materiales sostenibles, reducimos costos en un 25% y plazos en un 30%. Nuestros protocolos aseguran una menor huella de carbono y mayor ROI de infraestructura. Como alternativa, ofrecemos métodos de construcción clásicos enfocados en la máxima personalización y redundancia estructural manual absoluta sin los límites del proceso Lean. <span class=\"comic-choice\">La decisión es suya</span>: elija el proceso ecológico Lean acelerado para máxima eficiencia, o nuestra construcción manual clásica para una personalización tradicional a medida.",
        "faq_q4": "¿Puedo integrar la recolección de agua en mi sistema de plomería existente?",
        "faq_a4": "Sí, nos especializamos en la adaptación de captaciones y sistemas de aguas grises a redes existentes, reduciendo significativamente la dependencia municipal y los costos operativos.",
        "faq_q5": "¿Cuál es la ventaja del marco Morales Plumbing PLUS?",
        "faq_a5": "Combina la experiencia CSLB C-36 con Ingeniería Ambiental, diagnósticos por IA y Proceso Lean, brindando un nivel de precisión y sostenibilidad inigualable.",
        "faq_q6": "¿Cómo asegura Morales Plumbing el cumplimiento del UPC?",
        "faq_a6": "Nuestros ingenieros cuentan con certificación CSLB C-36 y utilizan protocolos de verificación por IA para asegurar que cada conexión supere los estándares de California. Además, ofrecemos inspecciones físicas tradicionales de doble inspector y listas de verificación manuales para clientes que prefieren la supervisión mecánica clásica. <span class=\"comic-choice\">La decisión es suya</span>: elija nuestra validación digital de alta precisión asistida por IA, o nuestra inspección humana manual probada en el tiempo con garantías mecánicas.",
        "faq_q7": "¿Qué métricas 'Lean' específicas rastrean?",
        "faq_a7": "Rastreamos Takt Time, Lead Time y First-Pass Yield para asegurar un flujo de trabajo predecible y sin desperdicios en proyectos de gran escala. Al mismo tiempo, apoyamos el seguimiento clásico por hitos del proyecto y auditorías de horas de trabajo tradicionales para una supervisión más simple y directa. <span class=\"comic-choice\">La decisión es suya</span>: optimice con tableros de datos Lean en tiempo real, o gestione mediante hitos tradicionales sencillos.",
        "faq_q8": "¿Cómo puedo preparar mi infraestructura para el futuro?",
        "faq_a8": "Al integrar sistemas de recolección de agua y reutilización de aguas grises hoy, evita futuros mandatos y aumenta el valor de su propiedad hasta en un 15%. Como alternativa, puede optar por un diseño pasivo ultra confiable con tuberías de alta durabilidad y colectores simplificados que minimizan las partes mecánicas activas. <span class=\"comic-choice\">La decisión es suya</span>: invierta en tecnologías de agua activas y sostenibles, o seleccione un sistema de bucle pasivo de bajo mantenimiento y alta confiabilidad.",
        "service_septic_detail": "CONTENIDO: Sistemas avanzados de biodigestores y campos de infiltración. PROPÓSITO: Tratamiento de aguas residuales ecológico y autónomo. USO: Zonas rurales y proyectos sostenibles. POTENCIALIDADES: Independencia total del drenaje municipal. COSTOS: Eliminación de cuotas de alcantarillado. COMPETENCIA: Ingeniería biológica vs tanques sépticos simples. PLUS: Cumplimiento ambiental estricto. LEAN: Mantenimiento automatizado.",
        "service_water_detail": "CONTENIDO: Ingeniería de recolección de lluvia y tratamiento de aguas grises. PROPÓSITO: Autonomía hídrica extrema y conservación. USO: Riego y uso doméstico reciclado. POTENCIALIDADES: Resiliencia ante sequías. COSTOS: Reducción del 60% en consumo de agua potable. COMPETENCIA: Filtración avanzada vs barriles simples. PLUS: Protocolos de sostenibilidad gubernamentales. LEAN: Automatización de ciclos hídricos.",
        "pb_hero_title": "ORION PRICE BOOK v6.0 PRO",
        "pb_search_placeholder": "Buscar servicio...",
        "pb_promotions_p1": "Promociones exclusivas para el Área de la Bahía en renovaciones y modernización.",
        "pb_warranties_p1": "Garantías integrales de 1 a 5 años en mano de obra y materiales certificados.",
        "price_standard": "Tarifa Estándar",
        "price_member": "Tarifa Miembro",
        "lbl_client_view": "Visión Cliente:",
        "lbl_tech_view": "Esp. Técnica & Materiales (3 Niveles):",
        "profile_header_role": "Liderazgo en Ingeniería",
        "legal_title": "MARCO LEGAL Y CUMPLIMIENTO",
        "doc_title": "DOCUMENTO TÉCNICO",
        "doc_subtitle": "ESTÁNDARES DE OPERACIÓN",
        "sec1_title": "SECCIÓN 1: CUMPLIMIENTO CSLB",
        "sec1_legal_p1": "Todas las operaciones se rigen por la junta de licencias de California.",
        "sec1_legal_p2": "Garantizamos el cumplimiento total de los códigos de seguridad.",
        "sec1_legal_li1": "Licencia CSLB C-36 Activa",
        "sec1_legal_li2": "Certificación de Ingeniería Ambiental",
        "sec2_legal_title": "SECCIÓN 2: ESTÁNDARES UPC",
        "sec2_legal_p1": "Nuestras instalaciones siguen estrictamente el Código Uniforme de Plomería.",
        "sec2_legal_li1": "Tuberías Certificadas",
        "sec2_legal_li2": "Pruebas de Presión Digitales",
        "sec2_legal_li3": "Protocolos de Sanitización",
        "sec3_legal_title": "SECCIÓN 3: PROPIEDAD INTELECTUAL",
        "sec3_legal_p1": "El ecosistema ORION y Joe AI son marcas protegidas.",
        "sec3_legal_li1": "Patentes de Software en Trámite",
        "sec3_legal_li2": "Derechos de Autor del Catálogo",
        "sec3_legal_li3": "Acuerdos de Confidencialidad E2EE",
        "eco_title": "ECO-PLOMERÍA",
        "eco_desc": "Soluciones sostenibles para el futuro del agua.",
        "sig_name": "Alex G. Espinosa",
        "cat_all": "Todos",
        "cat_diagnostic": "Diagnóstico",
        "cat_engineering": "Ingeniería",
        "cat_eco": "Sostenible",
        "cat_safety": "Seguridad",
        "contact_loc": "Ubicación",
        "contact_email": "Correo",
        "contact_phone": "Teléfono",
        "joe_trigger_title": "Hablar con Joe · Asistente AI",
        "footer_rights_long": "© 2026 Morales Plumbing. Todos los derechos reservados. El contenido, videos, imágenes generadas y la tecnología ORION / Joe AI son propiedad intelectual exclusiva de Morales Plumbing y NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · Todos los derechos reservados · Marca Registrada",
        "eco_podcasts_card_title": "Biblioteca de Podcasts ORION",
        "eco_podcasts_card_desc": "Audios interactivos de alta fidelidad y análisis críticos sobre la revolución de la IA en la infraestructura hídrica y los marcos de cumplimiento de California.",
        "btn_open_podcasts": "Escuchar Podcasts",
        "multimedia_title": "Biblioteca de Podcasts ORION",
        "multimedia_subtitle": "Perspectivas en Audio de Alta Fidelidad y Análisis Críticos",
        "mp_podcasts_title": "Serie Ecosistema MP",
        "pod_type_deep_dive": "Inmersión Profunda",
        "mp_pod_1_title": "La IA de Silicon Valley transforma la plomería moderna",
        "btn_listen": "Escuchar Ahora",
        "pod_type_brief": "Resumen",
        "mp_pod_2_title": "IA para predecir fugas de agua",
        "pod_type_critique": "Crítica",
        "mp_pod_3_title": "Diagnóstico por IA y Responsabilidad Legal",
        "ep_podcasts_title": "Serie EP Estimator Pro",
        "ep_pod_1_title": "EP PLUMBING: Análisis Crítico",
        "ep_pod_2_title": "El plomero de IA en tu bolsillo",
        "pod_type_debate": "Debate",
        "ep_pod_3_title": "Diagnóstico y Marco Legal",
        "lbl_tier_good": "GOOD (Estándar)",
        "lbl_tier_better": "BETTER (Premium)",
        "lbl_tier_best": "BEST (Ultra-Premium)",
        "lbl_justification": "Justificación:",
        "lbl_materials": "Materiales:",
        "lbl_tools": "Herramientas/Eq.:",
        "lbl_time": "Tiempo Est.:",
        "btn_view_detail": "Ver Detalle Técnico y Comercial",
        "lbl_tech_specs": "Especificaciones Técnicas",
        "nav_back": "← Volver al Catálogo",


    
    },
    "zh": {
        "eng_btn_details": "查看详情 →",
        "eng_back": "← 返回中央服务",
        "eng_termo_title": "热成像诊断",
        "eng_termo_code": "ENG-CENT-001",
        "eng_termo_p1": "热成像诊断是我们中央工程服务的重要支柱。它包括使用高分辨率热成像和声学传感器进行完全无损的泄漏检测。",
        "eng_termo_p2": "我们没有进行昂贵且破坏性的探索性拆除，而是使用 FLIR 红外技术来可视化墙壁内和楼板下的热梯度。",
        "eng_termo_tech1_title": "高精度红外成像",
        "eng_termo_tech1_desc": "我们的相机捕捉高达 0.1°C 的温度差异，准确显示泄漏水的位置。",
        "eng_termo_tech2_title": "计算机声学分析",
        "eng_termo_tech2_desc": "我们使用带有 AI 过滤器的超灵敏麦克风，可以区分环境噪音和加压水溢出引起的嘶嘶声。",
        "eng_termo_tech3_title": "数字测绘和报告",
        "eng_termo_tech3_desc": "我们通过我们的门户提供全面的数字报告，证明保险索赔的问题并促进手术修复。",
        "eng_eco_title": "生态改造",
        "eng_eco_code": "ENG-CENT-002",
        "eng_eco_p1": "生态改造是我们使用环保材料和超高效节水组件对现有液压系统进行现代化的前沿专业。",
        "eng_eco_p2": "我们更新您建筑的固定装置，以大幅减少用水量，而不会牺牲压力或舒适度。",
        "eng_eco_tech1_title": "经验证的节水",
        "eng_eco_tech1_desc": "安装充气流量调节器、超低耗双冲水马桶 (UHET) 和智能减压阀 (PRV)。",
        "eng_eco_tech2_title": "可持续材料",
        "eng_eco_tech2_desc": "独家使用可回收管道或具有低碳影响认证的管道，确保您的项目对环境的零影响。",
        "eng_eco_tech3_title": "节水认证",
        "eng_eco_tech3_desc": "我们提供投资回报 (ROI) 计算和有保证的节水（每月高达 40%），适用于申请州回扣。",
        "eng_diseno_title": "液压基础设施设计",
        "eng_diseno_code": "ENG-CENT-003",
        "eng_diseno_p1": "Morales Plumbing 的液压基础设施设计是一项高级工程服务，可保证可行性、效率和可扩展性。",
        "eng_diseno_p2": "我们的工程师使用 3D 建模软件和流体动力学模拟器来计算压力梯度、热膨胀和流速。",
        "eng_diseno_tech1_title": "集成 BIM 建模",
        "eng_diseno_tech1_desc": "与 Autodesk Revit 兼容的参数化设计，可与建筑师和承包商进行完美的协调。",
        "eng_diseno_tech2_title": "流量和压力模拟",
        "eng_diseno_tech2_desc": "在数字模型上进行虚拟压力测试，以确保即使在需求高峰期也能实现平衡供应。",
        "eng_diseno_tech3_title": "合规性 (UPC/CPC)",
        "eng_diseno_tech3_desc": "由于严格遵守统一和加利福尼亚管道规范，确保在城市检查中获得批准。",
        "eng_cobre_title": "精英铜管改造",
        "eng_cobre_code": "ENG-CENT-004",
        "eng_cobre_p1": "精英铜管改造代表了液压基础设施的黄金标准。我们将陈旧的管道系统更换为高纯度的 L 型和 K 型铜管。",
        "eng_cobre_p2": "铜提供天然的抗菌特性，可被动净化水流并保证零微塑料释放。",
        "eng_cobre_tech1_title": "精密焊接和 ProPress 系统",
        "eng_cobre_tech1_desc": "我们采用无焰机械连接技术（ProPress）或无铅航空航天级焊接。",
        "eng_cobre_tech2_title": "长寿和投资回报率",
        "eng_cobre_tech2_desc": "预期寿命超过 50 年。将房产的结构估值瞬间提升高达 15%。",
        "eng_cobre_tech3_title": "声学质量和稳定流量",
        "eng_cobre_tech3_desc": "L 型铜的壁厚消除了水锤，并能承受极高的压力。",
        "eng_septico_title": "高级化粪池工程",
        "eng_septico_code": "ENG-CENT-005",
        "eng_septico_p1": "我们的高级化粪池工程部门使用现代生物技术设计、部署和维护离网废水管理系统。",
        "eng_septico_p2": "我们没有安装传统的化粪池，而是实施有氧处理装置 (ATU)，可将水处理至几乎适合表面灌溉的纯度水平。",
        "eng_septico_tech1_title": "渗透研究和地形设计",
        "eng_septico_tech1_desc": "评估地形的地质情况以确定准确的吸收率，并确定浸出区的大小。",
        "eng_septico_tech2_title": "生物反应器集成",
        "eng_septico_tech2_desc": "带有曝气系统的设备可通过超高效好氧细菌成倍加速固体分解。",
        "eng_septico_tech3_title": "合规性",
        "eng_septico_tech3_desc": "端到端许可管理，确保设计超越健康要求并减轻罚款。",
        "faq_q6": "Morales Plumbing 如何确保符合 UPC 规范？",
        "faq_a6": "我们的工程师拥有 CSLB C-36 认证，并使用 AI 辅助的代码检查协议，以确保每个接头都超出加州标准。此外，页为偏好传统机械监理的客户提供由两名监理员执行的物理检测和手动核对表。 <span class=\"comic-choice\">选择权在您</span>：选择高精度的 AI 辅助数字验证，或经过时间考验的手动人工检测和机械保修。",
        "faq_q7": "你们跟踪哪些具体的 'Lean' 指标？",
        "faq_a7": "我们跟踪 生产节拍时间（Takt Time）、前置时间（Lead Time）和一次通过率（First-Pass Yield），以确保大型项目的工作流程可预测且零浪费。同时，我们也支持传统的项目里程碑和传统人工工时审计，以便进行更直接的监控。 <span class=\"comic-choice\">选择权在您</span>：通过实时 Lean 数据仪表板优化您的项目，或通过简单明了的传统项目里程碑进行管理。",
        "faq_q8": "我该如何让基础设施做好面向未来的准备？",
        "faq_a8": "通过集成先进的主动水资源回收和雨水收集系统，您将避免未来的改造义务并提升多达 15% 的资产价值。或者，您可以选择极高可靠性的被动物理循环，专注于耐用性高且维护量低的传统分流配置，以最大程度减少机械部件。 <span class=\"comic-choice\">选择权在您</span>：投资主动的可持续水技术，或选择极低维护的被动物理回路系统。",

        "svc_1_title": "Precision Leak Detection",
        "svc_1_p1": "At Morales Plumbing, precision is our standard. We identify hidden faults without destructive demolition.",
        "svc_1_p2": "Using FLIR thermal cameras and acoustic sensors we trace leaks behind walls or slabs. Massive savings vs. reconstruction.",
        "svc_1_good": "<strong>GOOD (Standard) \u2014 $450</strong><br>Visual/acoustic diagnostic. Standard patches for accessible leaks.",
        "svc_1_better": "<strong>BETTER (Premium) \u2014 $585</strong><br>FLIR thermal + pressure drop test. Epoxy coating repair.",
        "svc_1_best": "<strong>BEST (Ultra-Premium) \u2014 $720</strong><br>Full structural mapping and sector isolation. ProPress copper segment.",
        "svc_2_title": "Full House Repipe",
        "svc_2_p1": "A full repipe is a heart transplant for your home. Old galvanized pipes cause floods and water quality degradation.",
        "svc_2_p2": "We replace all water infrastructure with commercial-grade Copper and PEX. Eradicates cloudy water and chronic leaks.",
        "svc_2_good": "<strong>\u2705 GOOD (Standard) \u2014 $3,800</strong><br>PEX-B piping with brass Crimp fittings. Includes 100 PSI hydrostatic pressure test. UPC-certified reliable solution.",
        "svc_2_better": "<strong>\u2b50 BETTER (Premium) \u2014 $4,940</strong><br>PEX-A Uponor Expansion system. Superior flow rate, freeze-resistant, fewer mechanical fittings for lower long-term risk.",
        "svc_2_best": "<strong>\ud83c\udfc6 BEST (Ultra-Premium) \u2014 $6,080</strong><br>Type L Copper with ProPress technology (no solder, no flame). Maximum flow, natural antimicrobial properties and absolute commercial-grade durability for 50+ years.",
        "svc_3_title": "Water Filtration & Softening",
        "svc_3_p1": "Hard water destroys appliances and stains fixtures. We transform water quality from the entry point.",
        "svc_3_p2": "We install systems eliminating chlorine, heavy metals and calcium. Crystal-clear water and 30% longer appliance life.",
        "svc_3_good": "<strong>GOOD \u2014 $1,500</strong><br>Standard 32,000-grain salt-based softener.",
        "svc_3_better": "<strong>BETTER \u2014 $1,950</strong><br>Fleck 5600SXT Metered. Digital on-demand valve.",
        "svc_3_best": "<strong>BEST \u2014 $2,400</strong><br>Halo 5 Whole House. Salt-free, UV sterilization.",
        "svc_4_title": "Smart Valve Installation",
        "svc_4_p1": "If a pipe bursts on vacation, IoT Smart Valves auto-shutoff and alert your phone in seconds.",
        "svc_4_p2": "These systems monitor water flow 24/7 using AI to detect micro-leaks or catastrophic ruptures.",
        "svc_4_good": "<strong>GOOD \u2014 $350</strong><br>Commercial-grade 1/4-turn brass ball valve.",
        "svc_4_better": "<strong>BETTER \u2014 $455</strong><br>Moen Flo Smart Valve. Daily monitoring and smartphone shutoff.",
        "svc_4_best": "<strong>BEST \u2014 $560</strong><br>Phyn Plus. Ultrasonic monitoring, no moving parts, smart home integration.",
        "svc_5_title": "SeeSnake Camera Inspection",
        "svc_5_p1": "Blind diagnostics destroy properties. Our SeeSnake cameras trace problems without excavation.",
        "svc_5_p2": "We deploy military-grade self-leveling HD cameras underground for surgical repairs instead of destroying your yard.",
        "svc_5_good": "<strong>GOOD \u2014 $250</strong><br>Basic camera inspection up to 50ft. USB video delivery.",
        "svc_5_better": "<strong>BETTER \u2014 $325</strong><br>Deep SeeSnake with sonar tracking. Exact surface location.",
        "svc_5_best": "<strong>BEST \u2014 $400</strong><br>HD inspection and digital modeling. Full system mapping and CIPP report.",
        "svc_6_title": "Main Sewer Replacement",
        "svc_6_p1": "A collapsed main sewer is one of the most disruptive failures. We offer guaranteed replacements for decades.",
        "svc_6_p2": "Whether through traditional excavation or trenchless methods, we eliminate roots and fractured pipes.",
        "svc_6_good": "<strong>GOOD \u2014 $5,500</strong><br>Traditional excavation, SDR-35 PVC. Proven gravity flow solution.",
        "svc_6_better": "<strong>BETTER \u2014 $7,150</strong><br>ABS Schedule 40. Superior solid core, gravel bed, two-way cleanouts.",
        "svc_6_best": "<strong>BEST \u2014 $8,800</strong><br>Trenchless HDPE fused joints. Seamless, root-proof. Lifetime guarantee.",
        "svc_7_title": "Hybrid Heat Pump Water Heater",
        "svc_7_p1": "Still spending hundreds on inefficient water heating? Hybrid Heat Pump reaches up to 400% efficiency.",
        "svc_7_p2": "Besides qualifying for rebates, this system drastically cuts electric bills. Pays for itself in under 3 years.",
        "svc_7_good": "<strong>GOOD \u2014 $2,200</strong><br>Standard 50-gallon atmospheric heater. Direct replacement.",
        "svc_7_better": "<strong>BETTER \u2014 $2,860</strong><br>Rheem ProTerra Hybrid. Digital panel, rebate-eligible efficiency.",
        "svc_7_best": "<strong>BEST \u2014 $3,520</strong><br>Bradford White AeroTherm with Wi-Fi. Smart scheduling, quiet pump, leak sensors.",
        "svc_8_title": "Pressure Reducing Valve (PRV)",
        "svc_8_p1": "Operating above 80 PSI destroys hoses, bursts valves, and voids warranties. A PRV protects silently.",
        "svc_8_p2": "A PRV regulates flow to a safe 55-60 PSI, acting as a mechanical shield at your home entry point.",
        "svc_8_good": "<strong>GOOD \u2014 $480</strong><br>Standard residential-grade brass PRV.",
        "svc_8_better": "<strong>BETTER \u2014 $624</strong><br>Wilkins 600XL with integrated pressure gauge.",
        "svc_8_best": "<strong>BEST \u2014 $768</strong><br>Watts LFN45B with inline strainer and thermal expansion tank.",
        "svc_9_title": "Emergency Triage",
        "svc_9_p1": "When a pipe bursts at 3AM, every second counts. We arrive fast, stabilize the leak, mitigate damage.",
        "svc_9_p2": "Our rapid response squad stops catastrophic flow and restores vital service to functional areas.",
        "svc_9_good": "<strong>GOOD \u2014 $380</strong><br>Main shutoff and SharkBite temporary caps.",
        "svc_9_better": "<strong>BETTER \u2014 $494</strong><br>Sector isolation with permanent ProPress valves.",
        "svc_9_best": "<strong>BEST \u2014 $608</strong><br>Full isolation manifold. Permanent one-visit solution.",
        "svc_10_title": "CAD & Digital Tracing",
        "svc_10_p1": "Modern development requires documented precision. We trace underground lines and deliver as-built plans.",
        "svc_10_p2": "We use electromagnetic tracing and digital modeling to map your invisible network and prevent accidents.",
        "svc_10_good": "<strong>GOOD \u2014 $600</strong><br>Main line tracing with surface paint and professional schematic.",
        "svc_10_better": "<strong>BETTER \u2014 $780</strong><br>2D AutoCAD overlay integrated with property architectural plans.",
        "svc_10_best": "<strong>BEST \u2014 $960</strong><br>3D BIM/Revit modeling. Every node, pipe and valve geolocated.",
        "svc_11_title": "Tankless Water Heater",
        "svc_11_p1": "Imagine endless hot water on demand. Tankless systems only fire when you open the tap.",
        "svc_11_p2": "Save space, reduce carbon footprint, and ensure constant purified hot water without tank explosion risks.",
        "svc_11_good": "<strong>GOOD \u2014 $3,200</strong><br>Navien NPE-A2 non-condensing. Great for quick replacements.",
        "svc_11_better": "<strong>BETTER \u2014 $4,160</strong><br>Rinnai RU Sensei Condensing. 0.95 UEF, smart modulating burners.",
        "svc_11_best": "<strong>BEST \u2014 $5,120</strong><br>Navien NPE-240A2 with ComfortFlow recirculation. Instant hot water, zero wait.",
        "svc_12_title": "Backflow Preventer Assembly",
        "svc_12_p1": "If you manage a business or irrigation, a Backflow preventer is federally mandated. Avoid crippling fines.",
        "svc_12_p2": "We are certified to install, calibrate and register these assemblies that protect drinking water.",
        "svc_12_good": "<strong>GOOD \u2014 $850</strong><br>Standard Wilkins 375 RPZ. Immediate city compliance.",
        "svc_12_better": "<strong>BETTER \u2014 $1,105</strong><br>High-flow Watts Series 009. Lead-free bronze for severe commercial use.",
        "svc_12_best": "<strong>BEST \u2014 $1,360</strong><br>Febco 860 RPZ with IoT sensor. Real-time differential monitoring.",
        "svc_13_title": "Luxury Fixture Swap",
        "svc_13_p1": "A luxury bathroom requires matching hardware with precise calibration, not just aesthetics.",
        "svc_13_p2": "We perform perfectly leveled, hermetically sealed installations tested at maximum pressure.",
        "svc_13_good": "<strong>GOOD \u2014 $250</strong><br>Standard Delta/Moen installation with stainless braided supply lines.",
        "svc_13_better": "<strong>BETTER \u2014 $325</strong><br>Moen Align/Grohe spot-resist. Commercial anti-mold silicone sealing.",
        "svc_13_best": "<strong>BEST \u2014 $400</strong><br>Kohler Artifacts Smart Touch integration. Temperature calibration and sensor wiring.",
        "svc_14_title": "Water Chemistry Panel",
        "svc_14_p1": "Your tap water may look clear but contain heavy metals or chloramine. Test before investing in filters.",
        "svc_14_p2": "We provide precise scientific analysis on-site and via certified labs for a custom water treatment plan.",
        "svc_14_good": "<strong>GOOD \u2014 $150</strong><br>Rapid on-site TDS, hardness and free chlorine test.",
        "svc_14_better": "<strong>BETTER \u2014 $195</strong><br>16-point certified lab panel (heavy metals, lead, nitrates). Report in 5 days.",
        "svc_14_best": "<strong>BEST \u2014 $240</strong><br>On-site test plus permanent inline digital TDS meter for real-time monitoring.",
        "svc_15_title": "Commercial Hydro-Jetting",
        "svc_15_p1": "When scale or thick roots calcify sewer pipes, electric snakes fail. Time for industrial force.",
        "svc_15_p2": "Our Hydro-Jetting blasts at 4000+ PSI with rotating laser nozzles restoring the original pipe diameter.",
        "svc_15_good": "<strong>GOOD \u2014 $750</strong><br>Heavy augering with 7/8 sectional electric cable.",
        "svc_15_better": "<strong>BETTER \u2014 $975</strong><br>4000 PSI Hydro-Jetting. Eliminates scale and emulsified grease.",
        "svc_15_best": "<strong>BEST \u2014 $1,200</strong><br>Heavy jetting + HD camera inspection + 12-month RootX inhibitor application.",


        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",
        "nav_nexus": "Nexus 首页",
        "nav_orion": "Orion 生态系统",
        "nav_services": "专业工程",
        "nav_multimedia": "播客",
        "nav_about": "使命",
        "nav_terminal": "终端",
        "hero_badge": "专业工程与 CSLB C-36 认证",
        "hero_title": "MORALES PLUMBING",
        "hero_desc": "将 21 年以上的工程专业知识与 AI 估算和可持续 water design 相结合。",
        "stat_ready": "持牌",
        "stat_eco": "ISO 14001",
        "stat_ai": "AI 活跃",
        "hero_explore": "查看解决方案",
        "hero_joe": "Joe 助手",
        "projects_title": "卓越工程",
        "projects_desc": "我们的现实世界技术应用和项目管理系统。",
        "card_ep_title": "ORION ESTIMATOR PRO",
        "card_ep_desc": "基于计算机视觉的自动估算，拥有 +8000 个项目目录。利润优化 >70%。",
        "card_orion_title": "ORION 战略系统",
        "card_orion_desc": "适用于大批量项目的数字工作流解决方案。智能合约和实时跟踪。",
        "btn_pricing": "查看官方价格表",
        "btn_buy": "购买许可证",
        "btn_proposal": "战略框架",
        "btn_academy": "Orion 学院",
        "services_title": "核心工程服务",
        "service_1": "热成像诊断",
        "service_1_desc": "使用高分辨率热成像和声学传感器进行非侵入式泄漏检测。",
        "service_2": "生态改造",
        "service_2_desc": "使用环保材料和高效节水技术进行系统现代化（ISO 14001）。",
        "service_3": "水力基础设施设计",
        "service_3_desc": "为住宅和商业基础设施提供高精度水力网络的专家规划。",
        "manifesto_title": "Morales Plumbing 宣言",
        "mission_title": "使命",
        "mission_desc": "通过将 21 年以上的工程经验与 AI 相结合，在 CSLB 标准下提供高精度解决方案，引领行业。",
        "vision_title": "愿景",
        "vision_desc": "成为技术管道和可持续工程的全球标准，以不断创新和诚信为定义。",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "首席工程师兼创始人",
        "cv_link": "> 访问专业简历",
        "ceo_link": "> CEO 执行个人资料",
        "network_link": "> 网络: ORION TECH",
        "joe_status": "JOE: AI 工程助手",
        "joe_welcome": "欢迎。我是 Joe。今天我该如何在项目诊断或工程服务方面为您提供帮助？",
        "joe_intro": "你好！我是 Joe，Morales Plumbing 的 AI 助手。今天我能帮你做些什么？ 🛠️",
        "joe_placeholder": "询问管道、服务或项目...",
        "joe_send": "发送",
        "joe_trigger_title": "与 Joe 对话 · AI 助手",
        "nav_pricebook": "价格表",
        "nav_legal": "法律",
        "back_home": "返回首页",
        "btn_read": "阅读更多",
        "pricebook_tag": "网页应用 · 活跃",
        "pricebook_title": "ORION PRICE BOOK v6.0 PRO",
        "nav_catalog": "目录",
        "nav_methodology": "方法论",
        "nav_tiers": "等级",
        "nav_upsells": "追加销售",
        "nav_promotions": "促销",
        "nav_terms": "条款",
        "nav_warranties": "保修",
        "pb_hero_badge": "行业标准版",
        "pb_hero_subtitle": "专业管道服务 | 加州湾区",
        "pb_hero_location": "加州湾区",
        "pb_hero_updated": "更新时间：2024 年 12 月",
        "pb_hero_details": "15 个详细的专业服务",
        "pb_hero_rates": "负责人：$185/小时 | 助手：$95/小时 | 加价：30%",
        "pb_hero_compliance": "工程标准：ORION Tech | 品质保证",
        "pb_hero_powered": "由 NeKon AI aGent Consulting 开发 | ORION 系统",
        "pb_method_title": "计算方法论",
        "pb_tiers_title": "好 / 更好 / 最好 系统",
        "pb_upsells_title": "追加销售系统",
        "pb_promotions_title": "活跃促销",
        "pb_terms_title": "条款和条件",
        "pb_warranties_title": "保修与支持",
        "pb_catalog_title": "服务目录",
        "pricebook_desc": "行业标准版，包含 +100 个详细的专业服务、3 个价格等级和集成的追加销售系统。",
        "pricebook_feat1": "+100 个服务",
        "pricebook_feat2": "好/更好/最好 等级",
        "pricebook_feat3": "追加销售与促销",
        "card_orion_feat1": "Gogo Rooter 集成",
        "card_orion_feat2": "云同步",
        "card_orion_feat3": "优化投资回报率",
        "btn_catalog": "查看目录",
        "btn_demo": "查看演示",
        "system_core_tag": "系统核心 · 开发中",
        "coming_soon": "即将推出",
        "coming_soon_badge": "即将推出",
        "footer_e2ee": "安全与隐私优先",
        "footer_cyber": "AI 赋能平台",
        "footer_rights_long": "© 2026 Morales Plumbing。保留所有权利。内容、视频、生成的图像以及 ORION / Joe AI 技术是 Morales Plumbing 和 NeKon AI aGent Consulting 的独家知识产权。",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · 保留所有权利 · 注册商标",
        "nav_framework": "战略框架",
        "footer_rights": "© 2026 Morales Plumbing。保留所有权利。",
        "slogan_text": "定义流动的未来。为生命创新。 💧",
        "contact_lic": "许可证",
        "pb_method_p1": "ORION 计算方法基于水力成本核算的精密工程方法。我们使用工业级算法，考虑材料耐用性、劳动强度（按负责人和助手角色分类）以及技术复杂性。这消除了估算的变异性，提供了与 CSLB 标准和加州建筑市场波动相一致的固定费率结构。",
        "pb_method_p2": "通过集成实时供应链数据和高效的专有工作流协议，我们的方法论在保持高保真技术执行的可持续利润的同时，保证了优化的 30% 加价。这种科学的定价方法确保每个项目都得到经验证的水力数据和透明资源分配的支持。",
        "pb_tiers_p1": "好/更好/最好系统为我们的客户提供了三个不同等级的工程解决方案，量身定制以满足不同的项目生命周期目标。“好”等级专注于符合 UPC 的维修和高效修复。“更好”等级引入了增强的组件耐用性和中端性能升级。“最好”等级代表了 ORION Tech 标准：优质工业级材料、AI 集成监测以及延长的生命周期保修。",
        "pb_tiers_p2": "每个等级都旨在其范围内提供最大价值，使住宅和商业利益相关者能够根据其长期基础设施战略而不仅仅是眼前的需求做出明智的决定。",
        "pb_upsells_p1": "我们的追加销售系统旨在提供主动的基础设施保护。除了主要请求外，我们还会分析水力环境，建议关键升级，如智能切断阀、水过滤系统和高效循环泵。这些补充不仅是选项，更是对财产安全的战略投资。",
        "pb_upsells_p2": "每项建议都有诊断数据的支持，确保每次集成都在防止未来故障和降低长期运营成本方面发挥功能性作用。",
        "pb_promo_p1": "Morales Plumbing 促销框架奖励主动维护和大批量项目承诺。我们定期为全屋重新配管、季节性热水器优化和首次 ORION Tech 集成提供激励措施。这些促销旨在降低进入高精度工程解决方案的门槛。",
        "pb_promo_p2": "所有活跃促销均需经过工程审查，且不能与其他战略折扣结合使用，以确保项目质量始终是绝对的首要任务。",
        "pb_terms_p1": "Morales Plumbing 提供的所有服务均受加州承包商州执照委员会 (CSLB) 和统一管道规范 (UPC) 的约束。每份合同都包含详细的工作范围、固定费率定价（无隐藏费用）以及清晰的技术方法说明。支付结构设计为与项目里程碑保持一致。",
        "pb_terms_p2": "责任和争议解决遵循加州工业标准，确保工程团队与客户之间建立专业且透明的合作伙伴关系。",
        "pb_warranty_p1": "Morales Plumbing 为所有人工和技术集成提供标准的 1 年保修，并为“最好”等级系统和 ORION Tech 安装提供延长保修。此外，我们在进行全面重新配管（无论是水、排水还是燃气）时提供灵活的信贷计划和终身人工保修系统。我们的支持团队利用 IoT 监测数据提供快速诊断响应，最大限度地减少停机时间并确保系统完整性。",
        "pb_warranty_p2": "制造商保修适用于所有使用的工业材料，Morales Plumbing 作为所有保修相关咨询和系统审核的主要技术联系人。",
        "pb_warranty_note": "*IoT 监测：*指使用智能技术（Wi-Fi 截水阀、漏水传感器、智能热水器），将数据和警报发送到云端，以便进行快速的预防性诊断。",
        "pb_prose_p1": "ORION Price Book v6.0 PRO 是 Morales Plumbing 的运营核心，旨在提供成本工程方面的绝对透明度。该目录针对加州湾区更新至 2024 年 12 月，是在加州承包商州执照委员会 (CSLB) 和统一管道规范 (UPC) 的严格指导下开发的，确保每项技术干预都得到工业安全和环境可持续性标准的支持。",
        "pb_prose_p2": "该文件的结构优先考虑客户的清晰度，消除了复杂的现场计算，并确保每份报价都反映了使用工业级材料和经过高效协议审核的精密方法。在 Morales Plumbing，我们不仅仅是修理管道；我们为下一代设计可持续的水力系统。",
        "pb_prose_p3": "我们的方法将 AI 驱动的估算与 21 年以上的现场经验相结合，在资源分配和时间表预测方面实现了 99% 的准确率。选择 ORION，您就是选择了一个致力于最高水平技术卓越和诚信的战略基础设施合作伙伴。",
        "aq_title": "ORION AQUA GUARD v1.0",
        "aq_desc": "高精度水处理系统的先进监测和管理。实时 pH、硬度和过滤分析。",
        "aq_feat1": "IoT 监测",
        "aq_feat2": "自动反冲洗",
        "aq_feat3": "纯度警报",
        "aq_prose_p1": "ORION AQUA GUARD v1.0 代表了住宅和商业水净化管理的巅峰。该系统利用 IoT 传感器网络持续监测进入的水质，测量硬度（每加仑格令）、pH 值和污染物浓度等变量。数据通过我们专有的 ORION 引擎进行处理，以优化过滤效率和盐消耗。",
        "aq_prose_p2": "除了简单的软化外，Aqua Guard 还管理多级反渗透装置和 UV 杀菌系统。用户通过 ORION 生态系统收到有关过滤器生命周期和纯度下降的实时警报，确保用于消耗和基础设施的水保持在实验室级标准。",
        "aq_prose_p3": "通过将 Aqua Guard 集成到您的水力网络中，您可以延长所有下游设备和装置的使用寿命。系统的预测性维护能力确保仅在统计上有必要时才需要干预，从而最大限度地提高水质和系统投资回报率。",
        "hn_title": "ORION HYDRAULIC NEXUS",
        "hn_desc": "适用于复杂基础设施的 CAD 集成水力设计和压力模拟。优化的流量体积分布。",
        "hn_feat1": "CAD 集成",
        "hn_feat2": "压力图谱",
        "hn_feat3": "泄漏模拟",
        "hn_prose_p1": "ORION HYDRAULIC NEXUS 是我们用于规划 and 模拟高压水力基础设施的专业级设计套件。利用 CAD 集成的蓝图，我们为您的管道系统创建一个数字孪生，以分析流量动态、长距离运行的压力降以及热膨胀变量。这对于高端住宅和多层商业项目至关重要，因为标准估算在这些项目中往往失效。",
        "hn_prose_p2": "该系统允许我们的工程师在各种峰值需求场景下对虚拟网络进行压力测试，在安装一根管道之前识别潜在的薄弱环节。这种方法论确保每个装置都能获得 UPC 要求的准确压力，消除“死区”并优化供水速度。",
        "hn_prose_p3": "Hydraulic Nexus 还与我们的热成像诊断集成，使我们能够将实时热数据叠加到原始蓝图上，进行精确的泄漏检测和基础设施审核。它是精密管道工程的权威工具。",
        "wh_title": "ORION THERMO CORE v2.0",
        "wh_desc": "高效无水箱热水器的智能诊断和优化系统。预测性结垢警报和燃烧调优。",
        "wh_feat1": "燃烧调优",
        "wh_feat2": "结垢 AI",
        "wh_feat3": "能源优化",
        "wh_prose_p1": "ORION THERMO CORE v2.0 是高效无水箱热水系统的专用管理平台。与传统热水器不同，现代无水箱机组需要精确的燃烧调优 and 定期的热交换器除垢，以保持其 90%+ 的 AFUE 评级。Thermo Core 使用声学和流量传感器来检测矿物质堆积的最早迹象。",
        "wh_prose_p2": "该平台根据实际使用模式而非武断的时间表提供自动化的冲洗周期安排。它还监测点火周期 and 气空比，以确保系统以峰值热效率运行，直接降低每月的水电费 and 碳足迹。",
        "wh_prose_p3": "通过 Thermo Core，Morales Plumbing 为优质热水供应提供“一劳永逸”的体验。系统与 ORION 生态系统的集成允许进行远程诊断，这意味着我们的工程师通常在客户甚至还没注意到温度下降之前就识别并解决了性能问题。",
        "pb_hero_title": "ORION 价格表 v6.0 PRO",
        "pb_search_placeholder": "搜索服务（例如热水器、排水管、AI 映射...）",
        "cat_all": "全部",
        "cat_diagnostic": "诊断",
        "cat_engineering": "工程",
        "cat_eco": "生态可持续",
        "cat_safety": "安全",
        "price_standard": "标准",
        "price_member": "会员",
        "lbl_client_view": "客户视图：",
        "lbl_tech_view": "技术规格与材料（3个层级）：",
        "doc_title": "战略提案",
        "doc_subtitle": "掌握智能管道与环境工程",
        "sig_name": "Alex G. Espinosa",
        "profile_header_role": "高级 AI 解决方案架构师 | 环境工程师 | 项目经理",
        "app_tratamiento_title": "水处理系统",
        "app_tratamiento_detail": "水处理应用程序管理先进的过滤 and 净化周期。提供有关水硬度、pH 值 and 污染物去除效率的实时数据，从而实现工业反渗透系统的预测性维护。",
        "app_redes_title": "水力网络设计",
        "app_redes_detail": "我们的水力网络设计应用程序允许模拟住宅 and 商业环境中的复杂流体动力学。使用 ISO 标准算法优化管道尺寸 and 压力分布，减少材料浪费 and 确保符合 UPC/CPC。",
        "app_heaters_title": "无水箱热水器",
        "app_heaters_detail": "此应用程序优化了无水箱热水系统的安装 and 性能。计算峰值流量需求 and 燃气压力要求，以确保不间断的热水供应，包括用于故障排除的诊断模块。",
        "legal_title": "法律框架与网络安全",
        "sec1_title": "环境工程与可持续发展",
        "sec1_legal_p1": "本平台上的所有内容，包括但不限于公司视频、生成的 3D 图像、源代码 and ORION Price Book v6.0 PRO 数据库结构，均受美国 and 加利福尼亚州知识产权法 and 版权法的严格保护。",
        "sec1_legal_li1": "Morales Plumbing 保留其商标、工程方法、客户群 and 技术服务组合的专有权利。",
        "sec1_legal_li2": "NeKon AI aGent Consulting 保留 AI 基础设施（“Joe AI”）、神经网络模型、计算机视觉诊断系统 and 底层 ORION 系统自动化技术的共同作者权 and 权利。",
        "sec1_legal_p2": "严禁未经授权复制、拷贝、抓取、分发 or 商业使用本数字生态系统中托管的任何多媒体材料。",
        "sec2_legal_title": "2. 网络安全和数据隐私",
        "sec2_legal_p1": "确保我们的商业 (B2B) and 住宅 (B2C) 客户的安全是重中之重。我们所有的系统都在严格的工业级安全协议下运行：",
        "sec2_legal_li1": "热成像 and 红外检测：通过高分辨率热像仪 and 精密传感器收集结构数据，仅用于非侵入式物理诊断目的。",
        "sec2_legal_li2": "智能合约 and 支付：所有生成的账单 and 合约均受到端到端加密 (E2EE) 的保护。",
        "sec2_legal_li3": "Joe AI 互动：对 Joe 的查询将进行匿名分析，以改进预测引擎，同时尊重用户隐私。",
        "sec3_legal_title": "3. 职权范围 (SLA)",
        "sec3_legal_p1": "物理服务的提供 and 工程执行受 ORION 战略框架 and 价格表的约束。通过与平台互动：",
        "sec3_legal_li1": "客户接受与圣何塞市标准一致的好/更好/最好服务水平 and 条款。",
        "sec3_legal_li2": "人工 and 零件保修严格遵守 CSLB C-36 类许可证 and UPC/CPC 标准。",
        "sec3_legal_li3": "Digital Diagnostic Condition: AI 生成的报告仅为初步报告。最终授权需要合格技术人员进行现场验证。",
        "contact_loc": "位置",
        "contact_email": "电子邮件",
        "contact_phone": "电话",
        "aca_back": "返回模块",
        "aca_mod_badge": "模块 01 | 第 1 周",
        "aca_hero_title": "了解 ORION Tech",
        "aca_hero_desc": "使命、愿景、价值观、组织结构 and 公司文化。本模块将为您提供了解我们是谁以及我们要去哪里的基础。",
        "aca_video_title": "视频：组织结构",
        "aca_mission_title": "🎯 我们的使命",
        "aca_mission_desc": "为中小企业普及智能自动化，让他们能够利用尖端技术与大公司竞争。",
        "aca_vision_title": "🔮 我们的愿景",
        "aca_vision_desc": "到 2028 年成为全球西班牙语业务领先的 AI 自动化平台。",
        "aca_what_title": "💡 我们做什么",
        "aca_what_desc": "我们创建 AI 助手，在 WhatsApp、Instagram、Facebook、Telegram and 其他平台上全天候回复消息。我们实现预订、预约、销售 and 客户服务的自动化。",
        "aca_org_title": "组织结构",
        "aca_values_title": "我们的价值观",
        "aca_val1_title": "创新",
        "aca_val1_desc": "我们寻求解决问题的新方法",
        "aca_val2_title": "信任",
        "aca_val2_desc": "我们言出必行",
        "aca_val3_title": "韧性",
        "aca_val3_desc": "我们不会因拒绝而放弃",
        "aca_val4_title": "影响",
        "aca_val4_desc": "我们衡量真实结果",
        "aca_val5_title": "卓越",
        "aca_val5_desc": "质量重于数量",
        "aca_global_title": "全球业务",
        "aca_usa_title": "🇺🇸 美国（总部）",
        "aca_usa_li1": "加利福尼亚州圣何塞",
        "aca_usa_li2": "CEO + 执行领导层",
        "aca_usa_li3": "主要市场",
        "aca_col_title": "🇨🇴 哥伦比亚（拉美枢纽）",
        "aca_col_li1": "麦德林",
        "aca_col_li2": "运营总监",
        "aca_col_li3": "SDR and 开发团队",
        "aca_mex_title": "🇲🇽 墨西哥",
        "aca_mex_li1": "墨西哥城",
        "aca_mex_li2": "开发中 - 2025 年",
        "aca_nav_all": "← 所有模块",
        "aca_nav_next": "模块 2：产品 →",
        "service_copper_title": "铜管管道与翻新",
        "service_copper_desc": "用于翻新 and 修复的高精度铜管安装。",
        "service_copper_detail": "内容：用于住宅 and 商业基础设施的全铜管道系统（L、M、K 型）。目的：确保结构完整性 and 流动效率。用途：新建筑、翻新 and 紧急维修。潜力：使用寿命 50 年以上，零微塑料浸出。ROI: 与 PEX 相比增加 15% 的物业价值；维护成本降低 30%。竞争：本地管道工使用标准配件；Morales 使用专业钎焊 and 环境协议。MORALES PLUS: 集成环境工程与精益施工协议。版权：© 2026 Morales Plumbing。保留所有权利。",
        "service_expansion_title": "系统扩展",
        "service_expansion_desc": "针对不断增长的基础设施 and 多家庭单元的战略水力扩展。",
        "service_expansion_detail": "内容：模块化水力扩展块。目的：无缝集成新固定装置且无压力损失。用途：商业增建 and 住宅扩建。ROI: 可扩展的基础设施。MORALES PLUS: 精益流程集成。版权：© 2026 Morales Plumbing。保留所有权利。",
        "service_construction_title": "新建筑工程",
        "service_construction_desc": "针对新住宅 and 商业建筑的端到端水力工程。",
        "service_construction_detail": "内容：蓝图、粗装 and 精装管道。目的：卓越的规范构建 (UPC/CPC)。ROI: 由于经过认证的工程质量，保险费降低 20%。MORALES PLUS: 国际环境协议。版权：© 2026 Morales Plumbing。保留所有权利。",
        "service_repair_title": "智能维修",
        "service_repair_desc": "使用非侵入式诊断工具进行紧急 and 计划技术维修。",
        "service_repair_detail": "内容：精确泄漏修复 and 组件更换。目的：基础设施恢复。用途：主线 or 内部网络故障。ROI: 防止结构损坏 and 水资源浪费。版权：© 2026 Morales Plumbing. 保留所有权利。",
        "service_septic_title": "化粪池工程",
        "service_septic_desc": "针对离网 and 农村基础设施的高级环境化粪池系统。",
        "service_septic_detail": "内容：生物消化器 and 渗透田。目的：可持续废物管理。ROI: 消除公用事业费用。MORALES PLUS: 精益流程 + 加州水板合规。版权：© 2026 Morales Plumbing。保留所有权利。",
        "service_water_title": "雨水收集系统",
        "service_water_desc": "战略性雨水捕获 and 灰水回用工程。",
        "service_water_detail": "内容：多级过滤 and 紫外线消毒。目的：自给自足。ROI: 水费支出减少 60%。MORALES PLUS: 国际环境协议。版权：© 2026 Morales Plumbing。保留所有权利。",
        "faq_title": "问答 | 技术中心",
        "faq_cat_plumbing": "管道系统",
        "faq_cat_eco": "生态管道混合",
        "faq_cat_env": "环境法规",
        "faq_q1": "为什么新建筑使用铜管而不是 PEX？",
        "faq_a1": "铜管提供卓越的耐用性、抗火性，并防止细菌生长。在加州统一管道规范 (UPC) 下，它仍是高端价值的金标准。另一方面，PEX 管道具有极佳的柔韧性、更少的接头连接（减少漏水点）、更快的安装速度以及较低的前期材料成本。<span class=\"comic-choice\">选择权在您</span>：您可以选择卓越的长效寿命和经典材料价值（铜管），或选择现代高性价比和弹性抗震韧性（PEX 管道）。",
        "faq_q2": "2026 年加州化粪池法规是什么？",
        "faq_a2": "法规重点关注氮减排、地下水保护和水资源回收效率。Morales Plumbing 通过先进的环境工程和水务委员会协议确保 100% 合规。此外，我们也可以设计符合标准要求的传统化粪池配置，利用当地传统许可渠道，最大程度降低前期系统成本。<span class=\"comic-choice\">选择权在您</span>：投资于超越 2030 年标准的先进环保系统以实现前瞻性保护，或者选择侧重于即时成本效益的合规配置。",
        "faq_q3": "精益流程如何降低管道成本？",
        "faq_a3": "通过消除浪费和使用可持续材料，我们将成本降低了 25%，工期缩短了 30%。我们的协议确保了更低的碳足迹和更高的基础设施投资回报率。或者，我们提供传统的施工路线，专注于最大化的定制规格和绝对的手动结构冗余，不受精益流程进度限制。<span class=\"comic-choice\">选择权在您</span>：选择我们高效快捷的精益环保流程，或者选择我们提供定制化传统利润空间的传统手动精细施工。",
        "faq_q4": "我如何将旧物业升级到加州当前的环境标准？",
        "faq_a4": "我们的团队进行全面的技术审计，集成水回用系统 and 实现水力基础设施现代化，确保符合最新的州法规。",
        "faq_a5": "AI 能够实现预测性故障检测 and 精确的流量优化，从而减少资源消耗 and 在昂贵的维修发生之前予以防止。",
        "cat_all": "全部",
        "cat_diagnostic": "诊断",
        "cat_engineering": "工程",
        "cat_eco": "生态可持续",
        "cat_safety": "安全",
        "contact_loc": "位置",
        "contact_email": "电子邮件",
        "contact_phone": "电话",
        "joe_trigger_title": "与 Joe 对话 · AI 助手",
        "footer_rights_long": "© 2026 Morales Plumbing。保留所有权利。内容、视频、生成的图像以及 ORION / Joe AI 技术是 Morales Plumbing 和 NeKon AI aGent Consulting 的独家知识产权。",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · 保留所有权利 · 注册商标",
        "spec_content": "内容",
        "spec_purpose": "目的",
        "spec_usage": "用途",
        "spec_potential": "潜力",
        "spec_costs": "ROI / 成本",
        "spec_comp": "竞争优势",
        "spec_plus": "MORALES PLUS",
        "spec_lean": "精益流程",
        "service_copper_content": "完整铜管系统（L、M、K型），适用于住宅和商业基础设施。",
        "service_copper_purpose": "保证结构完整性和流量效率，消除腐蚀和微塑料污染。",
        "service_copper_usage": "圣何塞、帕洛阿尔托和洛斯加托斯的豪华翻新项目，耐久性至关重要。",
        "service_copper_potential": "设计使用寿命超过50年，100%可回收利用。",
        "service_copper_costs": "通过降低保险费和消除重复维修立即获得投资回报。",
        "service_copper_comp": "优于使用低密度PEX的竞争对手，具有更强的防腐性能。",
        "service_copper_plus": "环境工程：安装后消毒和无铅焊接认证。",
        "service_copper_lean": "精益方法论：厂外预制套件，现场施工时间减少40%。",
        "service_septic_content": "安装上流式厌氧生物消化器和带液位传感器的智能渗滤场。",
        "service_septic_purpose": "偏远地区的生态废物管理，保护当地含水层。",
        "service_septic_usage": "需要符合加州水务委员会规定的大型住宅庄园和翻新项目。",
        "service_septic_potential": "可扩展系统，允许在现场将污泥安全转化为土壤生物质。",
        "service_septic_costs": "完全消除市政污水费用，抽水频率降低50%。",
        "service_septic_comp": "相比传统混凝土储罐，我们提供渗漏率为0%的高强度聚合物。",
        "service_septic_plus": "环境协议：基于当地吸收率的土壤审计和水力设计。",
        "service_septic_lean": "精益流程：通过GPS引导挖掘实现48小时模块化安装。",
        "service_water_content": "雨水收集网络和中水处理系统，用于非饮用水用途。",
        "service_water_purpose": "减少加州干旱影响，降低对市政供水的依赖。",
        "service_water_usage": "在严格节水规定下用于智能花园和冲厕的综合系统。",
        "service_water_potential": "年住宅用水量最高可实现65%的部分自给自足。",
        "service_water_costs": "大幅节省水费，并可申请州环境保护激励资金。",
        "service_water_comp": "定制设计优于简单雨桶；我们提供二级过滤工程。",
        "service_water_plus": "环境工程：集成紫外线消毒系统防止病原体污染。",
        "service_water_lean": "精益流程：动态流量映射，最大限度减少电泵使用。",
        "service_expansion_content": "为ADU和主体扩建设计并实施新的水力分支管道。",
        "service_expansion_purpose": "确保额外的水力负荷不会影响现有系统压力。",
        "service_expansion_usage": "硅谷不断增长的ADU市场，确保符合现行建筑法规。",
        "service_expansion_potential": "与全屋智能漏水检测系统的原生集成能力。",
        "service_expansion_costs": "通过Price Book v6.0固定定价，避免意外'变更单'。",
        "service_expansion_comp": "使用数字孪生技术在首次钻孔前模拟压力。",
        "service_expansion_plus": "Morales Plus：扩建热水管线的热平衡验证。",
        "service_expansion_lean": "精益流程：材料'准时制'物流，保持工地整洁。",
        "service_construction_content": "基础级规划、高速粗装和优质精装工程。",
        "service_construction_purpose": "建造超越加州检验标准的完美基础设施。",
        "service_construction_usage": "高科技水平的现代新建住宅和多家庭综合楼。",
        "service_construction_potential": "为全屋智能家居和水力物联网集成原生就绪。",
        "service_construction_costs": "通过价值工程和战略材料选择优化预算。",
        "service_construction_comp": "通过BIM文件与建筑师直接协作。",
        "service_construction_plus": "环境协议：水力安装LEED认证。",
        "service_construction_lean": "精益流程：并行任务规划，施工周期缩短15%。",
        "service_repair_content": "精确定位不可见缺陷，以最小切割进行外科手术式修复。",
        "service_repair_purpose": "无需大规模拆除即可解决复杂管道问题。",
        "service_repair_usage": "住宅关键维护和持续运营的商业建筑。",
        "service_repair_potential": "存储在ORION生态系统中的数字维修历史，用于预测性维护。",
        "service_repair_costs": "通过精确定位故障点，避免修复后重建的高额费用。",
        "service_repair_comp": "使用Joe AI助手进行流量模式分析，优于传统'试错法'。",
        "service_repair_plus": "Morales Plus：基于数字诊断精度的延长保修。",
        "service_repair_lean": "精益流程：标准化快速维修套件，实现首次上门解决问题。",
        "eco_podcasts_card_title": "ORION 播客库",
        "eco_podcasts_card_desc": "关于水利基础设施和加州合规框架中的 AI 革命的高保真交互式音频和批判性分析。",
        "btn_open_podcasts": "收听播客",
        "multimedia_title": "ORION 播客库",
        "multimedia_subtitle": "高保真音频深度见解与批判性分析",
        "mp_podcasts_title": "MP 生态系统系列",
        "pod_type_deep_dive": "深度解析",
        "mp_pod_1_title": "硅谷 AI 改变现代管道工程",
        "btn_listen": "立即收听",
        "pod_type_brief": "简报",
        "mp_pod_2_title": "预测水泄漏的 AI 技术",
        "pod_type_critique": "评论",
        "mp_pod_3_title": "AI 诊断与法律责任",
        "ep_podcasts_title": "EP Estimator Pro 系列",
        "ep_pod_1_title": "EP PLUMBING: 关键分析",
        "ep_pod_2_title": "口袋里的 AI 管道工",
        "pod_type_debate": "辩论",
        "ep_pod_3_title": "诊断与法律框架",
        "lbl_tier_good": "GOOD (标准)",
        "lbl_tier_better": "BETTER (高级)",
        "lbl_tier_best": "BEST (顶级)",
        "lbl_justification": "理由：",
        "lbl_materials": "材料：",
        "lbl_tools": "工具/设备：",
        "lbl_time": "预计时间：",
        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",


    
    },
    "tl": {
        "eng_btn_details": "Tingnan ang Detalye →",
        "eng_back": "← Bumalik sa Central Services",
        "eng_termo_title": "Thermography Diagnostics",
        "eng_termo_code": "ENG-CENT-001",
        "eng_termo_p1": "Ang Thermography Diagnostics ay isang mahalagang bahagi ng aming Central Engineering Services. Binubuo ito ng ganap na hindi invasive na leak detection gamit ang high-resolution thermal imaging at acoustic sensors.",
        "eng_termo_p2": "Sa halip na magsagawa ng magastos at mapanirang exploratory demolition, gumagamit kami ng FLIR infrared na teknolohiya upang mailarawan ang mga thermal gradient sa loob ng mga pader at sa ilalim ng mga slab.",
        "eng_termo_tech1_title": "Mataas na Katumpakan na Infrared Imaging",
        "eng_termo_tech1_desc": "Kinukuha ng aming mga camera ang mga pagkakaiba sa temperatura na hanggang 0.1°C, na eksaktong ipinapakita kung saan dumadaloy ang tumagas na tubig.",
        "eng_termo_tech2_title": "Computerized Acoustic Analysis",
        "eng_termo_tech2_desc": "Gumagamit kami ng mga hypersensitive na mikropono na may mga filter ng AI na nag-iiba sa ambient na ingay mula sa sumisitsit na dulot ng nakakatakas na pressurized na tubig.",
        "eng_termo_tech3_title": "Digital Mapping at Pag-uulat",
        "eng_termo_tech3_desc": "Nagbibigay kami ng komprehensibong digital na ulat sa pamamagitan ng aming portal, pinatutunayan ang isyu para sa mga claim sa insurance at pinapadali ang pag-aayos.",
        "eng_eco_title": "Eco-Retrofitting",
        "eng_eco_code": "ENG-CENT-002",
        "eng_eco_p1": "Ang Eco-Retrofitting ay aming cutting-edge na espesyalidad para i-modernize ang mga umiiral na hydraulic system gamit ang mga eco-friendly na materyales at ultra-high efficiency water-saving na mga bahagi.",
        "eng_eco_p2": "Ina-update namin ang mga fixture ng iyong gusali upang lubhang bawasan ang pagkonsumo ng tubig nang hindi isinasakripisyo ang presyon o ginhawa.",
        "eng_eco_tech1_title": "Napatunayang Pagbawas sa Tubig",
        "eng_eco_tech1_desc": "Pag-install ng mga aerated flow regulator, ultra-low consumption dual-flush toilet (UHET), at smart pressure reducing valves (PRV).",
        "eng_eco_tech2_title": "Mga Napapanatiling Materyal",
        "eng_eco_tech2_desc": "Eksklusibong paggamit ng mga nare-recycle na tubo o yaong may mababang carbon impact certifications, na tinitiyak na ang iyong proyekto ay may zero environmental impact.",
        "eng_eco_tech3_title": "Sertipikasyon ng Pagtitipid",
        "eng_eco_tech3_desc": "Naghahatid kami ng mga kalkulasyon ng Return on Investment (ROI) at garantisadong pagtitipid ng tubig (hanggang 40% buwan-buwan), na angkop para sa pag-aaplay sa mga state rebate.",
        "eng_diseno_title": "Disenyo ng Hydraulic Infrastructure",
        "eng_diseno_code": "ENG-CENT-003",
        "eng_diseno_p1": "Ang Hydraulic Infrastructure Design ng Morales Plumbing ay isang advanced na serbisyo sa pag-iinhinyero na naggarantiya ng viability, kahusayan, at scalability.",
        "eng_diseno_p2": "Ang aming mga inhinyero ay gumagamit ng 3D modeling software at fluid dynamics simulators upang kalkulahin ang mga pressure gradient, thermal expansion, at bilis ng daloy.",
        "eng_diseno_tech1_title": "Pinagsamang BIM Modeling",
        "eng_diseno_tech1_desc": "Parametric na disenyo na katugma sa Autodesk Revit, na nagpapahintulot sa walang kamali-mali na koordinasyon sa mga arkitekto at kontratista.",
        "eng_diseno_tech2_title": "Flow at Pressure Simulation",
        "eng_diseno_tech2_desc": "Mga virtual na stress test sa digital na modelo upang matiyak ang balanseng suplay kahit sa mga pinakamataas na demand.",
        "eng_diseno_tech3_title": "Pagsunod sa Kodigo (UPC/CPC)",
        "eng_diseno_tech3_desc": "Garantisadong pag-apruba sa mga inspeksyon ng lungsod salamat sa mahigpit na pagsunod sa mga Uniform at California Plumbing Code.",
        "eng_cobre_title": "Elite Copper Renovations",
        "eng_cobre_code": "ENG-CENT-004",
        "eng_cobre_p1": "Ang Elite Copper Renovations ay kumakatawan sa pamantayang ginto sa hydraulic infrastructure. Pinasubalian namin ang mga lipas na sistema ng pagtutubero ng may mataas na kadalisayan ng Type L at Type K na mga tubo na tanso.",
        "eng_cobre_p2": "Ang tanso ay nagbibigay ng likas na antimicrobial na katangian na pasibong nililinis ang daloy ng tubig at naggarantiya ng walang paglabas ng microplastic.",
        "eng_cobre_tech1_title": "Precision Welding at ProPress System",
        "eng_cobre_tech1_desc": "Gumagamit kami ng mga walang alab na pamamaraan ng mechanical joining (ProPress) o lead-free aerospace-grade welding.",
        "eng_cobre_tech2_title": "Longevity at ROI",
        "eng_cobre_tech2_desc": "Inaasahang buhay ng higit sa 50 taon. Agad na itinataas ang structural valuation ng pag-aari hanggang 15%.",
        "eng_cobre_tech3_title": "Katangiang Acoustic at Patuloy na Daloy",
        "eng_cobre_tech3_desc": "Tinatanggal ng kapal ng pader ng Type L copper ang water hammer at kinakaya ang matinding presyon.",
        "eng_septico_title": "Advanced Septic Engineering",
        "eng_septico_code": "ENG-CENT-005",
        "eng_septico_p1": "Dinisenyo, ipinapatupad, at pinapanatili ng aming dibisyon ng Advanced Septic Engineering ang mga off-grid na sistema sa pamamahala ng effluent gamit ang modernong biotechnology.",
        "eng_septico_p2": "Sa halip na mag-install ng maginoong mga septic tank, kami ay nagpapatupad ng mga Aerobic Treatment Unit (ATU) na nagpoproseso ng tubig sa isang antas ng kadalisayan na halos angkop para sa ibabaw na irigasyon.",
        "eng_septico_tech1_title": "Percolation Studies at Topographic Design",
        "eng_septico_tech1_desc": "Geological na pagsusuri ng lupa upang matukoy ang eksaktong bilis ng pagsipsip at laki ng leach field.",
        "eng_septico_tech2_title": "Pagsasama ng Bio-Reactor",
        "eng_septico_tech2_desc": "Mga kagamitan na may aeration systems na exponentially na nagpapabilis ng solid decomposition sa pamamagitan ng mga ultra-efficient aerobic bacteria.",
        "eng_septico_tech3_title": "Pagsunod sa Regulasyon",
        "eng_septico_tech3_desc": "End-to-end permit management, na tinitiyak na ang disenyo ay lumalampas sa mga kinakailangan sa kalusugan at pagbawas sa mga multa.",
        "faq_q6": "Paano tinitiyak ng Morales Plumbing ang pagsunod sa UPC?",
        "faq_a6": "Ang aming mga inhinyero ay sertipikado ng CSLB C-36 at gumagamit ng AI-assisted code-check protocols upang matiyak na ang bawat joint ay lumalampas sa mga pamantayan ng California. Bukod dito, nag-aalok kami ng tradisyonal na pisikal na inspeksyon na may dalawang inspektor at manu-manong checklist para sa mga kliyenteng mas gusto ang klasiko at mekanikal na pangangasiwa. <span class=\"comic-choice\">Ang desisyon ay nasa iyo</span>: piliin ang aming high-precision AI-assisted digital validation, o ang aming subok sa panahong manu-manong inspeksyon ng tao at mga mekanikal na warranty.",
        "faq_q7": "Anong mga partikular na metrikong 'Lean' ang inyong sinusubaybayan?",
        "faq_a7": "Sinusubaybayan namin ang Takt Time, Lead Time, at First-Pass Yield upang matiyak ang isang mahuhulaan at zero-waste na workflow para sa mga malalaking proyekto. Kasabay nito, sinusuportahan namin ang mga klasikal na milestone ng proyekto at tradisyonal na pag-audit ng oras ng paggawa para sa mas simpleng pagsubaybay. <span class=\"comic-choice\">Ang desisyon ay nasa iyo</span>: i-optimize ang iyong proyekto gamit ang real-time na Lean data dashboard, o pamahalaan ito sa pamamagitan ng simple at tradisyonal na mga milestone.",
        "faq_q8": "Paano ko maihahanda ang aking imprastraktura para sa hinaharap?",
        "faq_a8": "Sa pamamagitan ng pagsasama ng mga advanced na aktibong sistema ng pag-recycle ng tubig at pag-ani ng ulan ngayon, maiiwasan mo ang mga obligasyon sa muling pag-aayos sa hinaharap at mapapataas ang halaga ng ari-arian ng hanggang 15%. O maaari mong piliin ang lubos na maaasahang passive physical loop na nakatuon sa napakatibay na tradisyonal na manifold piping at pinasimpleng konfigurasyon na nagpapababa ng mga mekanikal na bahagi. <span class=\"comic-choice\">Ang desisyon ay nasa iyo</span>: mamuhunan sa aktibong napapanatiling mga teknolohiya ng tubig, o pumili ng isang mababang-maintenance na passive loop system.",

        "svc_1_title": "Precision Leak Detection",
        "svc_1_p1": "At Morales Plumbing, precision is our standard. We identify hidden faults without destructive demolition.",
        "svc_1_p2": "Using FLIR thermal cameras and acoustic sensors we trace leaks behind walls or slabs. Massive savings vs. reconstruction.",
        "svc_1_good": "<strong>GOOD (Standard) \u2014 $450</strong><br>Visual/acoustic diagnostic. Standard patches for accessible leaks.",
        "svc_1_better": "<strong>BETTER (Premium) \u2014 $585</strong><br>FLIR thermal + pressure drop test. Epoxy coating repair.",
        "svc_1_best": "<strong>BEST (Ultra-Premium) \u2014 $720</strong><br>Full structural mapping and sector isolation. ProPress copper segment.",
        "svc_2_title": "Full House Repipe",
        "svc_2_p1": "A full repipe is a heart transplant for your home. Old galvanized pipes cause floods and water quality degradation.",
        "svc_2_p2": "We replace all water infrastructure with commercial-grade Copper and PEX. Eradicates cloudy water and chronic leaks.",
        "svc_2_good": "<strong>\u2705 GOOD (Standard) \u2014 $3,800</strong><br>PEX-B piping with brass Crimp fittings. Includes 100 PSI hydrostatic pressure test. UPC-certified reliable solution.",
        "svc_2_better": "<strong>\u2b50 BETTER (Premium) \u2014 $4,940</strong><br>PEX-A Uponor Expansion system. Superior flow rate, freeze-resistant, fewer mechanical fittings for lower long-term risk.",
        "svc_2_best": "<strong>\ud83c\udfc6 BEST (Ultra-Premium) \u2014 $6,080</strong><br>Type L Copper with ProPress technology (no solder, no flame). Maximum flow, natural antimicrobial properties and absolute commercial-grade durability for 50+ years.",
        "svc_3_title": "Water Filtration & Softening",
        "svc_3_p1": "Hard water destroys appliances and stains fixtures. We transform water quality from the entry point.",
        "svc_3_p2": "We install systems eliminating chlorine, heavy metals and calcium. Crystal-clear water and 30% longer appliance life.",
        "svc_3_good": "<strong>GOOD \u2014 $1,500</strong><br>Standard 32,000-grain salt-based softener.",
        "svc_3_better": "<strong>BETTER \u2014 $1,950</strong><br>Fleck 5600SXT Metered. Digital on-demand valve.",
        "svc_3_best": "<strong>BEST \u2014 $2,400</strong><br>Halo 5 Whole House. Salt-free, UV sterilization.",
        "svc_4_title": "Smart Valve Installation",
        "svc_4_p1": "If a pipe bursts on vacation, IoT Smart Valves auto-shutoff and alert your phone in seconds.",
        "svc_4_p2": "These systems monitor water flow 24/7 using AI to detect micro-leaks or catastrophic ruptures.",
        "svc_4_good": "<strong>GOOD \u2014 $350</strong><br>Commercial-grade 1/4-turn brass ball valve.",
        "svc_4_better": "<strong>BETTER \u2014 $455</strong><br>Moen Flo Smart Valve. Daily monitoring and smartphone shutoff.",
        "svc_4_best": "<strong>BEST \u2014 $560</strong><br>Phyn Plus. Ultrasonic monitoring, no moving parts, smart home integration.",
        "svc_5_title": "SeeSnake Camera Inspection",
        "svc_5_p1": "Blind diagnostics destroy properties. Our SeeSnake cameras trace problems without excavation.",
        "svc_5_p2": "We deploy military-grade self-leveling HD cameras underground for surgical repairs instead of destroying your yard.",
        "svc_5_good": "<strong>GOOD \u2014 $250</strong><br>Basic camera inspection up to 50ft. USB video delivery.",
        "svc_5_better": "<strong>BETTER \u2014 $325</strong><br>Deep SeeSnake with sonar tracking. Exact surface location.",
        "svc_5_best": "<strong>BEST \u2014 $400</strong><br>HD inspection and digital modeling. Full system mapping and CIPP report.",
        "svc_6_title": "Main Sewer Replacement",
        "svc_6_p1": "A collapsed main sewer is one of the most disruptive failures. We offer guaranteed replacements for decades.",
        "svc_6_p2": "Whether through traditional excavation or trenchless methods, we eliminate roots and fractured pipes.",
        "svc_6_good": "<strong>GOOD \u2014 $5,500</strong><br>Traditional excavation, SDR-35 PVC. Proven gravity flow solution.",
        "svc_6_better": "<strong>BETTER \u2014 $7,150</strong><br>ABS Schedule 40. Superior solid core, gravel bed, two-way cleanouts.",
        "svc_6_best": "<strong>BEST \u2014 $8,800</strong><br>Trenchless HDPE fused joints. Seamless, root-proof. Lifetime guarantee.",
        "svc_7_title": "Hybrid Heat Pump Water Heater",
        "svc_7_p1": "Still spending hundreds on inefficient water heating? Hybrid Heat Pump reaches up to 400% efficiency.",
        "svc_7_p2": "Besides qualifying for rebates, this system drastically cuts electric bills. Pays for itself in under 3 years.",
        "svc_7_good": "<strong>GOOD \u2014 $2,200</strong><br>Standard 50-gallon atmospheric heater. Direct replacement.",
        "svc_7_better": "<strong>BETTER \u2014 $2,860</strong><br>Rheem ProTerra Hybrid. Digital panel, rebate-eligible efficiency.",
        "svc_7_best": "<strong>BEST \u2014 $3,520</strong><br>Bradford White AeroTherm with Wi-Fi. Smart scheduling, quiet pump, leak sensors.",
        "svc_8_title": "Pressure Reducing Valve (PRV)",
        "svc_8_p1": "Operating above 80 PSI destroys hoses, bursts valves, and voids warranties. A PRV protects silently.",
        "svc_8_p2": "A PRV regulates flow to a safe 55-60 PSI, acting as a mechanical shield at your home entry point.",
        "svc_8_good": "<strong>GOOD \u2014 $480</strong><br>Standard residential-grade brass PRV.",
        "svc_8_better": "<strong>BETTER \u2014 $624</strong><br>Wilkins 600XL with integrated pressure gauge.",
        "svc_8_best": "<strong>BEST \u2014 $768</strong><br>Watts LFN45B with inline strainer and thermal expansion tank.",
        "svc_9_title": "Emergency Triage",
        "svc_9_p1": "When a pipe bursts at 3AM, every second counts. We arrive fast, stabilize the leak, mitigate damage.",
        "svc_9_p2": "Our rapid response squad stops catastrophic flow and restores vital service to functional areas.",
        "svc_9_good": "<strong>GOOD \u2014 $380</strong><br>Main shutoff and SharkBite temporary caps.",
        "svc_9_better": "<strong>BETTER \u2014 $494</strong><br>Sector isolation with permanent ProPress valves.",
        "svc_9_best": "<strong>BEST \u2014 $608</strong><br>Full isolation manifold. Permanent one-visit solution.",
        "svc_10_title": "CAD & Digital Tracing",
        "svc_10_p1": "Modern development requires documented precision. We trace underground lines and deliver as-built plans.",
        "svc_10_p2": "We use electromagnetic tracing and digital modeling to map your invisible network and prevent accidents.",
        "svc_10_good": "<strong>GOOD \u2014 $600</strong><br>Main line tracing with surface paint and professional schematic.",
        "svc_10_better": "<strong>BETTER \u2014 $780</strong><br>2D AutoCAD overlay integrated with property architectural plans.",
        "svc_10_best": "<strong>BEST \u2014 $960</strong><br>3D BIM/Revit modeling. Every node, pipe and valve geolocated.",
        "svc_11_title": "Tankless Water Heater",
        "svc_11_p1": "Imagine endless hot water on demand. Tankless systems only fire when you open the tap.",
        "svc_11_p2": "Save space, reduce carbon footprint, and ensure constant purified hot water without tank explosion risks.",
        "svc_11_good": "<strong>GOOD \u2014 $3,200</strong><br>Navien NPE-A2 non-condensing. Great for quick replacements.",
        "svc_11_better": "<strong>BETTER \u2014 $4,160</strong><br>Rinnai RU Sensei Condensing. 0.95 UEF, smart modulating burners.",
        "svc_11_best": "<strong>BEST \u2014 $5,120</strong><br>Navien NPE-240A2 with ComfortFlow recirculation. Instant hot water, zero wait.",
        "svc_12_title": "Backflow Preventer Assembly",
        "svc_12_p1": "If you manage a business or irrigation, a Backflow preventer is federally mandated. Avoid crippling fines.",
        "svc_12_p2": "We are certified to install, calibrate and register these assemblies that protect drinking water.",
        "svc_12_good": "<strong>GOOD \u2014 $850</strong><br>Standard Wilkins 375 RPZ. Immediate city compliance.",
        "svc_12_better": "<strong>BETTER \u2014 $1,105</strong><br>High-flow Watts Series 009. Lead-free bronze for severe commercial use.",
        "svc_12_best": "<strong>BEST \u2014 $1,360</strong><br>Febco 860 RPZ with IoT sensor. Real-time differential monitoring.",
        "svc_13_title": "Luxury Fixture Swap",
        "svc_13_p1": "A luxury bathroom requires matching hardware with precise calibration, not just aesthetics.",
        "svc_13_p2": "We perform perfectly leveled, hermetically sealed installations tested at maximum pressure.",
        "svc_13_good": "<strong>GOOD \u2014 $250</strong><br>Standard Delta/Moen installation with stainless braided supply lines.",
        "svc_13_better": "<strong>BETTER \u2014 $325</strong><br>Moen Align/Grohe spot-resist. Commercial anti-mold silicone sealing.",
        "svc_13_best": "<strong>BEST \u2014 $400</strong><br>Kohler Artifacts Smart Touch integration. Temperature calibration and sensor wiring.",
        "svc_14_title": "Water Chemistry Panel",
        "svc_14_p1": "Your tap water may look clear but contain heavy metals or chloramine. Test before investing in filters.",
        "svc_14_p2": "We provide precise scientific analysis on-site and via certified labs for a custom water treatment plan.",
        "svc_14_good": "<strong>GOOD \u2014 $150</strong><br>Rapid on-site TDS, hardness and free chlorine test.",
        "svc_14_better": "<strong>BETTER \u2014 $195</strong><br>16-point certified lab panel (heavy metals, lead, nitrates). Report in 5 days.",
        "svc_14_best": "<strong>BEST \u2014 $240</strong><br>On-site test plus permanent inline digital TDS meter for real-time monitoring.",
        "svc_15_title": "Commercial Hydro-Jetting",
        "svc_15_p1": "When scale or thick roots calcify sewer pipes, electric snakes fail. Time for industrial force.",
        "svc_15_p2": "Our Hydro-Jetting blasts at 4000+ PSI with rotating laser nozzles restoring the original pipe diameter.",
        "svc_15_good": "<strong>GOOD \u2014 $750</strong><br>Heavy augering with 7/8 sectional electric cable.",
        "svc_15_better": "<strong>BETTER \u2014 $975</strong><br>4000 PSI Hydro-Jetting. Eliminates scale and emulsified grease.",
        "svc_15_best": "<strong>BEST \u2014 $1,200</strong><br>Heavy jetting + HD camera inspection + 12-month RootX inhibitor application.",


        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",
        "nav_nexus": "Nexus Home",
        "nav_orion": "Ecosistema ng Orion",
        "nav_services": "Pro Engineering",
        "nav_multimedia": "Podcasts",
        "nav_about": "Misyon",
        "nav_terminal": "Terminal",
        "hero_badge": "PROFESSIONAL ENGINEERING & CSLB C-36 CERTIFIED",
        "hero_title": "MORALES PLUMBING",
        "hero_desc": "Pinagsasama ang higit sa 21 taon ng kadalubhasaan sa engineering sa AI estimation at sustainable hydraulic design.",
        "stat_ready": "Lisensyado",
        "stat_eco": "ISO 14001",
        "stat_ai": "AI Aktibo",
        "hero_explore": "Tingnan ang mga Solusyon",
        "hero_joe": "Joe Assistant",
        "projects_title": "Kahusayan sa Engineering",
        "projects_desc": "Ang aming mga real-world na teknolohikal na aplikasyon at mga sistema ng pamamahala ng proyekto.",
        "card_ep_title": "ORION ESTIMATOR PRO",
        "card_ep_desc": "Automated Computer Vision-based na estimation na may +8000 item catalog. Margin optimization >70%.",
        "card_orion_title": "ORION STRATEGIC SYSTEMS",
        "card_orion_desc": "Mga digital workflow solution para sa mga high-volume na proyekto. Smart contracts at real-time tracking.",
        "btn_pricing": "Tingnan ang Opisyal na Price Book",
        "btn_buy": "Bumili ng Lisensya",
        "btn_proposal": "Strategic Framework",
        "btn_academy": "Orion Academy",
        "services_title": "Core Engineering Services",
        "service_1": "Thermography Diagnostics",
        "service_1_desc": "Non-invasive na leak detection gamit ang high-resolution thermal imaging at acoustic sensors.",
        "service_2": "Eco-Retrofitting",
        "service_2_desc": "Modernisasyon ng sistema gamit ang mga eco-friendly na materyales at high-efficiency water savings (ISO 14001).",
        "service_3": "Hydraulic Infrastructure Design",
        "service_3_desc": "Ekspertong pagpaplano ng mga high-precision hydraulic network para sa residential at commercial na imprastraktura.",
        "manifesto_title": "Morales Plumbing Manifesto",
        "mission_title": "MISYON",
        "mission_desc": "Upang pamunuan ang industriya sa pamamagitan ng pagsasama ng higit sa 21 taon ng karanasan sa engineering sa AI, na nag-aalok ng mga high-precision na solusyon sa ilalim ng mga pamantayan ng CSLB.",
        "vision_title": "VISYON",
        "vision_desc": "Upang maging pandaigdigang pamantayan para sa teknikal na plumbing at sustainable engineering, na tinukoy ng patuloy na inobasyon at integridad.",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "Principal Engineer & Tagapagtatag",
        "cv_link": "> I-ACCESS ANG PROFESSIONAL RESUME",
        "ceo_link": "> PAGPAPAKILALA NG CEO",
        "network_link": "> NETWORK: ORION TECH",
        "joe_status": "JOE: AI ENGINEERING ASSISTANT",
        "joe_welcome": "Maligayang pagdating. Ako si Joe. Paano kita matutulungan sa mga diagnostic ng proyekto o mga serbisyo sa engineering ngayon?",
        "joe_intro": "Kumusta! Ako si Joe, ang AI assistant para sa Morales Plumbing. Paano kita matutulungan ngayon?",
        "joe_placeholder": "Magtanong tungkol sa plumbing, mga serbisyo, o mga proyekto...",
        "joe_send": "IPADALA",
        "joe_trigger_title": "Makausap si Joe · AI Assistant",
        "nav_pricebook": "Price Book",
        "nav_legal": "Legal",
        "back_home": "BALIK SA HOME",
        "btn_read": "Magbasa Pa",
        "pricebook_tag": "WEB APP · AKTIBO",
        "pricebook_title": "ORION PRICE BOOK v6.0 PRO",
        "nav_catalog": "Catalog",
        "nav_methodology": "Metodolohiya",
        "nav_tiers": "Tiers",
        "nav_upsells": "Upsells",
        "nav_promotions": "Promosyon",
        "nav_terms": "Mga Tuntunin",
        "nav_warranties": "Mga Warranty",
        "pb_hero_badge": "Edisyon ng Pamantayan sa Industriya",
        "pb_hero_subtitle": "Mga Propesyonal na Serbisyo sa Plumbing | Bay Area, CA",
        "pb_hero_location": "Bay Area, California",
        "pb_hero_updated": "Na-update: Disyembre 2024",
        "pb_hero_details": "15 Detalyadong Propesyonal na Serbisyo",
        "pb_hero_rates": "Lead: $185/hr | Helper: $95/hr | Markup: 30%",
        "pb_hero_compliance": "Engineering Standard: ORION Tech | Garantisadong Kalidad",
        "pb_hero_powered": "Binuo ng NeKon AI aGent Consulting | Sistemang ORION",
        "pb_method_title": "Metodolohiya ng Pagkalkula",
        "pb_tiers_title": "Sistemang Good / Better / Best",
        "pb_upsells_title": "Sistema ng mga Upsell",
        "pb_promotions_title": "Mga Aktibong Promosyon",
        "pb_terms_title": "Mga Tuntunin at Kondisyon",
        "pb_warranties_title": "Mga Warranty at Suporta",
        "pb_catalog_title": "Catalog ng Serbisyo",
        "pricebook_desc": "Edisyon ng Pamantayan sa Industriya na may +100 Detalyadong Propesyonal na Serbisyo, 3 Pricing Tiers, at Integrated Upsells System.",
        "pricebook_feat1": "+100 na Serbisyo",
        "pricebook_feat2": "Good/Better/Best Tiers",
        "pricebook_feat3": "Mga Upsell at Promosyon",
        "card_orion_feat1": "Integrasyon ng Gogo Rooter",
        "card_orion_feat2": "Cloud Syncing",
        "card_orion_feat3": "Optimisadong ROI",
        "btn_catalog": "Tingnan ang Catalog",
        "btn_demo": "TINGNAN ANG DEMO",
        "system_core_tag": "CORE NG SISTEMA · KASALUKUYANG BINUBUO",
        "coming_soon": "MALAPIT NA",
        "coming_soon_badge": "MALAPIT NA",
        "footer_e2ee": "Secure at Privacy-First",
        "footer_cyber": "AI-Powered Platform",
        "footer_rights_long": "© 2026 Morales Plumbing. Lahat ng karapatan ay rezerbado. Ang nilalaman, mga video, mga nabuong imahe, at teknolohiyang ORION / Joe AI ay eksklusibong intelektwal na ari-arian ng Morales Plumbing at NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · Lahat ng Karapatan ay Rezerbado · Rehistradong Trademark",
        "nav_framework": "Strategic Framework",
        "footer_rights": "© 2026 Morales Plumbing. Lahat ng karapatan ay rezerbado.",
        "slogan_text": "Pagtukoy sa Kinabukasan ng Daloy. Inobasyon para sa Buhay.",
        "contact_lic": "Lisensya",
        "pb_method_p1": "Ang metodolohiya ng pagkalkula ng ORION ay batay sa isang precision engineering na diskarte sa hydraulic costing. Gumagamit kami ng mga industrial-grade na algorithm na isinasaalang-alang ang tibay ng materyal, tindi ng paggawa (ikinategorya sa mga tungkulin ng Lead at Helper), at teknikal na pagiging kumplikado. Tinatanggal nito ang pagkakaiba-iba sa estimation, na nagbibigay ng fixed-rate na istraktura na nakahanay sa mga pamantayan ng CSLB at pagbabago sa merkado ng konstruksyon sa California.",
        "pb_method_p2": "Sa pamamagitan ng pagsasama ng real-time na data ng supply chain at high-efficiency na proprietary workflow protocols, ginagarantiyahan ng aming metodolohiya ang isang optimisadong 30% markup habang pinapanatili ang mga sustainable margin para sa high-fidelity na teknikal na pagpapatupad. Ang siyentipikong diskarte sa pagpepresyo na ito ay tinitiyak na ang bawat proyekto ay sinusuportahan ng na-verify na hydraulic data at transparent na resource allocation.",
        "pb_tiers_p1": "Ang sistemang Good/Better/Best ay nagbibigay sa aming mga kliyente ng tatlong magkakaibang antas ng mga engineering solution, na iniayon para sa iba't ibang layunin ng lifecycle ng proyekto. Ang 'Good' tier ay nakatuon sa mga pagkukumpuni na sumusunod sa UPC at mahusay na restorasyon. Ang 'Better' tier ay nagpapakilala ng pinahusay na tibay ng bahagi at mga mid-range performance upgrade. Ang 'Best' tier ay kumakatawan sa pamantayan ng ORION Tech: premium na industrial-grade na materyales, AI-integrated monitoring, at pinalawig na life-cycle warranties.",
        "pb_tiers_p2": "Ang bayar bawat antas ay idinisenyo upang mag-alok ng maximum na halaga sa loob ng saklaw nito, na nagpapahintulot sa mga residential at commercial stakeholders na gumawa ng matalinong mga desisyon batay sa kanilang pangmatagalang imprastraktura na diskarte, hindi lamang sa agarang pangangailangan.",
        "pb_upsells_p1": "Ang aming upsell system ay idinisenyo upang magbigay ng proactive na proteksyon sa imprastraktura. Higit pa sa pangunahing kahilingan, sinusuri namin ang hydraulic na kapaligiran upang magmungkahi ng mga kritikal na upgrade tulad ng mga smart shut-off valves, water filtration systems, at high-efficiency circulation pumps. Ang mga karagdagang ito ay hindi lamang mga opsyon, kundi mga strategic na pamumuhunan sa kaligtasan ng ari-arian.",
        "pb_upsells_p2": "Ang bawat rekomendasyon ay sinusuportahan ng diagnostic data, na tinitiyak na ang bawat integrasyon ay nagsisilbi sa isang functional na layunin sa pag-iwas sa mga pagkabigo sa hinaharap at pagbabawas ng pangmatagalang gastos sa operasyon.",
        "pb_promo_p1": "Ang Morales Plumbing Promotional Framework ay nagbibigay-ganimpala sa proactive na maintenance at high-volume na mga commitment sa proyekto. Nag-aalok kami ng mga pana-panahong insentibo para sa repiping ng buong bahay, seasonal na water heater optimization, at unang beses na mga integrasyon ng ORION Tech. Ang mga promosyong ito ay idinisenyo upang ibaba ang hadlang sa pagpasok para sa mga high-precision na solusyon sa engineering.",
        "pb_promo_p2": "Lahat ng mga aktibong promosyon ay sumasailalim sa pagsusuri sa engineering at hindi maaaring pagsamahin sa iba pang mga strategic na diskwento, na tinitiyak na ang kalidad ng proyekto ay nananatiling ganap na prayoridad.",
        "pb_terms_p1": "Lahat ng serbisyong ibinibigay ng Morales Plumbing ay pinamamahalaan ng California Contractors State License Board (CSLB) at ng Uniform Plumbing Code (UPC). Kasama sa bawat kontrata ang isang detalyadong saklaw ng trabaho, fixed-rate na pagpepresyo (walang nakatagong bayad), at isang malinaw na pahayag ng teknikal na metodolohiya. Ang mga bayad ay naka-istraktura upang umayon sa mga milestone ng proyekto.",
        "pb_terms_p2": "Ang pananagutan at paglutas ng hindi pagkakaunawaan ay sumusunod sa mga industrial na pamantayan ng California, na tinitiyak ang isang propesyonal at transparent na partnership sa pagitan ng engineering team at ng kliyente.",
        "pb_warranty_p1": "Nag-aalok ang Morales Plumbing ay karaniwang 1-taong warranty sa lahat ng paggawa at mga teknikal na integrasyon, na may mga pinalawig na warranty na magagamit para sa mga 'Best' tier system at ORION Tech installations. Bilang karagdagan, nagbibigay kami ng mga flexible credit plan at mga lifetime labor warranty system para sa mga kumpletong repipe (tubig, drainage, o gas). Gumagamit ang aming support team ng IoT monitoring data upang magbigay ng mabilis na diagnostic na tugon, pinapaliit ang downtime at tinitiyak ang integridad ng system.",
        "pb_warranty_p2": "Nalalapat ang mga warranty ng manufacturer sa lahat ng ginamit na industrial na materyales, kung saan ang Morales Plumbing ang nagsisilbing pangunahing teknikal na contact point para sa lahat ng mga warranty-related inquiries at system audits.",
        "pb_warranty_note": "*IoT Monitoring:* Tumutukoy sa paggamit ng smart technology (mga Wi-Fi water shutoff valve, leak sensor, smart heater) na nagpapadala ng data at mga alerto sa cloud para sa mabilis na preventive diagnostics.",
        "pb_prose_p1": "Ang ORION Price Book v6.0 PRO ay ang operational core ng Morales Plumbing, na idinisenyo upang magbigay ng ganap na transparency sa cost engineering. Ang catalog na ito, na na-update noong Disyembre 2024 para sa California Bay Area, ay binuo sa ilalim ng mahigpit na mga alituntunin ng California Contractors State License Board (CSLB) at ng Uniform Plumbing Code (UPC), na tinitiyak na ang bawat teknikal na interbensyon ay sinusuportahan ng industrial na kaligtasan at mga pamantayan sa pagpapanatili ng kapaligiran.",
        "pb_prose_p2": "Ang istraktura ng dokumentong ito ay inuuna ang kalinawan para sa kliyente, inaalis ang mga kumplikadong on-site na pagkalkula at tinitiyak na ang bawat quote ay sumasalamin sa paggamit ng industrial-grade na materyales at mga precision methodology na na-audit ng mga high-efficiency protocol. Sa Morales Plumbing, hindi lang kami nag-aayos ng mga tubo; nagdidisenyo kami ng mga sustainable hydraulic system para sa susunod na henerasyon.",
        "pb_prose_p3": "Ang aming diskarte ay nagsasama ng AI-driven na estimation sa higit sa 21 taon ng karanasan sa larangan, na nagpapahintulot para sa 99% accuracy rate sa resource allocation at timeline projection. Sa pagpili sa ORION, pumipili ka ng isang strategic infrastructure partner na nakatuon sa pinakamataas na antas ng teknikal na kahusayan at integridad.",
        "aq_title": "ORION AQUA GUARD v1.0",
        "aq_desc": "Advanced na monitoring at pamamahala ng mga high-precision water treatment system. Real-time na pH, hardness, at filtration analytics.",
        "aq_feat1": "IoT Monitoring",
        "aq_feat2": "Awtomatikong Backwash",
        "aq_feat3": "Mga Purity Alert",
        "aq_prose_p1": "Ang ORION AQUA GUARD v1.0 ay kumakatawan sa rurok ng residential at commercial water purification management. Ang sistemang ito ay gumagamit ng network ng mga IoT sensor upang patuloy na subaybayan ang kalidad ng papasok na tubig, sinusukat ang mga variable tulad ng hardness (grains per gallon), mga antas ng pH, at mga konsentrasyon ng contaminant. Ang data ay pinoproseso sa pamamagitan ng aming proprietary na ORION engine upang i-optimize ang kahusayan ng filtration at pagkonsumo ng asin.",
        "aq_prose_p2": "Higit pa sa simpleng paglambot, pinamamahalaan ng Aqua Guard ang multi-stage reverse osmosis units at UV sterilization systems. Nakakatanggap ang mga user ng mga real-time alert sa pamamagitan ng ORION ecosystem tungkol sa mga life cycle ng filter at purity drops, na tinitiyak na ang tubig na ginagamit para sa pagkonsumo at imprastraktura ay nananatili sa mga laboratory-grade na pamantayan.",
        "aq_prose_p3": "Sa pamamagitan ng pagsasama ng Aqua Guard sa iyong hydraulic network, pinapahaba mo ang lifespan ng lahat ng downstream appliances at fixtures. Ang mga predictive maintenance capability ng system ay tinitiyak na ang interbensyon ay kinakailangan lamang kapag statistically necessary, pinapataas ang kalidad ng tubig at ang ROI ng system.",
        "hn_title": "ORION HYDRAULIC NEXUS",
        "hn_desc": "CAD-integrated na hydraulic design at pressure simulation para sa mga kumplikadong imprastraktura. Optimisadong flow-volume distribution.",
        "hn_feat1": "CAD Integration",
        "hn_feat2": "Pressure Mapping",
        "hn_feat3": "Leak Simulation",
        "hn_prose_p1": "Ang ORION HYDRAULIC NEXUS ay ang aming professional-grade design suite para sa pagpaplano at pagtulad sa mga high-pressure hydraulic infrastructure. Gamit ang CAD-integrated na mga blueprint, lumilikha kami ng digital twin ng iyong plumbing system upang suriin ang daloy ng dynamics, pressure drops sa mahabang takbo, at thermal expansion variables. Kritikal ito para sa mga high-end residential at multi-story commercial na proyekto kung saan nabibigo ang karaniwang estimation.",
        "hn_prose_p2": "Ang system ay nagpapahintulot sa aming mga engineer na i-stress-test ang virtual network sa ilalim ng iba't ibang peak-demand na mga sitwasyon, tinutukoy ang mga potensyal na mahinang punto bago pa man mai-install ang isang tubo. Ang metodolohiyang ito ay tinitiyak na ang bawat fixture ay tumatanggap ng eksaktong UPC-required na pressure, inaalis ang mga 'dead zones' at ina-optimize ang bilis ng paghahatid ng tubig.",
        "hn_prose_p3": "Ang Hydraulic Nexus ay nagsasama rin sa aming mga thermography diagnostic, na nagpapahintulot sa amin na i-overlay ang real-time thermal data sa mga orihinal na blueprint para sa pinpoint leak detection at infrastructure auditing. Ito ang depinitibong tool para sa precision plumbing engineering.",
        "wh_title": "ORION THERMO CORE v2.0",
        "wh_desc": "Matalinong diagnostic at optimization system para sa mga high-efficiency tankless water heaters. Predictive scaling alerts at combustion tuning.",
        "wh_feat1": "Combustion Tuning",
        "wh_feat2": "Scaling AI",
        "wh_feat3": "Energy Optimization",
        "wh_prose_p1": "Ang ORION THERMO CORE v2.0 ay ang dedikadong management platform para sa mga high-efficiency tankless water heating systems. Hindi tulad ng mga tradisyunal na heater, ang mga modernong tankless unit ay nangangailangan ng tumpak na combustion tuning at regular na heat-exchanger descaling upang mapanatili ang kanilang 90%+ AFUE ratings. Gumagamit ang Thermo Core ng mga acoustic at flow sensor upang makita ang pinakamaagang palatandaan ng accumulation ng mineral.",
        "wh_prose_p2": "Ang platform ay nagbibigay ng awtomatikong scheduling para sa mga flush cycle batay sa aktwal na pattern ng paggamit, sa halip na mga arbitraryong timeline. Sinusubaybayan din nito ang mga ignition cycle at gas-to-air ratios upang matiyak na ang system ay gumagana sa peak thermal efficiency, direktang binabawasan ang buwanang gastos sa utility at carbon footprints.",
        "wh_prose_p3": "Sa Thermo Core, ang Morales Plumbing ay nagbibigay ng 'set-and-forget' na karanasan para sa premium na paghahatid ng mainit na tubig. Ang integrasyon ng system sa ORION ecosystem ay nagpapahintulot para sa mga remote diagnostic, na nangangahulugang madalas na tinutukoy at nilulutas ng aming mga engineer ang mga performance issue bago pa man mapansin ng kliyente ang pagbaba ng temperatura.",
        "pb_hero_title": "ORION Price Book v6.0 PRO",
        "pb_search_placeholder": "Maghanap ng serbisyo (hal. Water Heater, Drain, AI Mapping...)",
        "cat_all": "Lahat",
        "cat_diagnostic": "Diagnostic",
        "cat_engineering": "Engineering",
        "cat_eco": "Eco-Sustainable",
        "cat_safety": "Kaligtasan",
        "price_standard": "Standard",
        "price_member": "Miyembro",
        "lbl_client_view": "Pananaw ng Kliyente:",
        "lbl_tech_view": "Tech Spec & Materials (3 Antas):",
        "doc_title": "STRATEGIC PROPOSAL",
        "doc_subtitle": "Mastering Smart Plumbing & Environmental Engineering",
        "sig_name": "Alex G. Espinosa",
        "profile_header_role": "Senior AI Solutions Architect | Environmental Engineer | Project Manager",
        "app_tratamiento_title": "Water Treatment Systems",
        "app_tratamiento_detail": "Ang Water Treatment application ay namamahala ng advanced filtration at purification cycles. Nagbibigay ng real-time data sa hardness ng tubig, mga antas ng pH, at kahusayan sa pag-alis ng contaminant, na nagpapahintulot para sa predictive maintenance ng mga industrial RO system.",
        "app_redes_title": "Hydraulic Network Design",
        "app_redes_detail": "Pinapayagan ng aming Hydraulic Network Design app ang simulation ng mga kumplikadong fluid dynamics sa residential at commercial na kapaligiran. Gumagamit ng ISO-standard na mga algorithm upang i-optimize ang pipe sizing at pressure distribution, binabawasan ang pag-aaksaya ng materyal at tinitiyak ang pagsunod sa UPC/CPC.",
        "app_heaters_title": "Tankless Water Heaters",
        "app_heaters_detail": "Ino-optimize ng application na ito ang pag-install at pagganap ng mga tankless water heating system. Kinakalkula ang peak flow demands at mga kinakailangan sa gas pressure upang matiyak ang walang harang na paghahatid ng mainit na tubig, kabilang ang isang diagnostic module para sa pag-troubleshoot.",
        "legal_title": "Legal Framework & Cybersecurity",
        "sec1_title": "Environmental Engineering & Sustainability",
        "sec1_legal_p1": "Lahat ng nilalaman sa platform na ito, kabilang ang ngunit hindi limitado sa mga corporate video, nabuong 3D images, source code, at ang ORION Price Book v6.0 PRO database structure, ay mahigpit na pinoprotektahan ng intelektwal na ari-arian at mga batas sa copyright ng United States at ng Estado ng California.",
        "sec1_legal_li1": "Ang Morales Plumbing ay nagpapanatili ng eksklusibong karapatan sa trademark nito, mga metodolohiya sa engineering, customer base, at portfolio ng mga teknikal na serbisyo.",
        "sec1_legal_li2": "Ang NeKon AI aGent Consulting ay nagpapanatili ng co-authorship at mga karapatan sa AI infrastructure ('Joe AI'), neural network models, computer vision diagnostic systems, at ang pinagbabatayan na teknolohiya ng automation ng ORION system.",
        "sec1_legal_p2": "Ang hindi awtorisadong pagpaparami, pagkopya, pag-scrape, pamamahagi, o komersyal na paggamit ng anumang multimedia material na naka-host sa digital ecosystem na ito ay mahigpit na ipinagbabawal.",
        "sec2_legal_title": "2. Cybersecurity at Data Privacy",
        "sec2_legal_p1": "Ang pagtiyak sa seguridad ng aming mga commercial (B2B) at residential (B2C) na kliyente ay isang ganap na prayoridad. Ang lahat ng aming mga system ay gumagana sa ilalim ng mahigpit na industrial-grade security protocol:",
        "sec2_legal_li1": "Thermal at Infrared Detection: Ang pagkolekta ng structural data sa pamamagitan ng high-res thermal cameras at precision sensors ay isinasagawa lamang para sa mga layunin ng non-invasive physical diagnostic.",
        "sec2_legal_li2": "Smart Contracts at Pagbabayad: Lahat ng nabuong billing at kontrata ay protektado ng end-to-end encryption (E2EE).",
        "sec2_legal_li3": "Interaksyon kay Joe AI: Ang mga query kay Joe ay sinusuri nang hindi nagpapakilala upang mapabuti ang predictive engine, habang iginagalang ang privacy ng user.",
        "sec3_legal_title": "3. Terms of Reference (SLA)",
        "sec3_legal_p1": "Ang pagkakaloob ng mga pisikal na serbisyo at pagpapatupad ng engineering ay pinamamahalaan ng ORION Strategic Framework at ng Price Book. Sa pakikipag-ugnayan sa platform:",
        "sec3_legal_li1": "Tinatanggap ng mga kliyente ang mga antas at tuntunin ng serbisyo ng Good/Better/Best na nakahanay sa mga pamantayan ng Lungsod ng San Jose.",
        "sec3_legal_li2": "Ang mga warranty sa paggawa at mga bahagi ay mahigpit na sumusunod sa CSLB Class C-36 License at mga UPC/CPC code.",
        "sec3_legal_li3": "Digital Diagnostic Condition: Ang mga AI-generated na ulat ay preliminary lamang. Kinakailangan ang on-site validation ng isang kwalipikadong technician para sa huling awtorisasyon.",
        "contact_loc": "Lokasyon",
        "contact_email": "Email",
        "contact_phone": "Telepono",
        "aca_back": "Bumalik sa mga Module",
        "aca_mod_badge": "MODULE 01 | LINGGO 1",
        "aca_hero_title": "Alamin ang ORION Tech",
        "aca_hero_desc": "Misyon, bisyon, mga halaga, istraktura ng organisasyon at kultura ng kumpanya. Ang module na ito ay magbibigay sa iyo ng pundasyon upang maunawaan kung sino kami at kung saan kami pupunta.",
        "aca_video_title": "Video: Istraktura ng Organisasyon",
        "aca_mission_title": "Ang Aming Misyon",
        "aca_mission_desc": "I-democratize ang matalinong automation para sa mga maliliit at katamtamang negosyo, na nagpapahintulot sa kanila na makipagkumpitensya sa malalaking kumpanya gamit ang makabagong teknolohiya.",
        "aca_vision_title": "Ang Aming Bisyon",
        "aca_vision_desc": "Maging nangungunang AI automation platform para sa mga negosyong nagsasalita ng Espanyol sa buong mundo sa taong 2028.",
        "aca_what_title": "Ano ang Ginagawa Namin",
        "aca_what_desc": "Gumagawa kami ng mga AI assistant na sumasagot sa mga mensahe 24/7 sa WhatsApp, Instagram, Facebook, Telegram at iba pa. Ina-automate namin ang mga reservation, appointment, benta at customer service.",
        "aca_org_title": "Istraktura ng Organisasyon",
        "aca_values_title": "Ang Aming mga Halaga",
        "aca_val1_title": "Inobasyon",
        "aca_val1_desc": "Naghahanap kami ng mga bagong paraan upang malutas ang mga problema",
        "aca_val2_title": "Tiwala",
        "aca_val2_desc": "Ginagawa namin ang sinasabi namin",
        "aca_val3_title": "Katatagan",
        "aca_val3_desc": "Hindi kami sumusuko sa mga pagtanggi",
        "aca_val4_title": "Epekto",
        "aca_val4_desc": "Sinusukat namin ang mga tunay na resulta",
        "aca_val5_title": "Kahusayan",
        "aca_val5_desc": "Kalidad kaysa sa dami",
        "aca_global_title": "Pandaigdigang Presensya",
        "aca_usa_title": "🇺🇸 USA (Headquarters)",
        "aca_usa_li1": "San José, California",
        "aca_usa_li2": "CEO + Executive leadership",
        "aca_usa_li3": "Pangunahing merkado",
        "aca_col_title": "🇨🇴 Colombia (LATAM Hub)",
        "aca_col_li1": "Medellín",
        "aca_col_li2": "Operations Director",
        "aca_col_li3": "SDRs at team ng mga Developer",
        "aca_mex_title": "🇲🇽 México",
        "aca_mex_li1": "Mexico City",
        "aca_mex_li2": "Kasalukuyang binubuo - 2025",
        "aca_nav_all": "← Lahat ng Module",
        "aca_nav_next": "Module 2: Produkto →",
        "service_copper_title": "Copper Plumbing at Renovations",
        "service_copper_desc": "High-precision na copper installations para sa mga renovation at restoration.",
        "service_copper_detail": "NILALAMAN: Buong copper piping systems (L, M, K types) para sa residential at commercial infrastructure. LAYUNIN: Garantisadong structural integrity at flow efficiency. PAGGAMIT: Renovations, expansions, new construction, at repairs. POTENSYAL: Life-cycle na 50+ taon na may zero microplastic leaching. ROI: Pinapataas ang halaga ng ari-arian ng 15% kumpara sa PEX; 30% mas mababang gastos sa maintenance. KUMPETISYON: Specialized brazing at environmental protocols. PLUS: Integrated environmental engineering na may Lean Construction protocols. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "service_expansion_title": "System Expansions",
        "service_expansion_desc": "Estratehikong hydraulic expansion para sa lumalagong imprastraktura at multi-family units.",
        "service_expansion_detail": "NILALAMAN: Modular hydraulic expansion blocks. LAYUNIN: Seamless na integration ng mga bagong fixture nang walang pressure loss. PAGGAMIT: Commercial additions at residential expansions. POTENSYAL: Infinite scalability. ROI: Scalable infrastructure. PLUS: Lean process integration. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "service_construction_title": "New Construction Engineering",
        "service_construction_desc": "End-to-end hydraulic engineering para sa mga bagong residential at commercial na gusali.",
        "service_construction_detail": "NILALAMAN: CAD Blueprints, rough-in, at finish plumbing. LAYUNIN: Build-to-code excellence (UPC/CPC). ROI: 20% mas mababang insurance premiums. PLUS: Int'l Environmental Protocols. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "service_repair_title": "Smart Repairs",
        "service_repair_desc": "Emergency at scheduled technical repairs gamit ang non-invasive diagnostic tools.",
        "service_repair_detail": "NILALAMAN: Precision leak repair at component replacement. LAYUNIN: Infrastructure recovery. PAGGAMIT: Emergency at scheduled maintenance. POTENSYAL: Early detection of failures. ROI: Pinipigilan ang structural damage at water waste. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "service_septic_title": "Septic Engineering",
        "service_septic_desc": "Advanced environmental septic systems para sa off-grid at rural infrastructure.",
        "service_septic_detail": "NILALAMAN: Bio-digesters at leach fields. LAYUNIN: Sustainable waste management. ROI: Tinatanggal ang utility fees. PLUS: Lean Process + CA Water Board compliance. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "service_water_title": "Water Harvesting Systems",
        "service_water_desc": "Estratehikong rainwater capture at greywater reuse engineering.",
        "service_water_detail": "NILALAMAN: Multi-stage filtration at UV sterilization. LAYUNIN: Self-sufficiency. ROI: 60% reduction sa water utility costs. PLUS: Int'l Environmental Protocols. COPYRIGHT: © 2026 Morales Plumbing. Lahat ng Karapatan ay Rezervado.",
        "faq_title": "Q&A | Technical Hub",
        "faq_cat_plumbing": "Mga Sistema ng Plumbing",
        "faq_cat_eco": "Eco-Plumbing Mix",
        "faq_cat_env": "Environmental Regulations",
        "faq_q1": "Bakit gagamit ng copper sa halip na PEX para sa bagong construction?",
        "faq_a1": "Ang copper ay nagbibigay ng higit na tibay, fire resistance, at pumipigil sa paglaki ng bakterya. Sa ilalim ng California UPC, nananatili itong gold standard para sa high-end value. Sa kabilang banda, ang PEX ay nag-aalok ng pambihirang flexibility, mas kaunting koneksyon (nagpapababa ng leak points), mas mabilis na pag-install, at mas mababang paunang gastos. <span class=\"comic-choice\">Ang pagpili ay nasa iyo</span>: piliin ang premium na katibayan at klasikong halaga (Copper), o modernong matipid na halaga at elastic resilience (PEX).",
        "faq_q2": "Ano ang mga septic regulation ng California para sa 2026?",
        "faq_a2": "Ang mga regulasyon ay nakatuon sa pagbawas ng nitrogen, proteksyon ng tubig sa ilalim ng lupa, at kahusayan sa muling paggamit ng tubig. Tinitiyak ng Morales Plumbing ang 100% compliance sa pamamagitan ng advanced environmental engineering. Bukod dito, nagdidisenyo kami ng mga septic setup na sumusunod sa pamantayan upang mabawasan ang paunang gastos gamit ang tradisyunal na permit paths. <span class=\"comic-choice\">Ang desisyon ay nasa iyo</span>: mag-invest sa advanced eco systems na epektibo lampas sa 2030 standards, o pumili ng standard compliance na nakatuon sa agarang tipid.",
        "faq_q3": "Paano binabawasan ng Lean Process ang mga gastos sa plumbing?",
        "faq_a3": "Sa pamamagitan ng pag-aalis ng basura at paggamit ng sustainable materials, binabawasan namin ang mga gastos ng 25% at timeline ng 30%. Tinitiyak ng aming mga protocol ang mas mababang carbon footprint at mas mataas na ROI. Bilang alternatibo, nag-aalok kami ng klasikong paraan ng pagtatayo na nakatuon sa maximum na pasadyang mga detalye at absolute manual structural redundancy nang walang lean schedule limit. <span class=\"comic-choice\">Ang pagpili ay nasa iyo</span>: piliin ang mabilis na Lean Eco-process para sa maximum efficiency, o ang aming klasikong manual custom build para sa tradisyunal na detalye.",
        "faq_q4": "Paano ko mai-a-upgrade ang aking lumang ari-arian sa kasalukuyang California Environmental Standards?",
        "faq_a4": "Ang aming koponan ay nagsasagawa ng isang buong teknikal na audit upang isama ang mga sistema ng muling paggamit ng tubig at i-modernize ang hydraulic infrastructure, na tinitiyak ang pagsunod sa mga pinakabayong regulasyon ng estado.",
        "faq_q5": "Ano ang mga benepisyo ng pag-integrate ng AI diagnostics sa tradisyunal na plumbing?",
        "faq_a5": "Pinapayagan ng AI ang predictive detection ng mga pagkakamali at tumpak na pag-optimize ng daloy, na binabawasan ang pagkonsumo ng mapagkukunan at pinipigilan ang mga gastos na pagkukumpuni bago pa man ito mangyari.",
        "cat_all": "Lahat",
        "cat_diagnostic": "Diagnostic",
        "cat_engineering": "Engineering",
        "cat_eco": "Eco-Sustainable",
        "cat_safety": "Kaligtasan",
        "contact_loc": "Lokasyon",
        "contact_email": "Email",
        "contact_phone": "Telepono",
        "joe_trigger_title": "Makausap si Joe · AI Assistant",
        "footer_rights_long": "© 2026 Morales Plumbing. Lahat ng karapatan ay rezerbado. Ang nilalaman, mga video, mga nabuong imahe, at teknolohiyang ORION / Joe AI ay eksklusibong intelektwal na ari-arian ng Morales Plumbing at NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · Lahat ng Karapatan ay Rezerbado · Rehistradong Trademark",
        "sec1_title": "Environmental Engineering at Sustainability",
        "sec1_desc": "Lumalayo kami sa tradisyunal na plumbing sa pamamagitan ng pagsasama ng mga prinsipyo ng environmental engineering sa bawat hydraulic design. Inuuna namin ang kahusayan ng tubig, ligtas na paghawak ng mga mapanganib na materyales (CSLB C-36 Compliance), at mga zero ecological impact na sistema sa buong Bay Area.",
        "sec2_title": "AI Integration at Computer Vision",
        "sec2_desc": "Gumagamit ang sistemang ORION ng mga proprietary neural network para sa non-invasive na pagtuklas ng tumagas at infrared diagnostics. Pinapayagan ng computer vision na i-map namin ang imprastraktura nang may katumpakan sa milimetro, na ino-optimize ang mga gastos at timeline ng pagpapatupad.",
        "sec3_title": "Strategic Workflow (ORION Framework)",
        "sec3_desc": "Ang aming metodolohiya ay binuo sa katumpakan ng mga smart contract at real-time na pamamahala ng proyekto. Mula sa malalaking proyektong pang-industriya hanggang sa high-end na custom residential engineering, ang bawat hakbang ay inino-audit ng aming AI assistant na si Joe.",
        "sec4_title": "Mga Dynamic na Modelo ng Pagpapatupad",
        "sec4_desc": "Iniaangkop namin ang aming mga metodolohiyang B2B at B2C sa pamamagitan ng ORION Price Book v6.0 PRO. Nag-aalok kami ng mga 'Labor Only' na scheme para sa mga general contractor o 'Turnkey Projects' na may tatlong antas ng teknolohiya (Good/Better/Best), na ginagarantiyahan ang scalability at mga matibay na kontrata.",
        "cv_header_role": "Senior AI Solutions Architect | Environmental Engineer | Project Manager",
        "cv_summary_title": "Buod ng Propesyonal",
        "cv_summary_p": "Environmental Engineer at AI Solutions Architect na may higit sa 21 taon ng multi-disciplinary na karanasan. Natatanging kakayahang tulayin ang agwat sa pagitan ng mga kumplikadong pisikal na sistema ng engineering at makabagong Artificial Intelligence. Propesyonal na may lisensya na may napatunayang track record sa pamamahala ng proyekto sa California at mga pag-audit sa kapaligiran ng ISO 14001.",
        "cv_exp_title": "Propesyonal na Karanasan",
        "cv_edu_title": "Edukasyon at Mga Sertipikasyon",
        "cv_skills_title": "Mga Teknikal na Kasanayan",
        "cv_lang_title": "Mga Wika",
        "spec_content": "NILALAMAN",
        "spec_purpose": "LAYUNIN",
        "spec_usage": "PAGGAMIT",
        "spec_potential": "POTENSYAL",
        "spec_costs": "ROI / GASTOS",
        "spec_comp": "KOMPETISYON",
        "spec_plus": "MORALES PLUS",
        "spec_lean": "LEAN PROCESS",
        "service_copper_content": "Buong copper piping systems (L, M, K types) para sa residential at commercial na imprastraktura.",
        "service_copper_purpose": "Garantisadong structural integrity at flow efficiency. Inaalis ang korapsyon at microplastic.",
        "service_copper_usage": "Mga luxury renovation sa San Jose, Palo Alto, at Los Gatos kung saan kritikal ang durability.",
        "service_copper_potential": "Mga sistema na idinisenyo para sa 50+ taon na lifespan, 100% nare-recycle.",
        "service_copper_costs": "Agarang ROI sa pamamagitan ng pinababang insurance premiums at pag-aalis ng paulit-ulit na pag-aayos.",
        "service_copper_comp": "Mas mahusay kaysa sa mga kakumpitensya na gumagamit ng mababang densidad na PEX.",
        "service_copper_plus": "Environmental Engineering: Post-installation sanitization at lead-free soldering certification.",
        "service_copper_lean": "Lean Methodology: Off-site pre-fabrication kits na nagpapababa ng on-site time ng 40%.",
        "service_septic_content": "Pag-install ng up-flow anaerobic biodigesters at smart infiltration fields na may level sensors.",
        "service_septic_purpose": "Ecological waste management sa off-grid na mga lugar, nagpoprotekta sa mga lokal na aquifer.",
        "service_septic_usage": "Malalaking residential estate at renovations na nangangailangan ng CA Water Board compliance.",
        "service_septic_potential": "Mga scalable na sistema na nagpapahintulot ng ligtas na on-site na conversion ng sludge sa soil biomass.",
        "service_septic_costs": "Ganap na pag-aalis ng municipal sewer fees at 50% na pagbabawas sa dalas ng pumping.",
        "service_septic_comp": "Kumpara sa mga tradisyunal na concrete tank, nag-aalok kami ng high-strength polymers na may 0% seepage.",
        "service_septic_plus": "Environmental Protocols: Soil auditing at hydraulic design batay sa lokal na absorption rates.",
        "service_septic_lean": "Lean Process: 48-oras na modular installation sa pamamagitan ng GPS-guided excavation.",
        "service_water_content": "Pluvial capture networks at greywater treatment systems para sa di-potable na paggamit.",
        "service_water_purpose": "Bawasan ang epekto ng California drought at bawasan ang pag-asa sa municipal supply.",
        "service_water_usage": "Integrated systems para sa smart gardens at toilet flushing sa ilalim ng extreme saving mandates.",
        "service_water_potential": "Partial hydric independence ng hanggang 65% ng taunang residential na konsumo.",
        "service_water_costs": "Malaking pagtitipid sa water bills at access sa state environmental conservation incentives.",
        "service_water_comp": "Custom designs kumpara sa simpleng rain barrels; nag-deliver kami ng grade-2 filtration engineering.",
        "service_water_plus": "Environmental Engineering: Integrated UV disinfection systems para maiwasan ang pathogen.",
        "service_water_lean": "Lean Process: Dynamic flow mapping para mabawasan ang paggamit ng electric pump.",
        "service_expansion_content": "Disenyo at pagpapatupad ng mga bagong hydraulic branch para sa mga ADU at master expansions.",
        "service_expansion_purpose": "Tiyakin na ang karagdagang hydraulic load ay hindi nagkokompromiso sa kasalukuyang pressure ng sistema.",
        "service_expansion_usage": "Lumalagong ADU market sa Silicon Valley, tinitiyak ang pagsunod sa kasalukuyang building codes.",
        "service_expansion_potential": "Native integration capability sa smart leak detection systems para sa buong property.",
        "service_expansion_costs": "Fixed pricing sa pamamagitan ng Price Book v6.0, iniiwasan ang mga sorpresang 'change order'.",
        "service_expansion_comp": "Paggamit ng digital twins para mag-simulate ng pressure bago ang unang drilling.",
        "service_expansion_plus": "Morales Plus: Thermal balancing verification sa expanded hot water lines.",
        "service_expansion_lean": "Lean Process: 'Just-in-Time' logistics para sa mga materyales, pinapanatiling malinis ang job site.",
        "service_construction_content": "Foundation-level na pagpaplano, high-speed rough-in, at premium engineering finishes.",
        "service_construction_purpose": "Magtayo ng perpektong imprastraktura na lumalagpas sa California inspection standards.",
        "service_construction_usage": "Mga bagong modernong residensya at multi-family complex sa teknolohikal na antas.",
        "service_construction_potential": "Native readiness para sa buong Smart Home at hydric IoT integration.",
        "service_construction_costs": "Budget optimization sa pamamagitan ng value engineering at estratehikong pagpili ng materyales.",
        "service_construction_comp": "Direktang pakikipagtulungan sa mga arkitekto sa pamamagitan ng BIM files.",
        "service_construction_plus": "Environmental Protocols: LEED certification para sa hydraulic installation.",
        "service_construction_lean": "Lean Process: Concurrent task planning para mabawasan ang construction schedule ng 15%.",
        "service_repair_content": "Tumpak na lokalisasyon ng mga hindi nakikitang depekto at surgical repairs na may minimal na pagputol.",
        "service_repair_purpose": "Resolbahin ang mga kumplikadong plumbing issue nang walang malalaking demolisyon.",
        "service_repair_usage": "Kritikal na maintenance sa mga tinitirhan at patuloy na nagtatrabahong commercial na gusali.",
        "service_repair_potential": "Digital repair history na nakaimbak sa ORION ecosystem para sa predictive maintenance.",
        "service_repair_costs": "Iniiwasan ang malalaking gastos sa post-repair reconstruction sa pamamagitan ng pagtukoy ng eksaktong punto ng pagkabigo.",
        "service_repair_comp": "Paggamit ng Joe AI Assistant para sa flow pattern analysis kumpara sa tradisyunal na 'trial and error'.",
        "service_repair_plus": "Morales Plus: Extended warranty batay sa digital diagnostic precision.",
        "service_repair_lean": "Lean Process: Standardized quick-repair kits para sa first-visit resolution.",
        "eco_podcasts_card_title": "ORION Library ng Podcast",
        "eco_podcasts_card_desc": "Mga high-fidelity na interactive na audio at kritikal na pagsusuri sa rebolusyon ng IA sa imprastraktura ng tubig at mga balangkas ng pagsunod sa California.",
        "btn_open_podcasts": "Makinig sa mga Podcast",
        "multimedia_title": "ORION Library ng Podcast",
        "multimedia_subtitle": "Mga Pananaw sa High-Fidelity Audio at Kritikal na Pagsusuri",
        "mp_podcasts_title": "Serye ng Ecosistema ng MP",
        "pod_type_deep_dive": "Deep Dive",
        "mp_pod_1_title": "Binabago ng IA ng Silicon Valley ang modernong plumbing",
        "btn_listen": "Makinig Ngayon",
        "pod_type_brief": "Brief",
        "mp_pod_2_title": "IA para sa paghula ng mga leak sa tubig",
        "pod_type_critique": "Critique",
        "mp_pod_3_title": "Mga Diagnostic ng IA at Legal na Pananagutan",
        "ep_podcasts_title": "Serye ng EP Estimator Pro",
        "ep_pod_1_title": "EP PLUMBING: Kritikal na Pagsusuri",
        "ep_pod_2_title": "Ang IA na plomero sa iyong bulsa",
        "pod_type_debate": "Debate",
        "ep_pod_3_title": "Mga Diagnostic at Legal na Framework",
        "lbl_tier_good": "GOOD (Standard)",
        "lbl_tier_better": "BETTER (Premium)",
        "lbl_tier_best": "BEST (Ultra-Premium)",
        "lbl_justification": "Katwiran:",
        "lbl_materials": "Mga Materyales:",
        "lbl_tools": "Kagamitan:",
        "lbl_time": "Oras:",
        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",


    
    },
    "vi": {
        "eng_btn_details": "Xem chi tiết →",
        "eng_back": "← Quay lại Dịch vụ Trung tâm",
        "eng_termo_title": "Chẩn đoán Thermography",
        "eng_termo_code": "ENG-CENT-001",
        "eng_termo_p1": "Chẩn đoán bằng Nhiệt độ học là một trụ cột cơ bản của Dịch vụ Kỹ thuật Trung tâm của chúng tôi. Nó bao gồm việc phát hiện rò rỉ hoàn toàn không xâm lấn bằng cách sử dụng hình ảnh nhiệt độ phân giải cao và cảm biến âm thanh.",
        "eng_termo_p2": "Thay vì thực hiện các công việc phá dỡ thăm dò tốn kém và mang tính hủy hoại, chúng tôi sử dụng công nghệ hồng ngoại FLIR để hình dung các gradient nhiệt bên trong tường và dưới các tấm bê tông.",
        "eng_termo_tech1_title": "Hình ảnh Hồng ngoại Độ chính xác Cao",
        "eng_termo_tech1_desc": "Máy ảnh của chúng tôi ghi lại sự khác biệt nhiệt độ lên đến 0.1°C, cho thấy chính xác nơi nước rò rỉ đi qua.",
        "eng_termo_tech2_title": "Phân tích Âm thanh Máy tính",
        "eng_termo_tech2_desc": "Chúng tôi sử dụng micrô siêu nhạy với các bộ lọc AI để phân biệt tiếng ồn xung quanh với tiếng rít do nước có áp suất thoát ra gây ra.",
        "eng_termo_tech3_title": "Lập Bản đồ Kỹ thuật số và Báo cáo",
        "eng_termo_tech3_desc": "Chúng tôi cung cấp một báo cáo kỹ thuật số toàn diện thông qua cổng thông tin của chúng tôi, chứng minh vấn đề đối với các yêu cầu bảo hiểm và tạo điều kiện cho việc sửa chữa chính xác.",
        "eng_eco_title": "Eco-Retrofitting",
        "eng_eco_code": "ENG-CENT-002",
        "eng_eco_p1": "Eco-Retrofitting là chuyên môn tiên tiến của chúng tôi để hiện đại hóa các hệ thống thủy lực hiện có bằng vật liệu thân thiện với môi trường và các thành phần tiết kiệm nước cực kỳ hiệu quả.",
        "eng_eco_p2": "Chúng tôi cập nhật các thiết bị của tòa nhà để giảm đáng kể lượng nước tiêu thụ mà không làm giảm áp suất hoặc sự thoải mái.",
        "eng_eco_tech1_title": "Giảm lượng nước được chứng minh",
        "eng_eco_tech1_desc": "Lắp đặt bộ điều chỉnh lưu lượng có sục khí, nhà vệ sinh xả kép tiêu thụ cực thấp (UHET) và van giảm áp suất thông minh (PRV).",
        "eng_eco_tech2_title": "Vật liệu Bền vững",
        "eng_eco_tech2_desc": "Việc sử dụng độc quyền các ống có thể tái chế hoặc những ống có chứng nhận tác động carbon thấp, đảm bảo dự án của bạn có tác động môi trường bằng không.",
        "eng_eco_tech3_title": "Chứng nhận Tiết kiệm",
        "eng_eco_tech3_desc": "Chúng tôi cung cấp các tính toán Lợi tức đầu tư (ROI) và tiết kiệm nước được bảo đảm (lên đến 40% hàng tháng), thích hợp để đăng ký các khoản giảm giá của tiểu bang.",
        "eng_diseno_title": "Thiết kế Cơ sở hạ tầng Thủy lực",
        "eng_diseno_code": "ENG-CENT-003",
        "eng_diseno_p1": "Thiết kế Cơ sở hạ tầng Thủy lực của Morales Plumbing là một dịch vụ kỹ thuật tiên tiến đảm bảo tính khả thi, hiệu quả và khả năng mở rộng.",
        "eng_diseno_p2": "Các kỹ sư của chúng tôi sử dụng phần mềm mô hình 3D và trình mô phỏng động lực học chất lỏng để tính toán gradien áp suất, sự giãn nở nhiệt và vận tốc dòng chảy.",
        "eng_diseno_tech1_title": "Mô hình BIM Tích hợp",
        "eng_diseno_tech1_desc": "Thiết kế tham số tương thích với Autodesk Revit, cho phép phối hợp hoàn hảo với các kiến trúc sư và nhà thầu.",
        "eng_diseno_tech2_title": "Mô phỏng Dòng chảy và Áp suất",
        "eng_diseno_tech2_desc": "Các bài kiểm tra áp lực ảo trên mô hình kỹ thuật số để đảm bảo cung cấp cân bằng ngay cả trong những thời gian nhu cầu cao điểm.",
        "eng_diseno_tech3_title": "Tuân thủ Quy định (UPC/CPC)",
        "eng_diseno_tech3_desc": "Sự chấp thuận được đảm bảo trong các cuộc kiểm tra của thành phố nhờ việc tuân thủ nghiêm ngặt các Quy định Lắp đặt Ống nước Thống nhất và của California.",
        "eng_cobre_title": "Cải tạo Đồng Cấp cao",
        "eng_cobre_code": "ENG-CENT-004",
        "eng_cobre_p1": "Cải tạo Đồng Elite đại diện cho tiêu chuẩn vàng trong cơ sở hạ tầng thủy lực. Chúng tôi thay thế các hệ thống đường ống đã lỗi thời bằng các ống đồng Loại L và Loại K có độ tinh khiết cao.",
        "eng_cobre_p2": "Đồng cung cấp đặc tính kháng khuẩn tự nhiên thanh lọc thụ động lưu lượng nước và đảm bảo không có vi nhựa được giải phóng.",
        "eng_cobre_tech1_title": "Hàn Chính xác và Hệ thống ProPress",
        "eng_cobre_tech1_desc": "Chúng tôi sử dụng các kỹ thuật nối cơ khí không ngọn lửa (ProPress) hoặc hàn cấp độ hàng không vũ trụ không chứa chì.",
        "eng_cobre_tech2_title": "Tuổi thọ và Lợi tức đầu tư",
        "eng_cobre_tech2_desc": "Kỳ vọng tuổi thọ hơn 50 năm. Ngay lập tức nâng cao giá trị cấu trúc của tài sản lên đến 15%.",
        "eng_cobre_tech3_title": "Chất lượng Âm thanh và Dòng chảy Ổn định",
        "eng_cobre_tech3_desc": "Độ dày của thành ống đồng Loại L loại bỏ búa nước và chịu được áp suất cực cao.",
        "eng_septico_title": "Kỹ thuật Hầm tự hoại Tiên tiến",
        "eng_septico_code": "ENG-CENT-005",
        "eng_septico_p1": "Bộ phận Kỹ thuật Hầm tự hoại Tiên tiến của chúng tôi thiết kế, triển khai và bảo trì các hệ thống quản lý nước thải không kết nối lưới điện bằng công nghệ sinh học hiện đại.",
        "eng_septico_p2": "Thay vì lắp đặt các bể phốt thông thường, chúng tôi áp dụng các Đơn vị Xử lý Hiếu khí (ATU) xử lý nước đến độ tinh khiết gần như phù hợp để tưới bề mặt.",
        "eng_septico_tech1_title": "Nghiên cứu Thấm qua và Thiết kế Địa hình",
        "eng_septico_tech1_desc": "Đánh giá địa chất của địa hình để xác định tốc độ hấp thụ chính xác và định cỡ khu vực lọc mương.",
        "eng_septico_tech2_title": "Tích hợp Lò phản ứng Sinh học",
        "eng_septico_tech2_desc": "Trang bị các hệ thống sục khí làm tăng tốc độ phân hủy chất rắn theo cấp số nhân thông qua các vi khuẩn hiếu khí cực kỳ hiệu quả.",
        "eng_septico_tech3_title": "Tuân thủ Quy định",
        "eng_septico_tech3_desc": "Quản lý giấy phép từ đầu đến cuối, đảm bảo thiết kế vượt qua các yêu cầu về sức khỏe và giảm bớt các khoản tiền phạt.",
        "faq_title": "Q&A | Trung tâm Kỹ thuật",
        "faq_cat_plumbing": "Hệ thống đường ống",
        "faq_cat_eco": "Hệ sinh thái Eco-Plumbing & Lean",
        "faq_cat_env": "Quy định Môi trường 2026",
        "faq_q1": "Tại sao chọn ống đồng thay vì PEX khi cải tạo và xây dựng mới?",
        "faq_a1": "Đồng cung cấp độ bền vượt trội, khả năng chống cháy và ngăn ngừa vi khuẩn phát triển. Theo UPC California, nó vẫn là tiêu chuẩn vàng cho giá trị cao cấp. Mặt khác, PEX mang lại sự linh hoạt vượt trội, ít mối nối hơn (giảm thiểu điểm rò rỉ), thời gian lắp đặt nhanh hơn và chi phí vật liệu ban đầu thấp hơn. <span class=\"comic-choice\">Quyết định là của bạn</span>: chọn độ bền cao cấp và giá trị vật liệu cổ điển (Đồng), hoặc hiệu quả chi phí hiện đại và khả năng phục hồi đàn hồi (PEX).",
        "faq_q2": "Các quy định về bể tự hoại và môi trường năm 2026 của California là gì?",
        "faq_a2": "Các quy định tập trung vào giảm nitơ, bảo vệ nước ngầm và hiệu quả tái sử dụng nước. Morales Plumbing đảm bảo tuân thủ 100% thông qua kỹ thuật môi trường tiên tiến và các giao thức của Ban Nước. Ngoài ra, chúng tôi thiết kế các hệ thống bể tự hoại tuân thủ tiêu chuẩn giúp giảm thiểu chi phí ban đầu bằng các lộ trình cấp phép truyền thống. <span class=\"comic-choice\">Quyết định là của bạn</span>: đầu tư vào hệ sinh thái tiên tiến để đón đầu tiêu chuẩn 2030, hoặc chọn cấu hình tiêu chuẩn tập trung vào tiết kiệm chi phí trước mắt.",
        "faq_q3": "Quy trình Lean và Kỹ thuật Môi trường có lợi gì cho dự án của tôi?",
        "faq_a3": "Bằng cách loại bỏ lãng phí và sử dụng vật liệu bền vững, chúng tôi giảm 25% chi phí và 30% thời gian thực hiện. Các giao thức của chúng tôi đảm bảo lượng khí thải carbon thấp hơn và ROI cơ sở hạ tầng cao hơn. Hoặc chúng tôi cung cấp các phương pháp xây dựng cổ điển tập trung vào đặc điểm tùy chỉnh tối đa và dự phòng cấu trúc thủ công tuyệt đối mà không bị giới hạn tiến độ Lean. <span class=\"comic-choice\">Quyết định là của bạn</span>: chọn quy trình Lean sinh thái tăng tốc để tối đa hóa hiệu quả, hoặc xây dựng thủ công cổ điển để có biên độ tùy chỉnh truyền thống.",
        "faq_q4": "Tôi có thể tích hợp hệ thống thu gom nước vào hệ thống hiện tại không?",
        "faq_a4": "Có, chúng tôi chuyên cải tạo tích hợp hệ thống thu nước mưa và nước xám vào mạng lưới hiện tại, giảm đáng kể sự phụ thuộc vào nguồn nước đô thị và chi phí vận hành.",
        "faq_q5": "Lợi thế của khung giải pháp Morales Plumbing PLUS là gì?",
        "faq_a5": "Kết hợp chuyên môn CSLB C-36 với Kỹ thuật Môi trường, chẩn đoán bằng AI và Quy trình Lean, mang lại mức độ chính xác và bền vững vô song trong khu vực.",
        "faq_q6": "Morales Plumbing đảm bảo tuân thủ tiêu chuẩn UPC như thế nào?",
        "faq_a6": "Các kỹ sư của chúng tôi được chứng nhận CSLB C-36 và sử dụng các giao thức kiểm tra mã hỗ trợ bởi AI để đảm bảo mọi mối nối vượt quá tiêu chuẩn của California. Ngoài ra, chúng tôi cung cấp dịch vụ kiểm tra vật lý truyền thống với hai thanh tra và danh sách kiểm tra thủ công cho những khách hàng thích giám sát cơ học cổ điển. <span class=\"comic-choice\">Quyết định là của bạn</span>: chọn xác thực kỹ thuật số hỗ trợ AI độ chính xác cao hoặc kiểm tra thủ công truyền thống.",
        "faq_q7": "Những chỉ số 'Lean' cụ thể nào được theo dõi?",
        "faq_a7": "Chúng tôi theo dõi Takt Time, Lead Time và First-Pass Yield để đảm bảo quy trình làm việc có thể dự đoán được, không lãng phí cho các dự án quy mô lớn. Đồng thời, chúng tôi hỗ trợ theo dõi các mốc dự án cổ điển và kiểm toán giờ làm việc truyền thống để giám sát đơn giản hơn. <span class=\"comic-choice\">Quyết định là của bạn</span>: tối ưu hóa dự án bằng bảng dữ liệu Lean thời gian thực, hoặc quản lý thông qua các mốc dự án truyền thống đơn giản.",
        "faq_q8": "Làm thế nào tôi có thể chuẩn bị cơ sở hạ tầng sẵn sàng cho tương lai?",
        "faq_a8": "Bằng cách tích hợp các hệ thống thu gom nước và tái sử dụng nước xám ngay hôm nay, bạn sẽ tránh được các nghĩa vụ cải tạo trong tương lai và tăng giá trị tài sản lên tới 15%. Hoặc bạn có thể chọn bố cục thụ động cực kỳ tin cậy tập trung vào thay ống dẫn cổ điển độ bền cao và cấu hình ống chia đơn giản giúp giảm thiểu bộ phận cơ học. <span class=\"comic-choice\">Quyết định là của bạn</span>: đầu tư vào công nghệ nước bền vững chủ động, hoặc chọn hệ thống vòng lặp thụ động ít bảo trì.",
        "svc_1_title": "Precision Leak Detection",
        "svc_1_p1": "At Morales Plumbing, precision is our standard. We identify hidden faults without destructive demolition.",
        "svc_1_p2": "Using FLIR thermal cameras and acoustic sensors we trace leaks behind walls or slabs. Massive savings vs. reconstruction.",
        "svc_1_good": "<strong>GOOD (Standard) \u2014 $450</strong><br>Visual/acoustic diagnostic. Standard patches for accessible leaks.",
        "svc_1_better": "<strong>BETTER (Premium) \u2014 $585</strong><br>FLIR thermal + pressure drop test. Epoxy coating repair.",
        "svc_1_best": "<strong>BEST (Ultra-Premium) \u2014 $720</strong><br>Full structural mapping and sector isolation. ProPress copper segment.",
        "svc_2_title": "Full House Repipe",
        "svc_2_p1": "A full repipe is a heart transplant for your home. Old galvanized pipes cause floods and water quality degradation.",
        "svc_2_p2": "We replace all water infrastructure with commercial-grade Copper and PEX. Eradicates cloudy water and chronic leaks.",
        "svc_2_good": "<strong>\u2705 GOOD (Standard) \u2014 $3,800</strong><br>PEX-B piping with brass Crimp fittings. Includes 100 PSI hydrostatic pressure test. UPC-certified reliable solution.",
        "svc_2_better": "<strong>\u2b50 BETTER (Premium) \u2014 $4,940</strong><br>PEX-A Uponor Expansion system. Superior flow rate, freeze-resistant, fewer mechanical fittings for lower long-term risk.",
        "svc_2_best": "<strong>\ud83c\udfc6 BEST (Ultra-Premium) \u2014 $6,080</strong><br>Type L Copper with ProPress technology (no solder, no flame). Maximum flow, natural antimicrobial properties and absolute commercial-grade durability for 50+ years.",
        "svc_3_title": "Water Filtration & Softening",
        "svc_3_p1": "Hard water destroys appliances and stains fixtures. We transform water quality from the entry point.",
        "svc_3_p2": "We install systems eliminating chlorine, heavy metals and calcium. Crystal-clear water and 30% longer appliance life.",
        "svc_3_good": "<strong>GOOD \u2014 $1,500</strong><br>Standard 32,000-grain salt-based softener.",
        "svc_3_better": "<strong>BETTER \u2014 $1,950</strong><br>Fleck 5600SXT Metered. Digital on-demand valve.",
        "svc_3_best": "<strong>BEST \u2014 $2,400</strong><br>Halo 5 Whole House. Salt-free, UV sterilization.",
        "svc_4_title": "Smart Valve Installation",
        "svc_4_p1": "If a pipe bursts on vacation, IoT Smart Valves auto-shutoff and alert your phone in seconds.",
        "svc_4_p2": "These systems monitor water flow 24/7 using AI to detect micro-leaks or catastrophic ruptures.",
        "svc_4_good": "<strong>GOOD \u2014 $350</strong><br>Commercial-grade 1/4-turn brass ball valve.",
        "svc_4_better": "<strong>BETTER \u2014 $455</strong><br>Moen Flo Smart Valve. Daily monitoring and smartphone shutoff.",
        "svc_4_best": "<strong>BEST \u2014 $560</strong><br>Phyn Plus. Ultrasonic monitoring, no moving parts, smart home integration.",
        "svc_5_title": "SeeSnake Camera Inspection",
        "svc_5_p1": "Blind diagnostics destroy properties. Our SeeSnake cameras trace problems without excavation.",
        "svc_5_p2": "We deploy military-grade self-leveling HD cameras underground for surgical repairs instead of destroying your yard.",
        "svc_5_good": "<strong>GOOD \u2014 $250</strong><br>Basic camera inspection up to 50ft. USB video delivery.",
        "svc_5_better": "<strong>BETTER \u2014 $325</strong><br>Deep SeeSnake with sonar tracking. Exact surface location.",
        "svc_5_best": "<strong>BEST \u2014 $400</strong><br>HD inspection and digital modeling. Full system mapping and CIPP report.",
        "svc_6_title": "Main Sewer Replacement",
        "svc_6_p1": "A collapsed main sewer is one of the most disruptive failures. We offer guaranteed replacements for decades.",
        "svc_6_p2": "Whether through traditional excavation or trenchless methods, we eliminate roots and fractured pipes.",
        "svc_6_good": "<strong>GOOD \u2014 $5,500</strong><br>Traditional excavation, SDR-35 PVC. Proven gravity flow solution.",
        "svc_6_better": "<strong>BETTER \u2014 $7,150</strong><br>ABS Schedule 40. Superior solid core, gravel bed, two-way cleanouts.",
        "svc_6_best": "<strong>BEST \u2014 $8,800</strong><br>Trenchless HDPE fused joints. Seamless, root-proof. Lifetime guarantee.",
        "svc_7_title": "Hybrid Heat Pump Water Heater",
        "svc_7_p1": "Still spending hundreds on inefficient water heating? Hybrid Heat Pump reaches up to 400% efficiency.",
        "svc_7_p2": "Besides qualifying for rebates, this system drastically cuts electric bills. Pays for itself in under 3 years.",
        "svc_7_good": "<strong>GOOD \u2014 $2,200</strong><br>Standard 50-gallon atmospheric heater. Direct replacement.",
        "svc_7_better": "<strong>BETTER \u2014 $2,860</strong><br>Rheem ProTerra Hybrid. Digital panel, rebate-eligible efficiency.",
        "svc_7_best": "<strong>BEST \u2014 $3,520</strong><br>Bradford White AeroTherm with Wi-Fi. Smart scheduling, quiet pump, leak sensors.",
        "svc_8_title": "Pressure Reducing Valve (PRV)",
        "svc_8_p1": "Operating above 80 PSI destroys hoses, bursts valves, and voids warranties. A PRV protects silently.",
        "svc_8_p2": "A PRV regulates flow to a safe 55-60 PSI, acting as a mechanical shield at your home entry point.",
        "svc_8_good": "<strong>GOOD \u2014 $480</strong><br>Standard residential-grade brass PRV.",
        "svc_8_better": "<strong>BETTER \u2014 $624</strong><br>Wilkins 600XL with integrated pressure gauge.",
        "svc_8_best": "<strong>BEST \u2014 $768</strong><br>Watts LFN45B with inline strainer and thermal expansion tank.",
        "svc_9_title": "Emergency Triage",
        "svc_9_p1": "When a pipe bursts at 3AM, every second counts. We arrive fast, stabilize the leak, mitigate damage.",
        "svc_9_p2": "Our rapid response squad stops catastrophic flow and restores vital service to functional areas.",
        "svc_9_good": "<strong>GOOD \u2014 $380</strong><br>Main shutoff and SharkBite temporary caps.",
        "svc_9_better": "<strong>BETTER \u2014 $494</strong><br>Sector isolation with permanent ProPress valves.",
        "svc_9_best": "<strong>BEST \u2014 $608</strong><br>Full isolation manifold. Permanent one-visit solution.",
        "svc_10_title": "CAD & Digital Tracing",
        "svc_10_p1": "Modern development requires documented precision. We trace underground lines and deliver as-built plans.",
        "svc_10_p2": "We use electromagnetic tracing and digital modeling to map your invisible network and prevent accidents.",
        "svc_10_good": "<strong>GOOD \u2014 $600</strong><br>Main line tracing with surface paint and professional schematic.",
        "svc_10_better": "<strong>BETTER \u2014 $780</strong><br>2D AutoCAD overlay integrated with property architectural plans.",
        "svc_10_best": "<strong>BEST \u2014 $960</strong><br>3D BIM/Revit modeling. Every node, pipe and valve geolocated.",
        "svc_11_title": "Tankless Water Heater",
        "svc_11_p1": "Imagine endless hot water on demand. Tankless systems only fire when you open the tap.",
        "svc_11_p2": "Save space, reduce carbon footprint, and ensure constant purified hot water without tank explosion risks.",
        "svc_11_good": "<strong>GOOD \u2014 $3,200</strong><br>Navien NPE-A2 non-condensing. Great for quick replacements.",
        "svc_11_better": "<strong>BETTER \u2014 $4,160</strong><br>Rinnai RU Sensei Condensing. 0.95 UEF, smart modulating burners.",
        "svc_11_best": "<strong>BEST \u2014 $5,120</strong><br>Navien NPE-240A2 with ComfortFlow recirculation. Instant hot water, zero wait.",
        "svc_12_title": "Backflow Preventer Assembly",
        "svc_12_p1": "If you manage a business or irrigation, a Backflow preventer is federally mandated. Avoid crippling fines.",
        "svc_12_p2": "We are certified to install, calibrate and register these assemblies that protect drinking water.",
        "svc_12_good": "<strong>GOOD \u2014 $850</strong><br>Standard Wilkins 375 RPZ. Immediate city compliance.",
        "svc_12_better": "<strong>BETTER \u2014 $1,105</strong><br>High-flow Watts Series 009. Lead-free bronze for severe commercial use.",
        "svc_12_best": "<strong>BEST \u2014 $1,360</strong><br>Febco 860 RPZ with IoT sensor. Real-time differential monitoring.",
        "svc_13_title": "Luxury Fixture Swap",
        "svc_13_p1": "A luxury bathroom requires matching hardware with precise calibration, not just aesthetics.",
        "svc_13_p2": "We perform perfectly leveled, hermetically sealed installations tested at maximum pressure.",
        "svc_13_good": "<strong>GOOD \u2014 $250</strong><br>Standard Delta/Moen installation with stainless braided supply lines.",
        "svc_13_better": "<strong>BETTER \u2014 $325</strong><br>Moen Align/Grohe spot-resist. Commercial anti-mold silicone sealing.",
        "svc_13_best": "<strong>BEST \u2014 $400</strong><br>Kohler Artifacts Smart Touch integration. Temperature calibration and sensor wiring.",
        "svc_14_title": "Water Chemistry Panel",
        "svc_14_p1": "Your tap water may look clear but contain heavy metals or chloramine. Test before investing in filters.",
        "svc_14_p2": "We provide precise scientific analysis on-site and via certified labs for a custom water treatment plan.",
        "svc_14_good": "<strong>GOOD \u2014 $150</strong><br>Rapid on-site TDS, hardness and free chlorine test.",
        "svc_14_better": "<strong>BETTER \u2014 $195</strong><br>16-point certified lab panel (heavy metals, lead, nitrates). Report in 5 days.",
        "svc_14_best": "<strong>BEST \u2014 $240</strong><br>On-site test plus permanent inline digital TDS meter for real-time monitoring.",
        "svc_15_title": "Commercial Hydro-Jetting",
        "svc_15_p1": "When scale or thick roots calcify sewer pipes, electric snakes fail. Time for industrial force.",
        "svc_15_p2": "Our Hydro-Jetting blasts at 4000+ PSI with rotating laser nozzles restoring the original pipe diameter.",
        "svc_15_good": "<strong>GOOD \u2014 $750</strong><br>Heavy augering with 7/8 sectional electric cable.",
        "svc_15_better": "<strong>BETTER \u2014 $975</strong><br>4000 PSI Hydro-Jetting. Eliminates scale and emulsified grease.",
        "svc_15_best": "<strong>BEST \u2014 $1,200</strong><br>Heavy jetting + HD camera inspection + 12-month RootX inhibitor application.",


        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",
        "nav_nexus": "Trang chủ Nexus",
        "nav_orion": "Hệ sinh thái Orion",
        "nav_services": "Kỹ thuật Chuyên nghiệp",
        "nav_multimedia": "Podcasts",
        "nav_about": "Sứ mệnh",
        "nav_terminal": "Thiết bị đầu cuối",
        "hero_badge": "Kỹ thuật Chuyên nghiệp & Chứng nhận CSLB C-36",
        "hero_title": "MORALES PLUMBING",
        "hero_desc": "Kết hợp hơn 21 năm chuyên môn kỹ thuật với ước tính AI và thiết kế nước bền vững.",
        "stat_ready": "Đã được cấp phép",
        "stat_eco": "ISO 14001",
        "stat_ai": "AI đang hoạt động",
        "hero_explore": "Xem các giải pháp",
        "hero_joe": "Trợ lý Joe",
        "projects_title": "Kỹ thuật xuất sắc",
        "projects_desc": "Các ứng dụng công nghệ và hệ thống quản lý dự án trong thế giới thực của chúng tôi.",
        "card_ep_title": "ORION ESTIMATOR PRO",
        "card_ep_desc": "Ước tính tự động dựa trên thị giác máy tính, sở hữu +8000 danh mục dự án. Tối ưu hóa lợi nhuận >70%.",
        "card_orion_title": "Hệ thống Chiến lược ORION",
        "card_orion_desc": "Giải pháp quy trình làm việc kỹ thuật số cho các dự án khối lượng lớn. Hợp đồng thông minh và theo dõi thời gian thực.",
        "btn_pricing": "Xem Bảng giá chính thức",
        "btn_buy": "Mua giấy phép",
        "btn_proposal": "Khung chiến lược",
        "btn_academy": "Học viện Orion",
        "services_title": "Dịch vụ kỹ thuật cốt lõi",
        "service_1": "Chẩn đoán hình ảnh nhiệt",
        "service_1_desc": "Phát hiện rò rỉ không xâm lấn bằng hình ảnh nhiệt độ phân giải cao và cảm biến âm thanh.",
        "service_2": "Cải tạo sinh thái",
        "service_2_desc": "Hiện đại hóa hệ thống bằng vật liệu thân thiện với môi trường và công nghệ tiết kiệm nước hiệu quả (ISO 14001).",
        "service_3": "Thiết kế cơ sở hạ tầng thủy lực",
        "service_3_desc": "Quy hoạch chuyên gia về mạng lưới thủy lực độ chính xác cao cho cơ sở hạ tầng dân cư và thương mại.",
        "manifesto_title": "Tuyên ngôn Morales Plumbing",
        "mission_title": "Sứ mệnh",
        "mission_desc": "Dẫn đầu ngành bằng cách cung cấp các giải pháp độ chính xác cao theo tiêu chuẩn CSLB, kết hợp hơn 21 năm kinh nghiệm kỹ thuật với AI.",
        "vision_title": "Tầm nhìn",
        "vision_desc": "Trở thành tiêu chuẩn toàn cầu về kỹ thuật ống nước công nghệ và kỹ thuật bền vững, được định nghĩa bởi sự đổi mới và chính trực.",
        "terminal_title": "MORALES_EXECUTIVE_V1.0",
        "profile_role": "Kỹ sư trưởng & Nhà sáng lập",
        "cv_link": "> Truy cập sơ yếu lý lịch chuyên nghiệp",
        "ceo_link": "> HỒ SƠ ĐIỀU HÀNH CEO",
        "network_link": "> Mạng lưới: ORION TECH",
        "joe_status": "JOE: Trợ lý kỹ thuật AI",
        "joe_welcome": "Chào mừng. Tôi là Joe. Hôm nay tôi có thể giúp gì cho bạn về chẩn đoán dự án hoặc dịch vụ kỹ thuật?",
        "joe_intro": "Xin chào! Tôi là Joe, trợ lý AI của Morales Plumbing. Hôm nay tôi có thể giúp gì cho bạn? 🛠️",
        "joe_placeholder": "Hỏi về đường ống, dịch vụ hoặc dự án...",
        "joe_send": "Gửi",
        "joe_trigger_title": "Trò chuyện với Joe · Trợ lý AI",
        "nav_pricebook": "Bảng giá",
        "nav_legal": "Pháp lý",
        "back_home": "Trở về trang chủ",
        "btn_read": "Đọc thêm",
        "pricebook_tag": "Ứng dụng web · Đang hoạt động",
        "pricebook_title": "ORION PRICE BOOK v6.0 PRO",
        "nav_catalog": "Danh mục",
        "nav_methodology": "Phương pháp luận",
        "nav_tiers": "Cấp độ",
        "nav_upsells": "Bán thêm",
        "nav_promotions": "Khuyến mãi",
        "nav_terms": "Điều khoản",
        "nav_warranties": "Bảo hành",
        "pb_hero_badge": "Phiên bản tiêu chuẩn ngành",
        "pb_hero_subtitle": "Dịch vụ ống nước chuyên nghiệp | Vùng Vịnh California",
        "pb_hero_location": "Vùng Vịnh California",
        "pb_hero_updated": "Cập nhật: Tháng 12 năm 2024",
        "pb_hero_details": "15 dịch vụ chuyên nghiệp chi tiết",
        "pb_hero_rates": "Phụ trách: $185/giờ | Trợ lý: $95/giờ | Phụ phí: 30%",
        "pb_hero_compliance": "Tiêu chuẩn Kỹ thuật: ORION Tech | Chất lượng Đảm bảo",
        "pb_hero_powered": "Phát triển bởi NeKon AI aGent Consulting | Hệ thống ORION",
        "pb_method_title": "Phương pháp tính toán",
        "pb_tiers_title": "Hệ thống Tốt / Tốt hơn / Tốt nhất",
        "pb_upsells_title": "Hệ thống bán thêm",
        "pb_promotions_title": "Khuyến mãi đang hoạt động",
        "pb_terms_title": "Điều khoản và Điều kiện",
        "pb_warranties_title": "Bảo hành và Hỗ trợ",
        "pb_catalog_title": "Danh mục dịch vụ",
        "pricebook_desc": "Phiên bản tiêu chuẩn ngành với +100 dịch vụ chuyên nghiệp chi tiết, 3 cấp giá và hệ thống bán thêm tích hợp.",
        "pricebook_feat1": "+100 dịch vụ",
        "pricebook_feat2": "Cấp độ Tốt/Tốt hơn/Tốt nhất",
        "pricebook_feat3": "Bán thêm và Khuyến mãi",
        "card_orion_feat1": "Tích hợp Gogo Rooter",
        "card_orion_feat2": "Đồng bộ hóa đám mây",
        "card_orion_feat3": "Tối ưu hóa ROI",
        "btn_catalog": "Xem danh mục",
        "btn_demo": "Xem demo",
        "system_core_tag": "Cốt lõi hệ thống · Đang phát triển",
        "coming_soon": "Sắp ra mắt",
        "coming_soon_badge": "Sắp ra mắt",
        "footer_e2ee": "Bảo mật & Ưu tiên Quyền riêng tư",
        "footer_cyber": "Nền tảng được tăng cường bởi AI",
        "footer_rights_long": "© 2026 Morales Plumbing. Bảo lưu mọi quyền. Nội dung, video, hình ảnh được tạo và công nghệ ORION / Joe AI là tài sản trí tuệ độc quyền của Morales Plumbing và NeKon AI aGent Consulting.",
        "footer_rights_branded": "MORALES PLUMBING · Alex G. Espinosa · Bảo lưu mọi quyền · Thương hiệu đã đăng ký",
        "nav_framework": "Khung chiến lược",
        "footer_rights": "© 2026 Morales Plumbing. Bảo lưu mọi quyền.",
        "slogan_text": "Định nghĩa tương lai của dòng chảy. Đổi mới vì cuộc sống. 💧",
        "contact_lic": "Giấy phép",
        "pb_method_p1": "Phương pháp tính toán ORION dựa trên cách tiếp cận kỹ thuật chính xác đối với chi phí thủy lực. Chúng tôi sử dụng các thuật toán cấp công nghiệp, xem xét độ bền vật liệu, cường độ lao động (phân loại theo vai trò Trưởng và Trợ lý) và độ phức tạp kỹ thuật. Điều này loại bỏ sự thay đổi trong ước tính, cung cấp cấu trúc giá cố định phù hợp với tiêu chuẩn CSLB và biến động của thị trường xây dựng California.",
        "pb_method_p2": "Bằng cách tích hợp dữ liệu chuỗi cung ứng thời gian thực và quy trình công việc độc quyền hiệu quả cao, phương pháp luận của chúng tôi đảm bảo mức tăng giá tối ưu 30% trong khi duy trì lợi nhuận bền vững cho việc thực hiện kỹ thuật độ trung thực cao. Phương pháp định giá khoa học này đảm bảo mỗi dự án được hỗ trợ bởi dữ liệu thủy lực đã được xác minh và phân bổ tài nguyên minh bạch.",
        "pb_tiers_p1": "Hệ thống Tốt/Tốt hơn/Tốt nhất cung cấp cho khách hàng của chúng tôi ba cấp độ giải pháp kỹ thuật khác nhau, được tùy chỉnh để đáp ứng các mục tiêu vòng đời dự án khác nhau. Cấp độ 'Tốt' tập trung vào việc sửa chữa tuân thủ UPC và phục hồi hiệu quả. Cấp độ 'Tốt hơn' giới thiệu độ bền linh kiện nâng cao và nâng cấp hiệu suất tầm trung. Cấp độ 'Tốt nhất' đại diện cho tiêu chuẩn ORION Tech: vật liệu cấp công nghiệp cao cấp, giám sát tích hợp AI và bảo hành vòng đời mở rộng.",
        "pb_tiers_p2": "Mỗi cấp độ được thiết kế để cung cấp giá trị tối đa trong phạm vi của nó, cho phép các bên liên quan về dân cư và thương mại đưa ra quyết định sáng suốt dựa trên chiến lược cơ sở hạ tầng dài hạn của họ, không chỉ dựa trên nhu cầu trước mắt.",
        "pb_upsells_p1": "Hệ thống bán thêm của chúng tôi được thiết kế để cung cấp sự bảo vệ cơ sở hạ tầng chủ động. Ngoài yêu cầu chính, chúng tôi phân tích môi trường thủy lực để đề xuất các nâng cấp quan trọng như van ngắt thông minh, hệ thống lọc nước và máy bơm tuần hoàn hiệu suất cao. Những bổ sung này không chỉ là tùy chọn mà còn là các khoản đầu tư chiến lược vào an toàn tài sản.",
        "pb_upsells_p2": "Mỗi đề xuất đều được hỗ trợ bởi dữ liệu chẩn đoán, đảm bảo mỗi tích hợp đều phục vụ mục đích chức năng trong việc ngăn chặn các lỗi trong tương lai và giảm chi phí vận hành dài hạn.",
        "pb_promo_p1": "Khung khuyến mãi Morales Plumbing thưởng cho việc bảo trì chủ động và cam kết dự án khối lượng lớn. Chúng tôi cung cấp các ưu đãi định kỳ cho việc thay thế đường ống toàn nhà, tối ưu hóa máy nước nóng theo mùa và tích hợp ORION Tech lần đầu. Những khuyến mãi này nhằm giảm rào cản gia nhập cho các giải pháp kỹ thuật độ chính xác cao.",
        "pb_promo_p2": "Tất cả các khuyến mãi đang hoạt động đều phải chịu sự kiểm duyệt kỹ thuật và không thể kết hợp với các chiết khấu chiến lược khác, đảm bảo chất lượng dự án luôn là ưu tiên tuyệt đối.",
        "pb_terms_p1": "Tất cả các dịch vụ do Morales Plumbing cung cấp đều chịu sự quản lý của Hội đồng Giấy phép Nhà thầu Bang California (CSLB) và Quy chuẩn Ống nước Thống nhất (UPC). Mỗi hợp đồng bao gồm phạm vi công việc chi tiết, định giá cố định (không có phí ẩn) và giải thích rõ ràng về phương pháp kỹ thuật. Cấu trúc thanh toán được thiết kế để phù hợp với các mốc dự án.",
        "pb_terms_p2": "Trách nhiệm pháp lý và giải quyết tranh chấp tuân thủ các tiêu chuẩn công nghiệp California, đảm bảo mối quan hệ đối tác chuyên nghiệp và minh bạch giữa nhóm kỹ thuật và khách hàng.",
        "pb_warranty_p1": "Morales Plumbing cung cấp bảo hành 1 năm tiêu chuẩn cho tất cả công việc và tích hợp kỹ thuật, với bảo hành mở rộng có sẵn cho các hệ thống cấp 'Tốt nhất' và cài đặt ORION Tech. Ngoài ra, chúng tôi cung cấp các kế hoạch tín dụng linh hoạt và hệ thống bảo hành nhân công trọn đời cho các dự án repipe toàn diện (nước, thoát nước hoặc khí đốt). Nhóm hỗ trợ của chúng tôi sử dụng dữ liệu giám sát IoT để cung cấp phản ứng chẩn đoán nhanh chóng, giảm thiểu thời gian chết và đảm bảo tính toàn vẹn của hệ thống.",
        "pb_warranty_p2": "Bảo hành của nhà sản xuất áp dụng cho tất cả vật liệu công nghiệp được sử dụng, với Morales Plumbing đóng vai trò là điểm liên lạc kỹ thuật chính cho tất cả các câu hỏi liên quan đến bảo hành và kiểm toán hệ thống.",
        "pb_warranty_note": "*Giám sát IoT:* Đề cập đến việc sử dụng công nghệ thông minh (van ngắt nước Wi-Fi, cảm biến rò rỉ, máy nước nóng thông minh) gửi dữ liệu và cảnh báo lên đám mây để chẩn đoán phòng ngừa nhanh chóng.",
        "pb_prose_p1": "ORION Price Book v6.0 PRO là cốt lõi vận hành của Morales Plumbing, được thiết kế để cung cấp sự minh bạch tuyệt đối trong kỹ thuật chi phí. Danh mục này được cập nhật đến tháng 12 năm 2024 cho Vùng Vịnh California, được phát triển theo các hướng dẫn nghiêm ngặt của Hội đồng Giấy phép Nhà thầu Bang California (CSLB) và Quy chuẩn Ống nước Thống nhất (UPC), đảm bảo mỗi can thiệp kỹ thuật đều được hỗ trợ bởi các tiêu chuẩn an toàn công nghiệp và bền vững môi trường.",
        "pb_prose_p2": "Cấu trúc của tài liệu này ưu tiên sự rõ ràng cho khách hàng, loại bỏ các tính toán phức tạp tại chỗ và đảm bảo mỗi báo giá đều phản ánh việc sử dụng vật liệu cấp công nghiệp và các phương pháp chính xác đã được kiểm duyệt theo các giao thức hiệu quả cao. Tại Morales Plumbing, chúng tôi không chỉ sửa chữa đường ống; chúng tôi thiết kế các hệ thống thủy lực bền vững cho thế hệ tương lai.",
        "pb_prose_p3": "Phương pháp của chúng tôi kết hợp ước tính dựa trên AI với hơn 21 năm kinh nghiệm thực địa, cho phép tỷ lệ chính xác 99% trong phân bổ tài nguyên và dự báo tiến độ. Chọn ORION là bạn đang chọn một đối tác cơ sở hạ tầng chiến lược cam kết với mức độ xuất sắc kỹ thuật và tính chính trực cao nhất.",
        "aq_title": "ORION AQUA GUARD v1.0",
        "aq_desc": "Giám sát và quản lý nâng cao các hệ thống xử lý nước độ chính xác cao. Phân tích pH, độ cứng và lọc theo thời gian thực.",
        "aq_feat1": "Giám sát IoT",
        "aq_feat2": "Tự động rửa ngược",
        "aq_feat3": "Cảnh báo độ tinh khiết",
        "aq_prose_p1": "ORION AQUA GUARD v1.0 đại diện cho đỉnh cao của quản lý làm sạch nước dân cư và thương mại. Hệ thống này sử dụng mạng lưới các cảm biến IoT để liên tục giám sát chất lượng nước đầu vào, đo lường các biến số như độ cứng (hạt trên mỗi gallon), mức pH và nồng độ chất gây ô nhiễm. Dữ liệu được xử lý thông qua công cụ ORION độc quyền của chúng tôi để tối ưu hóa hiệu suất lọc và tiêu thụ muối.",
        "aq_prose_p2": "Ngoài việc làm mềm đơn giản, Aqua Guard quản lý các đơn vị thẩm thấu ngược đa tầng và hệ thống khử trùng UV. Người dùng nhận được cảnh báo thời gian thực thông qua hệ sinh thái ORION về vòng đời bộ lọc và độ tinh khiết giảm, đảm bảo nước dùng cho tiêu thụ và cơ sở hạ tầng duy trì ở tiêu chuẩn cấp phòng thí nghiệm.",
        "aq_prose_p3": "Bằng cách tích hợp Aqua Guard vào mạng lưới thủy lực của bạn, bạn kéo dài tuổi thọ của tất cả các thiết bị và phụ kiện hạ nguồn. Khả năng bảo trì dự đoán của hệ thống đảm bảo chỉ cần can thiệp khi cần thiết về mặt thống kê, từ đó tối đa hóa chất lượng nước và ROI của hệ thống.",
        "hn_title": "ORION HYDRAULIC NEXUS",
        "hn_desc": "Thiết kế thủy lực tích hợp CAD và mô phỏng áp suất cho cơ sở hạ tầng phức tạp. Phân phối lưu lượng thể tích được tối ưu hóa.",
        "hn_feat1": "Tích hợp CAD",
        "hn_feat2": "Lập bản đồ áp suất",
        "hn_feat3": "Mô phỏng rò rỉ",
        "hn_prose_p1": "ORION HYDRAULIC NEXUS là bộ thiết kế chuyên nghiệp của chúng tôi để quy hoạch và mô phỏng cơ sở hạ tầng thủy lực áp suất cao. Sử dụng bản thiết kế tích hợp CAD, chúng tôi tạo ra một bản sao kỹ thuật số của hệ thống ống nước của bạn để phân tích động lực học dòng chảy, sụt áp trên đường chạy dài và biến số giãn nở nhiệt. Điều này rất quan trọng đối với các dự án dân cư cao cấp và thương mại nhiều tầng, nơi các ước tính tiêu chuẩn thường thất bại.",
        "hn_prose_p2": "Hệ thống cho phép các kỹ sư của chúng tôi kiểm tra áp lực mạng ảo trong các tình huống nhu cầu cao điểm khác nhau, xác định các điểm yếu tiềm ẩn trước khi lắp đặt một đường ống. Phương pháp luận này đảm bảo mỗi phụ kiện đều nhận được áp suất chính xác theo yêu cầu UPC, loại bỏ 'điểm chết' và tối ưu hóa tốc độ cung cấp nước.",
        "hn_prose_p3": "Hydraulic Nexus cũng tích hợp với chẩn đoán nhiệt của chúng tôi, cho phép chúng tôi phủ dữ liệu nhiệt thời gian thực lên bản thiết kế gốc để phát hiện rò rỉ chính xác và kiểm toán cơ sở hạ tầng. Đây là công cụ quyền lực cho kỹ thuật ống nước chính xác.",
        "wh_title": "ORION THERMO CORE v2.0",
        "wh_desc": "Hệ thống chẩn đoán và tối ưu hóa thông minh cho máy nước nóng không bình chứa hiệu suất cao. Cảnh báo đóng cặn dự đoán và điều chỉnh đốt cháy.",
        "wh_feat1": "Điều chỉnh đốt cháy",
        "wh_feat2": "AI đóng cặn",
        "wh_feat3": "Tối ưu hóa năng lượng",
        "wh_prose_p1": "ORION THERMO CORE v2.0 là nền tảng quản lý chuyên dụng cho các hệ thống làm nóng nước không bình chứa hiệu suất cao. Không giống như các máy nước nóng truyền thống, các đơn vị không bình chứa hiện đại đòi hỏi sự điều chỉnh đốt cháy chính xác và tẩy cặn bộ trao đổi nhiệt định kỳ để duy trì xếp hạng AFUE 90%+. Thermo Core sử dụng cảm biến âm thanh và lưu lượng để phát hiện dấu hiệu sớm nhất của sự tích tụ khoáng chất.",
        "wh_prose_p2": "Nền tảng cung cấp lập lịch tự động cho các chu kỳ xả dựa trên mô hình sử dụng thực tế thay vì lịch trình tùy ý. Nó cũng giám sát các chu kỳ đánh lửa và tỷ lệ khí-không khí để đảm bảo hệ thống hoạt động ở hiệu suất nhiệt đỉnh cao, trực tiếp giảm chi phí tiện ích hàng tháng và dấu chân carbon.",
        "wh_prose_p3": "Với Thermo Core, Morales Plumbing cung cấp trải nghiệm 'thiết lập và quên' cho việc cung cấp nước nóng cao cấp. Tích hợp hệ thống vào hệ sinh thái ORION cho phép chẩn đoán từ xa, nghĩa là các kỹ sư của chúng tôi thường xác định và giải quyết các vấn đề hiệu suất trước khi khách hàng nhận thấy nhiệt độ giảm.",
        "pb_hero_title": "ORION PRICE BOOK v6.0 PRO",
        "pb_search_placeholder": "Tìm kiếm dịch vụ (vd: Máy nước nóng, Thoát nước, Bản đồ AI...)",
        "cat_all": "Tất cả",
        "cat_diagnostic": "Chẩn đoán",
        "cat_engineering": "Kỹ thuật",
        "cat_eco": "Bền vững sinh thái",
        "cat_safety": "An toàn",
        "price_standard": "Tiêu chuẩn",
        "price_member": "Thành viên",
        "lbl_client_view": "Góc nhìn Khách hàng:",
        "lbl_tech_view": "Thông số Kỹ thuật & Vật liệu (3 Cấp độ):",
        "doc_title": "Đề xuất chiến lược",
        "doc_subtitle": "Làm chủ hệ thống ống nước thông minh & Kỹ thuật môi trường",
        "sig_name": "Alex G. Espinosa",
        "profile_header_role": "Kiến trúc sư giải pháp AI cấp cao | Kỹ sư môi trường | Quản lý dự án",
        "app_tratamiento_title": "Hệ thống xử lý nước",
        "app_tratamiento_detail": "Ứng dụng Xử lý nước quản lý các chu kỳ lọc và làm sạch nâng cao. Cung cấp dữ liệu thời gian thực về độ cứng của nước, mức pH và hiệu quả loại bỏ chất gây ô nhiễm, cho phép bảo trì dự đoán các hệ thống RO công nghiệp.",
        "app_redes_title": "Thiết kế mạng lưới thủy lực",
        "app_redes_detail": "Ứng dụng Thiết kế Mạng lưới Thủy lực của chúng tôi cho phép mô phỏng động lực học chất lỏng phức tạp trong môi trường dân cư và thương mại. Sử dụng các thuật toán chuẩn ISO để tối ưu hóa kích thước đường ống và phân phối áp suất, giảm lãng phí vật liệu và đảm bảo tuân thủ UPC/CPC.",
        "app_heaters_title": "Máy nước nóng không bình chứa",
        "app_heaters_detail": "Ứng dụng này tối ưu hóa việc lắp đặt và hiệu suất của các hệ thống làm nóng nước không bình chứa. Tính toán nhu cầu lưu lượng đỉnh và yêu cầu áp suất khí để đảm bảo cung cấp nước nóng không bị gián đoạn, bao gồm một mô-đun chẩn đoán để khắc phục sự cố.",
        "legal_title": "Khung pháp lý & Bảo mật mạng",
        "sec1_title": "Kỹ thuật môi trường & Phát triển bền vững",
        "sec1_legal_p1": "Tất cả nội dung trên nền tảng này, bao gồm nhưng không giới hạn ở video công ty, hình ảnh 3D được tạo, mã nguồn và cấu trúc cơ sở dữ liệu ORION Price Book v6.0 PRO, được bảo vệ nghiêm ngặt bởi luật sở hữu trí tuệ và bản quyền của Hoa Kỳ và Bang California.",
        "sec1_legal_li1": "Morales Plumbing giữ quyền độc quyền đối với thương hiệu, phương pháp kỹ thuật, cơ sở khách hàng và danh mục dịch vụ kỹ thuật của mình.",
        "sec1_legal_li2": "NeKon AI aGent Consulting giữ quyền đồng tác giả và các quyền đối với hạ tầng AI ('Joe AI'), mô hình mạng thần kinh, hệ thống chẩn đoán thị giác máy tính và công nghệ tự động hóa hệ thống ORION cơ bản.",
        "sec1_legal_p2": "Nghiêm cấm sao chép, copy, cào, phân phối hoặc sử dụng thương mại trái phép bất kỳ tài liệu đa phương tiện nào được lưu trữ trong hệ sinh thái kỹ thuật số này.",
        "sec2_legal_title": "2. Bảo mật mạng và Quyền riêng tư dữ liệu",
        "sec2_legal_p1": "Đảm bảo an toàn cho khách hàng doanh nghiệp (B2B) và dân cư (B2C) của chúng tôi là ưu tiên hàng đầu. Tất cả các hệ thống của chúng tôi hoạt động theo các giao thức bảo mật cấp công nghiệp nghiêm ngặt:",
        "sec2_legal_li1": "Phát hiện nhiệt và hồng ngoại: Việc thu thập dữ liệu cấu trúc thông qua camera nhiệt độ phân giải cao và cảm biến chính xác chỉ được thực hiện cho mục đích chẩn đoán vật lý không xâm lấn.",
        "sec2_legal_li2": "Hợp đồng thông minh và thanh toán: Tất cả hóa đơn và hợp đồng được tạo đều được bảo vệ bằng mã hóa đầu cuối (E2EE).",
        "sec2_legal_li3": "Tương tác với Joe AI: Các truy vấn gửi cho Joe được phân tích ẩn danh để cải thiện công cụ dự đoán, đồng thời tôn trọng quyền riêng tư của người dùng.",
        "sec3_legal_title": "3. Phạm vi tham chiếu (SLA)",
        "sec3_legal_p1": "Việc cung cấp dịch vụ vật lý và thực hiện kỹ thuật chịu sự quản lý của Khung chiến lược ORION và Bảng giá. Bằng cách tương tác với nền tảng:",
        "sec3_legal_li1": "Khách hàng chấp nhận các cấp độ và điều khoản dịch vụ Tốt/Tốt hơn/Tốt nhất phù hợp với các tiêu chuẩn của Thành phố San Jose.",
        "sec3_legal_li2": "Bảo hành lao động và linh kiện tuân thủ nghiêm ngặt Giấy phép CSLB Class C-36 và các quy chuẩn UPC/CPC.",
        "sec3_legal_li3": "Điều kiện chẩn đoán kỹ thuật số: Các báo cáo do AI tạo ra chỉ là báo cáo sơ bộ. Cần có sự xác nhận tại chỗ của kỹ thuật viên có trình độ để cấp phép cuối cùng.",
        "contact_loc": "Vị trí",
        "contact_email": "Email",
        "contact_phone": "Điện thoại",
        "sec1_title": "Kỹ thuật Môi trường & Bền vững",
        "sec1_desc": "Chúng tôi vượt ra ngoài hệ thống ống nước truyền thống bằng cách tích hợp các nguyên tắc kỹ thuật môi trường vào từng thiết kế thủy lực. Chúng tôi ưu tiên hiệu quả sử dụng nước, xử lý an toàn các vật liệu nguy hại (CSLB C-36 Compliance) và các hệ thống không tác động sinh thái trên toàn Bay Area.",
        "sec2_title": "Tích hợp AI & Thị giác Máy tính",
        "sec2_desc": "Hệ thống ORION sử dụng mạng nơ-ron độc quyền để phát hiện rò rỉ không xâm lấn và chẩn đoán hồng ngoại. Thị giác máy tính cho phép chúng tôi lập bản đồ cơ sở hạ tầng với độ chính xác milimet, tối ưu hóa chi phí và tiến độ thực hiện.",
        "sec3_title": "Quy trình Chiến lược (ORION Framework)",
        "sec3_desc": "Phương pháp luận của chúng tôi được xây dựng dựa trên độ chính xác của hợp đồng thông minh và quản lý dự án theo thời gian thực. Từ các dự án công nghiệp quy mô lớn đến kỹ thuật dân dụng cao cấp theo yêu cầu, mọi bước đều được trợ lý AI của chúng tôi, Joe, kiểm tra.",
        "sec4_title": "Mô hình Thực thi Động",
        "sec4_desc": "Chúng tôi điều chỉnh các phương pháp B2B và B2C thông qua ORION Price Book v6.0 PRO. Chúng tôi cung cấp các phương án 'Chỉ nhân công' cho tổng thầu hoặc 'Dự án Trọn gói' với ba cấp độ công nghệ (Good/Better/Best), đảm bảo khả năng mở rộng và hợp đồng chặt chẽ.",
        "cv_header_role": "Kiến trúc sư Giải pháp AI Cấp cao | Kỹ sư Môi trường | Quản lý Dự án",
        "cv_summary_title": "Tóm tắt Chuyên môn",
        "cv_summary_p": "Kỹ sư Môi trường và Kiến trúc sư Giải pháp AI với hơn 21 năm kinh nghiệm đa ngành. Khả năng độc đáo trong việc kết nối các hệ thống kỹ thuật vật lý phức tạp với Trí tuệ Nhân tạo tiên tiến. Chuyên gia trong việc tối ưu hóa quy trình công nghiệp, cơ sở hạ tầng đô thị và các dự án xây dựng cao cấp. Chuyên gia được cấp phép với thành tích đã được chứng minh trong quản lý dự án tại California và kiểm toán môi trường ISO 14001.",
        "cv_exp_title": "Kinh nghiệm Chuyên môn",
        "cv_edu_title": "Giáo dục & Chứng chỉ",
        "cv_skills_title": "Kỹ năng Kỹ thuật",
        "cv_lang_title": "Ngôn ngữ",
        "lbl_tier_good": "GOOD (Tiêu chuẩn)",
        "lbl_tier_better": "BETTER (Cao cấp)",
        "lbl_tier_best": "BEST (Tối ưu)",
        "lbl_justification": "Lý do:",
        "lbl_materials": "Vật liệu:",
        "lbl_tools": "Công cụ/Thiết bị:",
        "lbl_time": "Thời gian ước tính:",
        "btn_view_detail": "View Technical & Commercial Details",
        "lbl_tech_specs": "Technical Specifications",
        "nav_back": "← Back to Catalog",
        "eco_podcasts_card_title": "Thư viện Podcast ORION",
        "eco_podcasts_card_desc": "Các âm thanh tương tác có độ trung thực cao và các phân tích phản biện về cuộc cách mạng AI trong cơ sở hạ tầng nước và các khung tuân thủ của California.",
        "btn_open_podcasts": "Nghe các Podcast",
        "multimedia_title": "Thư viện Podcast ORION",
        "multimedia_subtitle": "Hiểu biết sâu sắc về âm thanh độ trung thực cao & Phân tích phản biện",
        "mp_podcasts_title": "Chuỗi Hệ sinh thái MP",
        "pod_type_deep_dive": "Phân tích Sâu",
        "mp_pod_1_title": "AI Thung lũng Silicon biến đổi ngành ống nước hiện đại",
        "btn_listen": "Nghe Ngay",
        "pod_type_brief": "Tóm tắt",
        "mp_pod_2_title": "AI dự đoán rò rỉ nước",
        "pod_type_critique": "Bình luận",
        "mp_pod_3_title": "Chẩn đoán AI & Trách nhiệm Pháp lý",
        "ep_podcasts_title": "Chuỗi EP Estimator Pro",
        "ep_pod_1_title": "EP PLUMBING: Phân tích Phản biện",
        "ep_pod_2_title": "Thợ sửa ống nước AI trong túi bạn",
        "pod_type_debate": "Tranh luận",
        "ep_pod_3_title": "Chẩn đoán & Khung pháp lý",


    
    }
};;


/**
 * CORE RENDERING ENGINE
 * Applies translations based on data-i18n keys
 */
function setLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    localStorage.setItem('morales_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all podcast language tags dynamically
    document.querySelectorAll('.pod-lang').forEach(el => {
        el.innerText = lang.toUpperCase();
    });

    // Update bottom player language tag if present
    const pLang = document.getElementById('player-lang');
    if (pLang) {
        pLang.innerText = lang.toUpperCase();
    }

    // Custom updates (like Joe's initial greeting)
    const joeMsg = document.querySelector('.msg.bot');
    if (joeMsg && translations[lang]['joe_welcome']) {
        // Only update if it's the first message
        if (joeHistory.length === 0) {
            joeMsg.innerText = translations[lang]['joe_welcome'];
        }
    }
}
/**
 * NAVIGATION SYSTEM
 */
function navigate(sectionId, pushState = true) {
    const sections = document.querySelectorAll('.page-section');
    
    // If we are not on a page with sections (like index.html), let the hash links work normally
    if (sections.length === 0) return;

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target
    const target = document.getElementById(sectionId) || document.getElementById('home');
    if (target && target.classList.contains('page-section')) {
        target.classList.add('active');
        
        // Update nav links active state
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
        
        window.scrollTo(0, 0);
        if (pushState) {
            history.pushState({ sectionId }, '', '#' + sectionId);
        }
    }
}

window.addEventListener('popstate', (event) => {
    let sectionId = 'home';
    if (event.state && event.state.sectionId) {
        sectionId = event.state.sectionId;
    } else if (window.location.hash) {
        sectionId = window.location.hash.substring(1);
    }
    navigate(sectionId, false);
});

window.addEventListener('hashchange', () => {
    const sectionId = window.location.hash.substring(1) || 'home';
    navigate(sectionId, false);
});

// ============================================================
//  JOE AI ASSISTANT - Real API Integration
// ============================================================

// Conversation history for multi-turn chat
const joeHistory = [];

// Key rotation state
let geminiKeyIndex = 0;
let openaiKeyIndex  = 0;

function toggleJoe() {
    document.getElementById('joe-container').classList.toggle('assistant-hidden');
}

async function sendToJoe() {
    const input = document.getElementById('joe-query');
    const text  = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = '';

    // Show typing indicator
    const typingId = addTypingIndicator();

    // Add to history
    joeHistory.push({ role: 'user', content: text });

    let reply = null;

    // Try Gemini first (rotate through keys)
    if (typeof GEMINI_KEYS !== 'undefined' && GEMINI_KEYS.length > 0) {
        for (let attempt = 0; attempt < GEMINI_KEYS.length; attempt++) {
            const keyIdx = (geminiKeyIndex + attempt) % GEMINI_KEYS.length;
            const key    = GEMINI_KEYS[keyIdx];
            if (!key || key.startsWith('TU_')) continue;

            try {
                reply = await callGemini(key);
                geminiKeyIndex = (keyIdx + 1) % GEMINI_KEYS.length;
                break;
            } catch (e) {
                console.warn(`Gemini key ${keyIdx} failed:`, e.message);
            }
        }
    }

    // Fallback to OpenAI if Gemini failed
    if (!reply && typeof OPENAI_KEYS !== 'undefined' && OPENAI_KEYS.length > 0) {
        for (let attempt = 0; attempt < OPENAI_KEYS.length; attempt++) {
            const keyIdx = (openaiKeyIndex + attempt) % OPENAI_KEYS.length;
            const key    = OPENAI_KEYS[keyIdx];
            if (!key || key.startsWith('TU_')) continue;

            try {
                reply = await callOpenAI(key);
                openaiKeyIndex = (keyIdx + 1) % OPENAI_KEYS.length;
                break;
            } catch (e) {
                console.warn(`OpenAI key ${keyIdx} failed:`, e.message);
            }
        }
    }

    // Final fallback - local smart response
    if (!reply) {
        reply = getJoeLocalFallback(text.toLowerCase());
    }

    removeTypingIndicator(typingId);
    addMessage(reply, 'bot');
    joeHistory.push({ role: 'assistant', content: reply });
}

async function callGemini(apiKey) {
    const model   = (typeof GEMINI_MODEL !== 'undefined') ? GEMINI_MODEL : 'gemini-1.5-flash';
    const sysPrompt = (typeof JOE_SYSTEM_PROMPT !== 'undefined') ? JOE_SYSTEM_PROMPT : 'Eres Joe, asistente IA de Morales Plumbing, experto en plomería.';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    // Build Gemini contents array (system + history)
    const contents = [
        { role: 'user', parts: [{ text: sysPrompt }] },
        { role: 'model', parts: [{ text: '¡Entendido! Soy Joe, el asistente IA de Morales Plumbing. ¿En qué te ayudo?' }] },
        ...joeHistory.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        }))
    ];

    const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents,
            generationConfig: { temperature: 0.75, maxOutputTokens: 512 }
        })
    });

    if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error?.message || `HTTP ${resp.status}`);
    }

    const data = await resp.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

async function callOpenAI(apiKey) {
    const model = (typeof OPENAI_MODEL !== 'undefined') ? OPENAI_MODEL : 'gpt-4o-mini';
    const sysPrompt = (typeof JOE_SYSTEM_PROMPT !== 'undefined') ? JOE_SYSTEM_PROMPT : 'Eres Joe, asistente IA de Morales Plumbing, experto en plomería.';

    const messages = [
        { role: 'system', content: sysPrompt },
        ...joeHistory
    ];

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model,
            messages,
            temperature: 0.75,
            max_tokens: 512
        })
    });

    if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error?.message || `HTTP ${resp.status}`);
    }

    const data = await resp.json();
    return data.choices?.[0]?.message?.content || null;
}

function getJoeLocalFallback(input) {
    if (input.match(/hola|hello|hi|buenos|saludos/)) return "¡Hola! Soy Joe, el asistente IA de Morales Plumbing. ¿Cómo te puedo ayudar hoy con tu infraestructura hidráulica? 🛠️";
    if (input.match(/precio|price|cuanto|cost|cotizaci/)) return "Contamos con el ORION PRICE BOOK v6.0 PRO, que incluye +100 Servicios Profesionales con 3 niveles de ingeniería (Good/Better/Best). Puedes ver el catálogo en la sección 'Ecosistema'.";
    if (input.match(/cobre|copper|elite|repiping/)) return "Nuestro módulo Elite Copper Renovations reemplaza sistemas obsoletos por tuberías de cobre de alta pureza (Tipos L y K). Ofrecemos durabilidad sísmica extrema y agua libre de plásticos para el Bay Area.";
    if (input.match(/septi|septic|fosa|drenaje/)) return "En Septic Engineering, instalamos biodigestores anaerobios de flujo ascendente y campos de infiltración inteligentes. Es la solución perfecta y ecológica (cumpliendo con la CA Water Board) para zonas rurales o off-grid.";
    if (input.match(/agua|water|reuso|greywater/)) return "Tenemos sistemas de Recolección de Aguas Pluviales y Reutilización de Aguas Grises. Ayudamos a mitigar la sequía de California y reducir tu dependencia municipal hasta en un 60%.";
    if (input.match(/servicio|service|hacen|cuale/)) return "Ofrecemos ingeniería de precisión: Diagnóstico por Termografía, Elite Copper Renovations, Septic Engineering, Eco-Retrofitting y Diseño CAD de Redes Hidráulicas.";
    if (input.match(/fuga|leak/)) return "🚨 Para fugas, cierra el suministro principal de inmediato. Usamos termografía infrarroja FLIR y sensores acústicos para localizar la falla sin destruir tus paredes. Contacta a nuestro equipo ya.";
    if (input.match(/plomeria|plumbing|tuber/)) return "Somos los arquitectos del agua en San Jose. Especialistas en infraestructura hidráulica inteligente, integración de IA (Ecosistema ORION) y plomería CSLB C-36.";
    if (input.match(/emergencia|emergency/)) return "🚨 Esto es una emergencia. Por favor llama inmediatamente a nuestra terminal de contacto al (669) 234-2444.";
    if (input.match(/app|aplicacion|estimador|orion|price book/)) return "ORION es nuestro ecosistema tecnológico de plomería: Estimador Pro, Price Book v6.0, Portal MP y simuladores hidráulicos CAD. Tecnología de punta al servicio del flujo.";
    return "¡Excelente pregunta! Como IA, aún estoy aprendiendo algunos detalles específicos. Te invito a explorar nuestros servicios Elite en la sección 'Ecosistema' o contactar a Alex Espinosa directamente para ingeniería de alto nivel. 🔧";
}

function addMessage(text, sender) {
    const container = document.getElementById('joe-messages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.classList.add('msg', sender);
    msg.innerText = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function addTypingIndicator() {
    const container = document.getElementById('joe-messages');
    if (!container) return;
    const id = 'typing-' + Date.now();
    const div = document.createElement('div');
    div.classList.add('msg', 'bot', 'typing-indicator');
    div.id = id;
    div.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

// ============================================================
//  WATER RIPPLE CANVAS EFFECT
// ============================================================
function initWarpCanvas() {
    const canvas = document.getElementById('warp-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let W, H, cx, cy;
    const STAR_COUNT = 400;
    const MAX_R = 1.5;
    const SPEED = 0.6; // slow, circular expansion like water

    // ? CRITICAL: call resize() BEFORE creating any ripples
    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
        cx = W / 2;
        cy = H / 2;
    }
    resize(); // <-- must be FIRST

    function createStar(spread) {
        const angle = Math.random() * Math.PI * 2;
        const dist  = Math.random() * 3 + 0.5;
        const vx = Math.cos(angle);
        const vy = Math.sin(angle);
        const f  = spread !== undefined ? spread : 0;
        return {
            x:  cx + vx * (Math.hypot(W, H) * 0.5 * f + dist),
            y:  cy + vy * (Math.hypot(W, H) * 0.5 * f + dist),
            px: cx + vx * (Math.hypot(W, H) * 0.5 * f),
            py: cy + vy * (Math.hypot(W, H) * 0.5 * f),
            vx, vy,
            speed: Math.random() * SPEED * 0.7 + SPEED * 0.3,
            size:  Math.random() * MAX_R * 0.5 + 0.3,
            color: Math.random() < 0.12
                ? 'rgba(0,229,255,'
                : Math.random() < 0.08
                    ? 'rgba(245,166,35,'
                    : 'rgba(220,235,255,'
        };
    }

    function resetStar(s) {
        const ns = createStar(0);
        Object.assign(s, ns);
    }

    const stars = [];
    // Pre-spread stars across the field so canvas is lively immediately
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(createStar(Math.random()));
    }

    function draw() {
        // Semi-transparent black overlay creates the streak/trail effect
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < stars.length; i++) {
            const s = stars[i];

            // Accelerate as star gets further from center
            const distFromCenter = Math.hypot(s.x - cx, s.y - cy);
            const speedMult = 1 + (distFromCenter / Math.min(W, H)) * 5;

            s.px = s.x;
            s.py = s.y;
            s.x += s.vx * s.speed * speedMult * 0.55;
            s.y += s.vy * s.speed * speedMult * 0.55;

            if (s.x < -10 || s.x > W + 10 || s.y < -10 || s.y > H + 10) {
                resetStar(s);
                continue;
            }

            const sizeFactor = Math.min(1, distFromCenter / (Math.hypot(W, H) * 0.45));
            const curSize    = s.size + sizeFactor * MAX_R * 2;
            const alpha      = Math.min(0.95, 0.25 + sizeFactor * 0.75);

            // Streak line
            ctx.beginPath();
            ctx.strokeStyle = s.color + alpha + ')';
            ctx.lineWidth   = curSize;
            ctx.lineCap     = 'round';
            ctx.moveTo(s.px, s.py);
            ctx.lineTo(s.x,  s.y);
            ctx.stroke();

            // Bright tip dot
            ctx.beginPath();
            ctx.fillStyle = s.color + Math.min(1, alpha + 0.25) + ')';
            ctx.arc(s.x, s.y, curSize * 0.7, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
        resize();
        // Re-spread stars on resize so they fill the new dimensions
        for (let i = 0; i < stars.length; i++) {
            const ns = createStar(Math.random() * 0.8);
            Object.assign(stars[i], ns);
        }
    });

    draw();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Warp speed canvas
    initWarpCanvas();

    // Parallax star layers on mouse move
    const layers = document.querySelectorAll('.layer');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        layers.forEach((layer, i) => {
            const depth = (i + 1) * 15;
            layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
    });

    // Default Language
    const savedLang = localStorage.getItem('morales_lang') || 'es';
    setLanguage(savedLang);

    // Link Nav - Fix: only prevent default for internal hash links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                navigate(href.substring(1));
            }
            // External/Subfolder links (like docs/pricebook.html) will work normally
        });
    });

    // Joe Input
    const joeQuery = document.getElementById('joe-query');
    if (joeQuery) {
        joeQuery.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendToJoe();
        });
    }

    // Global Language Button Binding
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (btn && btn.hasAttribute('data-lang')) {
            setLanguage(btn.getAttribute('data-lang'));
        }
    });

    // Initial Navigation based on hash
    const initialSection = window.location.hash.substring(1) || 'home';
    navigate(initialSection, false);
});


// 🏢 COMPANY CARD MODAL 🏢
function toggleCompanyCard() {
    const modal = document.getElementById('company-card-modal');
    if (modal) {
        modal.classList.toggle('active');
    }
}

// 🏢 ORION ECOSYSTEM SUB-TABS 🏢
function toggleAppDetail(appId) {
    const detail = document.getElementById(`detail-${appId}`);
    const btn = document.querySelector(`[data-app="${appId}"] .expand-btn`);
    
    if (detail) {
        const isActive = detail.classList.contains('active');
        
        // Close all other details
        document.querySelectorAll('.app-detail-tab').forEach(d => d.classList.remove('active'));
        document.querySelectorAll('.expand-btn').forEach(b => b.classList.remove('open'));
        
        if (!isActive) {
            detail.classList.add('active');
            if (btn) btn.classList.add('open');
            detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// ============================================================
//  MULTIMEDIA MODULE: INTEGRATED LOCAL AUDIO PLAYER
// ============================================================

let currentAudio = null;
let currentPlayBtn = null;
let activePodId = null;
let activePodLang = null;

function playPodcast(button) {
    const baseAudioSrc = button.getAttribute('data-audio');
    const curLang = localStorage.getItem('morales_lang') || 'es';
    
    // Determine the dynamic audio source using the selected language
    let audioSrc = baseAudioSrc;
    if (baseAudioSrc && baseAudioSrc.endsWith('.m4a')) {
        audioSrc = baseAudioSrc.replace('.m4a', `_${curLang}.m4a`);
    }

    const podId = button.getAttribute('data-id');
    const titleKey = button.getAttribute('data-title-key');
    const badgeKey = button.getAttribute('data-badge-key');
    const lang = curLang.toUpperCase();
    const series = button.getAttribute('data-series');

    // 1. If this same podcast is already loaded
    if (activePodId === podId && activePodLang === curLang && currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            updatePlayerState(true);
        } else {
            currentAudio.pause();
            updatePlayerState(false);
        }
        return;
    }

    // 2. Stop and clear any active podcast
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // Clear playing-active styles from previous card
    document.querySelectorAll('.pod-item').forEach(item => {
        item.classList.remove('playing-active');
    });
    document.querySelectorAll('.pod-play-btn .play-icon').forEach(icon => {
        icon.innerText = '▶';
    });

    // 3. Setup new audio instance
    currentAudio = new Audio(audioSrc);
    currentPlayBtn = button;
    activePodId = podId;
    activePodLang = curLang;

    // Apply active classes to the container card
    const card = document.getElementById(`item-${podId}`);
    if (card) {
        card.classList.add('playing-active');
    }

    // Slide up bottom player bar
    const persistentPlayer = document.getElementById('persistent-player');
    if (persistentPlayer) {
        persistentPlayer.classList.remove('player-hidden');
    }

    // 4. Bind Audio Events
    currentAudio.addEventListener('timeupdate', () => {
        if (!currentAudio) return;
        const current = currentAudio.currentTime;
        const duration = currentAudio.duration || 0;
        
        // Update current time label
        const curLabel = document.getElementById('player-time-current');
        if (curLabel) curLabel.innerText = formatTime(current);

        // Update slider input range
        const slider = document.getElementById('player-slider');
        if (slider && duration > 0) {
            slider.value = (current / duration) * 100;
        }
    });

    currentAudio.addEventListener('loadedmetadata', () => {
        if (!currentAudio) return;
        const durLabel = document.getElementById('player-time-duration');
        if (durLabel) durLabel.innerText = formatTime(currentAudio.duration);
    });

    currentAudio.addEventListener('ended', () => {
        nextPodcast();
    });

    // 5. Update Metadata in Player Panel
    const dynamicTitle = translations[curLang][titleKey] || button.closest('.pod-item').querySelector('h4').innerText;
    const dynamicBadge = translations[curLang][badgeKey] || button.closest('.pod-item').querySelector('.pod-badge').innerText;

    const pTitle = document.getElementById('player-title');
    const pBadge = document.getElementById('player-badge');
    const pLang = document.getElementById('player-lang');
    const pSeries = document.getElementById('player-series');

    if (pTitle) {
        pTitle.innerText = dynamicTitle;
        pTitle.setAttribute('data-i18n', titleKey);
    }
    if (pBadge) {
        pBadge.innerText = dynamicBadge;
        pBadge.setAttribute('data-i18n', badgeKey);
        // Match colors of badge categories
        pBadge.className = `player-badge ${badgeKey.replace('pod_type_', '')}`;
    }
    if (pLang) pLang.innerText = lang;
    if (pSeries) pSeries.innerText = series === 'MP' ? 'MP Series' : 'EP Series';

    // 6. Set volume
    const volSlider = document.getElementById('player-vol-slider');
    if (volSlider) {
        currentAudio.volume = volSlider.value / 100;
    }

    // 7. Play the track!
    currentAudio.play().then(() => {
        updatePlayerState(true);
    }).catch(err => {
        console.error("Playback failed:", err);
    });
}

function updatePlayerState(isPlaying) {
    const playPauseBtn = document.getElementById('player-btn-play-pause');
    if (playPauseBtn) {
        const symbol = playPauseBtn.querySelector('.play-symbol');
        if (symbol) symbol.innerText = isPlaying ? '⏸' : '▶';
    }

    if (currentPlayBtn) {
        const icon = currentPlayBtn.querySelector('.play-icon');
        if (icon) icon.innerText = isPlaying ? '⏸' : '▶';
    }
}

function togglePlayPause() {
    if (!currentAudio) return;
    if (currentAudio.paused) {
        currentAudio.play();
        updatePlayerState(true);
    } else {
        currentAudio.pause();
        updatePlayerState(false);
    }
}

function seekAudio() {
    if (!currentAudio || !currentAudio.duration) return;
    const slider = document.getElementById('player-slider');
    if (slider) {
        currentAudio.currentTime = (slider.value / 100) * currentAudio.duration;
    }
}

function setVolume() {
    const volSlider = document.getElementById('player-vol-slider');
    if (volSlider && currentAudio) {
        currentAudio.volume = volSlider.value / 100;
    }
}

function closePlayer() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    activePodId = null;
    activePodLang = null;
    currentPlayBtn = null;

    document.querySelectorAll('.pod-item').forEach(item => {
        item.classList.remove('playing-active');
    });
    document.querySelectorAll('.pod-play-btn .play-icon').forEach(icon => {
        icon.innerText = '▶';
    });

    const persistentPlayer = document.getElementById('persistent-player');
    if (persistentPlayer) {
        persistentPlayer.classList.add('player-hidden');
    }
}

function prevPodcast() {
    const buttons = Array.from(document.querySelectorAll('.pod-play-btn'));
    if (buttons.length === 0) return;
    
    let curIndex = buttons.findIndex(btn => btn.getAttribute('data-id') === activePodId);
    if (curIndex === -1) return;
    
    let prevIndex = (curIndex - 1 + buttons.length) % buttons.length;
    playPodcast(buttons[prevIndex]);
}

function nextPodcast() {
    const buttons = Array.from(document.querySelectorAll('.pod-play-btn'));
    if (buttons.length === 0) return;
    
    let curIndex = buttons.findIndex(btn => btn.getAttribute('data-id') === activePodId);
    if (curIndex === -1) return;
    
    let nextIndex = (curIndex + 1) % buttons.length;
    playPodcast(buttons[nextIndex]);
}

function formatTime(secs) {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

