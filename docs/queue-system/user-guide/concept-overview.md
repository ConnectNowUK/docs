---
lang: en-US
title: Queue Concept Overview
description: User Guide for people using ConnectNow Queue
---
# ConnectNow Queue Concept Overview
Welcome to the Queue company manager guide docs!

::: warning
This documentation is a work in progress.
:::

## Use cases and intended audience

The queue system provides a way for support centers to route incoming queries to the correct agents based on the agents skills, effectively creating a skill-based routing.

## Benefits

- Highly flexible
- Easy to use
- Very fast

## Terminology

### User

A user of the Queue System in your company is a person that is either an agent, a staffing manager, or a company manager. For the purposes of this guide, people asking the questions (e.g. your customers) are not considered "users".

## Queue routing logic

Each user has zero, one, or more skills assigned to them by a user with manager permissions. As an example, a user may be assigned the skills "Apple Hardware", "German", "English", "Printer Support". With these skills, it is trivial to see that this example-user can speak both German and English, and can help with both printers and physical devices made by the Apple company.

Next, come queues. A queue is a place where queries (e.g. your customers looking to get support) get logged and wait to be responded to. Each queue has a defined list of one or more skills that a user is required to have in order to respond to queries on the queue. Available users that have all the required skills for a given queue are able to receive and respond to queries on that queue.

### Special queues

In addition to the normal queues that a company can create within their organization, some queues have special circumstances and/or exist automatically.

#### Personal queues

Each user in a company gets a personal queue that they can always respond to. This allows agents to transfer queries to people directly, if need be. These queues have no skills associated with them and can only belong to one user.

#### Password protected queues

Some queues are password protected so that the general public can not just join them. A common use case for these types of queues are for VIP queues.

In addition, personal queues are automatically password protected, preventing people from launching queries directly at specific agents.

## Agent skill levels (priorities)

Depending on how proficient and agent is in a given skill, they will see the queued query automatically after a set delay as defined by the queue.

For example, take Queue IT Support, that has a skill-level delay of 30 seconds. When a new query comes in to the Queue, all available agents with matching skills at a skill level 1 will immediately see the new incoming query. If they don't respond within the defined time (in this case 30 seconds), available agents with the right skills but at a skill level of 2 (so less proficient) will also start seeing the incoming query.