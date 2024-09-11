import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Loader from "./Loader"; // Asumiendo que ya tienes un componente Loader

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  transition: opacity 0.28s ease-in-out;
  animation: ${({ loading }) => (loading ? fadeOut : fadeIn)} 0.5s ease-in-out;
`;

const WithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Verifica si todas las imágenes están cargadas
    const images = document.querySelectorAll("img");
    let loadedImagesCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.addEventListener("load", () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        });
        img.addEventListener("error", () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      handleLoad();
    }
  }, []);

  return (
    <ContentWrapper loading={loading}>
      {loading ? <Loader /> : children}
    </ContentWrapper>
  );
};

export default WithLoader;
