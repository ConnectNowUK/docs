---
lang: en-US
title: General API Philosophy
description: Description of ConnectNows approach to our APIs
---
# API Philosophy
Welcome to the ConnectNow APIs docs!

## General principles

Most endpoints use standard CRUD and REST API principles, using `GET`, `POST`, `DELETE`, and `PUT` for updates.

You must pass an `accept` header with the value of `application/json` for all API requests: `'Accept' => 'application/json',`.

## Authentication

Some endpoints require authentication. To authenticate, you can either pass a `api_token` as a query parameter or within the actual request payload, or you can provide the API token as a Bearer token in the Authorization header of the request: `'Authorization' => 'Bearer '.$token,`.

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