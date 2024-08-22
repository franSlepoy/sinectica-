import React, { useEffect, useRef } from "react";

const MouseParticleTrail1 = () => {
  const canvasRef = useRef(null);
  const maxDistance = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const createGradient = (color1, color2) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0.25, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    };

    const createParticle = (x, y) => {
      const size = 10 + Math.random() * 150; // Tamaño aleatorio de las esferas
      const colorOptions = [
        createGradient("rgba(97, 251, 101, 0.8)", "rgba(255, 255, 255, 0.2)"),
        createGradient("rgba(82, 186, 255, 0.8)", "rgba(255, 255, 255, 0.2)"),
        createGradient("rgba(0, 104, 255, 0.8)", "rgba(255, 255, 255, 0.2)"),
      ];
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

      const speedX = Math.random() * 1 - 0.5;
      const speedY = Math.random() * 1 - 0.5;

      return { x, y, size, color, speedX, speedY };
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.5; // Desvanecer lentamente las esferas

        if (particle.size <= 0.5) {
          particles.splice(index, 8);
        }

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      particles.push(createParticle(x, y)); // Crear una esfera en la posición del cursor
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas width={"1600px"} height={"900px"} ref={canvasRef} className="particle-canvas" />;
};

export default MouseParticleTrail1;
