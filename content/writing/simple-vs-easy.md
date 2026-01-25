---
title: Simple vs Easy in Software
description: Understanding the difference and why it matters for maintainability
date: 2024-07-01
tags:
  - software-engineering
  - architecture
---

# Simple vs Easy in Software

Rich Hickey's distinction between "simple" and "easy" is one of the most useful concepts I've encountered in software engineering. It's changed how I think about technical decisions.

## Defining Terms

**Easy** means "near at hand" - familiar, convenient, quick to start with. A framework you already know is easy. Copy-pasting code is easy. Using a full-featured ORM is easy.

**Simple** means "not compound" - having few parts, concepts, or responsibilities intertwined. A function that does one thing is simple. A data structure you can reason about is simple.

The crucial insight is that these are orthogonal. Something can be:
- Simple and easy (a well-designed library you're familiar with)
- Simple but hard (a new paradigm that takes time to learn)
- Complex but easy (a framework that hides complexity until it doesn't)
- Complex and hard (poorly designed code)

## Why It Matters

Easy things feel productive. You can move fast initially. But complex solutions accumulate costs over time:

- Debugging becomes harder because there are more interacting parts
- Changes in one area unexpectedly affect others
- New team members take longer to become productive
- The system becomes harder to reason about

Simple solutions might take longer initially, but they pay dividends:

- Fewer surprises when making changes
- Easier to test in isolation
- New team members can understand parts independently
- Problems are more contained

## Practical Examples

### Configuration

**Easy**: One giant config file with everything in it.
**Simple**: Separate configuration concerns (database, logging, features) into independent units.

### Error Handling

**Easy**: Catch all exceptions at the top level and log them.
**Simple**: Handle errors at appropriate levels with clear recovery strategies.

### Abstractions

**Easy**: Create a "god class" that handles many related concerns.
**Simple**: Separate responsibilities into focused components with clear interfaces.

## The Trade-off

I'm not saying always choose simple over easy. There are times when expedience is the right call - prototypes, one-off scripts, true emergencies. The key is making that choice consciously.

When you choose easy, understand you're taking on debt. When you choose simple, understand the upfront cost.

## Questions to Ask

When evaluating a technical decision:

1. How many concepts do I need to hold in my head to understand this?
2. Can I change one part without understanding all the others?
3. Am I choosing this because it's genuinely simpler, or just because it's familiar?
4. What will this look like to maintain in six months?

## Conclusion

The easy path often leads to systems that are harder to work with over time. By intentionally seeking simplicity - even when it requires learning something new or taking more time upfront - we build systems that remain pleasant to work with as they grow.

The next time you're making a technical choice, ask yourself: is this actually simple, or is it just easy?
