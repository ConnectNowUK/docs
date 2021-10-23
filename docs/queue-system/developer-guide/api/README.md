---
lang: en-US
title: Queue API Guide
description: Developer Guide for people using ConnectNow Queue System
---
# ConnectNow Queue Concept Overview
Welcome to the Queue System developer-guide API docs!

::: tip IMPORTANT
Make sure to familiarize yourself with the [API philosophy](/api-philosophy.md) before proceeding with this guide.
:::

::: warning
This documentation is a work in progress.
:::

## Authentication

See: [API Philosophy - authentication](/api-philosophy.md#authentication)

## Response Status Codes

See: [API Philosophy - status codes](/api-philosophy.md#response-status-codes)

## Blacklist hours of operation

## Companies

### Get all public companies

<AuthAuthorization>
    <template v-slot:authorization>
    If you do not have god-permissions, you will only be able to list all public companies you are a member of.
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/companies
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `users`, `queues`, `skills`, `companyUsers` | - | What related objects to append to the JSON response |

### Create a company

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
POST /api/companies
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | - | The name of the company |
| `slug` | `string` | Text | :white_check_mark: | - | The unique identifying name for this company (text will be converted to slug) |
| `logo_url` | `string` | Valid URL to a JPG, PNG, or SVG image | :white_check_mark: | - | A URL to a logo image |
| `query_expiry_time_in_minutes` | `integer` | Number from 0 to 65535 | - | `60` | The time it takes for a query to expire |

### Get a single company

```http:no-line-numbers
GET /api/companies/{company-id}
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `users`, `queues`, `skills`, `companyUsers` | - | What related objects to append to the JSON response |


Sample response:
```json
{
  "id": 1,
  "name": "Company Name",
  "slug": "company",
  "logo_url": "https:\/\/public.company.com\/logo.svg",
  "created_at": "2021-07-05T09:31:38.000000Z",
  "updated_at": "2021-07-05T09:31:38.000000Z"
}
```

### Edit a single company

::: authorization
User must be authenticated and have access to the company.
:::

```http:no-line-numbers
PUT /api/companies/{company-id}
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | - | :white_check_mark: | - | The name of the company |
| `slug` | `string` | Text, all lower case with no spaces | - | - | The unique identifying name for this company |
| `logo_url` | `string` | Valid URL to a JPG, PNG, or SVG image | - | - | A URL to a logo image |
| `query_expiry_time_in_minutes` | `integer` | Number from 0 to 65535 | - | `60` | The time it takes for a query to expire |

### Delete a single company

::: authorization
User must be authenticated and have access to the company.
:::

```http:no-line-numbers
DELETE /api/companies/{company-id}
```

## Company users

### Get all company users

::: authorization
User must be authenticated. In addition, you must pass `company_ids` to companies you have access to in order to list the users in those companies.
:::

```http:no-line-numbers
GET /api/company-users
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `user`, `personalQueue`, `company`, `skills`, `answeredQueries` | - | What related objects to append to the JSON response |
| `scopes` | `array` | Can be any combination of: `available`, `active`, `withinMaxOngoingQueryLimits`, `canTakeQuery`, `manager` | - | What scopes to apply to the query |

Sample response:
```json
[
  {
    "id": 1,
    "user_id": 1,
    "company_id": 1,
    "created_at": "2021-07-05T09:31:38.000000Z",
    "accepted_at": "2021-07-05T09:36:11.000000Z",
    "invited_email": "hans.schmidt@domain.com",
    "max_ongoing_queries_handled": 3,
    "is_auto_max_number_handled": false,
    "ability_to_pick_from_queue": true,
    "is_auto_ability_to_pick_from_queue": false,
    "role": "agent",
    "is_active": true
  },
  {
    "id": 2,
    "user_id": 2,
    "company_id": 1,
    "created_at": "2021-07-10T13:12:22.000000Z",
    "accepted_at": "2021-07-10T13:13:50.000000Z",
    "invited_email": "sakura.watanabe@domain.com",
    "max_ongoing_queries_handled": 1,
    "is_auto_max_number_handled": true,
    "ability_to_pick_from_queue": false,
    "is_auto_ability_to_pick_from_queue": true,
    "role": "agent",
    "is_active": false
  }
  ...
]
```

### Get a single company user

::: authorization
User must be authenticated and have the right to list the user (belonging to the same company).
:::

```http:no-line-numbers
GET /api/company-users/{company-user-id}
```

Sample response:
```json
{
  "id": 1,
  "user_id": 1,
  "company_id": 1,
  "created_at": "2021-07-05T09:31:38.000000Z",
  "accepted_at": "2021-07-05T09:36:11.000000Z",
  "invited_email": "hans.schmidt@domain.com",
  "max_ongoing_queries_handled": 3,
  "is_auto_max_number_handled": false,
  "ability_to_pick_from_queue": true,
  "is_auto_ability_to_pick_from_queue": false,
  "role": "agent",
  "is_active": true
}
```

### Create a single company user

::: authorization
User must be authenticated and have rights for the company.
:::

```http:no-line-numbers
POST /api/company-users
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :---
| `user_id` | `integer` | A valid user ID | - | - | The ID of the user this company belongs to. This is nullable to facilitate inviting a user to the company who is not yet registered |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | - | The ID of the company this company user belongs to |
| `invited_email` | `integer` | A valid email address | :white_check_mark: | - | The email of the invited user |
| `max_ongoing_queries_handled` | `integer` | A valid integer | :white_check_mark: | `1` | The number of simultaneous queued queries this user can handle |
| `is_auto_max_number_handled` | `boolean` | `true` or `false` | :white_check_mark: | `true` | Whether this user's simultaneous handle limit is manually set, or managed by the system. The system may change this value based on the user's performance and achievements.  |
| `ability_to_pick_from_queue` | `boolean` |  `true` or `false` | :white_check_mark:  | `false` | Whether this company user can choose which queries to answer from the queue |
| `is_auto_ability_to_pick_from_queue` | `boolean` | `true` or `false` | :white_check_mark:  | `true` | Whether this user's ability to choose which query they answer is manually set, or managed by the system. The system may change this value based on the user's performance and achievements. |
| `role` | `string` | A valid role (agent, staffing_manager, or manager) | :white_check_mark: | `agent` | The access level for this company user |
| `is_active` | `boolean` | `true` or `false` | :white_check_mark: | `true` | Whether this company user is active or not. See: [Billing - active users](../../user-guide/billing.html#active-users])) |

When creating a user, a personal queue is also created. See: [Concept Overview - personal queues](../../user-guide/concept-overview.html#personal-queues])). In addition, a default user state is also created, with `is_available` set to `0` (false). Lastly, an invitation email is sent to the `invited_email`.

## Company user skills

### Get all company user skills

Append the skills data object when requesting a company user.

## Company user states

The state of a given user in a company (a company user) determines if they are available to get and answer new queries.

### Get all company user states

```http:no-line-numbers
GET /api/company-user-states
```



## Company user queues

### Get a company users queues
::: authorization
User must be authenticated and have the right to list the user (belonging to the same company).
:::

```http:no-line-numbers
GET /api/company-users/{company-user-id}/queues
```

Sample response:
```json
{
  "queues": [
    {
      "id": 1,
      "name": "IT Queue",
      "company_id": 1,
      "company_user_id": null,
      "is_active": 1,
      "priority_delay_in_seconds": 60,
      "created_at": "2021-09-01T12:31:19.000000Z",
      "updated_at": "2021-09-01T12:31:19.000000Z",
      "deleted_at": null,
      "skills": [
        {
          "id": 1,
          "name": "English",
          "company_id": 1,
          "created_at": "2021-09-01T12:31:19.000000Z",
          "updated_at": "2021-09-01T12:31:19.000000Z",
          "pivot": {
            "queue_id": 1,
            "skill_id": 1
          }
        },
        ...
      ]
    }
  ],
  "personal_queue": null
}
```

## Hours of operation

## Currently authenticated user

### Get the current authenticated user

::: authorization
User must be authenticated and have an active account.
:::

```http:no-line-numbers
GET /api/me
```

## Queues

### Get all queues

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/queues
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `queries`, `unansweredQueries`, `latestQuery`, `skills`, `companyUser` | - | What related objects to append to the JSON response |
| `scopes` | `array` | Can be any combination of: `available`, `active` | - | What scopes to apply to the query |

```json
[
  {
    "id": 1,
    "name": "English MacOS Support",
    "company_id": 1,
    "priority_delay": 180,
    "is_active": true
  },
  {
    "id": 2,
    "name": "German MacOS Support",
    "company_id": 1,
    "priority_delay": 180,
    "is_active": true
  },
]
```

The `available` scope checks that the queue is active, and that there are active and online users on the queue. The `active` scope only checks if the queue is `active`.

### Get a single queue

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/queues/{queue-id}
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `queries`, `unansweredQueries`, `latestQuery`, `skills`, `companyUser` | - | What related objects to append to the JSON response |

Sample response:
```json
{
  "id": 2,
  "name": "German MacOS Support",
  "company_id": 1,
  "priority_delay": 180,
  "is_active": true
}
```

### Create a new queue

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
POST /api/queues
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | - | The name of the queue |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | - | The ID of the company this queue belongs to |
| `password` | `string` | TODO: password rules | - | - | The password for this queue (see: [Concept Overview - password protected queues](../../user-guide/concept-overview.html#password-protected-queues])) |
| `priority_delay` | `number` | A valid integer | - | - | Time delay in seconds for a query to escalate to additional users (see: [Concept Overview - queue routing logic](../../user-guide/concept-overview.html#queue-routing-logic]))  |
| `is_active` | `boolean` |  `true` or `false` | :white_check_mark: | `true` | Whether this queue is active or not |
| `skill_ids` | `array` |  Array of valid skill IDs | - | - | An array of ID's of skills that the queue requires |

### Delete a queue

Note: queues with a set `company_user_id` cannot be deleted. To delete such queues, remove the user from the company.

## Queries

### Get all queries

::: authorization
User must be authenticated and have rights for the company.
:::

```http:no-line-numbers
GET /api/queries
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `companyUsers`, `queues`, `latestQueue`, `notes` | - | What related objects to append to the JSON response |
| `scopes` | `array` | Can be any combination of: `completed`, `ongoing` | - | What scopes to apply to the query |
### Create a new query

```http:no-line-numbers
POST /api/queries
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `source` | `string` | String with no whitespace | :white_check_mark: | - | A link, phone number, or other reference to where the query is |
| `email` | `string` | A valid email address | :white_check_mark: | - | The email address of the person seeking assistance |
| `is_link` | `boolean` | `true` or `false` | :white_check_mark: | `true` | Whether this query is accessible via a hyperlink or not. E.g http(s) / mailto / tel |
| `name` | `string` | - | :white_check_mark: | - | The name of the person seeking assistance |
| `surname` | `string` | - | - | - | The surname of the person seeking assistance |
| `queue_id` | `integer` | A valid queue ID | :white_check_mark: | - | The ID of the queue this query belongs to |

### Answer a query
::: authorization
User must be authenticated and have rights for the company, as well as all required skills for the queue (unless the queue is a personal queue that belongs to the authenticated person) Also see: [Concept Overview - queue routing logic](../../user-guide/concept-overview.html#queue-routing-logic).
:::
 
::: tip
You will additionally get back a `403` forbidden response if the query has already been answered on all the queues it was waiting on.
:::

```http:no-line-numbers
POST /api/queries/{id}/answer
```

### Mark a query as done
::: authorization
User must be authenticated and have rights for the company.
:::
 
::: tip
You will additionally get back a `403` forbidden response if the query was not last answered by you.
:::

```http:no-line-numbers
POST /api/queries/{id}/mark-as-done
```

### Transfer a query
::: authorization
User must be authenticated and have rights for the company that the queue they are transferring to belongs to.
:::

::: tip
You will additionally get back a `403` forbidden response if the queue you are transferring to is a personal queue and the user it belongs to is not available.
:::
 
```http:no-line-numbers
POST /api/queries/{id}/transfer
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `queue_id` | `id` | Valid queue ID | :white_check_mark: | - | The ID of the queue you want to transfer to |

## Query notes

You can add additional notes to each query that are visible to all users responding to a query, regardless of the queue.

### Get all query notes

```http:no-line-numbers
GET /api/query-notes
```

## Query queues

The queues that a given query is on. To get this data, append the queue object when listing queries.

## Ratings

## Skills

### Get all skills

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/skills
```

Sample response:
```json
[
  {
    "id": 1,
    "name": "English",
    "company_id": 1
  },
  {
    "id": 2,
    "name": "German",
    "company_id": 1
  },
  {
    "id": 3,
    "name": "MacOS",
    "company_id": 1
  },
  ...
]
```

### Get a single skill

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/skills/{skill-id}
```

Sample response:
```json
{
  "id": 2,
  "name": "German",
  "company_id": 1
}
```

### Create a single skill

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
POST /api/skills
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | Text | :white_check_mark: | - | The name of the skill |
| `company_id` | `integer` | A valid company ID | :white_check_mark: | - | The ID of the company this skill belongs to|

### Update a company users skills

::: authorization
User must be authenticated and have rights for the company, as well as have the staffing-manager role or the manager role.
:::

::: tip
This is a synchronous operation, meaning you must pass all the skill_ids that you want the user to have. Existing skill IDs that are not passed will be removed from the user.
:::

```http:no-line-numbers
PUT /api/company-users/{company-id}/skills
```

| Parameter | Type | Rules | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `skill_ids` | `array` | - | :white_check_mark: | - | Array of skill ID's to sync |

## Users

### Get a single user

<AuthAuthorization>
    <template v-slot:authorization>
    </template>
</AuthAuthorization>

```http:no-line-numbers
GET /api/users/{user-id}
```

| Parameter | Type | Rules | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `with` | `array` | Can be any combination of: `companies`, `skills`, `queues` | - | What related objects to append to the JSON response |

Sample response:
```json
{
  "id": 1,
  "name": "Hans",
  "surname": "Schmidt",
  "email": "hans.schmidt@domain.com",
  "avatar_url": "https://image.com/this.jpg",
  "companies": [
    {
        "id": 1,
        "name": "Company 1",
        ...
    }
  ],
  "queues": [
    {
        "id": 1,
        "name": "German MacOS Support",
        "company_id": 1,
        ...
    }
  ],
  "skills": [
    {
        "id": 2,
        "name": "German",
        "company_id": 1
    },
    {
        "id": 3,
        "name": "MacOS Support",
        "company_id": 1
    },
    ...
  ]
}
```