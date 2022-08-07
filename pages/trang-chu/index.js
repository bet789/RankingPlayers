import React from "react";
import Image from "next/image";
import {
  TableIcon,
  CalendarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import logo from "../../assets/images/logo.png";

import imgBg from "../../assets/images/bg.jpg";
import imgHead from "../../assets/images/head.png";
import imgBanner1 from "../../assets/images/banner1.png";
import imgBanner2 from "../../assets/images/banner2.png";
// icon
import iconEvent from "../../assets/images/event.png";
import iconShotting from "../../assets/images/shotting.png";
import iconNoHu from "../../assets/images/no-hu.png";

export default function TrangChu() {
  const dataImagesProviderBanCa = [
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fourdragonkings.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/alterworld.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/animalfishing.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/caishendao.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fishingexpedition.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fourdragonkings.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/alterworld.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/animalfishing.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/caishendao.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fishingexpedition.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fourdragonkings.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/alterworld.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/animalfishing.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/caishendao.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fishingexpedition.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fourdragonkings.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/alterworld.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/animalfishing.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/caishendao.png",
    },
    {
      url: "https://csi.20icipp.com/img/static/game/vi-VN/KA/fishingexpedition.png",
    },
  ];

  const dataRank = [
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
    {
      name: "Hội viên 1",
      score: 20,
      provider: "JILI",
    },
  ];
  return (
    <>
      <div
        className="min-h-[100vh] bg-[#202020]"
        style={{
          backgroundImage: `url(${imgBg.src})`,
          //   background: `url(https://csi.20icipp.com/img/static/hyyl/desktop/bg-null.png) bottom/100% auto no-repeat fixed,#050f10 url(https://csi.20icipp.com/img/static/hyyl/desktop/bg-null.jpg) top/100% auto no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="container mx-auto px-2">
          <div className="top flex  mx-auto">
            <div className="top-left w-3/6">
              <div className="logo w-72  ">
                <Image src={logo} alt="SHBET" />
              </div>
              <div className="title text-3xl font-extrabold mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800">
                  BẢNG XẾP HẠNG SLOTS - BẮN CÁ
                </span>
              </div>
              <p className="text-xl font-medium mt-2 text-sky-500">
                Số liệu cược của ngày hôm nay sẽ được hệ thống cập nhật vào ngày
                hôm sau
              </p>
              <p className="text-xl font-medium mt-2 text-sky-500">
                Thành viên có tên trong BXH liên hệ chăm sóc khách hàng để nhận
                thưởng
              </p>
            </div>
            <div className="top-right w-3/6 text-white flex justify-end">
              <div className="relative box-join-now bg-custom m-10 py-4 px-6 rounded-3xl w-3/4">
                <div className="title text-3xl font-extrabold mt-2">
                  <span className="text-white">THAM GIA </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800">
                    SHBET
                  </span>
                  <br />
                  <p className="text-xl mt-2">
                    Đăng nhập nhận thưởng không giới hạn
                  </p>
                  <div className="text-center mt-8 mb-4 ">
                    <a
                      href="#"
                      className="text-2xl border-4 py-2 px-4 rounded-2xl border-x-sky-500 border-y-sky-800 "
                    >
                      THAM GIA NGAY
                    </a>
                  </div>

                  <div className="icon absolute w-[100px] h-[100px] animate-bounce">
                    <Image src={iconEvent} alt="SHBET" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-games">
            <div className="container mx-auto px-2 py-4">
              <div className="box-nav-games flex content-center justify-center gap-10 ">
                <button className="btn-nav-game bg-custom flex p-4 rounded-full items-center border-4 border-transparent hover:border-sky-800">
                  <span className="icon block w-[70px] h-[70px] scale-x-[-1]">
                    <Image
                      src={iconShotting}
                      alt="SHBET"
                      className="mx-auto block"
                    />
                  </span>
                  <span className="mx-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800">
                    BXH BẮN CÁ
                  </span>
                </button>
                <button className="btn-nav-game bg-custom flex p-4 rounded-full items-center border-4 border-transparent hover:border-sky-800">
                  <span className="icon block w-[70px] h-[70px] ">
                    <Image src={iconNoHu} alt="SHBET" className=" " />
                  </span>
                  <span className="mx-4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800">
                    BXH NỔ HŨ
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="box-provider-games py-4">
            <div className="container mx-auto px-2 py-4">
              <div className="w-10/12 mx-auto">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={7}
                  slidesPerGroup={1}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {dataImagesProviderBanCa &&
                    dataImagesProviderBanCa.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div
                            style={{
                              backgroundImage: `url(${item.url})`,
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                              height: "100%",
                              backgroundSize: "contain",
                            }}
                          ></div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="function-change-data">
            <div className="container mx-auto py-4">
              <div className="w-4/5 mx-auto">
                {/* <div className="img-head text-center">
                  <Image src={imgHead} alt="SHBET" />
                </div> */}
                <div className="bg-custom rounded-full py-2 px-4 flex items-center justify-between">
                  <div className="box-bxh flex items-center gap-6">
                    <button className="bg-custom1 px-4 py-2 rounded-full text-lg flex items-center ">
                      <span>
                        <TableIcon
                          className="h-[25px] w-[25px] text-gray-200"
                          strokeWidth={2}
                        />
                      </span>
                      <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800 ml-2">
                        BXH NGÀY
                      </span>
                    </button>
                    <button className="bg-custom1 px-4 py-2 rounded-full text-lg flex items-center">
                      <span>
                        <TableIcon
                          className="h-[25px] w-[25px] text-gray-200"
                          strokeWidth={2}
                        />
                      </span>
                      <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800 ml-2">
                        BXH TUẦN
                      </span>
                    </button>
                    <button className="bg-custom1 px-4 py-2 rounded-full text-lg flex items-center">
                      <span>
                        <TableIcon
                          className="h-[25px] w-[25px] text-gray-200"
                          strokeWidth={2}
                        />
                      </span>
                      <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-sky-800 ml-2">
                        BXH THÁNG
                      </span>
                    </button>
                  </div>
                  <div className="box-change-date flex items-center gap-4">
                    <span className="text-gray-200 text-lg font-semibold flex items-center">
                      <CalendarIcon
                        className="h-[25px] w-[25px] text-gray-200 mr-1"
                        strokeWidth={2}
                      />
                      01/08/2022
                    </span>
                    <button className="bg-arrow p-2 rounded-md">
                      <ChevronLeftIcon
                        className="h-[20px] w-[20px] text-gray-200"
                        strokeWidth={2}
                      />
                    </button>
                    <button className="bg-arrow p-2 rounded-md ">
                      <ChevronRightIcon
                        className="h-[20px] w-[20px] text-gray-200"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-data-ranking">
            <div className="container mx-auto py-4">
              <div className="table w-4/5 mx-auto">
                <table className="w-full text-sm text-center text-gray-400">
                  <thead className="text-xl uppercase bg-gray-700 text-gray-200">
                    <tr>
                      <th scope="col" className="py-3 px-6 rounded-tl-xl">
                        Thứ Hạng
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Hội Viên
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Điểm Thắng
                      </th>
                      <th scope="col" className="py-3 px-6 rounded-tr-xl">
                        Sảnh
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRank &&
                      dataRank.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className={
                              (index + 1) % 2 === 0
                                ? `${
                                    index === dataRank.length - 1
                                      ? ""
                                      : "border-b "
                                  } bg-gray-800 border-gray-700`
                                : `${
                                    index === dataRank.length - 1
                                      ? ""
                                      : "border-b "
                                  } bg-gray-900 border-gray-700`
                            }
                          >
                            <th
                              scope="row"
                              className={`py-4 px-6 font-medium  whitespace-nowrap text-white ${
                                index === dataRank.length - 1
                                  ? "rounded-bl-xl"
                                  : ""
                              }`}
                            >
                              {index + 1}
                            </th>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.score}</td>
                            <td
                              className={`py-4 px-6 font-bold ${
                                index === dataRank.length - 1
                                  ? "rounded-br-xl"
                                  : ""
                              }`}
                            >
                              {item.provider}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="py-4 w-10/12 mx-auto flex items-center gap-6">
            <div className="banner ">
              <Image src={imgBanner1} alt="SHBET" className="rounded-xl" />
            </div>
            <div className="banner ">
              <Image src={imgBanner1} alt="SHBET" className="rounded-xl" />
            </div>
          </div>
        </div>

        <div className="footer text-center text-gray-200">
          Copyright © SHBET.COM Reserved
        </div>
      </div>
    </>
  );
}
