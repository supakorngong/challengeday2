const rootDOM = document.querySelector('#root')
const root = ReactDOM.createRoot(rootDOM)

// function Hero(){
//   return(
//     <section className="hero">
//           <div className="hero__image--container">
//             <img alt="hero" className="hero__image" src="./images/Banner.png"></img>
//           </div>
//           <div className="hero__text">
//             <h1>Easy way to find a
// perfect property</h1>
//             <p>We provide a complete service for the sale,
// purchase or rental of real estate.</p>
//           <div className="hero__tab">search tab</div>
//           </div>
//     </section>
//   )
// }
function Banner(props){
  return(
    <section className="hero">
          <div className="hero__image--container">
            <img alt="hero" className = {`hero__image ${!props.withtab && "withtab"}`} src={props.src}></img>
          </div>
          <div className="hero__text">
            <h1>{props.title}</h1>
            <p>We provide a complete service for the sale,
purchase or rental of real estate.</p>
          {props.withtab && <div className="hero__tab">search tab</div>}
          </div>
    </section>
  )
}

function App(){
  return(
    <>
      <header className="navbar">
      </header>
      <main className="main">
        <Banner title="Easy way to find a
perfect property" src="./images/banner.png" withtab={true}/>
        <section className="story">story</section>
        <section className="property">property</section>
        <section className="contact">
        </section>
        <Banner title="find yor best to find property" src="./images/building.png" withtab={false}/>
      </main>
      <footer className="footer"></footer>
    </>
  )
}
root.render(<App/>)