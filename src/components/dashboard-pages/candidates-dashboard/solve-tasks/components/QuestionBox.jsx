import React from 'react'

const SocialNetworkBox = () => {
  
  return (

    <div className="ls-widget ">
      <div className="tabs-box">
        <div className="widget-title">
          <h4>Front-End development ne demekdir?</h4>
        </div>
        {/* End widget-title */}
        <div className="widget-content">
        <form  className="default-form">
          <div className="row">
            
            {/* question variants */}
            <div className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name='isCorrect' id="q1" />

              <input 
              type="text"
              name='ans'
              placeholder="Web seyfelerin arxa terefi" disabled/>
            </div>
            {/* question variants */}
            <div className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name='isCorrect' id="q1" />

              <input 
              type="text"
              name='ans'
              placeholder="Web seyfelrerin buttonlari" disabled/>
            </div>
            {/* question variants */}
            <div className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name='isCorrect' id="q1" />

              <input 
              type="text"
              name='ans'
              placeholder="Web seyfelerin on uzu" disabled/>
            </div>
            {/* question variants */}
            <div className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name='isCorrect' id="q1" />

              <input 
              type="text"
              name='ans'
              placeholder="Web seyfelerin arcadan qabaqi" disabled/>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
    
  );
};

export default SocialNetworkBox;

