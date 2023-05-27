import React from "react";
import { HiLanguage } from "react-icons/hi2";
import { BiLink } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";

export const NewsCard = ({ news }) => {
  return (
    <div className="flex-col min-w-60 p-4 space-y-3 shadow-md font-times">
      <h1 className="flex text-2xl text-center font-bold drop-shadow-lg first-letter:uppercase">
        {news.title}
      </h1>
      <div className="flex items-center gap-3">
        <BiLink className="text-4xl" />
        <p className="truncate">{news.link}</p>
      </div>
      <div className="flex items-center gap-3">
        <HiLanguage /> <p className="first-letter:uppercase">{news.language}</p>
      </div>
      {news.category.map((category) => (
        <div className="flex items-center gap-3" key={news.link}>
          <AiFillTags />
          <p key={news.link} className="first-letter:uppercase">
            {" "}
            {category}
          </p>
        </div>
      ))}
      {news.country.map((country) => (
        <div className="flex items-center gap-3" key={news.link}>
          <FaRegFlag />
          <p key={news.link} className="first-letter:uppercase">
            {" "}
            {country}
          </p>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <BsCalendarDate />
        <p>{news.pubDate}</p>
      </div>
    </div>
  );
};
