import "./App.css";
import Shay1 from "./assets/images/shay1.jpg";
import BitIcon from "./assets/icons/bit.jpg";
import PayboxIcon from "./assets/icons/paybox.png";
import ReactPlayer from "react-player/lazy";

export const App = () => {
  return (
    <div className="site-container">
      <div className="overflow-x-hidden flex flex-col items-center  bg-slate-200 content-wrap">
        <div
          style={{ backgroundImage: `url(${Shay1})` }}
          className="relative flex w-full  justify-center items-center h-[500px]  sm:max-w-[1062px]  shay-img bg-no-repeat bg-center"
        >
          <span className="p-6  place-self-end	 text-6xl font-medium bottom-0 left-0 w-full bg-[#ffffff42]  text-black  ">
            <span className="">"הנני"</span>
            <span className="mt-3 px-3  text-base flex text-center text-black text- ">
              רס"ן שי שמריז הי"ד נפל בקרב בצפון רצועת עזה בתאריך יד' בטבת התשפ"ד
            </span>
          </span>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <ReactPlayer
            playing={true}
            style={{ width: "1062px " }}
            url="https://www.youtube.com/watch?v=DQuW4LZwPBw"
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0, autoplay: 1 },
              },
            }}
          />
        </div>
        <div
          dir="rtl"
          className="w-full p-2 flex flex-col text-center  sm:text-2xl   bg-slate-200"
        >
          <div className="flex flex-col mt-3">
            <span>אנו, חברי היישוב שזכינו לגדול לצידו של שי הי"ד</span>
            <span>יוצאים בפרוייקט הנצחה להקמת פינת טבע לזכרו</span>
          </div>
          <span className="mt-4 ">לזכר העוז והענווה</span>
          <span>לזכר החיוך השקט</span>
          <span>לזכר דמותו המיוחדת ממנה </span>
          <span>למדנו על אהבת העם והארץ</span>

          <div className="bg-white rounded-3xl flex flex-col gap-3 p-3 sm:w-1/3 w-2/3 m-auto mt-5 shadow-2xl">
            <span className="text-xl">לתרומות</span>
            <div className="flex gap-2 text-center justify-center">
              <a target="_blank" href="https://www.bitpay.co.il/he">
                <img className="h-12 rounded-3xl" src={BitIcon} alt="" />
              </a>
              <a target="_blank" href="https://www.payboxapp.com/">
                <img className="h-12 " src={PayboxIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="px-16 flex flex-col mt-5">
            <span>"לנצח אחי אזכור אותך תמיד</span>
            <span>ונפגש בסוף, אתה יודע</span>
            <span>ויש לי חברים אבל גם הם כבים</span>
            <span>אל מול אורך המשגע"</span>
            <span className="text-xs">(לבכות לך/ אביב גפן)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
