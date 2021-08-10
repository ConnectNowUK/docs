---
lang: en-US
title: Issue Tracker API
description: Description of this page
---
# Issue Tracker API Docs
Welcome to the Issue Tracker API docs!

API base:
```http:no-line-numbers
https://issuetracker.connectnow.org.uk
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

```http:no-line-numbers
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

::: tip Authentication
User must be authenticated and have access to each company from the submitted category ids.
:::

```http:no-line-numbers
POST /api/issues
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `category_ids` | `array` | Must contain existing IDs | :white_check_mark: |  Category IDs the issue belongs to |
| `name` | `string` | Text | :white_check_mark: | The name of the issue |
| `description` | `string` | Text | :white_check_mark: | A description of the current status/situation of the issue |
| `severity ` | `string` | Must be one of: `critical`, `important`, `info` | :white_check_mark: | The level of severity |


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

```http:no-line-numbers
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

::: tip Authentication
User must be authenticated and have access to each company in the issue category ids. If updating category ids, the user must additionally have access/permission for the new category ids submitted.
:::

::: tip
If the issue is already closed, you will receive a 403 response.
:::

```http:no-line-numbers
PUT /api/issues/{issue-id}
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `category_ids` | `array` | Must contain existing IDs | - |  Category IDs the issue belongs to. If parameter is passed, ID's will be synced, meaning those not present in the request array will be removed from the issue |
| `name` | `string` | Text | - | The name of the issue |
| `description` | `string` | Text | :white_check_mark: | A description of the current status/situation of the issue |
| `severity ` | `string` | Must be one of: `critical`, `important`, `info` | - | The level of severity |

### Close a single issue

::: tip Authentication
User must be authenticated and have access to each company in the issue category ids.
:::

::: tip
If the issue is already closed, you will receive a 403 response.
:::

```http:no-line-numbers
POST /api/issues/{issue-id}/close
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `description` | `string` | Text | :white_check_mark: | A description of the current situation of the issue |

### Delete a single issue

::: tip Authentication
User must be authenticated and have access to each company in the issue category ids.
:::

```http:no-line-numbers
DELETE /api/issues/{issue-id}
```

## Issue/category subscriptions

::: tip
To subscribe to categories instead: use `categories` in place of `issues` in this section.
:::

### Subscribe

```http:no-line-numbers
POST /api/issues/{issue-id}/subscriptions
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `email` | `string` | A valid email address | :white_check_mark: |  Category IDs the issue belongs to |

If the subscription does not exist, it will be created and a confirmation email will be sent to the user. The API returns a 201 CREATED status code.

If the subscription exists (even if not confirmed) no emails are sent and the API returns a 200 OK status code.

### Confirm subscription

You must confirm a subscription by following the signed URL in the email sent.

### Unsubscribe/delete a subscription

You must delete a subscription by following the signed URL at the bottom of every notification email sent.

## Categories

### Get all public categories

```http:no-line-numbers
GET /api/categories
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `company`, `issues` | - | What to append to the JSON response |
| `company_ids` | `array` | Must be an existing ID | - | Filter by the company IDs |

### Create a category

::: tip Authentication
User must be authenticated and have access to the company.
:::

```http:no-line-numbers
POST /api/categories
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |
| `company_id ` | `string` | Must be existing company id | :white_check_mark: | The company ID this category belongs to |

### Get a single category

```http:no-line-numbers
GET /api/categories/{category-id}
```

Sample response:
```json
```

### Edit a single category

::: tip Authentication
User must be authenticated and have access to the company that the category belongs to.
:::

```http:no-line-numbers
PUT /api/categories/{category-id}
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |

### Delete a single category

::: tip Authentication
User must be authenticated and have access to the company that the category belongs to.
:::

```http:no-line-numbers
DELETE /api/categories/{category-id}
```

## Companies

### Get all public companies

```http:no-line-numbers
GET /api/companies
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `categories`, `issues` | - | What to append to the JSON response |

### Create a company

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
POST /api/companies
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |

### Get a single company

```http:no-line-numbers
GET /api/companies/{company-id}
```

Sample response:
```json
```

### Edit a single company

::: tip Authentication
User must be authenticated and have access to the company.
:::

```http:no-line-numbers
PUT /api/companies/{company-id}
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |

### Delete a single company

::: tip Authentication
User must be authenticated and have access to the company.
:::

```http:no-line-numbers
DELETE /api/companies/{company-id}
```

Authorization: user must be authenticated and have access to the specified company.

## Webhooks

::: tip Authentication
User must be authenticated for all webhook endpoints and methods.
:::

### Get all webhooks

```http:no-line-numbers
GET /api/webhooks
```

### Create a webhook

```http:no-line-numbers
POST /api/webhooks
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `url` | `string` | Valid URL, unique | :white_check_mark: | The webhook url |
| `description` | `string` | Text | - | The description of what the webhook is for |

### Get a single webhook

```http:no-line-numbers
GET /api/webhooks/{webhook-id}
```

Sample response:
```json
```

### Edit a single webhook

```http:no-line-numbers
PUT /api/webhooks/{webhook-id}
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |

### Delete a single webhook

```http:no-line-numbers
DELETE /api/webhooks/{webhook-id}
```

### Available webhook events

#### webhook_created

#### webhook_deleted

#### category_subscription_confirmation

Sends event to user when the user subscribes to a category. Includes the subscription confirmation link.

#### issue_subscription_confirmation

Sends event to user when the user subscribes to an issue. Includes the subscription confirmation link.

#### issue_created

#### issue_closed

#### issue_updated
