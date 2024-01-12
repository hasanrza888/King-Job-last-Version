const MapBox = () => {
  return (
    <div className="map-canvas">
      {/* <iframe
        src="https://www.google.com/maps/d/embed?mid=17Kh7UM1OCxxzE_xhcRAhTbFmwfU&hl=en_US&ehbc=2E312F"
        loading="lazy"
      ></iframe> */}
      {/* <iframe src="https://www.google.com/maps/d/embed?mid=17Kh7UM1OCxxzE_xhcRAhTbFmwfU&hl=en_US&ehbc=2E312F" loading="lazy">
      </iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1705089909056!5m2!1sen!2saz" loading="lazy">
      </iframe>
    </div>
  );
};

export default MapBox;
