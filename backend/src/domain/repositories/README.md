# Repository Layer – Domain Persistence Boundary

## Overview

The Repository layer defines **contracts (interfaces)** that describe how
domain entities are persisted and retrieved, **without exposing how or where
the data is stored**.

Repositories act as the **only gateway** between:
- Business logic (Domain + Use Cases)
- Data storage (MongoDB, SQL, Redis, etc.)

This design follows:
- Clean Architecture
- Hexagonal Architecture (Ports & Adapters)
- SOLID principles (especially Dependency Inversion)

---

## What Is a Repository?

A Repository is **not** a database wrapper.

A Repository is:
- A **collection-like abstraction**
- That works with **domain entities**
- And hides all persistence details

> Think of a repository as an in-memory collection that just happens to
> persist data somewhere.

---

## What Repositories Do

Repositories are responsible for:

1. Persisting **valid domain entities**
2. Reconstructing entities from stored data
3. Encapsulating all data-access logic
4. Protecting the domain from storage changes

Repositories **do not**:
- Validate business rules
- Contain application logic
- Know about HTTP, Express, or controllers

---

## Why Repository Interfaces Exist

JavaScript does not have native interfaces.
So we use abstract-like classes to define **contracts**.

Example:

```js
class ListRepository {
  async create(list) {
    throw new Error("Not implemented");
  }
}
