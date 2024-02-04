import "./App.css";
import Shay1 from "./assets/images/shay1.jpg";
import BitIcon from "./assets/icons/bit.jpg";
import PayboxIcon from "./assets/icons/paybox.png";

export const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative flex w-full justify-center bg-slate-400 shay-img">
        <img className="max-w-[fit-content]" src={Shay1} />
        <span className="p-6  absolute text-6xl font-medium bottom-0 left-0 w-full bg-[#ffffff42]  text-black  ">
          <span className="">"הנני"</span>
          <span className="mt-3 px-3  text-base flex text-center text-black text- ">
            רס"ן שי שמריז הי"ד נפל בקרב בצפון רצועת עזה בתאריך יד' בטבת התשפ"ד
          </span>
        </span>
      </div>
      <div
        dir="rtl"
        className="w-full p-2 flex flex-col text-center  bg-slate-200"
      >
        <div className="flex flex-col mt-3">
          <span>אנו, חברי היישוב שזכינו לגדול לצידו של שי הי"ד</span>
          <span>יוצאים בפרוייקט הנצחה להקמת פינת הטבע לזכרו.</span>
        </div>
        <span className="mt-4 ">לזכר העוז והענווה</span>
        <span>לזכר החיוך השקט</span>
        <span>לזכר דמותו המיוחדת ממנה </span>
        <span>למדנו על אהבת העם והארץ</span>
        <div className="bg-white rounded-3xl flex flex-col gap-3 p-3 w-2/3 m-auto mt-5 shadow-2xl">
          <span className="text-xl">לתרומות</span>
          <div className="flex gap-2 text-center justify-center">
            <img className="h-12 rounded-3xl" src={BitIcon} alt="" />
            <img className="h-12" src={PayboxIcon} alt="" />
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
  );
};

export default App;
