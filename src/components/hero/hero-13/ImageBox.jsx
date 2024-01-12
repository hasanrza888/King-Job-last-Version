import Image from "next/image";

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="1200">
        <Image
          width={595}
          height={627}
          src="/images/index-13/header/2.png"
          alt="hero image"
        />
      </figure>
      {/* hero image */}
    </div>
  );
};

export default ImageBox;
