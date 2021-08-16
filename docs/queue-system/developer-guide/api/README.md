---
lang: en-US
title: Queue API Guide
description: Developer Guide for people using ConnectNow Queue System
---
# ConnectNow Queue Concept Overview
Welcome to the Queue System developer-guide API docs!

::: tip IMPORTANT
Make sure to familiarize yourself with the [API philosophy](/api-philosophy.html) before proceeding with this guide.
:::

::: warning
This documentation is a work in progress.
:::

## Authentication

For routes that require authorization, you need to be authenticated. Create a personal access token for your account on the website, and pass it as a bearer token.

Also see: [API Philosophy - authentication](/api-philosophy.html#authentication)

## Response Status Codes

See: [API Philosophy - status codes](/api-philosophy.html#response-status-codes)

## Blacklist hours of operation

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
| `max_number_of_queries_handled` | `integer` | A valid integer | :white_check_mark: | The number of simultaneous queued queries this user can handle |
| `is_auto_max_number_handled` | `boolean` | `true` or `false` | :white_check_mark: | Whether this user's simultaneous handle limit is manually set, or set to the automatic system setting (TODO: gamification / global defaults) |
| `ability_to_pick_from_queue` | `boolean` |  `true` or `false` | :white_check_mark: | Whether this company user can choose which queries to answer from the queue |
| `is_auto_ability_to_pick_from_queue` | `boolean` | `true` or `false` | :white_check_mark: | Whether this user's ability to choose which query they answer is manually set, or set to the automatic system setting (TODO: gamification / global defaults |
| `role` | `integer` | A valid company ID | :white_check_mark: | The access level for this company user |
| `is_active` | `integer` | A valid company ID | :white_check_mark: | Whether this company user is active or not |

When creating a user, an additional personal queue is also created. See: [Concept Overview - personal queues](../../user-guide/concept-overview.html#personal-queues])).

## Company user skills

## Company user states

The state of a given user in a company (a company user) determines if they are available to get and answer new queries.

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
| `password` | `string` | TODO: password rules | - | The password for this queue (see: [Concept Overview - password protected queues](../../user-guide/concept-overview.html#password-protected-queues])) |
| `priority_delay` | `number` | A valid integer | - | Time delay in seconds for a query to escalate to additional agents (see: [Concept Overview - queue routing logic](../../user-guide/concept-overview.html#queue-routing-logic]))  |
| `is_active` | `boolean` |  `true` or `false` | - | Whether this company is active or not |


### Delete a queue

Note: queues with a set `company_user_id` cannot be deleted. To delete such queues, remove the user from the company.

## Query

### Create a new query

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

## Query notes

You can add additional notes to each query that are visible to all users responding to a query, regardless of the queue.

## Query queues

The queues that a given query is on.

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
