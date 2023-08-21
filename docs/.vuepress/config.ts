import { defineUserConfig, defaultTheme } from "vuepress";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  lang: "ru-RU",
  title: "Из бобра и палок: Документация",
  description: "Документация по всем продуктам разработчика beavernsticks",

  theme: defaultTheme({
    repo: "beavernsticks",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsRepo: "beavernsticks/beavernsticks-docs",
    navbar,
    sidebar,
    lastUpdatedText: "Обновлено",
  }),
});
