import React from "react";
import Carousel from "react-bootstrap/Carousel";
const TopBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/SRcVKtjX/SOHEL-S-ACADEMIC-CARE-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/tCGtyS1C/28cc19b6-3c3d-4484-af42-f435a3e904a5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/Bn708TsS/2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/sgFLmxPJ/20210331-081607.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/K88bv96p/1.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
