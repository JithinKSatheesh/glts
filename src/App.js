import logo from './logo.svg';
import './App.css';

// assets
// import {ReactComponent as Logo} from './assets/logo.svg'
import Logo from './assets/logo.png'

import Ellipse70 from './assets/Ellipse_70.png'
import Ellipse68 from './assets/Ellipse_68.png'

import {JustAppear} from './SlideAnimation'

function App() {
  return (
    <div className="App text-white w-full overflow-hidden">
      <div className=" container mx-auto px-[20px]">

      <div className="text-center h-screen min-h-[500px] md:min-h-[700px] flex flex-col justify-between items-center">
        <div className=''>
          {/* <Logo className='' /> */}
          <img src={Logo} alt="" className='mt-[20px] h-[100px] md:h-fit' />
        </div>

        {/* ========================= */}

        <div>
          <div className="relative">
              {/* <div  className="z-10 absolute top-[-200px] floating  floating-4 left-[-500px] w-[700px] h-[700px] bg-[#6CBD45] opacity-[0.2] rounded-full blur-[200px]"></div> */}
              <img className="z-10 absolute top-[-200px] floating  floating-4 left-[-500px] opacity-[0.5] " src={Ellipse70} alt="" />
              {/* <div  className="z-10 absolute top-[-480px] floating floating-2 right-[-500px] w-[845px] h-[851px] bg-[#6CBD4533] rounded-full blur-[200px]"></div> */}
              <img className="z-10 absolute top-[-400px] floating floating-2 right-[-350px] opacity-[0.5] " src={Ellipse68} alt="" />
              
              <div className="z-20 absolute floating  floating-3 top-[-50px] left-[-130px] w-[400px] h-[400px] bg-[#6CBD4533] rounded-full ]"></div>
              <div className="z-20 absolute floating  floating-2  top-[-50px] right-[20px] w-[50px] h-[50px] bg-[#6CBD4533] rounded-full ]"></div>
              
          </div>
          <div className=" font-bold text-[40px] md:text-[96px]">
            <JustAppear  duration={2}>
            Greetings!
            </JustAppear>
          </div>
          <div className="text-[16px] md:text-[20px] text-[400] max-w-[400px] md:max-w-[757px]">
          <JustAppear  duration={3}>

            We are doing the best to make our brand new WEBSITE available soon.
            Meanwhile, for the professional services you can contact us via email
          </JustAppear>
          </div>
          <a href="mailto:info@gits.am">

          <JustAppear  duration={4} className="w-[200px] py-[10px] mt-[30px] mx-auto font-bold text-[18px] bg-[#6CBD45] rounded-[30px]">
            info@gits.am
          </JustAppear>
          </a>
        </div>

        {/* ========================= */}
        <div>
          <div className="text-[12px] md:text-[14px] font-[700] max-w-[400px] md:max-w-[736px] pb-[50px]">
            GLT Solutions CJSC (the “Firm”) is an independent firm and is not part of the Deloitte network. Prior to August 2022, the Firm was a member of the Deloitte network for 10 years, i.e., from 2012 until August 2022.
          </div>

        </div>

      </div>
      </div>

    </div>
  );
}

export default App;
