import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingCotent = [
    {
      id: 1,
      packageType: "Başlanğıc",
      price: "0",
      tag: "",
      features: [
        "15 günlük pulsuz",
        "Maksimum 2 vakansiya"
      ],
    },
    {
      id: 2,
      packageType: "Dinamik Aylıq",
      price: "40",
      tag: "",
      features: [
        "Minimum 2 vakansiya",
        "1 Vakansiya 20 AZN"
      ],
    },
    {
      id: 3,
      packageType: "Dinamik İllik",
      price: "75",
      tag: "Tagged",
      features: [
        "Minimum 5 vakansiya",
        "1 Vakansiya 15 AZN"
      ],
    },
  ];

  return (
    <div className="pricing-tabs tabs-box wow fadeInUp">
      {/* <!--Tabs Container--> */}
      <div className="row">
        {pricingCotent.map((item) => (
          <div
            className={`pricing-table col-lg-4 col-md-6 col-sm-12 ${item.tag}`}
            key={item.id}
          >
            <div className="inner-box">
              {item.tag ? (
                <>
                  <span className="tag">Endirimli</span>
                </>
              ) : (
                ""
              )}

              <div className="title">{item.packageType}</div>
              <div className="price">
                {item.price} AZN
                {/* <span className="duration">/ monthly</span> */}
              </div>
              <div className="table-content">
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="table-footer">
                <Link to="/shop/cart" className="theme-btn btn-style-three">
                  Səbətə at
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
