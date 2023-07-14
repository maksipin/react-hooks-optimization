import { DiAtom } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FcIdea } from "react-icons/fc";
import { GiBoxTrap, GiBrain } from "react-icons/gi";
import { RiShakeHandsFill } from "react-icons/ri";
import { mainPageImage, useRefImage, useMemoImage } from "./images";

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
        img: mainPageImage.render1,
        title: "Монтирование компонента",
        secondary:
          "При первом монтирование компонента происходит рендер (отрисовка страницы). В компонент мы можем передавать props и использовать state",
      },
      {
        type: "content",
        img: mainPageImage.updateRender,
      },
      {
        type: "content",
        img: mainPageImage.render2,
        title: "Повторный рендер (ререндер)",
        secondary:
          "В тот момент когда поменялся props или изменилось состояние происходит повторный рендер(ререндр) компонента. Чем чаще мы вызываем рендер, тем больше создается нагрузка на устройство и как следствие падение производительности.",
      },
      {
        type: "content",
        img: mainPageImage.render,
      },
      {
        type: "describe",
        title: "А теперь давайте вспомним какие типы данных мы знаем \nв JS",
        secondary:
          "В JavaScript выделяют два вида типов данных - примитивные типы и ссылочные.",
      },
      {
        type: "content",
        img: mainPageImage.primitive,
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
        img: mainPageImage.objectImg,
        title: "Ссылочный тип в JavaScript только один – это object (объект).",
        secondary:
          "Объект – это одно из ключевых понятий JavaScript. Т.к. в этом языке всё практически является объектами. Функция, массив, дата и т.д. – это объекты. Даже примитивные типы данных ведут себя как объекты, хотя ими не являются.",
      },
      {
        type: "content",
        img: mainPageImage.objectCompare1,
        title: "Сравнение по ссылке.",
        secondary:
          "Два объекта равны только в том случае, если это один и тот же объект.\n" +
          "\n" +
          "Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:",
      },
      {
        type: "content",
        img: mainPageImage.objectCompare2,
        title: "Сравнение независимых объектов",
        secondary:
          "И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):",
      },
      {
        type: "describe",
        title: "И вот теперь мы подошли к главному моменту!",
        secondary:
          "При каждом ре-рендере родительского компонента будет происходить ре-рендер дочерненего компонента.\n" +
          "При каждом рендере в теле компонента будут формироваться новые объекты, массивы, функции и если мы их передаем в дочерний компонент как props, то это будет вызывать повторный рендер компонента, даже если значения в внутри объекта не менялись.",
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
          "Позволяет ссылаться на значение, изменять его не вызывая повторного рендера",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useRef",
      },

      {
        type: "describe",
        title: "И так, чем же может быть полезен данный хук?",
        secondary: "Для начала давайте посмотрим как его инициализировать.",
      },
      {
        type: "content",
        img: useRefImage.initial,
        title: "Вызываем хук useRef...",
        secondary:
          "Вызываем хук useRef на верхнем уровне компонента. В скобки можем передать initialValue(значение которые будет в поле current изначально)\n" +
          "useRef возвращает ref-объект со свойством current. Можно менять это свойство.\n" +
          "Если передать ref-объект в качестве атрибута ref узлу JSX, то React установит его current свойство, что позволит обращаться к DOM напрямую.\n" +
          "" +
          "При следующем рендеринге useRef вернет тотже объект.",
      },
      {
        type: "content",
        title: "Пример.",
        secondary:
          "1. Вызываем хук useRef, сохраняем ref-объект в переменную intervalRef.\n" +
          "2. Сохраняем ввнутри функции индентификатор интервала в поле intervalRef.current.\n" +
          "3. Очищаем интервал в другой функции",
      },
      {
        type: "content",
        img: useRefImage.interval1,
      },
      {
        type: "content",
        img: useRefImage.interval2,
      },
      {
        type: "content",
        img: useRefImage.interval3,
      },
      {
        type: "title",
        buttonName: "Больше примеров здесь",
        buttonLink: "https://react.dev/reference/react/useRef#examples-dom",
      },
    ],
  },
  useMemo: {
    title: "useMemo",
    linkPage: "useMemo",
    content: [
      {
        type: "title",
        icon: <GiBrain />,
        title: "useMemo hook",
        secondary:
          "Позволяет кэшировать результат вычислений между повторными рендерами.",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useMemo",
      },

      {
        type: "describe",
        title: "Один из самых используемых хуков",
        secondary:
          "С этим хуком вы подружитесь ))).\n" +
          "Давайте разбираться как им пользоваться",
      },
      {
        type: "content",
        img: useMemoImage.initialUseMemo,
        title: "Вызываем хук useMemo...",
        secondary:
          "Вызываем хук useMemo на верхнем уровне компонента.\n" +
          "Первым параметром передаем колбэк функцию результат которой необходимо кешировать.\n" +
          "Вторым параметром передаем массив зависимостей при изменении, которой будет произведен повторный вызов переданной функции.",
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
