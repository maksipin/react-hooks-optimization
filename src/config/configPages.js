import { DiAtom } from "react-icons/di";
import { RiShakeHandsFill } from "react-icons/ri";
import render1 from "../public/assets/render/475.png";
import render2 from "../public/assets/render/57.png";
import { Image } from "../component/Image/Image";

export const configPages = {
  main: {
    title: "Главная",
    linkPage: "main",
    content: [
      {
        type: "title",
        icon: <DiAtom />,
        title: " Откройте мир React",
        secondary: "React hooks \n и другие инструменты оптимизации",
        linkButton: "https://react.dev/reference/react#state-hooks",
      },

      {
        type: "describe",
        title:
          "Давайте вместе прокачайем ваши навыки оптимизации React с помощью хуков и других инструментов!",
        secondary:
          "Для начала давайте вспомним общую информацию и поговорим о рендере(render).\nМы пока не будем рассматривать случаи с использованием useSelector, useContext и т.п. ",
      },
      {
        type: "content",
        img: render1,
        title: "Монтирование компонента",
        secondary:
          "При первом монтирование компонента происходит рендер (отрисовка страницы). В компонент мы можем передавать props и использовать state",
      },
      {
        type: "content",
        img: render2,
        title: "Повторный рендер (ререндер)",
        secondary:
          "В тот момент когда поменялся props или изменилось состояние происходит повторный рендер(ререндр) компонента. Чем чаще мы вызываем рендер, тем больше создается нагрузка на устройство и как следствие падение производительности.",
      },
    ],
  },
  useRef: {
    title: "useRef",
    linkPage: "useRef",
    content: [
      {
        type: "title",
        icon: <RiShakeHandsFill />,
        title: "useRef hooks",
        secondary: "Хук для оптимизации работы ",
      },

      {
        type: "describe",
        title: "",
        secondary: "",
      },
      {
        type: "content",
        img: "",
        title: "",
        secondary: "",
      },
    ],
  },
  useMemo: {
    title: "useMemo",
    linkPage: "useMemo",
    content: [
      {
        type: "title",
        icon: "",
        title: "",
        secondary: "",
      },

      {
        type: "describe",
        title: "",
        secondary: "",
      },
      {
        type: "content",
        img: "",
        title: "",
        secondary: "",
      },
    ],
  },
  useCallback: {
    title: "useCallback",
    linkPage: "useCallback",
    content: [
      {
        type: "title",
        icon: "",
        title: "",
        secondary: "",
      },

      {
        type: "describe",
        title: "",
        secondary: "",
      },
      {
        type: "content",
        img: "",
        title: "",
        secondary: "",
      },
    ],
  },
};
