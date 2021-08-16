---
lang: en-US
title: Queue API Guide
description: Developer Guide for people using ConnectNow Queue System
---
# ConnectNow Queue Concept Overview
Welcome to the Queue company manager guide docs!

::: warning
This documentation is a work in progress.
:::

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

## Blacklist hours of operation

## Common blacklist hours

## Companies

### Get all public companies

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/companies
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `users`, `queues` | - | What to append to the JSON response |

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
| `logo_url` | `string` | Text | :white_check_mark: | The name of the category |

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

## Company users

### Get all company users

::: tip Authentication
User must be authenticated. In addition, you must pass `company_ids` to companies you have access to in order to list the users in those companies.
:::

```http:no-line-numbers
GET /api/company-users
```

### Get a single company user

::: tip Authentication
User must be authenticated and have the right to list the user (belonging to the same company).
:::

```http:no-line-numbers
GET /api/company-users/{company-user-id}
```

### Create a single company user

::: tip Authentication
User must be authenticated and have rights for the company.
:::

```http:no-line-numbers
POST /api/company-users
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `user_id` | `string` | Text | - | The ID of the user this company belongs to (TODO: note down why user_id is nullable (invite link)) |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | The ID of the company this company user belongs to |
| `invited_email` | `integer` | A valid email address | :white_check_mark: | The email of the invited user |
| `max_number_of_objects_handled` | `integer` | A valid integer | :white_check_mark: | The number of simultaneous queued objects this user can handle |
| `is_auto_max_number_handled` | `boolean` | `true` or `false` | :white_check_mark: | Whether this user's simultaneous handle limit is manually set, or set to the automatic system setting (TODO: gamification / global defaults) |
| `ability_to_pick_from_queue` | `boolean` |  `true` or `false` | :white_check_mark: | Whether this company user can choose which objects to answer from the queue |
| `is_auto_ability_to_pick_from_queue` | `boolean` | `true` or `false` | :white_check_mark: | Whether this user's ability to choose which queued object they answer is manually set, or set to the automatic system setting (TODO: gamification / global defaults |
| `role` | `integer` | A valid company ID | :white_check_mark: | The access level for this company user |
| `is_active` | `integer` | A valid company ID | :white_check_mark: | Whether this company user is active or not |

## Company user skills

## Company user states

## Hours of operation

## Queues

### Get all queues

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/queues
```

### Get a single queue

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/queues/{queue-id}
```

### Create a new queue

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
POST /api/queues
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | The ID of the company |
| `password` | `string` | TODO: password rules | - | The password for this queue (see: [Concept Overview - password protected queues](../../user-guide#password-protected-queues])) |
| `company_user_id` | `integer` | A valid company user ID | - | If set, this queue is a personal queue belonging to the specified company user (see: [Concept Overview - personal queues](../../user-guide#personal-queues])) |
| `priority_delay` | `number` | A valid integer | - | Time delay in seconds for a queued object to escalate to additional agents (see: [Concept Overview - queue routing logic](../../user-guide#queue-routing-logic]))  |
| `is_active` | `boolean` |  `true` or `false` | - | Whether this company is active or not |

## Queueable object

### Create a new queueable object

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
POST /api/queues
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |
| `queue_id` | `integer` | A valid company ID | :white_check_mark: | The ID of the company |

## Queued object notes

## Queueable object queues

## Ratings

## Skills

### Get all skills

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/skills
```

### Get a single skill

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/skills/{skill-id}
```

### Create a single skill

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
POST /api/skills
```

| Parameter | Type | Rules | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | The name of the category |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | The name of the category |

## Queue skills

## Users

### Get a single user

::: tip Authentication
User must be authenticated.
:::

```http:no-line-numbers
GET /api/users/{user-id}
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `companies`, `companies.skills`, `companies.queues` | - | What to append to the JSON response |
