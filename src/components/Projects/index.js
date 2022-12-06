import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as React from "react"
import { projects } from "../../data/projects"

const Projects = () => {
  const titleRef = useRef()
  const projectsRef = useRef()
  
  useEffect(() => {
    let animations = [
      {
        element: titleRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
      },
    ]
    for (const [key, element] of Object.entries(projectsRef)) {
      if (!element) continue // Case for the default 'current' key
      animations.push({
        element: element,
        start: 'top 70%',
        end: 'bottom 50%'
      })
    }
    
    const onEnter = (el, opacity = 1) => {
      if (!el) return
      el.style.opacity = opacity
      el.style.transform = 'translateY(0px)'
    }
    const onLeaveBack = (el) => {
      if (!el) return
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }
    
    for (const animation of animations) {
      gsap.to(animation.element, {
        scrollTrigger: {
          trigger: animation.element,
          start: animation.start,
          end: animation.end,
          onEnter: () => onEnter(animation.element),
          onLeaveBack: () => onLeaveBack(animation.element)
        }
      });
    }
  });
  
  return (
    <div className="projects page">
      <h2 className="heading" ref={titleRef}>Projects</h2>
      <div className="projects-container">
        {projects.reverse().map(project => (
          <div className="project" ref={(el) => projectsRef[projects.indexOf(project)] = el} key={projects.indexOf(project)}>
            <div className="banner">
              <img src={`/projects/${project.banner}`} alt={`${project.name} banner image`} />
            </div>
            <div className="footer">
              <p className="title">{project.name}</p>
              <p className="subtitle">
                <p className="skills">{project.skills.join(" | ")}</p>
                <p className="view">View project</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default Projects;