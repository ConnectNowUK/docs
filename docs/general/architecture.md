---
lang: en-GB
title: Architecture
description: Description of ConnectNow's architecture and infrastructure.
---

# ConnectNow Architecture

This page describes ConnectNow's architecture and infrastructure.

## Micro Service Architecture

ConnectNow’s applications are designed as Micro Services. This offers several key benefits:

-   Higher resiliency due to decoupled applications. Outages in one system do not affect the other.

-   Highly portable. Each component can be sold as a standalone application (Chat / Queues / Issue Tracker).

-   Smaller package sizes.

However, it does also introduce some additional complexities:

-   Since the systems are decoupled, communication between the two must be done via API calls. Conceptually, the Queues application has no idea what a chat is, and the Chat application does not know what a Query is. For a chat to be closed when a query is completed, the Queues application must send a request to the Chat application. This is detailed further in the [authentication section](/general/api-philosophy#authentication).

-   Sharing styles and components between the applications is more complex and requires internal component and style libraries. This is currently achieved via [npm packages](https://www.npmjs.com/package/@cnukorg/hedgehog).

## Architecture Diagram

This diagram describes the logical architecture of ConnectNow's various applications, and how they communicate with each other.

![Architecture diagram](https://d1jdn0pmurlmlu.cloudfront.net/architecture.png)
