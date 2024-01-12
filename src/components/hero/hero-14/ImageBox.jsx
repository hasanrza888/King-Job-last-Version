import Image from "next/image";

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="800">
        <Image
          width={538}
          height={616}
          src="/images/index-14/header/1.png"
          alt="image"
        />
      </figure>
      {/* End large image */}

      <div
        className="image-part -type-1"
        data-aos="fade-in"
        data-aos-delay="900"
      >
        <Image
          width={147}
          height={118}
          src="/images/index-14/header/2.png"
          alt="image"
        />
      </div>

      <div
        className="image-part -type-2 "
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <Image
          width={158}
          height={118}
          src="/images/index-14/header/3.png"
          alt="image"
        />
      </div>

      <div
        className="image-part -type-3"
        data-aos="fade-in"
        data-aos-delay="1100"
      >
        <Image
          width={119}
          height={118}
          src="/images/index-14/header/4.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default ImageBox;
