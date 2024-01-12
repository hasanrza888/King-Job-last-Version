import Image from "next/image";

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="100">
        <Image
          width={635}
          height={627}
          src="/images/resource/banner-img-2.png"
          alt="banner"
        />
      </figure>
    </div>
  );
};

export default ImageBox;
