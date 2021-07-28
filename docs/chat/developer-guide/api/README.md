---
lang: en-US
title: Chat API
description: Description of this page
---
# Chat
Welcome to the Chat API docs!

API base:
```http
https://weHaventDecidedYet.com
```
Pass an "accept" header with "application/json" for all API requests.

## Authentication

For routes that require authorization, you need to be authenticated. Create a personal access token for your account on the website, and pass it as a bearer token.

## Response Status Codes

Chat returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 401 | `UNAUTHENTICATED` |
| 403 | `FORBIDDEN` |
| 405 | `METHOD NOT ALLOWED` |
| 422 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
