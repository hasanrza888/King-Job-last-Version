const Address = () => {
  const addressContent = [
    // {
    //   id: 1,
    //   iconName: "placeholder",
    //   title: "Ünvan",
    //   text: (
    //     <>
    //       329 Queensberry Street, North
    //       <br /> Melbourne VIC 3051, Australia.
    //     </>
    //   ),
    // },
    {
      id: 2,
      iconName: "smartphone",
      title: "Bizimlə əlaqə",
      text: (
        <>
          <a href="tel:+9940775773133" className="phone">
            +994-077-577-31-33
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          {" "}
          <a href="mailto:info@kingjob.pro">info@kingjob.pro</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <img
                width={51}
                height={51}
                src={`/images/icons/${item.iconName}.svg`}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
