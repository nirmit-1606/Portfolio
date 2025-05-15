import { useEffect } from 'react';

export default function SidebarNav() {
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'welcome',
        'services',
        'my-work',
        'design-experiments',
        'graphics-projects',
        'artwork',
      ];

      let currentSectionId = '';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSectionId = id;
          }
        }
      });

      const links = document.querySelectorAll('.page-nav a');
      links.forEach((link) => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="page-nav">
      <ul>
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#my-work">My Work</a></li>
        <li><a href="#design-experiments">Design Experiments</a></li>
        <li><a href="#graphics-projects">Graphics & Simulation</a></li>
        <li><a href="#artwork">Art & Illustrations</a></li>
      </ul>
    </aside>
  );
}