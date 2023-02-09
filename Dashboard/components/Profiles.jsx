import React from 'react'
// import '../styles/profile.css'

function Profiles() {
  return (
    <div>
        <div>
  <main>
    <article className="profile">
      <div className="profile__bg" />
      <div className="profile__info">
        <p></p>
        



         <div className="profile__stats">
          <div className="stat">
            <p className="stat__number">80K</p>
            <p className="stat__name">Followers</p>
          </div>
          <div className="stat">
            <p className="stat__number">803K</p>
            <p className="stat__name">Likes</p>
          </div>
          <div className="stat">
            <p className="stat__number">1.4K</p>
            <p className="stat__name">Photos</p>
          </div>
        </div> 
      </div>
       <div className="profile__img__container">
        <img className="profile__img" src="https://kellychi22.github.io/frontend-mentor-solutions/08-profile-card-component//images/image-victor.jpg" alt="photo-of-victor-crest" style={{height: "100px"}} />
      </div> 
    </article>
  </main>
  
</div>


    </div>
  )
}

export default Profiles