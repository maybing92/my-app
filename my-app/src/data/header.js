import { CiBatteryFull } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { CiPickerHalf } from "react-icons/ci";
import { CiDesktopMouse1 } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Maybing",
        icon: <CiBatteryFull />,
        src: "/"
    },
    {
        title: "Playlist",
        icon: <CiHeadphones />,
        src: "/playlist"
    },
    {
        title: "LUV IT",
        icon: <CiHeart />,
        src: "/luvit"
    },
    {
        title: "Knot",
        icon: <CiLink />,
        src: "/knot"
    },
    {
        title: "Class",
        icon: <CiPen />,
        src: "/class"
    },
    {
        title: "Tips",
        icon: <CiPickerHalf />,
        src: "/tips"
    },
    {
        title: "Nokduro",
        icon: <CiDesktopMouse1 />,
        src: "/stream"
    },
    {
        title: "유튜브",
        icon: <CiYoutube />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "녹두로",
        src: "/search/nokduro"
    },
    {
        title: "안성훈",
        src: "/search/안성훈"
    },
    {
        title: "TC2",
        src: "/search/thecrew2"
    },
    {
        title: "슈퍼주니어",
        src: "/search/슈퍼주니어"
    },
    {
        title: "플레이리스트",
        src: "/search/JJINMAK"
    },
    {
        title: "또간집",
        src: "/search/또간집"
    },
    {
        title: "일러스트",
        src: "/search/일러스트레이터"
    },
    {
        title: "포토샵",
        src: "/search/포토샵"
    },
    {
        title: "블렌더",
        src: "/search/blender"
    },
    {
        title: "몰아보기",
        src: "/search/연인 몰아보기"
    },
    {
        title: "런닝맨",
        src: "/search/런닝맨"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/maybing92",
        icon: <AiFillGithub />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/maybing92",
        icon: <AiOutlineInstagram />
    },
]