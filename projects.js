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

// --- PROJECT IMAGE STORAGE ARCHITECTURE ---
// All project images are stored as static files inside the repository at:
//   assets/projects/<image-name>.png
//
// Image URLs use relative paths (e.g., "assets/projects/robotic-arm-1.png")
// so they resolve correctly on GitHub Pages, Vercel, or any static host.
//
// To add a new project image:
//   1. Place the image file inside assets/projects/ in your repository.
//   2. Reference it by relative path in the images array above.
//   3. Commit and push — the image will be globally available.
//
// localStorage is NOT used for project data because base64/Blob URLs
// are ephemeral and do not persist for other users or across deployments.

let projects = initialProjects;

const initialAboutData = {
    subtitle: "About Atif",
    title: "The Engineer Behind \nthe Brand",
    desc: "Based in Lahore, Pakistan, Atif Engineering Solutions brings professional corporate rigor to the freelance world. With 6 years of experience and 100+ projects delivered worldwide, we specialize in high-stakes mechanical engineering.\n\nOur services span from initial CAD design to advanced simulations (CFD/FEA) and manufacturing drawings for injection molding and 3D printing.",
    image: ""
};

let aboutData = JSON.parse(localStorage.getItem('atif_about')) || initialAboutData;

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
    localStorage.setItem('atif_about', JSON.stringify(newData));
    aboutData = newData;
}
