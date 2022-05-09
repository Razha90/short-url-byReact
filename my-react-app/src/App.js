import logo from './images/logo.svg';
import './App.css';
import bgMain from './images/illustration-working.svg';
import icon1 from './images/icon-brand-recognition.svg';
import icon2 from './images/icon-detailed-records.svg';
import icon3 from './images/icon-fully-customizable.svg';
import iconIG from './images/icon-instagram.svg';
import iconPI from './images/icon-pinterest.svg';
import iconFC from './images/icon-facebook.svg';
import iconTW from './images/icon-twitter.svg';
import logo2 from './images/logo2.svg';

function App() {
  var i = 0 ;
  function getValue() {
    // POST request using fetch()
    
    var url = document.getElementById('text').value;

   
    
    if (url === '') {
      document.getElementById('text').style.border = '1px solid orangered';
      document.getElementById('text1').style.display = 'block';
    } else {
      document.getElementById('text').style.border = '';
      document.getElementById('text1').style.display = 'none';
    }
        fetch("https://api.shrtco.de/v2/shorten?url="+ url)
    
    // Converting to JSON
    .then(response => response.text())
    
    .then(response => JSON.parse(response))
    
    // Displaying results to console
    .then(json => {
      if (json.ok === true) {
        setTimeout(document.getElementById('text').value = '' , 2000);
        i++;
      } else {
        alert('Link unsucecs');
      }

      if (i === 1) {
        document.getElementsByClassName('font-copy')[0].innerHTML=json.result.full_short_link3;
        document.getElementsByClassName('container-link')[0].style.display = 'block';   
        document.getElementsByClassName('font-copy-1')[0].innerHTML=url;
      }

      if (i === 2) {
        document.getElementsByClassName('font-copy')[1].innerHTML=json.result.full_short_link3;
        document.getElementsByClassName('container-link')[1].style.display = 'block';   
        document.getElementsByClassName('font-copy-1')[1].innerHTML=url;
      }

      if (i === 3) {
        document.getElementsByClassName('font-copy')[2].innerHTML=json.result.full_short_link3;
        document.getElementsByClassName('container-link')[2].style.display = 'block';   
        document.getElementsByClassName('font-copy-1')[2].innerHTML=url;
        i = 0;
      }
    });
  }
    function copied1() {
      var copyBut = document.getElementsByClassName('tombol-copy')[0];
      var copyText = document.getElementsByClassName('font-copy')[0];
      navigator.clipboard.writeText(copyText.innerText);
      copyBut.style.backgroundColor = 'hsl(255, 11%, 22%)';
      copyBut.innerHTML = 'copied!';
      setTimeout(() => {
        copyBut.style.backgroundColor = 'hsl(180, 66%, 49%)';
        copyBut.innerHTML = 'copy';
      }, 3000 )
    };
    function copied2() {
      var copyBut = document.getElementsByClassName('tombol-copy')[1];
      var copyText = document.getElementsByClassName('font-copy')[1];
      navigator.clipboard.writeText(copyText.innerText);
      copyBut.style.backgroundColor = 'hsl(255, 11%, 22%)';
      copyBut.innerHTML = 'copied!';
      setTimeout(() => {
        copyBut.style.backgroundColor = 'hsl(180, 66%, 49%)';
        copyBut.innerHTML = 'copy';
      }, 3000 )
    };
    function copied3() {
      var copyBut = document.getElementsByClassName('tombol-copy')[2];
      var copyText = document.getElementsByClassName('font-copy')[2];
      navigator.clipboard.writeText(copyText.innerText);
      copyBut.style.backgroundColor = 'hsl(255, 11%, 22%)';
      copyBut.innerHTML = 'copied!';
      setTimeout(() => {
        copyBut.style.backgroundColor = 'hsl(180, 66%, 49%)';
        copyBut.innerHTML = 'copy';
      }, 3000 )
    };

    var height = 0;
    function wrapper1() {
      if (height === 0 ) {
      document.getElementsByClassName('wrapper-mo')[0].style.height = '300px';
      height = 1;
      } else {
        document.getElementsByClassName('wrapper-mo')[0].style.height = '0px';
        height = 0;
      } 
      
    }
  return (
    <div>
      <div class={'conclu'}>
        <nav>
            <div class={'hilang'}>
              <div class={'wrapper'}>
                <div><img src={logo} alt={'Logo'}/></div>
                <div class={'center-font center-left'}>Feature</div>
                <div class={'center-font'}>Pricing</div>
                <div class={'left center-font'}>Resources</div>
                <div class={'center-font'}>Login</div>
                <div class={'center-font sign-up button1'}>Sign Up</div>
              </div>
            </div>
            <div class={'hilang-1'}>
              
              <div class={'nav-mo'}>
                <img src={logo} alt={'Logo'} class={'logo-1'}/>
                <div class={'simbol'} onClick={wrapper1}>≡</div>
              </div>
              <div class={'wrapper-mo'}>
                  <div >Feature</div>
                  <div>Pricing</div>
                  <div>Resources</div>
                  <hr class={'hr-1'}/>
                  <div>Login</div>
                  <div class={'sign-mo'}>Sign Up</div>
              </div>
            </div>
        </nav>

          <div class={'container'}>
            <div class={'flex-left'}>
              <p><span class={'font-big'}>More than just shorter links</span><br /><span class={'font-smal'}>Build your brand's recognition and get detailed insights on how your links are performing.</span></p>
              <br /><button class={'get-started button1'}>Get Started</button>
            </div>
            <div class={'flex-right'}>
              <img src={bgMain} alt={'Main People'}/>
            </div>
          </div>
        </div>
        
        <main>
          <div class={'bg-grey'}>
              <div class={'ungu-bg'}>
                <input type={"text"} id={"text"} placeholder={'Shorten a link here...'}/>
                <button onClick={getValue} type={'button'} class={'shorten button2'}>Shorten it!</button>
                <p id={'text1'}>Please add a link!</p>
              </div>
              <div class={'conclu-1 z-ind'}>
                <div class={"container-link"}>
                  <span class={'font-copy-1'}></span><div class={'hr-2'}></div><span class={'fright'}><span class={'font-copy'}></span><button class={'tombol-copy'} onClick={copied1} type={'button'}>Copy</button></span>
                </div>
                <div class={"container-link"}>
                  <span class={'font-copy-1'}></span><div class={'hr-2'}></div> <span class={'fright'}><span class={'font-copy'}></span><button class={'tombol-copy'} onClick={copied2} type={'button'}>Copy</button></span>
                </div>
                <div class={"container-link"}>
                  <span class={'font-copy-1'}></span> <div class={'hr-2'}></div><span class={'fright'}><span class={'font-copy'}></span><button class={'tombol-copy'} onClick={copied3} type={'button'}>Copy</button></span>
                </div>
              </div>

              <p class={'font-big1'}>Advanced Statistics</p>
              <p class={'font-smal1'}>Trach how your link are perfoming across the web with our advanced statistics dashboard.</p>
          </div>
            <div class={'container-card'}>
              <div class={'card'}>
                <div class={'card-border card1'}><img src={icon1} alt={'Peningkatan'}/></div>
                <p class={'font-card'}>Brand Recognition</p>
                <p class={'font-card1'}>Boost your brand recognition with each click. Generix links dont mean a thing. Branded links help instil confidence in your content.</p>
              </div>
              <div class={'card card2'}>
              <div class={'card-border'}><img src={icon2} alt={'SOsial'}/></div>
              <p class={'font-card'}>Detailed Records</p>
              <p class={'font-card1'}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better delicions.</p>
              </div>
              <div class={'card card3'}>
                <div class={'card-border'}><img src={icon3} alt={'Penyeimbang'}/></div>
                <p class={'font-card'}>Fully Customizable</p>
                <p class={'font-card1'}>Improve brand awareness and content discoverability through customizable link supercharging audience engagement.</p>
              </div>
            </div>
            <div class={'height'}></div>
          <div class={'bg-last'}>
            <div>
              <p>Boost your links today<br/> <button type={'button'} class={'button1'}>Get Started</button></p>
            </div>
          </div>
          <div class={'container-bottom-1'}>
          <div class={'container-bottom'}>
            <div class={'c-flex4'}><img src={logo2} alt={'Seimbang'}/></div>
            <div class={'c-flex3'}>
              <div class={'font-bottom'}>Features</div> 
              <div class={'font-rule'}>Link Shortening</div>
              <div>Branded Links</div>
              <div>Analytics</div>
            </div>
            <div class={'c-flex3'}>
              <div class={'font-bottom'}>Resources</div>
              <div class={'font-rule'}>Blog</div>
              <div>Developers</div>
              <div>Support</div>
            </div>
            <div class={'c-flex3'}>
              <div class={'font-bottom'}>Company</div>
              <div class={'font-rule'}>About</div>
              <div>Our Team</div>
              <div>Carees</div>
              <div>Contact</div>
            </div>
            <div class={'c-flex3 c-flex-h'}><img src={iconFC} alt={'facebook'}/></div>
              <div class={'c-flex3  c-flex-h'}><img src={iconTW} alt={'twitter'}/></div>
              <div class={'c-flex3  c-flex-h'} ><img src={iconPI} alt={'pinterest'} /></div>
              <div class={'c-flex3 c-flex-h'}><img src={iconIG} alt={'instagram'} /></div>
          </div>
          <div class={'c-flex-3'}>
            <div class={'c-flex31'}><img src={iconFC} alt={'facebook'}/></div>
              <div class={'c-flex31'}><img src={iconTW} alt={'twitter'}/></div>
              <div class={'c-flex31'} ><img src={iconPI} alt={'pinterest'} /></div>
              <div class={'c-flex31'}><img src={iconIG} alt={'instagram'} /></div>
            </div>
          </div>
        </main>
        <div class={'akhir'}></div>
    </div>
    
  );
}

export default App;
