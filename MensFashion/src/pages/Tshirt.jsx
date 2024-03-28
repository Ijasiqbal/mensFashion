import React from 'react'
import '../styles/Tshirt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
export default function Tshirt()  {
  return (
    <div className="App">
    
      <div className="container1">
            <section className="wishlist">
          <div className="mainbox">
          <div className="box1">
          
            <h1 className="heading">
              T-Shirts 
            </h1>
            
          </div>
          <div className="box2">
            <div className="filter">  
                  <div className="filtext">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="filter">
                          <path fill="#000" fill-rule="evenodd" d="M20 5h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 0 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 12a1 1 0 0 1 1-1h1.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-9.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1-1-1zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4zm13 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clip-rule="evenodd">
                          </path>
                       </svg> 
                                <span className="filter1"> Filter  </span>
                  </div>
            <div class="vertical-hr"></div>
            </div>
       
            <div className="recmain">  Sort by: <div className="rec"> Recommended <div className='arrow'>  
      <FontAwesomeIcon icon={faCaretDown} /></div>
    </div> </div>
          </div></div>
   
< div className="row align-items-start">

  <div className="item">
    <div className="card">
    
            <div className="img">
                <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
            </div>
          <div className="cardbody">
            <h5 className="card-item">Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
              <div className="cart">
              { /*<button className="Btn">
              MOVE TO CART
              <i className="fas fa-shopping-cart"></i>
              </button>*/}  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Add to Bag
              </a>
              </div>
          </div>
    </div>
  </div> 
  <div className="item">
    <div className="card">
     
            <div className="img">
                <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
            </div>
          <div className="cardbody">
            <h5 className="card-item">Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
              <div className="cart">
              { /*<button className="Btn">
              MOVE TO CART
              <i className="fas fa-shopping-cart"></i>
              </button>*/}  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Add to Bag
              </a>
              </div>
          </div>
    </div>
  </div>   <div className="item">
    <div className="card">
     
            <div className="img">
                <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
            </div>
          <div className="cardbody">
            <h5 className="card-item">Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
              <div className="cart">
              { /*<button className="Btn">
              MOVE TO CART
              <i className="fas fa-shopping-cart"></i>
              </button>*/}  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Add to Bag
              </a>
              </div>
          </div>
    </div>
  </div> 
  <div className="item">
    <div className="card">
    
            <div className="img">
                <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
            </div>
          <div className="cardbody">
            <h5 className="card-item">Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
              <div className="cart">
              { /*<button className="Btn">
              MOVE TO CART
              <i className="fas fa-shopping-cart"></i>
              </button>*/}  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Add to Bag
              </a>
              </div>
          </div>
    </div>
  </div> 
  <div className="item">
    <div className="card">
            <div className="img">
                <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
            </div>
          <div className="cardbody">
            <h5 className="card-item">Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
              <div className="cart">
              { /*<button className="Btn">
              MOVE TO CART
              <i className="fas fa-shopping-cart"></i>
              </button>*/}  <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Add to Bag
              </a>
              </div>
          </div>
    </div>
  </div> 
  <div className="item">
      <div className="card">
      <p className="cross">
      <i className="fas fa-trash-alt"></i>
      </p>
        <div className="img">
        <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
        </div>
      <div className="cardbody">
      <h5 className="card-item"> Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
      <div className="cart">
      { /*<button className="Btn">
      MOVE TO CART
      <i className="fas fa-shopping-cart"></i>
      </button>*/}  <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Add to Bag
      </a>
      </div>
      </div>
      </div>
  </div>  

  <div className="item">
  <div className="card">
  <p className="cross">
  <i className="fas fa-trash-alt"></i>
  </p>
  <div className="img">
  <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
  </div>
  <div className="cardbody">
  <h5 className="card-item"> Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
  <div className="cart">
  { /*<button className="Btn">
  MOVE TO CART
  <i className="fas fa-shopping-cart"></i>
  </button>*/}  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Add to Bag
  </a>
  </div>
  </div>
  </div>
  </div>

  <div className="item">
  <div className="card">
  <p className="cross">
  <i className="fas fa-trash-alt"></i>
  </p>
  <div className="img">
  <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
  </div>
  <div className="cardbody">
  <h5 className="card-item"> Knitted sweater with ribbed details<br /><span className="price"> RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
  <div className="cart">
  { /*<button className="Btn">
  MOVE TO CART
  <i className="fas fa-shopping-cart"></i>
  </button>*/}  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Add to Bag
  </a>
  </div>
  </div>
  </div>
  </div>

  <div className="item">
  <div className="card">
  <p className="cross">
  <i className="fas fa-trash-alt"></i>
  </p>
  <div className="img">
  <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
  </div>
  <div className="cardbody">
  <h5 className="card-item"> Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
  <div className="cart">
  { /*<button className="Btn">
  MOVE TO CART
  <i className="fas fa-shopping-cart"></i>
  </button>*/}  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Add to Bag
  </a>
  </div>
  </div>
  </div>
  </div>

  <div className="item">
      <div className="card">
      <p className="cross">
      <i className="fas fa-trash-alt"></i>
      </p>
      <div className="img">
      <img src="src/assets/img/category1.png" className="card-img-top" alt="..." />
      </div>
          <div className="cardbody">
          <h5 className="card-item"> Knitted sweater with ribbed details<br /><span className="price">  RS 4,500.00 </span> <span className="mrp"><strike>RS 6000</strike></span> <span className="offer">(20% off)</span></h5>
          <div className="cart">
          { /*<button className="Btn">
          MOVE TO CART
          <i className="fas fa-shopping-cart"></i>
          </button>*/}  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Add to Bag
          </a>
          </div>
          </div>
      </div>
  </div>
</div>
          
           {/*ALL ITEMS ENDS HERE */}

       
   {/*next row-000000000000000000000000000000000000000000000 */}


            {/* Add other items here */}
            
          
            </section>
      </div>
      
   {/*next row-000000000000000000000000000000000000000000000 */}
    </div>
  );
}
export { Tshirt };
