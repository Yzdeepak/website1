
import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const App = () => {
  return (
    <>

      <div className='container'>
        <div></div>

        <nav className='navdiv'>
          <div className='logodiv'><img src="../image/motorcycle-1905281_1280.jpg"></img></div>
          <ul className='uldiv'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <button className='navbtn'>Login</button>
            <button className='navbtn'>SignUp</button>


          </ul>
        </nav>
        <div className='line'></div>

        <div className='homelandingpage'>
          <div className='homeleft'>
            <div className='sideh1btncontainer'>

              <div className='sideline'></div>
              <div>
                <h1>This Is That What You Want</h1>
                <h2>HurryUp! <span>Not Come Again!</span></h2>
                <button type="submit">Get Now!</button>
              </div>

            </div>
          </div>
          <div className='homeimage'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.a01t5RpH6dnZI8VNovpCfgHaE8&pid=Api&P=0&h=220'></img>
          </div>
        </div>

        <div className='line'></div>

        <div className='sechomepage'>
          <div className='sideline'></div>
          <div className='h5h2h4'>
            <h5>VISION</h5>
            <div className='h2container'>
              <h2>We're Changing The Way</h2>
              <h2>The World Thinks </h2>
              <h2>About Cars</h2>
            </div>
            <h4>wow greate yar kya paragraph hai</h4>
          </div>
          <div className='sechomeimg'>
            <img src="https://tse3.mm.bing.net/th?id=OIP.1RfKeDjiffAd7MnXDykgcQHaFs&pid=Api&P=0&h=220"></img>
          </div>

        </div>




        <div className='line'></div>

        <div className='productheading'><h1>Our Top Product</h1></div>

        <div className='thirdhomepage'>


          <div className="thirdhomediv">
            <img src="https://tse3.mm.bing.net/th?id=OIP.rCkbNvjE6U-vWSmu8NWlGQHaE8&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>

          <div className="thirdhomediv">
            <img src="https://tse3.mm.bing.net/th?id=OIP.uhlH_kKHKAv1YWCelc4icgHaFj&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>

          <div className="thirdhomediv">
            <img src="https://tse4.mm.bing.net/th?id=OIP.d-7UFbAaPsT2y3dYpaKm1AHaFb&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>

          <div className="thirdhomediv">
            <img src="https://tse3.mm.bing.net/th?id=OIP.DBKb0vExL7T36bqDy53z3AHaHa&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>

          <div className="thirdhomediv">
            <img src="https://tse3.mm.bing.net/th?id=OIP.tJQjxbLRRaEt9B4OB546kAHaHw&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>

          <div className="thirdhomediv">
            <img src="https://tse3.mm.bing.net/th?id=OIP.uhlH_kKHKAv1YWCelc4icgHaFj&pid=Api&P=0&h=220"></img>
            <button className="thirdhomebtn" type='submit'>Get</button>
          </div>
        </div>

        <div className='fourthpage'>

          <div className='fourthimgdiv'>
            <img src="https://tse3.mm.bing.net/th?id=OIP.tJQjxbLRRaEt9B4OB546kAHaHw&pid=Api&P=0&h=220"></img>
          </div>


          <div className='fourthparadiv'>
            <p>hey everyone this is paragraph page <br></br>
              and you know why this section is very important becouse<br></br> this section gives you a broad approasch<br></br>
              what happen this yrr you know wat is you why ther is only one man<br></br>
              brave only that is good

            </p>
            <button className="fourthhomebtn" type='submit'>Get</button>


          </div>

          <div className='sideline'></div>



        </div>


      </div>

      <footer>

        <div className='footerdiv'>
          <div className='footerleft'>
            <h2>Footwear</h2>
            <h2>boot</h2>
            <h2>sports</h2>

          </div>

          <div className='footermiddle'>
            <h2>Tel:8795859588</h2>
            <h2>Email: info@gmail.com</h2>
            <h2>500 Terry Franch St San CA 38838</h2>

          </div>

          <div className='footerright'>
            <ul className='footerrightul'>
              <li className='listfooter'><BsFacebook /><a href='facebook.com'>Facebook</a></li>
              <li className='listfooter'><BsYoutube /><a href='Youtube.com'>YouTube</a></li>
              <li className='listfooter'><BsTwitter /><a href='X.com'>Twitter</a></li>
              <li className='listfooter'><BsLinkedin /><a href='LinkedIn.com'>LinkedIn</a></li>


            </ul>
          </div>

        </div>


      </footer>


    </>

  )
}

export default App