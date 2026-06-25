# Enfuse.io
## Data Scientist, July 2025 - Present
### Warehouse Management System - AimsPlus Software
Engineered backend APIs supporting order ingestion, planning, allocation, picking and shipping operations for a multi-site
WMS handling 20K+ orders across 4+ locations daily.

#### Package Planning Module
Developed a high-volume Package Planning module and integrated Paccurate for cubing optimization, cartonization and palletization (single, multistage). The module figures out which items go into which boxes, in what orientation, to optimize space along with hazardous material compliance. The response from the packing optimization engine acts as a structured output that can be fed to a floor worker or a sorter and packing robot to perform automated pick-and-pack.

#### End-to-End Shipping Label Pipeline
- Rate Shopping, Carrier and Service Level Optimization: evaluated shipment attributes (dimensions, weight, origin/destination) to auto-select the optimal carrier and shipping mode
- International Compliance: automated customs document generation using SKU-level pricing, HTS codes, and ECCNs for cross-border shipments
- Insurance Procurement: automatically triggered coverage for high-value shipments exceeding a declared value threshold

# Atos Z Data Inc.
## Data Scientist, June 2022 - June 2025
### Real-time 3D Perception and Localization Module for Mobile Platforms
- Developed a real-time 3D shared perception system deployable on mobile platforms (autonomous vehicles, robots, wearables) using NVIDIA Jetson Orin. The system enables multiple agents to localize themselves within a shared 3D environment and collaboratively build a semantically rich map of objects within it.
- The pipeline works as follows: a 3D Gaussian Splatting model (trained via nerfstudio) serves as the global environment representation. Given a single image, 6DGS regresses the camera's full 6-DoF pose within that environment. YOLO then performs instance detection on the image to identify objects of interest, which are passed to Segment Anything (SAM) for precise segmentation masks. These masks are back-projected into 3D space and placed in the environment relative to the localized camera pose, enabling accurate object anchoring in the global map.
- Applications include: autonomous navigation, augmented reality, warehouse & logistics robotics, search & rescue, retail & inventory management

### Indoor Path Navigation in Augmented Reality
- Engineered an automated indoor navigation pipeline for AR-guided wayfinding, eliminating the need for manual store mapping by replacing it with a fully automated, perception-driven approach.
- The pipeline works as follows: a RandLA-Net point cloud segmentation model was fine-tuned to classify key indoor structures — floor, walls, ceiling, and fixed floor-mounted objects. The resulting segmentation is projected into a top-down 2D occupancy map of the environment, cleanly separating navigable space from obstacles. A pathfinding algorithm (Neural A*) is then run on this map between any source and destination to generate an optimal route. The resulting path can be projected back into 3D space and overlaid as an AR navigation guide, leading a user turn-by-turn through the environment.
- This approach reduced manual store mapping effort by 2+ hours per store by automating what was previously a hand-crafted layout generation process.
- Applications include: Retail navigation, Warehouse & logistics, Hospital & campus wayfinding, Emergency response, Museum & exhibition spaces

### Retail Product Localization - BrainCorp
- Built an end-to-end retail product localization system capable of identifying the precise aisle, shelf, and slot position of any product in a store, enabling real-time inventory monitoring and planogram compliance verification.
- The pipeline works as follows: a custom Gradio-based annotation tool was developed to label products at the aisle-shelf-slot level, building the ground truth dataset needed to train and evaluate the system. A heuristic shelf detection algorithm was then devised using image pixel intensity analysis to identify shelf boundaries and segment the aisle image into discrete shelf rows. Within each shelf, slot positions are determined by detecting product boundaries, allowing every item to be assigned an exact aisle-shelf-slot coordinate. A companion Gradio tool was built for performance analysis and visual debugging. The full pipeline was hardened with unit tests to ensure robustness across varying store layouts and lighting conditions.
- Applications include: Inventory monitoring, Planogram compliance, Retail analytics, Robotic restocking

# Havells India Ltd.
## Mechanical Design Engineer, June 2018 - June 2019
Havells India Ltd. is one of the largest Fast Moving Electrical Goods (FMEG) company in India.
Worked for the R&D of pumps at Center for Research and Innovation (CRI) of Havells.
Engaged in all phases of design process for multitude of pump products, components, parts, assemblies, and subassemblies, including drafting, dimensioning, tolerancing, prototyping and documenting results.

### Contaminant Ingress Prevention For Monoblock Pumps
- The objective of the project was to find the cheapest design solution that can be implemented in all monoblock pumps assembly design in order to counter the contaminant ingress problem in these pumps. 
- New designs were developed to introduce a special type of sealing solution and then it was implemented across 14 pump SKUs.
- Also filed a patent application (title of invention - Pump Set Motor Assembly For Preventing Contaminant Ingress, application no. - 201911005525) on 12/02/2019 which was published on 14/08/2020.

### Pumps R&D Lab CAD Layout
- Aided Purchase Order Request finalization for the pumps testing and validation lab at CRI. 
- Prepared a final CAD layout of the lab including components and assembly of testing tanks, tools table, equipments fixtures, pipeline layout etc. 

# Cranfield University
## Visiting Researcher, Feb 2017 - May 2017
### Hardware-In-Loop Test Rig, Electric Vehicles Thermal Management System
- Worked on comparsion of heat exchangers, heat exchanger fluids and the Data Acquisition (DAQ) systems after completing the literature review and understanding the gaps in research.
- Worked on developing CAD models of the test rig, simulation chamber and their components on CATIA and rendered them on Keyshot for reserach and company presentations. 
- Aided in finalising the Purchase Order Request (POR).