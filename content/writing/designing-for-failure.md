---
title: Designing for Failure
description: Why assuming things will break leads to more reliable systems
date: 2024-08-15
tags:
  - system-design
  - reliability
---

# Designing for Failure

One of the most important mental shifts in building distributed systems is accepting that failure is not exceptional - it's normal. Networks partition, servers crash, disks fill up, and dependencies become unavailable. The question isn't whether these things will happen, but when.

## The Optimism Trap

When we design systems, there's a natural tendency to focus on the happy path. We think about how data flows when everything works correctly. This leads to architectures that are brittle and unpredictable when things go wrong.

A better approach is to start with the question: "What happens when this fails?"

## Patterns for Failure

Here are some patterns I've found useful:

### 1. Timeouts Everywhere

Never wait indefinitely. Every network call, database query, and inter-service communication should have a timeout. When a timeout occurs, have a clear plan for what happens next.

### 2. Circuit Breakers

When a dependency is failing, stop calling it. A circuit breaker pattern prevents cascading failures by quickly rejecting requests when a downstream service is unhealthy.

### 3. Graceful Degradation

Not all features are equally important. Design your system so that when non-critical components fail, the core functionality continues to work. Users might see reduced functionality, but they can still accomplish their primary goals.

### 4. Idempotency

When retries are involved (and they usually should be), make sure operations can be safely repeated. This often means using unique identifiers and checking for existing results before performing actions.

## Making Failure Visible

You can't fix what you can't see. Invest in:

- **Structured logging** with correlation IDs for tracing requests across services
- **Metrics** that capture error rates, latencies, and queue depths
- **Alerts** that notify you before users notice problems

## Testing Failure

Don't wait for production to find out how your system handles failure. Consider:

- Chaos engineering practices (even simple ones)
- Integration tests that simulate network issues
- Load tests that push beyond normal capacity

## Conclusion

Designing for failure isn't pessimism - it's realism. By accepting that things will break and planning for it upfront, we build systems that are more reliable, easier to debug, and less stressful to operate.

The goal isn't to prevent all failures (that's impossible), but to make sure that when failures happen, they're contained, visible, and recoverable.
