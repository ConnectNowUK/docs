---
lang: en-US
title: Issue Tracker API
description: Description of this page
---
# Issue Tracker
Welcome to the Issue Tracker API docs!

API base:
```http
https://weHaventDecidedYet.com
```
Pass an "accept" header with "application/json" for all API requests.

## Authentication

For routes that require authorization, you need to be authenticated. Create a personal access token for your account on the website, and pass it as a bearer token.

## Response Status Codes

Issue Tracker returns the following status codes in its API:

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

## Issues

### Get all public issues

```http
GET /api/issues
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `categories`, `categories.company`, `events`| - | What to append to the JSON response |
| `company_ids` | `array` | Must be an existing ID | - | Filter by the company IDs |
| `category_ids` | `array` | Must be an existing ID | - | Filter by category IDs |
| `after` | `string` | Date formatted as YYYY-MM-DD | - | Only only issues after this date |
| `before` | `string` | Date formatted as YYYY-MM-DD | - | Only return issues before this date |
| `severity ` | `string` | Must be one of: `critical`, `important`, `info` | - | Filter by the level of severity |
| `status` | `string` | `open` or `closed` | - | Return issues with only the passed status |

Sample response:
```json
{
	"current_page": 1,
	"data": [
		{
			"id": 66,
			"name": "Bad printers on floor 2",
			"severity": "info",
			"closed_at": null,
			"created_at": "2021-04-26T22:25:35.000000Z",
			"updated_at": "2021-04-26T22:25:35.000000Z"
		}
	],
	"first_page_url": "http://127.0.0.1:8000/api/issues?page=1",
	"from": 1,
	"next_page_url": "http://127.0.0.1:8000/api/issues?page=2",
	"path": "http://127.0.0.1:8000/api/issues",
	"per_page": 15,
	"prev_page_url": null,
	"to": 15
}
```

### Create a issue

```http
POST /api/issues
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `category_ids` | `array` | Must contain existing IDs | yes |  Category IDs the issue belongs to |
| `name` | `string` | Text | yes | The name of the issue |
| `description` | `string` | Text | yes | A description of the current status/situation of the issue |
| `severity ` | `string` | Must be one of: `critical`, `important`, `info` | yes | The level of severity |

Authorization: user must be authenticated and have access to each company from the submitted category ids.

Sample response:
```json
{
	"id": 1,
	"name": "Server login issues",
	"severity": "critical",
	"created_at": "2021-04-26T13:46:46.000000Z",
	"updated_at": "2021-04-26T13:46:46.000000Z"
}
```

### Get a single issue

```http
GET /api/issues/{issue-id}
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `categories`, `categories.company`, `events`| - | What to append to the JSON response |

Sample response:
```json
{
	"id": 1,
	"name": "Server login issues",
	"severity": "critical",
	"closed_at": null,
	"created_at": "2021-04-26T13:46:46.000000Z",
	"updated_at": "2021-04-26T13:46:46.000000Z"
}
```

### Edit a single issue

```http
PUT /api/issues/{issue-id}
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `category_ids` | `array` | Must contain existing IDs | no |  Category IDs the issue belongs to. If parameter is passed, ID's will be synced, meaning those not present in the request array will be removed from the issue |
| `name` | `string` | Text | no | The name of the issue |
| `description` | `string` | Text | yes | A description of the current status/situation of the issue |
| `severity ` | `string` | Must be one of: `critical`, `important`, `info` | no | The level of severity |

Authorization: user must be authenticated and have access to each company in the issue category ids. If updating category ids, the user must additionally have access/permission for the new category ids submitted. If the issue is already closed, you will receive a 403 response.

### Close a single issue

```http
POST /api/issues/{issue-id}/close
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `description` | `string` | Text | yes | A description of the current situation of the issue |

Authorization: user must be authenticated and have access to each company in the issue category ids. If the issue is already closed, you will receive a 403 response.

### Delete a single issue

```http
DELETE /api/issues/{issue-id}
```
Authorization: user must be authenticated and have access to each company in the issue category ids

## Issue/category subscriptions
NOTE: to subscibe to categories instead: use `categories` in place of `issues` in this section

### Subscribe

```http
POST /api/issues/{issue-id}/subscriptions
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `email` | `string` | A valid email address | yes |  Category IDs the issue belongs to |

If the subscription does not exist, it will be created and a confirmation email will be sent to the user. The API returns a 201 CREATED status code.

If the subscription exists (even if not confirmed) no emails are sent and the API returns a 200 OK status code.

### Confirm subscription

You must confirm a subscription by following the signed URL in the email sent.

### Unsubscribe/delete a subscription

You must delete a subscription by following the signed URL at the bottom of every notification email sent.

## Category

### Get all public categories

```http
GET /api/categories
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `company`, `issues` | - | What to append to the JSON response |
| `company_ids` | `array` | Must be an existing ID | - | Filter by the company IDs |

### Create a category

```http
POST /api/categories
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | yes | The name of the category |
| `company_id ` | `string` | Must be existing company id | yes | The company ID this category belongs to |

Authorization: user must be authenticated and have access to the specified company.

### Get a single category

```http
GET /api/categories/{category-id}
```

Sample response:
```json
```

### Edit a single category

```http
PUT /api/categories/{category-id}
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | yes | The name of the category |

Authorization: user must be authenticated and have access to the company that the category belongs to.

### Delete a single category

```http
DELETE /api/categories/{category-id}
```

## Company

### Get all public companies

```http
GET /api/companies
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `categories`, `issues` | - | What to append to the JSON response |

### Create a company

```http
POST /api/companies
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | yes | The name of the category |

### Get a single company

```http
GET /api/companies/{company-id}
```

Sample response:
```json
```

### Edit a single company

```http
PUT /api/companies/{company-id}
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | yes | The name of the category |

Authorization: user must be authenticated and have access to the specified company.

### Delete a single company

```http
DELETE /api/companies/{company-id}
```

Authorization: user must be authenticated and have access to the specified company.

## Webhook

### Get all webhooks

```http
GET /api/webhooks
```

Authorization: user must be authenticated as webhooks are scoped to a user.

### Create a webhook

```http
POST /api/webhooks
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `url` | `string` | Valid URL, unique | yes | The webhook url |
| `description` | `string` | Text | no | The description of what the webhook is for |

### Get a single webhook

```http
GET /api/webhooks/{webhook-id}
```

Sample response:
```json
```

Authorization: user must be authenticated as the owner of the specified webhook.

### Edit a single webhook

```http
PUT /api/webhooks/{webhook-id}
```

| Parameter | Type | Rules | required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | yes | The name of the category |

Authorization: user must be authenticated as the owner of the specified webhook.

### Delete a single webhook

```http
DELETE /api/webhooks/{webhook-id}
```

Authorization: user must be authenticated as the owner of the specified webhook.
