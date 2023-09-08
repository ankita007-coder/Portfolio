import React, {useEffect, useState} from 'react';
import './Home.css';
import * as THREE from "three";
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import {Typography} from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import {
    SiPython,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiExpress,
    SiCss3,
    SiHtml5
} from "react-icons/si";
import CodingPlatforms from '../CodingPlatforms/CodingPlatforms';
import { MouseOutlined } from '@mui/icons-material';

const Home = ({timelines, skills}) => {

    const [text, setText] = useState('');
    const sentence = "Hi!! my name is Ankita";

    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();
        const moonTexture= textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({canvas});

        const moonGeometry  = new THREE.SphereGeometry(2,64,64);
        const venusGeometry = new THREE.SphereGeometry(3,64,64);
        const pointLight = new THREE.PointLight(0xffffff,1);
        const pointLight1 = new THREE.PointLight(0xffffff,0.1);
        pointLight.position.set(8,5,5);
        pointLight1.position.set(-8,-5,-5);
        const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
        const venusMaterial = new THREE.MeshBasicMaterial({map:venusTexture});
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
       // const controls = new OrbitControls(camera, renderer.domElement);//for adding cursor controls
        scene.add(moon);
        scene.add(venus);
        scene.background = spaceTexture;
        scene.add(pointLight);
        scene.add(pointLight1);

        const constSpeed = 0.01;
        window.addEventListener("mousemove",(e)=>{
            if (e.clientX<=window.innerWidth/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }
            if (e.clientX>window.innerWidth/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
            if (e.clientY>window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }
            if (e.clientY<=window.innerHeight/2){
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        })
        venus.position.set(8,4,4);
        camera.position.set(4,4,8);
        const animate = ()=>{
            requestAnimationFrame(animate);
            moon.rotation.y +=0.01;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene,camera);

        }
        animate();

        
        window.addEventListener("scroll", (e)=>{
            camera.rotation.y = window.scrollY* 0.003;
            const skillBox = document.getElementById("homeSkillsBox");
            if (window.scrollY>1000){
                skillBox.style.animationName = "homeSkillsBoxAnimationOn";
            }
            else{
                skillBox.style.animationName = "homeSkillsBoxAnimationOff";
            }
        })
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
          if (currentIndex <= sentence.length) {
            setText(sentence.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, 100); // Adjust the typing speed (interval) as needed
    
        return () => {
          clearInterval(typingInterval);
        };
    }, []);
    
  return (
    <div className='home'>
        <canvas className='homeCanvas'></canvas>
        <div className="homeCanvasContainer">
        <div className="typing-effect">
                <span>{text}</span>
            </div>
            <div className="homeScrollBtn">
                <MouseOutlined/>
            </div>
        </div>
        <div className='homeContainer'>
            <Typography variant='h3'>WORK EXPERIENCE</Typography>
            <TimeLine  timelines={timelines}/>
        </div>
        <div className="homeSkills">
            <Typography variant='h3'>SKILLS</Typography>
            <div className="homeCubeSkills">
                <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                    <img 
                        src={skills.image1.url} 
                        alt="Face1" />
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                    <img 
                        src={skills.image2.url} 
                        alt="Face2" />
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                    <img
                        src={skills.image3.url}
                        alt="Face3" />
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                    <img 
                        src={skills.image4.url}
                        alt="Face4" />
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                    <img 
                        src={skills.image5.url}
                        alt="Face5" />
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                    <img
                        src={skills.image6.url} 
                        alt="Face6" />
                </div>
            </div>
            <div className="cubeShadow"></div>
            <div className="homeSkillsBox" id="homeSkillsBox">
                <SiPython/>
                <SiExpress/>
                <SiHtml5/>
                <SiReact/>
                <SiCss3/>
                <SiJavascript/>
                <SiMongodb/>
            </div>
        </div>
        <div className="homeCodingPlatforms">
            <Typography variant='h3'>HUSTLING PLATFORMS</Typography>
            <div className="platformWrapper">
                <CodingPlatforms/>
            </div>
        </div>
    </div>
  );
};

export default Home