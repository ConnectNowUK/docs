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

::: danger STOP
API tokens are secret, so do not share or publicly expose them. If you think one of your API tokens has been compromised, generate a new one.
:::

Some endpoints require authentication. Endpoints that do require authentication will be marked as such in the docs.

### Getting an API token

To get an API token, you should refer to the user guide of the service you want to authenticate with. Usually, ConnectNow applications will allow you to create personal API tokens on the websites of each service, after you have logged in.

### Authenticating requests

::: tip
If you are getting back a `401` error code, this means your token is not valid or the way you are passing it is incorrect. This is different to a `403`, which is telling you that you are not allowed to do something (but your token may be valid).
:::

#### Via query parameters

To authenticate, you can either pass a `api_token` as a query parameter: e.g. `GET /api/users?api_token={token}`.

#### Via the request payload

You can post the API token as part of the actual request payload, especially when making `POST` requests. The form parameter is `api_token`.

#### Via headers

You can provide the API token as a Bearer token in the Authorization header of the request: `'Authorization' => 'Bearer '.$token,`.

## Response status codes

ConnectNow APIs return the following status codes in its API:

| Status Code | Description | Meaning |
| :--- | :--- | :--- |
| 200 | `OK` | All good
| 201 | `CREATED` | The resource has been successfully created
| 401 | `UNAUTHENTICATED` | Your API token, or the way you are passing it, is incorrect
| 403 | `FORBIDDEN` | You are not allowed to do the action
| 404 | `NOT FOUND` | The resource you are looking for does not exist
| 405 | `METHOD NOT ALLOWED` | You are not allowed to use a given HTTP method (GET, POST, PUT, DELETE, or others)
| 422 | `BAD REQUEST` | Your request is malformed, data required is missing and/or incorrect
| 429 | `TOO MANY REQUESTS` | You have exceeded the rate-limiter limits
| 500 | `INTERNAL SERVER ERROR` | There was a problem with the server - if you encounter this one, please let us know

## Paginated responses

Some responses are paginated. You can access additional pages by passing the `page` parameter. Paginated responses include additional information to help you build pagination on the frontend.

```json
{
	"current_page": 1,
	"data": [
		...
	],
	"first_page_url": "https://api.connectnow.org.uk/api/models?page=1",
	"from": 1,
	"next_page_url": "https://api.connectnow.org.uk/api/models?page=2",
	"path": "https://api.connectnow.org.uk/api/models",
	"per_page": 15,
	"prev_page_url": null,
	"to": 15
}
```

## Rate limiting

A rate limiter is implemented on all endpoints. Some can be as low as one request per minute, depending on the endpoint. If you exceed a given rate-limiter limit, you will get back a `429` status code. Wait a few minutes before trying again; note that some responses will tell you how much time you have to wait in the response headers.