---
title: API Gateway Service
date: 2024-03-10
featured: true
problem: Microservices needed consistent auth, rate limiting, and observability
solution: Custom gateway handling authentication, routing, and request lifecycle
result: Reduced auth bugs by 90% and improved API latency visibility
tags:
  - microservices
  - typescript
  - observability
---

# API Gateway Service

A lightweight API gateway that provides authentication, rate limiting, and observability for our microservices architecture.

## The Problem

As our backend grew from a monolith to microservices, each team was implementing their own:
- Authentication and authorization logic
- Rate limiting mechanisms
- Logging and metrics collection

This led to inconsistencies, security gaps, and duplicated effort.

## The Solution

I built a centralized API gateway that handles cross-cutting concerns:

### Authentication

- JWT validation with automatic key rotation
- Support for multiple auth strategies (API keys, OAuth, service-to-service)
- Request context enrichment with user/service identity

### Rate Limiting

- Token bucket algorithm with Redis backing
- Per-user, per-IP, and per-service limits
- Configurable via YAML for each endpoint

### Observability

- Structured logging with request IDs for distributed tracing
- Prometheus metrics for latency, error rates, and throughput
- Automatic slow request detection and alerting

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     API Gateway                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │   Auth   │─▶│  Rate    │─▶│ Logging  │─▶│ Router  │ │
│  │          │  │  Limit   │  │ + Trace  │  │         │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
     ┌─────────┐    ┌─────────┐    ┌─────────┐
     │ Service │    │ Service │    │ Service │
     │    A    │    │    B    │    │    C    │
     └─────────┘    └─────────┘    └─────────┘
```

## Results

- **90% reduction in auth-related bugs** across services
- **Clear latency visibility** with p50/p95/p99 metrics per endpoint
- **Consistent rate limiting** prevented several abuse incidents
- **Faster onboarding** for new services (auth "just works")

## Technologies

- TypeScript / Node.js
- Redis for rate limiting state
- Prometheus + Grafana for metrics
- OpenTelemetry for distributed tracing
