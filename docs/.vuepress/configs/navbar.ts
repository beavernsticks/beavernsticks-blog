import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
  {
    text: "О разработчике",
    children: ["/about"],
  },
  {
    text: "API-клиенты",
    children: [
      "/api-clients/wildberries-api-client",
      "/api-clients/ozon-api-client",
      "/api-clients/yandex-market-api-client",
      "/api-clients/aliexpress-api-client",
      "/api-clients/sigmasms-api-client",
      "/api-clients/robokassa-api-client",
    ],
  },
  {
    text: "Модули для Moleculer",
    children: [
      "/moleculer/moleculer-aliexpress",
      "/moleculer/moleculer-db-adapter-clickhouse",
      "/moleculer/moleculer-kladr",
      "/moleculer/moleculer-onesignal-push",
      "/moleculer/moleculer-ozon",
      "/moleculer/moleculer-robokassa",
      "/moleculer/moleculer-sigmasms",
      "/moleculer/moleculer-telegram-bot",
      "/moleculer/moleculer-temporal-client",
      "/moleculer/moleculer-temporal-worker",
      "/moleculer/moleculer-wildberries",
      "/moleculer/moleculer-yandex-market",
    ],
  },
];
