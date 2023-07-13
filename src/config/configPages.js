import { DiAtom } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FcIdea } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import { RiShakeHandsFill } from "react-icons/ri";
import { images } from "./images";

export const configPages = {
  main: {
    title: "Главная",
    linkPage: "main",
    content: [
      {
        type: "title",
        icon: <DiReact />,
        title: " Откройте мир React",
        secondary: "React hooks \n и другие инструменты оптимизации",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react#state-hooks",
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
        img: images.render1,
        title: "Монтирование компонента",
        secondary:
          "При первом монтирование компонента происходит рендер (отрисовка страницы). В компонент мы можем передавать props и использовать state",
      },
      {
        type: "content",
        img: images.updateRender,
      },
      {
        type: "content",
        img: images.render2,
        title: "Повторный рендер (ререндер)",
        secondary:
          "В тот момент когда поменялся props или изменилось состояние происходит повторный рендер(ререндр) компонента. Чем чаще мы вызываем рендер, тем больше создается нагрузка на устройство и как следствие падение производительности.",
      },
      {
        type: "content",
        img: images.render,
      },
      {
        type: "describe",
        title: "А теперь давайте вспомним какие типы данных мы знаем \nв JS",
        secondary:
          "В JavaScript выделяют два вида типов данных - примитивные типы и ссылочные.",
      },
      {
        type: "content",
        img: images.primitive,
        title: "В JavaScript выделяют 7 примитивных типов:",
        secondary:
          "number (обычные числа);\n" +
          "\n" +
          "bigint (большие целые числа);\n" +
          "\n" +
          "string (строки);\n" +
          "\n" +
          "boolean (логический) – имеет всего два значения: true и false;\n" +
          "\n" +
          "null – имеет одно значения: null;\n" +
          "\n" +
          "undefined – имеет одно значения: undefined;\n" +
          "\n" +
          "symbol (символ) – для создания уникальных значений;\n",
      },
      {
        type: "content",
        img: images.objectImg,
        title: "Ссылочный тип в JavaScript только один – это object (объект).",
        secondary:
          "Объект – это одно из ключевых понятий JavaScript. Т.к. в этом языке всё практически является объектами. Функция, массив, дата и т.д. – это объекты. Даже примитивные типы данных ведут себя как объекты, хотя ими не являются.",
      },
      {
        type: "content",
        img: images.objectCompare1,
        title: "Сравнение по ссылке.",
        secondary:
          "Два объекта равны только в том случае, если это один и тот же объект.\n" +
          "\n" +
          "Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:",
      },
      {
        type: "content",
        img: images.objectCompare2,
        title: "Сравнение независимых объектов",
        secondary:
          "И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):",
      },
      {
        type: "describe",
        title: "И вот теперь мы подошли к главному моменту!",
        secondary:
          "При каждом ренере в теле компонента будут формироваться новые объекты, массивы, функции и если мы их передаем в дочерний компонент как props, то это будет вызывать повторный рендер компонента, даже если значения в объекте не менялись.",
      },
      {
        type: "title",
        icon: <FcIdea />,
        title: "А теперь давайте научимся оптимизировать наши компоненты",
        secondary:
          "Наш компонент будет обновляться только тогда, когда нам это нужно",
        buttonName: "useRef",
        buttonLink: "/useRef",
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
        title: "useRef hook",
        secondary:
          "Позволяет ссылаться на значение и изменять его, не вызывая повторного рендера",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useRef",
      },

      {
        type: "describe",
        title: "И так, чем же может быть полезен данный хук?",
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
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useRef",
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
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useRef",
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
