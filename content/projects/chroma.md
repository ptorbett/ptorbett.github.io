---
title: "Chroma: Wearable AR for Color Blindness"
date: 2014-09-13
featured: true
problem: Color blindness affects 8% of males, limiting daily activities from cooking to professional work
solution: Google Glass app with real-time color filtering, highlighting, and Daltonization algorithms
result: Published at UbiComp 2014, 105 citations
tags: [research, augmented-reality, accessibility, google-glass, opencv]
---

Co-authored research paper presenting a wearable augmented-reality solution for color blindness, published at ACM UbiComp 2014 in Seattle.

**DOI:** [10.1145/2632048.2632091](https://doi.org/10.1145/2632048.2632091)

## Authors

Enrico Tanuwidjaja, Derek Huynh, Kirsten Koa, Calvin Nguyen, Churen Shao, **Patrick Torbett**, Colleen Emmenegger, Nadir Weibel

*Department of Computer Science and Engineering, UC San Diego*

## Abstract

Color blindness is a highly prevalent vision impairment affecting 8% of males and 0.5% of females worldwide. Chroma is a wearable augmented-reality system based on Google Glass that allows users to see a filtered image of the current scene in real-time. The system automatically adapts the scene-view based on the type of color blindness and features dedicated algorithms for color saliency.

## The Problem

Color blindness affects daily activities like:
- **Cooking** - Distinguishing raw from cooked meat
- **Clothing** - Matching colors and avoiding unwanted combinations
- **Driving** - Identifying signal lights and painted curbs
- **Professional work** - Medical diagnosis, electrical engineering (resistor codes), art/design

Through interviews with 23 colorblind individuals, we identified that the common theme was *uncertainty* - users wanted reassurance in color-dependent decisions.

## The Solution

Chroma provides four modes for real-time color assistance:

1. **Highlighting Mode** - Select colors of interest and Chroma highlights matching pixels (e.g., highlight red/pink when grilling steak)
2. **Contrast Mode** - Compare two commonly confused colors (blue vs purple, red vs green)
3. **Daltonization** - Shift all colors to a spectrum accessible for the specific colorblindness type
4. **Outlining** - Automatically outline areas affected by the user's color vision deficiency

## Technical Implementation

- **Platform:** Google Glass Explorer Edition with GDK
- **Image Processing:** OpenCV Android library for real-time frame manipulation
- **Color Space:** HSV for accurate color classification separating luminance from chrominance
- **Performance:** Asynchronous processing enabling near real-time video filtering

## Evaluation Results

Lab testing with 6 participants showed:
- **Ishihara Test:** All but one participant improved from "strong" to "mild" colorblindness; one achieved "normal vision"
- **Blackboard Test:** 0% → 100% success rate identifying highlighted chalk colors
- **Pictures Test:** 44% → 82% color identification accuracy

## Impact

- **105 citations** in accessibility and AR research
- **3,313 downloads** from ACM Digital Library
- Demonstrated viability of wearable AR for vision accessibility
