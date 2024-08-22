import React, { useEffect, useRef } from "react";

const Example = () => {
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

    const randomLetter = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return letters.charAt(Math.floor(Math.random() * letters.length));
    };

    const createParticle = (x, y) => {
      const size = 20 + Math.random() * 30; // Tamaño aleatorio de las letras
      const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      const letter = letters[Math.floor(Math.random() * letters.length)];
      const colorOptions = [
        "rgba(97, 251, 101, 0.8)",
        "rgba(82, 186, 255, 0.8)",
        "rgba(0, 104, 255, 0.8)",
      ];
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

      const speedX = Math.random() * 1 - 0.5;
      const speedY = Math.random() * 1 - 0.5;

      return { x, y, size, letter, color, speedX, speedY };
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.5; // Desvanecer lentamente las letras

        if (particle.size <= 0.5) {
          particles.splice(index, 1);
        }

        ctx.fillStyle = particle.color;
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText(particle.letter, particle.x, particle.y);
      });
    };

    animate();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      particles.push(createParticle(x, y)); // Crear una letra en la posición del cursor
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas width={"1600px"} height={"900px"} ref={canvasRef} className="particle-canvas" />;
};

export default Example;
