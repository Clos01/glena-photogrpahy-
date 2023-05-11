import React from "react";
import { useSpring, animated } from "react-spring";
import { ReactSVG } from "react-svg";
import Calendar from "../Svg/Calendar.svg";
import xsquare from "../Svg/x-square.svg";
import camera from "../Svg/camera.svg";
import Refresh from "../Svg/refresh-ccw.svg";
import Service from "../Svg/user-check.svg";
import Bookmark from "../Svg/bookmark.svg";
import CreditCard from "../Svg/credit-card.svg";
import DollaSign from "../Svg/dollar-sign.svg";
import MoneySign from "../images/dollar.png";
import Venmo from "../images/Venmo.png";
import ApplePay from "../images/ApplePay.png";
import Zelle from "../images/Zelle.png";
function Polices() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <>
      <animated.div style={fadeIn}>
        <div className="p-8">
          <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <h4 className="text-5xl font-bold text-[#498054] tracking-widest uppercase text-center">
              Polices & FAQS
            </h4>
            <h2 className="text-center text-[#0f3649] text-lg mt-2">
              Here are some of the frequently asked questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4 text-center">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <ReactSVG src={Calendar} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Reschedule{" "}
                  </h4>
                  <p className="text-gray-600 my-2">
                    All deposit fees are non-refundable. In order to reschedule
                    a session you must let the Photographer know within 24
                    hours. If the situation is last minute. please reach out
                    directly. I understand things happen! In the event of an
                    extenuating circumstance on the Photographer's part they
                    will reschedule for a different time.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <div className="">
                    <ReactSVG src={xsquare} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Cancelation
                  </h4>
                  <p className="text-gray-600 my-2">
                    In case of a at the clients request the initial deposit of
                    $50 is non refundable
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <ReactSVG src={camera} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Final Pictures
                  </h4>
                  <p className="text-gray-600 my-2">
                    I will choose the best images from your session. After
                    thoroughly editing the proofs will be sent via email & you
                    can decide which ones you would like from there. Additional
                    images will be available for purchase.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <ReactSVG src={Refresh} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">Re-shoots</h4>
                  <p className="text-gray-600 my-2">
                    Re-shoots are available for sessions. If the client is not
                    satisfied with the pictures provided the can choose this
                    option.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <div className="">
                    <ReactSVG src={Service} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    FAQ: Performance Or Services?
                  </h4>
                  <p className="text-gray-600 my-2">
                    Photographer agrees to take photographs based on client's
                    request. Photographer agrees to create high quality
                    photographs and will use professional editing to edit
                    digital images to represent Photographer's artistic style.
                    Photographer agrees to provide proofs within 1 week of
                    session date.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <div className="">
                    <ReactSVG src={Bookmark} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    FAQ: Official Booking?
                  </h4>
                  <p className="text-gray-600 my-2">
                    At the time of booking. Client agrees to pay a
                    non-refundable $50 deposit fee to secure session date. The
                    deposit will be applied towards the session fee. For mini
                    sessions the $50 deposit fee is in addition to packages
                    shown in pricing guide. This guarantees the time and date
                    allotted for you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <ReactSVG src={CreditCard} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    {" "}
                    FAQ: Payment?
                  </h4>
                  <p className="text-gray-600 my-2">
                    Client agrees to pay the final amount due upon date of
                    session. If the Client hasn't made a decision on the package
                    they would like to go with upon date of session the minimum
                    payment is required on the same day & the final amount is
                    due once proof revision has been done & the final decision
                    is made. If the client cancels the session. the deposit will
                    not be refunded.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="App self-center md:self-auto">
                  <ReactSVG src={DollaSign} />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-700">
                    FAQ: Payment Options?
                  </h4>
                  <p className="PaymentImgs">
                    If you have any questions regarding payment options, I got
                    you covered! We understand that everyone has their preferred
                    method of payment, which is why You can choose to pay with
                    Cash,Venmo,ApplePay and Zelle.
                  </p>
                  <div className="PaymentImgs flex justify-center items-center space-x-5 mt-2 ">
                    <img src={MoneySign} alt="Cash" />
                    <img src={Venmo} alt="Venmo" />
                    <img src={ApplePay} alt="Apple Pay" />
                    <img src={Zelle} alt="Zelle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Polices;
