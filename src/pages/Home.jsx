import FlipCard from '../components/FlipCard';
import SidebarNav from '../components/SidebarNav';
import ProjectGrid from '../components/ProjectGrid';

import tutorReserve from '../assets/images/Projects/TutorReserve.png';
import smartPlate from '../assets/images/Projects/SmartPlate.png';
import campingSupplies from '../assets/images/Projects/CampingSupplies.png';
import empDirectory from '../assets/images/Projects/EmpDirectory.png';
import card1 from '../assets/images/Designs/card-1.jpg';
import card2 from '../assets/images/Designs/card-2.jpg';
import navMockup from '../assets/images/Designs/nav-mockup.jpg';
import fluidSim from '../assets/images/Graphics/FluidSim.png';
import bezier from '../assets/images/Graphics/BezierCurve.png';
import bunny from '../assets/images/Graphics/Bunny.png';
import cubeMap from '../assets/images/Graphics/CubeMapBumpMap.png';
import feather from '../assets/images/Arts/paint_feather.jpg';
import sketch1 from '../assets/images/Arts/sketch_kid1.jpg';
import ocean from '../assets/images/Arts/paint_ocean.jpg';
import sketch2 from '../assets/images/Arts/sketch_kid2.jpg';
import dancer from '../assets/images/Arts/paint_dancer.jpg';
import sketch3 from '../assets/images/Arts/sketch_kid3.jpg';
import nirmitFront from '../assets/images/nirmit-front.png';
import nirmitBack from '../assets/images/nirmit-back.png';

export default function Home() {
  const workProjects = [
    { image: tutorReserve, alt: 'UX Case Study', title: 'UX App Design: TutorReserve' },
    { image: smartPlate, alt: 'UX Case Study', title: 'Mobile App Design: SmartPlate' },
    { image: campingSupplies, alt: 'UX Case Study', title: 'UX Research: Camping Supplies Store' },
    { image: empDirectory, alt: 'Employee Directory App', title: 'Employee Directory App' },
  ];

  const designExperiments = [
    { image: card1, alt: 'Card Design' },
    { image: card2, alt: 'Card Design' },
    { image: navMockup, alt: 'Navigation Designs' },
  ];

  const graphicsProjects = [
    { image: fluidSim, alt: 'Fluid Simulation' },
    { image: bezier, alt: 'Bezier Curve Butterfly' },
    { image: bunny, alt: 'Bunny with Distorted Shaders' },
    { image: cubeMap, alt: 'Displacement and Bump Mapping on a Plane' },
  ];

  const artIllustrations = [
    { image: feather, alt: 'Peacock Feather Painting' },
    { image: sketch1, alt: 'Sketch of a kid' },
    { image: ocean, alt: 'Ocean waves painting' },
    { image: sketch2, alt: 'Sketch of a kid' },
    { image: dancer, alt: 'Colorful painting with a dancer' },
    { image: sketch3, alt: 'Sketch of a kid' },
  ];

  return (
    <div className="container">
      <main>
        <section id="welcome" className="welcome">
          <div className="welcome-wrapper">
            <div className="welcome-content">
              <div className="image-token">
                <FlipCard frontImg={nirmitFront} backImg={nirmitBack} />
              </div>
              <div className="intro-text">
                <h1>Hi there, I'm <span>Nirmit</span> 👋</h1>
                <p>I’m a UX Designer, Frontend Developer, and Creative Technologist passionate about crafting intuitive and visually engaging digital experiences.</p>
              </div>
            </div>
            <div className="scroll-arrow">
              <span>⬇</span>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <h2>What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-pencil-ruler service-icon"></i>
              <h3>UX Design</h3>
              <p>Wireframes, user flows, interactive prototypes, and usability testing to craft intuitive digital experiences.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-code service-icon"></i>
              <h3>Frontend Development</h3>
              <p>Building responsive, accessible, and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-paint-brush service-icon"></i>
              <h3>Graphic Design</h3>
              <p>Creating visually engaging UI, branding assets, and digital illustrations to support strong storytelling.</p>
            </div>
          </div>
        </section>

        <ProjectGrid title="My Work" projects={workProjects} />
        <ProjectGrid title="Design Experiments" projects={designExperiments} />
        <ProjectGrid title="Graphics & Simulation" projects={graphicsProjects} />
        <ProjectGrid title="Art & Illustrations" projects={artIllustrations} isArt />
      </main>
      <SidebarNav />
    </div>
  );
}