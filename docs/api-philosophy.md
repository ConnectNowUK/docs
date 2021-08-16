---
lang: en-US
title: General API Philosophy
description: Description of ConnectNows approach to our APIs
---
# API Philosophy
Welcome to the ConnectNow APIs docs!

## General principles

You must pass an `accept` header with the value of `application/json` for all API requests: `'Accept' => 'application/json',`.

Most endpoints use standard CRUD and REST API principles, using `GET`, `POST`, `DELETE`, and `PUT` for updates. All resources are plural; you'd use `GET /api/users` to list all users and `GET /api/users/1` to list a single user.

## Authentication

Some endpoints require authentication. Endpoints that do require authentication will be marked as such in the docs.

### Via query parameters

To authenticate, you can either pass a `api_token` as a query parameter: e.g. `GET /api/users?api_token={token}`.

### Via the request payload

You can post the API token as part of the actual request payload, especially when making `POST` requests.

### Via headers

You can provide the API token as a Bearer token in the Authorization header of the request: `'Authorization' => 'Bearer '.$token,`.

## Response Status Codes

ConnectNow APIs return the following status codes in its API:

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