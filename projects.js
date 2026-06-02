const initialProjects = [
    {
        id: 1,
        title: "Industrial Robotic Arm",
        category: "Mechanical Design",
        description: "A 6-axis robotic arm designed for precision assembly lines. This project involved complex kinematics, stress analysis of the joints, and integration of high-torque servo motors. Optimized for a 15kg payload with minimal deflection.",
        images: [
            "assets/projects/robotic-arm-1.png",
            "assets/projects/robotic-arm-2.png",
            "assets/projects/robotic-arm-3.png"
        ],
        tags: ["SolidWorks", "FEA", "Robotics"]
    },
    {
        id: 2,
        title: "Medical Device Housing",
        category: "Injection Molding",
        description: "Designed for high-volume injection molding, this housing for a portable medical scanner required strict adherence to ISO 13485 standards. Included complex draft angles, ribbing for structural integrity, and snap-fit assemblies.",
        images: [
            "assets/projects/medical-housing-1.png",
            "assets/projects/medical-housing-2.png"
        ],
        tags: ["Injection Molding", "Medical", "DFM"]
    },
    {
        id: 3,
        title: "Electric Vehicle Transmission",
        category: "Automotive",
        description: "A compact single-speed reduction gearbox for a mid-size EV. The design focused on thermal management of the lubricant and noise/vibration/harshness (NVH) reduction through precision gear tooth profiling.",
        images: [
            "assets/projects/ev-transmission-1.png",
            "assets/projects/ev-transmission-2.png"
        ],
        tags: ["Gear Design", "Thermal Analysis", "EV"]
    },
    {
        id: 4,
        title: "Centrifugal Pump Impeller",
        category: "CFD Analysis",
        description: "CFD optimized impeller for a heavy-duty industrial pump. Redesigned the vane geometry to increase hydraulic efficiency by 12% and reduce cavitation risk in high-temperature applications.",
        images: [
            "assets/projects/pump-impeller-1.png",
            "assets/projects/pump-impeller-2.png"
        ],
        tags: ["CFD", "Fluid Dynamics", "Pump Design"]
    }
];

// Auto-deployed from Admin Dashboard
// Images stored at assets/projects/ and assets/about/

let projects = initialProjects;

const initialAboutData = {
    subtitle: "About Atif",
    title: "The Engineer Behind \nthe Brand",
    desc: "Based in Lahore, Pakistan, Atif Engineering Solutions brings professional corporate rigor to the freelance world. With 6 years of experience and 100+ projects delivered worldwide, we specialize in high-stakes mechanical engineering.\n\nOur services span from initial CAD design to advanced simulations (CFD/FEA) and manufacturing drawings for injection molding and 3D printing.",
    image: ""
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
