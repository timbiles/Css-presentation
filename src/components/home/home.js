import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class home extends Component {
  state = {
    nav: ['CSS', 'Sass', 'Modules', 'Styled', 'Inline'],
    author: [
      {
        name: 'Tim Biles',
        bio: 'I like programming and drumming',
        date: 'Nov 6',
        length: '10 min read',
        img: 'http://www.nitch.com/content/images/437744462884845568.jpg'
      }
    ]
  };
  render() {
    const { nav, author } = this.state;
    const navMap = nav.map((e, i) => {
      return (
        <Link key={i} to={e === 'CSS' ? '/' : `/${e}`}>
          {e}
        </Link>
      );
    });

    const profileMap = author.map((e, i) => {
      return (
        <figure key={i} className="profile">
          <img src={e.img} alt="Bio pic" />
          <aside>
            <div>
              <p>{e.name}</p>
              <button>Follow</button>
            </div>
            <p>{e.bio}</p>
            <div>
              <p>{e.date}</p> · <p>{e.length}</p>
            </div>
          </aside>
        </figure>
      );
    });
    return (
      <>
        <header className="home_header">
          <section>
            <div>
              <h2>M</h2>
              <img
                src="https://cdn-images-1.medium.com/letterbox/300/36/50/50/1*1HcGNZYjo78mH0faO3BnaQ.png?source=logoAvatar-lo_Cv3NH663UOmh---3a8144eabfe3"
                alt="Hacker noon"
              />
              <button>Follow</button>
            </div>
            <div>
              <p>Sign in</p>
              <button>Get started</button>
            </div>
          </section>
          <section>{navMap}</section>
        </header>
        <main className="home_main">
          {profileMap}
          <article>
            <h1>Styling with CSS</h1>
            <p>Originally published on {author.date} - Last updated never.</p>
            <h1>Intro</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              rerum inventore, fugiat vitae nobis, omnis commodi nisi non
              voluptatum dicta ipsum! Illo porro doloremque vitae incidunt eos
              odio eligendi quis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              maxime obcaecati aliquid itaque voluptas molestiae illo nisi
              accusantium amet incidunt! Non explicabo dolore sunt quidem totam
              minima vitae nesciunt quibusdam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi hic nobis qui consectetur,
              voluptate nostrum possimus laboriosam modi asperiores similique
              ducimus ipsum veniam, at totam quis eaque est? Sunt, consequuntur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              corrupti aliquid aspernatur saepe vero rem temporibus eum
              quibusdam dignissimos ullam officia placeat inventore dolorem
              quaerat esse error, animi, distinctio excepturi. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Veritatis, tempore
              cupiditate, repellendus ratione reiciendis assumenda mollitia
              harum nostrum rem excepturi eaque nesciunt quae necessitatibus!
              Harum quos quae sequi laudantium nesciunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, unde! Consequatur consequuntur, asperiores
              reprehenderit itaque cumque esse dolorum accusamus incidunt. Odit
              facere eligendi ullam similique fugit, beatae dolores velit
              laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Officiis commodi et minima, beatae quos consectetur error
              nihil voluptates nostrum quaerat molestias maiores, tenetur in
              modi vitae minus a tempore expedita.
            </p>
          </article>
        </main>
      </>
    );
  }
}

export default home;
