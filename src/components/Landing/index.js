import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as React from "react"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Avatar = (props) => {
  const avatarRef = useRef()
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  
  useFrame(({ mouse }) => {
    avatarRef.current.rotation.y = mouse.x;
    avatarRef.current.rotation.x = -mouse.y;
  });
  
  return (
    <mesh ref={avatarRef} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

const Landing = () => {
  
  return (
    <div className={'landing'}>
      <div className="content">
        <h1 className="title">Tanishq Sangwan</h1>
        <h2 className="subtitle">I code things.</h2>
        <p className="about">High school student by day, fullstack developer by night. I love building things, websites mainly but messing around here and there too (WebGL's pretty cool).</p>
      </div>
      {/* <div className="webgl"> */}
      {/*   <Canvas camera={{ position: [0, 0, 45]}}> */}
      {/*     <ambientLight /> */}
      {/*     <Avatar position={[0, 0, 0]} /> */}
        {/* </Canvas> */}
      {/* </div> */}
    </div>
  )
}

export default Landing;