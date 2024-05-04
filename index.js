const root = ReactDOM.createRoot(document.getElementById('root'))


function Nav(){
  return (
    <>
      <div className="navbar">
        <div className="navleft">
          <img src="images/icon.png"></img>
          <div><b>logoipsum<sub>.com</sub></b></div>
        </div>
        <div className="navright">
            <a>HOME</a>
            <a>PROPERTIES</a>
            <a>AGENTS</a>
            <a>BLOG</a>
            <button>LOG IN</button>
        </div>
      </div>
    </>
  )
}

function Hero(){
  return(
    <>
      <div className="hero">
        <div className="herotop">
          <h1>Easy way to find a perfect property</h1>
          <p>We provide a complete service for the sale,
purchase or rental of real estate.</p>
        </div>
        <div className="herobottom">
          <div className="action">
            <div className="rent">Rent</div>
            <div>Buy</div>
            <div>SELL</div>
          </div>
          <div className="search">
            <div className="searchchild">
              <h3>Location</h3>
              <p>Select Your City</p>
            </div>
            <div className="searchchild">
              <h3>Property Type</h3>
              <p>Choose Property Type</p>
            </div>
            <div className="searchchild">
              <h3>Price Range</h3>
              <p>Choose Price Range</p>
            </div>
            <div className ="searchchild">
              <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="3.744" fill="#2a8ef8" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#f0ebeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Insert(props){
    return(
    <div className="storyInserted">
        <h2 className={props.className}>{props.country}</h2>
        <img src={props.src} />
    </div>
    )
}

function Card(){
  const images = [{
    country:'A M E R I C A',
    src : "./images/america.png" 
  },{
    country:'S P A I N',
    src : "./images/spain.png" ,
    className:"spain"
  },{
    country:'L O N D O N',
    src : "./images/london.png" 
  },{
    country:'F R A N C E',
    src : "./images/france.png" ,
    className:"france"
  }]
  return(
      images.map((items)=>{return <Insert country={items.country} src={items.src} className={items.className}/>})
  )
}

function Story(){
  return(
    <>
      <Nav/>
      <Hero/>
      <div className="story">
        <h1>We are available in many
well-known countries</h1>
      
        <div className="storyList">
            <Card/>
        </div>
      </div>
    </>
  )
}


function Estate(props){
    return(
      <>
        <div className="estate">
          <div className="picture">
            <img src={props.src}/>
          </div>
          <div className="contentestate">
            <h3>{props.address}</h3>
            <div><p>{props.room}</p><p>{props.roomsize}</p><p>{props.garage}</p></div>
            <div><p>{props.user}</p><button>{props.price}</button></div>
          </div>
        </div>
      </>
    )
  }
  
  function Storylist(){
    const assests = [{address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-1.png"},
    {address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-2.png"},
    {address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-3.png"},
    {address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-4.png"},
    {address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-5.png"},
    {address:"103/143 West Street, Crows Nest",room:"10 Bedroom",roomsize:"150 M",garage:"2 Garage",user:"Posted by X Builder",price:"$45,545",src:"./images/small-6.png"}]
    return(
      <>
      <div className="wholestory">
        <div className="headerofstory">
            <h1>Recently Added</h1>
            <p>See all</p>
        </div>
        <div className="storys">
          {assests.map(assest => <Estate address={assest.address} room={assest.room} roomsize={assest.roomsize} garage={assest.garage} user={assest.user} price={assest.price} src={assest.src}/> )}
        </div>
 
      </div>
      </>
    )
  }
  


root.render(
  <>
      <Story />
      <Storylist/>
 
  </>
)

    //     {/* <div class="secend">
    //       <div class='resent'>
    //           <header>
    //               <div class='left'>
    //                   <h1>Recently Added</h1>
    //               </div>
    //               <div class='right'>
    //                   <h2>see all</h2>
    //               </div>

    //           </header>
    //           <div class='col'>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-1.png" alt="" />

    //                   </div>
    //                   <div class='letter'>
    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>



    //                   </div>

    //               </div>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-2.png" alt="" />

    //                   </div>
    //                   <div class='letter'>
    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>

    //                   </div>

    //               </div>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-3.png" alt="" />


    //                   </div>
    //                   <div class='letter'>

    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>

    //                   </div>

    //               </div>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-4.png" alt="" />

    //                   </div>
    //                   <div class='letter'>

    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>

    //                   </div>

    //               </div>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-5.png" alt="" />

    //                   </div>
    //                   <div class='letter'>

    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>


    //                   </div>

    //               </div>
    //               <div class='part'>
    //                   <div class='photo'>
    //                       <img src="./images/small-6.png" alt="" />

    //                   </div>
    //                   <div class='letter'>
    //                       <div class='big'>
    //                           <h1>103/143 West Street, Crow Nest</h1>
    //                       </div>

    //                       <div class='little'>

    //                           <div class='room'><p1>10 Bedroom</p1></div>
    //                           <div class='room'><p1>10M</p1></div>
    //                           <div class='room'><p1>2 Garages</p1></div>

    //                       </div>

    //                       <div class='owner'>

    //                           <div class='post'><p>Post By X Builder X</p></div>
    //                           <div class='cost'><button><p5>$45,545</p5></button></div>

    //                       </div>

    //                   </div>

    //               </div>
    //           </div>

    //       </div> */}
    //       <div class="pic">
    //           <div class = 'legion'>
    //               <div class ='dark_angel'>
    //                   <div class ='first-wing'>
    //                       <h1>Find Your Best Real Estate</h1>
    //                   </div>
    //                   <div class ='second-wing'>
    //                       <p33>we provide a complete service for the sale,
    //                           purchase or rental of real estate.
    //                       </p33>
    //                   </div>
    //                   <div class ='third-wing'>

    //                       <div class = 'asmodai'>
    //                           <button><p12>CONTRACT US</p12></button>
    //                       </div>
                          
    //                   </div>
    //               </div>
    //           </div>
    //       </div>
    //       <div class='info'>
    //           <div class='naver'>
    //               <div class='icon'>
    //                   <img src="./images/icon.png" alt="" />
    //                   <h1>Logopisum</h1>
    //                   <p>.com</p>


    //               </div>
    //               <div class='take'>
    //                   <h2>Take a tour</h2>

    //               </div>
    //               <div class='company'>
    //                   <h2>Our company</h2>

    //               </div>
    //               <div class='sub'>
    //                   <h2>Subscribe</h2>

    //               </div>
    //           </div>
    //           <div class='last'>

    //               <div class='sentence'>
    //                   <p7>
    //                       Lorem ipsum dolor sit amet consectetur adipi
    //                       sicing elit. Provident esse nostrum nobis hic 
    //                       exercitationem voluptas cupiditate omnis quas. 
    //                       Tenetur repudiandae magnam odio ad quisquam atque 
    //                       error voluptatum libero soluta unde?
    //                   </p7>
    //                   <div class='app'>
    //                       <svg fill="#3633ff" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#3633ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
    //                       <svg fill="#146eff" width="64px" height="64px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#146eff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd"></path> </g></svg>
    //                       <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ff29d1"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ff29d1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ff29d1"></path> </g></svg>
    //                       <svg width="64px" height="64px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#0400f5" stroke="#0400f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z"></path> </g> </g> </g></svg>

                          
    //                   </div>
    //                   <div class = "small"><p12>@2021 . All right reserved</p12></div>
    //               </div>
    //               <div class = 'perform'>
    //                   <div class = 'jojo'><p>Feature</p></div>
    //                   <div class = 'jojo'><p>Partner</p></div>
    //                   <div class = 'jojo'><p>Pricing</p></div>
    //                   <div class = 'jojo'><p>Product</p></div>
    //                   <div class = 'jojo'><p>Support</p></div>

    //               </div>

    //               <div class = 'about'>
    //                   <div class = 'dio'><p>About Us</p></div>
    //                   <div class = 'dio'><p>Agents</p></div>
    //                   <div class = 'dio'><p>Blog</p></div>
    //                   <div class = 'dio'><p>Media</p></div>
    //                   <div class = 'dio'><p>Contract Us</p></div>

    //               </div>

    //               <div class = 'quest'>

    //                   <div class = 'zhongli'>
    //                       <p23>Subscribe to get lastest property,blog news from us</p23>
    //                   </div>

    //                   <div class = 'beetle'>
    //                   <input type = 'text' placeholder='Email Adress'></input>
    //                   <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8a5656"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#33ccff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    //                   </div>

    //               </div>
    //           </div>
    //       </div>
    //   </div> */}