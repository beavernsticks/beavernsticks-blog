---
sidebar: auto
---
# Moleculer Telegram Bot

## Назначение
Основан на библиотеке GrammY.
Позволяет получить уровень абстракции для бота, а также поддержку масштабирования.

## Settings

## Actions
### getMe
```ts:no-line-numbers
getMe()
```

### sendMessage
```ts:no-line-numbers
sendMessage(to: number, message: string, options: {})
```

### sendPhoto
### sendDocument
### sendMediaGroup
### sendPoll
### sendChatAction

## Methods
### init
Инициализация бота. Регистрация команд и тд.

### setMyCommands

## Lifecycle
### created
### started
### stopped
