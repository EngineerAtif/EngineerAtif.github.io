const initialProjects = [
    {
        "id": 1,
        "title": "Industrial Robotic Arm",
        "category": "Mechanical Design",
        "description": "A 6-axis robotic arm designed for precision assembly lines. This project involved complex kinematics, stress analysis of the joints, and integration of high-torque servo motors. Optimized for a 15kg payload with minimal deflection.",
        "images": [
            "assets/projects/robotic-arm-1.png",
            "assets/projects/robotic-arm-2.png",
            "assets/projects/robotic-arm-3.png"
        ],
        "tags": [
            "SolidWorks",
            "FEA",
            "Robotics"
        ]
    },
    {
        "id": 2,
        "title": "Medical Device Housing",
        "category": "Injection Molding",
        "description": "Designed for high-volume injection molding, this housing for a portable medical scanner required strict adherence to ISO 13485 standards. Included complex draft angles, ribbing for structural integrity, and snap-fit assemblies.",
        "images": [
            "assets/projects/medical-housing-1.png",
            "assets/projects/medical-housing-2.png"
        ],
        "tags": [
            "Injection Molding",
            "Medical",
            "DFM"
        ]
    },
    {
        "id": 3,
        "title": "Electric Vehicle Transmission",
        "category": "Automotive",
        "description": "A compact single-speed reduction gearbox for a mid-size EV. The design focused on thermal management of the lubricant and noise/vibration/harshness (NVH) reduction through precision gear tooth profiling.",
        "images": [
            "assets/projects/ev-transmission-1.png",
            "assets/projects/ev-transmission-2.png"
        ],
        "tags": [
            "Gear Design",
            "Thermal Analysis",
            "EV"
        ]
    },
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
    }
];

// Auto-deployed from Admin Dashboard
// Images stored at assets/projects/ and assets/about/

let projects = initialProjects;

const initialAboutData = {
    "subtitle": "About Atif",
    "title": "The Engineer Behind \nthe Brand",
    "desc": "Based in Lahore, Pakistan, Atif Engineering Solutions brings professional corporate rigor to the freelance world. With 6 years of experience and 100+ projects delivered worldwide, we specialize in high-stakes mechanical engineering.\n\nOur services span from initial CAD design to advanced simulations (CFD/FEA) and manufacturing drawings for injection molding and 3D printing.",
    "image": ""
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
