import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists: string[] = ["Magasin", "Mac", "iPhone", "Support"];

export interface HighlightSlide {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
}

export const hightlightsSlides: HighlightSlide[] = [
  {
    id: 1,
    textLists: [
      "Découvrez l'A17 Pro.",
      "Puce révolutionnaire.",
      "Performances révolutionnaires.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titane.", "Si solide. Si léger. Si Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "L'iPhone 15 Pro Max possède le",
      "zoom optique le plus long",
      "jamais vu sur un iPhone. Impressionnant.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Nouveau bouton Action.", "Que ferez-vous avec le vôtre ?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export interface Model {
  id: number;
  title: string;
  color: string[];
  img: string;
}

export const models: Model[] = [
  {
    id: 1,
    title: "iPhone 15 Pro en titane naturel",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro en titane bleu",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro en titane blanc",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro en titane noir",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export interface Size {
  label: string;
  value: string;
}

export const sizes: Size[] = [
  { label: '6.1"', value: "petit" },
  { label: '6.7"', value: "grand" },
];

export const footerLinks: string[] = [
  "Politique de confidentialité",
  "Conditions d'utilisation",
  "Politique de vente",
  "Mentions légales",
  "Plan du site",
];
