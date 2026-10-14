---
title: What is JEPA, and why does it matter for world models?
date: 2026-10-14
author: Silicosphere Team
tags: JEPA, world models
summary: A short introduction to Joint-Embedding Predictive Architectures, the idea that shapes how we think about learning world models.
---

Most of what makes humans and animals intelligent is learned by watching the world, not by being told labels. A **world model** is the internal machinery that lets an agent do this: given what it observes now, predict what will happen next.

## The problem with predicting pixels

The obvious way to train a world model on video is to predict the next frame pixel by pixel. This is hard for a bad reason: most pixel detail is unpredictable and irrelevant, such as the exact texture of leaves or the ripple of water. A model forced to reproduce every pixel wastes capacity on noise.

## The JEPA idea

A **Joint-Embedding Predictive Architecture (JEPA)**, proposed by Yann LeCun, makes the prediction in an *abstract representation space* instead of pixel space. An encoder turns the observation and the target into embeddings, and a predictor learns to forecast the target's embedding from the context's embedding. Unpredictable detail can be dropped by the encoder, so the model focuses on what is actually predictable.

This idea has since been instantiated for images (I-JEPA) and video (V-JEPA).

## Why we care

Our thesis builds on this direction. We are interested in two questions:

- **Sample efficiency:** can a world model learn well from a small portion of high-quality data, specifically data the model finds *surprising*?
- **Physics intuition:** does such a model pick up how the physical world behaves, as measured on the IntPhys2 benchmark?

We will share what we learn here as the project progresses.
