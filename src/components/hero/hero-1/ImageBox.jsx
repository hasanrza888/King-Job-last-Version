
const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="500">
        <img
          width={486}
          height={589}
          layout="responsive"
          src="/images/resource/candidate_girl.png"
          alt="hero image"
        />
      </figure>
      {/* hero image */}
      {/* <!-- Info BLock One --> */}
      <div className="info_block" data-aos="fade-in" data-aos-delay="1000">
        <span className="icon flaticon-file"></span>
        <p>Hesabını yarat</p>
        
        <span className="sub-text">Məlumatlarını əlavə et</span>
      </div>
      {/* <!-- Info BLock Two --> */}
      {/* <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
        <p>İstədiyin Vakansiyanı axtar</p>
        <span className="icon las la-search"></span>
        <div className="image">
          <img
            width={206}
            height={53}
            src="/images/resource/multi-peoples.png"
            alt="mulit people"
          />
        </div>
      </div> */}
      {/* <!-- Info BLock Three --> */}
      <div
        className="info_block_three"
        data-aos="fade-in"
        data-aos-delay="1500"
      >
        <span className="icon flaticon-briefcase"></span>
        <p>İstədiyin Vakansiyanı
          <br />
          Axtar və müraciət et
        </p>
        {/* <span className="sub-text">Startup</span> */}
        {/* <span className="right_icon fa fa-check"></span> */}
      </div>
      {/* <!-- Info BLock Four --> */}
      <div className="info_block_four" data-aos="fade-in" data-aos-delay="2500">
        <span className="icon flaticon-email-3"></span>
        <div className="inner">
          <p>
            HR-lar sizə<br />
            geri dönüş edəcək.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default ImageBox;
