import React, { useEffect, useRef } from "react";

const Mouse2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Array con las rutas de las imágenes
    const imagePaths = [
      "/home/home36.png",
      "/home/home37.png",
      "/home/home38.png",
      "/home/home39.png",
      "/home/home40.png",
      "/home/home41.png",
      "/home/home42.png",
      "/home/home43.png",
      "/home/home44.png",
      "/home/fondos-36.png",
      "/home/fondos-37.png",
      "/home/fondos-38.png",
      "/home/fondos-39.png",
      "/home/fondos-40.png",
      "/home/fondos-41.png",
      "/home/fondos-42.png",
      "/home/fondos-43.png",
      "/home/fondos-44.png",
     
    ];

    const createParticle = (x, y) => {
      const size = 10 + Math.random() * 400; // Tamaño aleatorio de las imágenes
      const image = new Image();
      const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      image.src = randomImage;

      const speedX = Math.random() * 1 - 0.5;
      const speedY = Math.random() * 1 - 0.5;

      return { x, y, size, image, speedX, speedY };
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.6; // Desvanecer lentamente las imágenes

        if (particle.size <= 0.1) {
          particles.splice(index, 10);
        }

        ctx.globalAlpha = particle.size / 100; // Controla la transparencia
        ctx.drawImage(
          particle.image,
          particle.x - particle.size / 2,
          particle.y - particle.size / 2,
          particle.size,
          particle.size
        );
      });
    };

    animate();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      particles.push(createParticle(x, y)); // Crear una imagen en la posición del cursor
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas style={{ width:"100%", height:"800px", zIndex:1}}  ref={canvasRef} className="particle-canvas" />;
};

export default Mouse2;
