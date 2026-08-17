const initialProjects = [
    {
        "id": 1780373717034,
        "title": "Minimalist LED Acrylic Pendant Enclosure Design",
        "category": "Product Design ",
        "images": [
            "assets/projects/minimalist-led-acrylic-pendant-enclosure-design-1780373696380-1.png",
            "assets/projects/minimalist-led-acrylic-pendant-enclosure-design-1780373703234-2.png",
            "assets/projects/minimalist-led-acrylic-pendant-enclosure-design-1780373707747-3.png",
            "assets/projects/minimalist-led-acrylic-pendant-enclosure-design-1780373712699-4.png"
        ],
        "description": "Designed a premium, ultra-compact enclosure for an illuminated acrylic car mirror pendant within a strict 20mm height constraint. Optimized the internal space to seamlessly package a 200mAh LiPo battery, Type-C charging port, tactile button, and LED light array. Engineered a precision 6mm slot to maximize the edge-lighting \"pipe\" effect into the acrylic plate. Modeled with strict tolerances and wall thicknesses optimized for SLA/FDM 3D printing to ensure a high-quality, functional first physical prototype. Delivered STEP & STL files.",
        "tags": [
            "Mechanical Design",
            "SolidWorks",
            "3D Prototyping",
            "Consumer Electronics Packaging",
            "Enclosure Design"
        ],
        "videoUrl": ""
    },
    {
        "id": 1786969836460,
        "title": "Precision CNC Rest Plate",
        "category": "Mechanical Design",
        "images": [
            "assets/projects/precision-cnc-rest-plate-1786969827637-1.png",
            "assets/projects/precision-cnc-rest-plate-1786969830669-2.png",
            "assets/projects/precision-cnc-rest-plate-1786969833756-3.png"
        ],
        "description": "Developed a comprehensive, manufacturing-ready 2D technical drawing for a custom CNC-machined component used within a heavy-duty press assembly. The primary focus of this project was translating 3D CAD geometry into actionable manufacturing instructions, ensuring perfect alignment for moving sub-assemblies.\n\nKey engineering skills applied include:\n\nApplied strict GD&T frameworks to communicate design intent and ensure proper assembly interfaces.\n\nImplemented True Position controls with Maximum Material Condition (MMC) for linear bearing pockets to prevent guide rod binding.\n\nSpecified Parallelism tolerances to ensure the flush mounting of high-pressure pneumatic cylinders.\n\nStructured primary, secondary, and tertiary datums (A, B, C) to optimize CNC setup and coordinate measurement.\n\nUtilized H7 limit fits for critical dowel pin locations to guarantee repeatable, rigid assembly.",
        "tags": [
            "SolidWorks",
            "CAD",
            "GD&T",
            "2D Drafting",
            "CNC Machining",
            "Mechanical Engineering",
            "Manufacturing"
        ],
        "videoUrl": ""
    }
];

// Auto-deployed from Admin Dashboard

let projects = initialProjects;

const initialAboutData = {
    "subtitle": "About Atif",
    "title": "The Engineer Behind the Brand",
    "desc": "Based in Lahore, Pakistan, Atif Engineering Solutions brings professional corporate rigor to the freelance world. With 6 years of experience and 100+ projects delivered worldwide, we specialize in high-stakes mechanical engineering.\n\nOur services span from initial CAD design to advanced simulations (CFD/FEA) and manufacturing drawings for injection molding and 3D printing.",
    "image": "assets/about/about-profile.png"
};

let aboutData = initialAboutData;

function getProjects() {
    return projects;
}

function saveProjects(newProjects) {
    projects = newProjects;
}

function getAboutData() {
    return aboutData;
}

function saveAboutData(newData) {
    aboutData = newData;
}
