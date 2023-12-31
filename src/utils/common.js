import IMAGES from "src/assets";

export const CARDS = [
  {
    key: 1,
    img: IMAGES.yogaCard,
    title: "1. Prayer pose",
    subtitle: "Pranamasana",
  },
  {
    key: 2,
    img: IMAGES.yogaCard,
    title: "2. Prayer pose",
    subtitle: "Pranamasana",
  },
  {
    key: 3,
    img: IMAGES.yogaCard,
    title: "3. Prayer pose",
    subtitle: "Pranamasana",
  },
  {
    key: 4,
    img: IMAGES.yogaCard,
    title: "4. Prayer pose",
    subtitle: "Pranamasana",
  },
];

export const TEXT_CARDS = [
  {
    key: 1,
    headerText: "Benefits",
    color: "#0ac3dd",
    list: [
      { key: 1, content: "Yoga improves strength, balance & flexibility" },
      { key: 2, content: "Yoga helps with back pain relief" },
      { key: 3, content: "Yoga can ease arthritis symptoms" },
    ],
  },
  {
    key: 2,
    headerText: "Caution",
    color: "#c67923",
    list: [
      { key: 1, content: "Yoga improves strength, balance & flexibility" },
      { key: 2, content: "Yoga helps with back pain relief" },
      { key: 3, content: "Yoga can ease arthritis symptoms" },
    ],
  },
];

export const FOCUS = [
  {
    focus: 1,
    child: [],
    hasChildren: false,
    uniqName: "",
  },
  {
    focus: 2,
    child: [{ focus: 1 }, { focus: 2 }, { focus: 3 }, { focus: 4 }],
    hasChildren: true,
    uniqName: "cards",
  },
  {
    focus: 3,
    child: [],
    hasChildren: false,
    uniqName: "",
  },
];
