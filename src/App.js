import "./styles.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <header>
          <nav>
            <img class="logo" src="image/logo.png" />
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>My List</li>
            </ul>
          </nav>
        </header>
        <main>
          <div class="content">
            <section class="home">
              <div class="img">
                <img src="image/background.jpg" />
              </div>
              <div class="text">
                <img src="image/title.png" />
                <h1>Stranger Things</h1>
                <div class="info">2016 | U/A 16+ | 4 Seasons | Sci-Fi</div>
                <p class="desc">
                  When a young boy vanishes, a small town uncovers a mystery
                  involving secret experiments, terrifying supernatural forces
                  and one strange little girl.
                </p>
                <p>
                  <span>Starring</span>: Winona Ryder,David Harbour,Millie Bobby
                  Brown
                </p>
                <p>
                  <span>Creators</span>:The Duffer Brothers
                </p>
              </div>
            </section>
            <section class="shows">
              <div class="box">
                <h1>Popular on netflix</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img40.jpg" alt="" />
                  <img class="show-img" src="image/img19.jpg" alt="" />
                  <img class="show-img" src="image/img17.jpg" alt="" />
                  <img class="show-img" src="image/img31.jpg" alt="" />
                  <img class="show-img" src="image/img20.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Top Picks for you</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img7.jpg" alt="" />
                  <img class="show-img" src="image/img8.jpg" alt="" />
                  <img class="show-img" src="image/img2.jpg" alt="" />
                  <img class="show-img" src="image/img4.jpg" alt="" />
                  <img class="show-img" src="image/img6.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Continue Watching for Lucifer</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img18.jpg" alt="" />
                  <img class="show-img" src="image/img13.jpg" alt="" />
                  <img class="show-img" src="image/img14.jpg" alt="" />
                  <img class="show-img" src="image/img10.jpg" alt="" />
                  <img class="show-img" src="image/img11.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Watch It Again</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img15.jpg" alt="" />
                  <img class="show-img" src="image/img1.jpg" alt="" />
                  <img class="show-img" src="image/img3.jpg" alt="" />
                  <img class="show-img" src="image/img5.jpg" alt="" />
                  <img class="show-img" src="image/img39.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Trending now</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img9.jpg" alt="" />
                  <img class="show-img" src="image/img37.jpg" alt="" />
                  <img class="show-img" src="image/img38.jpg" alt="" />
                  <img class="show-img" src="image/img21.jpg" alt="" />
                  <img class="show-img" src="image/img22.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Recently Watched</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img24.jpg" alt="" />
                  <img class="show-img" src="image/img25.jpg" alt="" />
                  <img class="show-img" src="image/img26.jpg" alt="" />
                  <img class="show-img" src="image/img27.jpg" alt="" />
                  <img class="show-img" src="image/img28.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Horror movies</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img32.jpg" alt="" />
                  <img class="show-img" src="image/img33.jpg" alt="" />
                  <img class="show-img" src="image/img34.jpg" alt="" />
                  <img class="show-img" src="image/img35.jpg" alt="" />
                  <img class="show-img" src="image/img36.jpg" alt="" />
                </div>
              </div>
              <div class="box">
                <h1>Thrillers & Actions</h1>
                <div class="flexbox">
                  <img class="show-img" src="image/img12.jpg" alt="" />
                  <img class="show-img" src="image/img16.jpg" alt="" />
                  <img class="show-img" src="image/img23.jpg" alt="" />
                  <img class="show-img" src="image/img29.jpg" alt="" />
                  <img class="show-img" src="image/img30.jpg" alt="" />
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <p>&copy; vivek surve</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
