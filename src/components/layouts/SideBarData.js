import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: "Movies",
    path: "/Movie-Mojo/movies",
    cName: "menu-text",
    icon: <BiIcons.BiCameraMovie />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    items: [
      {
        title: "Trending",
        path: "/Movie-Mojo/movies/trending",
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: "Popular",
        path: "/Movie-Mojo/movies/popular",
        icon: <AiIcons.AiFillStar />,
      },
    ],
  },
  {
    title: "TV",
    path: "/Movie-Mojo/tv",
    icon: <BsIcons.BsFillDisplayFill />,
    cName: "menu-text",
  },
  {
    title: "Music",
    path: "/Movie-Mojo/music",
    icon: <FaIcons.FaMusic />,
    cName: "menu-text",
  },
  {
    title: "News",
    path: "/Movie-Mojo/news",
    cName: "menu-text",
    icon: <Io5Icons.IoNewspaperOutline />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    items: [
      {
        title: "Trending",
        path: "/Movie-Mojo/news/trending",
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: "Live",
        path: "/Movie-Mojo/news/live",
        icon: <MdIcons.MdLiveTv />,
      },
    ],
  },
  {
    title: "Artists",
    path: "/Movie-Mojo/artists",
    icon: <MdIcons.MdPeople />,
    cName: "menu-text",
  },
  {
    title: "Reviews",
    path: "/Movie-Mojo/reviews",
    icon: <MdIcons.MdRateReview />,
    cName: "menu-text",
  },
  {
    title: "Videos",
    path: "/Movie-Mojo/videos",
    icon: <MdIcons.MdSlowMotionVideo />,
    cName: "menu-text",
  },
  {
    title: "Entertainment",
    path: "/Movie-Mojo/entertainment",
    icon: <MdIcons.MdLiveTv />,
    cName: "menu-text",
  },
];

export default SideBarData;
