import { MdUpdate } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { FcIdea } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { GiStrongMan, GiBrain, GiBugleCall } from "react-icons/gi";
import { RiShakeHandsFill } from "react-icons/ri";
import { TbMessageCircleQuestion } from "react-icons/tb";
import {
  mainPageImage,
  useRefImage,
  useMemoImage,
  useCallbackImage,
  memoImage,
  aboutImage,
} from "./images";

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
          "Давайте вместе прокачаем ваши навыки оптимизации React с помощью хуков и других инструментов!",
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
          "В тот момент когда поменялся props или изменился state происходит повторный рендер(ре-рендр) компонента. Чем чаще мы вызываем рендер, тем больше создается нагрузка на устройство и как следствие падение производительности.",
      },

      {
        type: "content",
        img: mainPageImage.render,
      },
      {
        type: "content",
        title: "Еще пример в картинках",
        secondary: "Не удержался не добавить их сюда....",
      },
      {
        type: "content",
        img: mainPageImage.render4,
      },
      {
        type: "content",
        img: mainPageImage.render3,
      },
      {
        type: "describe",
        title: "А теперь давайте вспомним какие типы данных мы знаем \nв JS",
        secondary:
          "В JavaScript выделяют два вида типов данных - примитивные типы и не примитивные (ссылочные).",
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
      {
        type: "content",
        title: "Давайте разбираться когда нам пригодится useMemo...",
        secondary:
          "По умолчанию React будет повторно запускать все тело компонента при каждом повторном рендере. Т.е. без useMemo функция filterTodos() будет вызываться при каждом редере.\n" +
          "И в большинстве случаев это не проблема, но что если вы сортируете массив с 1000 и более элементов? Здесь и поможет нам useMemo(), он при первом рендере выполнит сортировку, закэширует результат и при каждом новом рендере будет его нам отдавать, пока не изменится хотя бы одна переменная в массиве зависимостей.",
      },
      {
        type: "title",
        buttonName: "Примеры здесь",
        buttonLink:
          "https://react.dev/reference/react/useMemo#examples-recalculation",
      },
      {
        type: "content",
        img: useMemoImage.reRenderUseMemo,
        title: "Ре-рендер дочернего компонента",
        secondary:
          "При каждом рендере будет выполняться функция filterTodos() и возвращать нам новую ссылку на массив, этот массив мы передаем в дочерний компонент List через props и т.к. массив каждый раз новый не смотря на то, что содержание не меняется,  приведет в тому что List также будет перерендериваться",
      },
      {
        type: "content",
        img: useMemoImage.reRenderUseMemo2,
        title: "Пропуск ре-рендера",
        secondary:
          "Оборачиваем функцию filterTodos() в useMemo и теперь получаем одну и ту же ссылку на массив, props не меняется и List повторно не рендерится",
      },
    ],
  },
  useCallback: {
    title: "useCallback",
    linkPage: "useCallback",
    content: [
      {
        type: "title",
        icon: <GiBugleCall />,
        title: "useCallback hook",
        secondary:
          "Позволяет кэшировать определение функции между повторными рендерами.",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/useCallback",
      },
      {
        type: "describe",
        title: "Похож на хук useMemo",
        secondary:
          "Как можно догодаться из названия хука, что он позволяет кэшировать функцию. В принципе кэшировать функцию можно с помощью хука useMemo, но хук useCallback это делает проще.",
      },
      {
        type: "content",
        img: useCallbackImage.initialUseCallback,
        title: "Вызываем хук useCallback...",
        secondary:
          "Вызываем хук useCallback на верхнем уровне компонента.\n" +
          "Первым параметром передаем колбэк функцию результат которой необходимо кешировать.\n" +
          "Вторым параметром передаем массив зависимостей при изменении, которой будет произведен повторный вызов переданной функции.",
      },
      {
        type: "title",
        secondary:
          "Принцип работы очень схож с useMemo, поэтому лучше просто посмотреть на него в деле",
        buttonName: "Здесь",
        buttonLink:
          "https://react.dev/reference/react/useCallback#examples-rerendering",
      },
    ],
  },
  memo: {
    title: "React.memo",
    linkPage: "memo",
    content: [
      {
        type: "title",
        icon: <MdUpdate />,
        title: "React.memo",
        secondary:
          "позволяет пропустить повторный рендеринг компонента, если его props не изменились.",
        buttonName: "Документация",
        buttonLink: "https://react.dev/reference/react/memo",
      },
      {
        type: "describe",
        title: "memo - это не хук, а HOC ...",
        secondary:
          "React обычно повторно визуализирует компонент всякий раз, когда его родительский компонент повторно рендерится. С помощью memo вы можете создать компонент, который React не будет повторно рендерить при повторном рендеринге его родителя, если его новые props совпадают со старыми. Говорят, что такой компонент мемоизирован .",
      },
      {
        type: "content",
        img: memoImage.initialMemo,
        title: "Оборачиваем компонент в memo",
        secondary:
          "Эта мемоизированная версия компонента, как правило, не будет повторно рендериться при повторном рендере его родительского компонента, если его props не изменились. Но React все еще может перерисовать его: мемоизация — это оптимизация производительности, а не гарантия.",
      },
      {
        type: "content",
        title: "Пример без memo",
        secondary:
          "В примере ниже компонент Greeting повторно визуализируется при изменении name (так как это один из его props), но не при изменении address (так как он не передается в Greeting в качестве props)",
      },
      {
        type: "content",
        img: memoImage.use1,
      },
      {
        type: "title",
        buttonName: "Код здесь",
        buttonLink: "https://react.dev/reference/react/memo#usage",
      },
      {
        type: "content",
        title: "Пример c memo",
        secondary:
          "Но стоит обернуть компонент Greeting в memo, то при изменении address ре-рендер компонента прекращается",
      },
      {
        type: "content",
        img: memoImage.use2,
      },
      {
        type: "describe",
        title:
          "И наконец... \nТеперь мы можем собрать все воедино. Для этого нам нужны useMemo и useCallback ",
        secondary:
          "Как вы занете объект, массив и функция - ссылочные типы данных. И если мы их передаем в props и между рендерами родителя данные в объекте не менялись, но ссылка на объект будет создана новой, а значит, что при поверхностном сравнении в memo решит, что props поменялся и нужен рендер.\n" +
          "И как раз в этот момент нам пригодятся useMemo и useCallback, для того чтобы закэшировать объект(массив или функцию)",
      },
      {
        type: "content",
        title: "Кэширование props с помощью useMemo",
        secondary:
          "Когда вы используете memo, ваш компонент повторно визуализирует всякий раз, когда какой-либо props не совсем равен тому, что было раньше. Это означает, что React сравнивает каждое свойство в вашем компоненте с его предыдущим значением, используя Object.is.\n" +
          " Обратите внимание, что \n Object.is(3, 3) true \n Object.is({}, {}) false.\n" +
          "\n" +
          "Чтобы получить максимальную отдачу от memo, минимизируйте количество изменени props. Например, если props является объектом, не позволяйте родительскому компоненту каждый раз заново создавать этот объект с помощью useMemo:",
      },
      {
        type: "content",
        img: memoImage.use3,
      },
      {
        type: "content",
        title: "Использование функции сравнения",
        secondary:
          "В случае когда невозможно свести к минимуму изменения props. Вы можете использовать свою функцию сравнения, которую React будет использовать для сравнения старых и новых props вместо того, чтобы использовать поверхностное равенство. Эта функция передается в качестве второго аргумента memo. Он должен возвращать true только в том случае, если новые props не требуют рендера, в противном случае он должен возвращать false для ре-рендера компонента",
      },
      {
        type: "content",
        img: memoImage.use4,
      },
    ],
  },
  hoc: {
    title: "HOC",
    linkPage: "hoc",
    content: [
      {
        type: "title",
        icon: <GiStrongMan />,
        title: "HOC",
        secondary: "Компонент высшего порядка(Higher-Order Components)",
        buttonName: "Документация",
        buttonLink:
          "https://ru.legacy.reactjs.org/docs/higher-order-components.html",
      },
      {
        type: "describe",
        title:
          "HOC - это функция, которая принимает компонент и возвращает новый компонент",
        secondary:
          "Один из продвинутых способов для повторного использования логики. HOC не являются частью API React, но часто применяются из-за композиционной природы компонентов.",
      },
      {
        type: "title",
        icon: <AiOutlineLike />,
        secondary: "Накидал немного интересных примеров",
        buttonName: "Здесь",
        buttonLink:
          "https://codesandbox.io/s/react-optimization-px9npn?file=/src/router/index.js",
      },
    ],
  },
  about: {
    title: "О сайте",
    linkPage: "about",
    content: [
      {
        type: "title",
        icon: <TbMessageCircleQuestion />,
        secondary: "Надеюсь все было понятно... ;)",
        buttonName: "Github",
        buttonLink: "https://github.com/maksipin/react-hooks-optimization",
      },
      {
        type: "content",
        img: aboutImage.mainAbout,
      },
    ],
  },
};
