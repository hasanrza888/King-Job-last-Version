const WidgetToFilterBox = () => {
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form method="post" action="blog.html">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Tapşırıq adı"
              required
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>Hamısı</option>
        <option>IT</option>
        <option>Bank</option>
        <option>Maliyyə</option>
        <option>Memar</option>
        <option>Dizayn</option>
      </select>
    </div>
  );
};

export default WidgetToFilterBox;
