---
lang: en-US
title: Chat API
description: Description of this page
---
# Chat API Docs
Welcome to the Chat API docs!

API base:
```http:no-line-numbers
https://chat-api.connectnow.org.uk
```

::: tip IMPORTANT
Make sure to familiarize yourself with the [API philosophy](/api-philosophy.md) before proceeding with this guide.
:::

## Authentication

Because of the nature of Chat and specifically the ability to converse without having an account, two types of tokens exist for authentication depending on what you're trying to access.

Also see: [API Philosophy - authentication](/api-philosophy.md#authentication)

### The two types of tokens
1. API tokens are usual tokens that you use to authenticate most API requests. These follow our [API philosophy on authentication](/api-philosophy.md#authentication) using `api_token`
2. Chat-user tokens are tokens that are scoped to a user in a given chat, and are required to interact as a given user in a given chat. These follow our [API philosophy on authentication](/api-philosophy.md#authentication), but use `chat_user_token` instead

## Response Status Codes

See: [API Philosophy - status codes](/api-philosophy.md#response-status-codes)

## Current user

### Get authenticated via API token
```http:no-line-numbers
GET /api/user
```

### Get authenticated via chat-user token
```http:no-line-numbers
GET /api/chat-user
```

## Companies

### Get all
```http:no-line-numbers
GET /api/companies
```

### Get single by ID
```http:no-line-numbers
GET /api/companies/{company-id}
```

### Create
```http:no-line-numbers
POST /api/companies
```

### Edit
```http:no-line-numbers
PUT /api/companies/{company-id}
```

### Delete
```http:no-line-numbers
DELETE /api/companies/{company-id}
```

## Chats

### Get all
```http:no-line-numbers
GET /api/chats
```

### Get single by ID
```http:no-line-numbers
GET /api/chats/{chat-id}
```

### Create
```http:no-line-numbers
POST /api/chats
```

### Edit
```http:no-line-numbers
PUT /api/chats/{chat-id}
```

### Delete
```http:no-line-numbers
DELETE /api/chats/{chat-id}
```

## Chat users

### Get all
```http:no-line-numbers
GET /api/chats/{chat-id}/users
```

### Get single by ID
```http:no-line-numbers
GET /api/chats/{chat-id}/users/{chat-user-id}
```

### Create
```http:no-line-numbers
POST /api/chats/{chat-id}/users
```

### Edit
```http:no-line-numbers
PUT /api/chats/{chat-id}/users/{chat-user-id}
```

### Delete
```http:no-line-numbers
DELETE /api/chats/{chat-id}/users/{chat-user-id}
```

## Chat messages

### Get all
```http:no-line-numbers
GET /api/chats/{chat-id}/messages
```

### Get single by ID
```http:no-line-numbers
GET /api/chats/{chat-id}/messages/{chat-message-id}
```

### Create
```http:no-line-numbers
POST /api/chats/{chat-id}/messages
```

### Edit
```http:no-line-numbers
PUT /api/chats/{chat-id}/messages/{chat-message-id}
```

### Delete
```http:no-line-numbers
DELETE /api/chats/{chat-id}/messages/{chat-message-id}
```

## Users

## Chat user-token

### Get valid chat-user token

This endpoint is used to exchange a valid auth-code for a chat-user token, which can then be saved in something like the local-storage and is required when creating chat messages.

```http:no-line-numbers
POST /chats/{chat-id}/users/get-token
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `email` | `email` | A valid email address | :white_check_mark: | - |  Email of the person requesting a token |
| `auth-code` | `int` | A valid auth code | :white_check_mark: | - |  The auth code sent to the persons email |

## Chat password

### Get chat password

```http:no-line-numbers
POST /chats/{chat-id}/share
```