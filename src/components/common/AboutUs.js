import React from 'react'

class AboutUs extends React.Component {
  render() {
    return (
      <main className="main-show2">
        <h1 id="aboutus-title"> Meet The Team! </h1>
        <div className="wrapper-aboutus">
          <div className="profile-show2">
            <div className="profile-text2">
              <div className="profile-heading2">
                <h2 id="names2">Amy Wilson</h2>
              </div>
              <div className="profile-body2">
                <p className="about-info2"> Currently training at General Assembly to be a Full Stack Software Engineer.</p>
              </div>
              <div
                className="profile-picture2"
                style={{
                  backgroundImage: 'url(\'https://i.imgur.com/9gKMYKc.jpg?1\')'
                }}
              />
            </div>
          </div>


          <div className="profile-show2">
            <div className="profile-text2">
              <div className="profile-heading2">
                <h2 id="names2">Kasia Wypychewicz</h2>
              </div>
              <div className="profile-body2">
                <p className="about-info2"> Age: 31, Occupation:Junior Software Engineer </p>
              </div>
              <div
                className="profile-picture2"
                style={{
                  backgroundImage: 'url(https://i.imgur.com/ffLlJIz.jpg?1)'
                }}
              />
            </div>
          </div>


          <div className="profile-show2">
            <div className="profile-text2">
              <div className="profile-heading2">
                <h2 id="names2">Talha Ikhlaq</h2>
              </div>
              <div className="profile-body2">
                <p className="about-info2"> Age: 31, Occupation: OverReacting Developer</p>
              </div>
              <div
                className="profile-picture2"
                style={{
                  backgroundImage: 'url(https://i.imgur.com/NnxPlZ1.jpg?1)'
                }}
              />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default AboutUs
