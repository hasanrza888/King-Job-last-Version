
const AppSection = () => {
  return (
    <div className="row">
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="bg-shape"></div>
        <figure className="image" data-aos="fade-right">
          <img
            width={380}
            // height={556}
            src="/images/resource/tg-channel.png"
            alt="mobile app"
          />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>
              Vakansiyaları Axtarma !
            </h2>
            <span className="sub-title mt-3" style={{fontSize: 40}}>Vakansiyalar</span>
            <h2>
              Sənə gəlsin
            </h2>
            <div className="text mt-4" style={{fontSize: 18}}>
              King Job Telegram kanalımıza abunə olaraq yeni vakansiyalardan 
              <span className="sub-title">
              Anında Xəbərdar OL 
              </span>
            </div>
          </div>
          <div className="download-btn mt-5">
              <a href="https://t.me/the_kingjob" style={{fontSize:20}} target="_blank">
                <img
                  width={50}
                  src="/images/icons/telegram-logo.png"
                  alt="icon"
                  style={{marginRight:10}}
                />
                King Job Kanalımıza keçid
              </a>
            {/* <a href="#">
              <img
                width={210}
                height={60}
                src="/images/icons/google.png"
                alt="icon"
              />
            </a> */}
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSection;
