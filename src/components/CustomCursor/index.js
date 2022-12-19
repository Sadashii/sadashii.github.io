import Kinet from "kinet";
import { useEffect, useRef } from "react";
import * as React from "react"

const CustomCursor = () => {
  const customCursorRef = useRef()
  
  useEffect(() => {
    const cursorEl = customCursorRef.current
    const cursor = new Kinet({
      acceleration: .2,
      names: ['x', 'y'] // 'Instances' on which our cursor will move
    })
    let mouseY = 0
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    
    cursor.on('tick', function(instances) {
      cursorEl.style.top = `${instances.y.current}px`
      cursorEl.style.left = `${instances.x.current}px`
      let divider = 10
      let scale = Math.max(instances.x.velocity / divider, instances.y.velocity / divider, 1)
      cursorEl.style.transform = `scaleX(${scale}), scaleY(${scale})`;
    });
    
    document.addEventListener('mousemove', (event) => {
      cursor.animate('x', event.clientX);
      cursor.animate('y', event.clientY + scrollTop);
      mouseY = event.clientY
    })
    document.addEventListener('scroll', event => {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      cursor.animate('y', scrollTop + mouseY)
    })
    const ontouchlistener = (event) => {
      cursor.animate('x', event.clientX);
      cursor.animate('y', event.clientY + scrollTop);
    }
    document.addEventListener('touchmove', event => ontouchlistener(event.touches[0]))
    document.addEventListener('touchend', event => ontouchlistener(event.changedTouches[0]))
  }, [])
  
  return (
    <>
      <div ref={customCursorRef} className="customCursor"></div>
    </>
  )
}

export default CustomCursor;