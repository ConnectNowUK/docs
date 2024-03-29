---
lang: en-GB
title: Flow Builder
description: Description of ConnectNow's Flow Builder
---

# Flow Builder

::: danger WIP Feature
This is a future develoment for ConnectNow, it isn't available yet. These docs are not finished and are subject to significant change. We're working on it, so hold tight!
:::

## What is it?

The Flow Builder allows you to integrate any system with a REST API with ConnectNow, using a powerful but simple to use visual interface.

You can create a workflow that is triggered under specific circumstances which performs specific actions. Some examples include:

-   Inspect and mutate or halt a chat message before it is sent. This effectively creates a 'Blocked Phrases' function.
-   Provide a Flow to send common phrases in a single click, saving interaction time. You can even inject the customer's information in to the message.
-   Send an API request to an external system when the query status changes, or on a button click. You can even program in forms for data capture before firing the request.

::: tip
Note that rendering forms in the UI during a Flow is only possible on the "manual" [trigger type](#trigger-types).
:::

## Trigger types

The following triggers are available:

| Trigger                   | Chat | Queue System | Issue Tracker |
| ------------------------- | ---- | ------------ | ------------- |
| Status changed            | ✅   | ✅           | ✅            |
| Manual                    | ✅   | ✅           | ✅            |
| Scheduled                 | ✅   | ✅           | ✅            |
| User register             | ✅   | ✅           | ✅            |
| User log in               | ✅   | ✅           | ✅            |
| User log out / disconnect | ✅   | ✅           | ✅            |
| User updated              | ✅   | ➖           | ✅            |
| Company created           | ✅   | ✅           | ✅            |
| Company updated           | ✅   | ✅           | ✅            |
| User added to company     | ✅   | ✅           | ✅            |
| User removed from company | ✅   | ✅           | ✅            |
| Message sent              | ✅   | ➖           | ✅            |
| Skill updated             | ➖   | ✅           | ➖            |
| Queue updated             | ➖   | ✅           | ➖            |
| Issue created             | ➖   | ➖           | ✅            |
| Issue updated             | ➖   | ➖           | ✅            |

## Message

A Flow starts with a `message` object. It contains information on the event that triggered the Flow, and will also contain any associated `chat`, `query`, `user` objects etc.

You pass this `message` through a series of [nodes](#nodes), manipulating it by adding, changing, or removing properties and performing actions.

Bear in mind that although the `message` starts with the event and trigger information, you're in full control and can completely change the structure of the `message` during your Flow.

## Nodes

### Alert

Sends a browser alert to one, several, or all users in the company (if they're logged on).

#### Inputs

| Name | Description         | Type                              |
| ---- | ------------------- | --------------------------------- |
| In   | The event `message` | [`Message`](#message) |

#### Options

| Name    | Description                | Type     | Example                            |
| ------- | -------------------------- | -------- | ---------------------------------- |
| Title   | The title of the alert     | `String` | "Emergency alert"                  |
| Message | The main body of the alert | `String` | "There is Pizza in the cafeteria " |

#### Outputs

None.

### Change

Sets, updates, or deletes properties of the incoming `message`.

#### Inputs

| Name | Description         | Type                  |
| ---- | ------------------- | --------------------- |
| In   | The event `message` | [`Message`](#message) |

#### Options

| Name     | Description                             | Type                          | Example                    |
| -------- | --------------------------------------- | ----------------------------- | -------------------------- |
| Criteria | A list of criteria, each with an output | `<action, property, value>[]` | `set sensitiveField '***'` |

### Combine

Combines multiple objects in to a new `message`.

::: tip
This is really useful for combining the output of a [HttpRequest](#http-request) or [Form](#form) node with the original `message`.
:::

#### Inputs

| Name    | Description          | Type     |
| ------- | -------------------- | -------- |
| In`{n}` | An object to combine | `Object` |

#### Options

| Name         | Description                                               | Type                                        | Example         |
| ------------ | --------------------------------------------------------- | ------------------------------------------- | --------------- |
| Combine each | What to combine; the entire object or a specific property | `msg.{property}` \| `entire message`        | `msg.property`  |
| Output type  | How to combine                                            | `Array` \| `Merged Object` \| `Stringified` | `Merged object` |

#### Outputs

| Name    | Description            | Type                  |
| ------- | ---------------------- | --------------------- |
| Message | The combined `message` | [`Message`](#message) |

### Form

::: warning
This node is only available on `manual` [trigger mode](#trigger-types).
:::

Renders a form to the user who fired the Flow. Used to gather additional information for use later in the Flow.

#### Inputs

| Name | Description | Type                  |
| ---- | ----------- | --------------------- |
| In   | `message`   | [`Message`](#message) |

#### Options

| Name   | Description                              | Type                        | Example |
| ------ | ---------------------------------------- | --------------------------- | ------- |
| Fields | A list of fields for the user to fill in | [`FormField[]`](#formfield) | n/a     |

#### Outputs

| Name    | Description                            | Type                            |
| ------- | -------------------------------------- | ------------------------------- |
| Message | The user's response to the form inputs | [`FormResponse`](#formresponse) |

### HTTP Request

Perform a HTTP request. The response is provided as the `message` output.

#### Inputs

| Name | Description | Type                  |
| ---- | ----------- | --------------------- |
| In   | `message`   | [`Message`](#message) |

#### Options

| Name    | Description                                         | Type                                          | Example                          |
| ------- | --------------------------------------------------- | --------------------------------------------- | -------------------------------- |
| Method  | HTTP method to use                                  | [`HttpMethod`](#httpmethod)                   | `POST`                           |
| URL     | The URL to send the request to                      | `String`                                      | https://my-app.com/api/endpoint  |
| Body    | The body to send. Unavailable if `method` is `GET`. | `JSON` \| `XML` \| `FormURLEncoded` \| `Text` | `{ "property": "value"}`         |
| Headers | HTTP headers to send                                | `Record<string, string>[]`                    | `x-api-key : {{my-app-api-key}}` |

#### Outputs

| Name    | Description                                            | Type                            |
| ------- | ------------------------------------------------------ | ------------------------------- |
| Message | The HTTP response, including status, headers, and body | [`HttpResponse`](#httpresponse) |

### Send Chat Message

::: warning
This node is only available on Chat Flows.
:::

Programmatically sends a message to the chat. The message will appear to come from "System administrator".

#### Inputs

| Name | Description | Type                  |
| ---- | ----------- | --------------------- |
| In   | `message`   | [`Message`](#message) |

#### Options

| Name    | Description         | Type                                  | Example |
| ------- | ------------------- | ------------------------------------- | ------- |
| Message | The message content | `This query was logged to ServiceNow` | `POST`  |

#### Outputs

None.

### Switch

Route the logic path based on the input message properties.

#### Inputs

| Name | Description         | Type                  |
| ---- | ------------------- | --------------------- |
| In   | The event `message` | [`Message`](#message) |

#### Options

| Name     | Description                             | Type              | Example       |
| -------- | --------------------------------------- | ----------------- | ------------- |
| Property | Which property of `message` to inspect  | `String`          | status        |
| Criteria | A list of criteria, each with an output | `<rule, value>[]` | `== 'closed'` |

#### Outputs

| Name      | Description                | Type                  |
| --------- | -------------------------- | --------------------- |
| Path`{n}` | If criteria `n` is matched | [`Message`](#message) |

## Types

Below are types shared amongst various [nodes](#nodes).

### HttpMethod

A HTTP verb:

-   `GET`
-   `POST`
-   `PUT`
-   `PATCH`
-   `DELETE`

### HttpResponse

A HTTP response message returned by the [`HttpRequest`](#http-request) node.

Example:

```json
{
    "status": 200,
    "headers" {
        "Content-Type": "application/json"
    },
    "body": "{\"id\": \"abc123\"}"
 }
```

### FormField

A form field with various types and options. Each can contain a default value and mandatory/optional settings.

#### Types:

| Type    | Description       | Options                  |
| ------- | ----------------- | ------------------------ |
| Text    | Text input        | `minLength`, `maxLength` |
| Number  | Numerical input   | `min`, `max`             |
| Boolean | Boolean input ()  | n/a                      |
| Select  | A dropdown select | n/a                      |

### FormResponse
