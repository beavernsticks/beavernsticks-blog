import { defineUserConfig, defaultTheme } from "vuepress";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  lang: "ru-RU",
  title: "Из бобра и палок",
  description: "Документация по всем продуктам разработчика beavernsticks",

  theme: defaultTheme({
    repo: "beavernsticks",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsRepo: "beavernsticks/beavernsticks-docs",
    navbar,
    sidebar,
    lastUpdatedText: "Обновлено",
    editLink: false,
    contributors: false,
    backToHome: "В начало",
    notFound: [
      "Что-то пошло не так...",
      "Здесь ничего нет. Совсем ничего:(",
      "Кажется, ссылка сломалась:(",
    ],
  }),
});
