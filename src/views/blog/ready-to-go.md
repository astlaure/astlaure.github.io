---
layout: layouts/post.njk
title: I'm ready to GO !
date: 2024-03-28
description: Currently I've been playing a lot with Go. I like the idea of it, it's compiled, simple, performant and the dev feedback is instant using the air package. I tried Go multiple times and everytime I didn't feel it but this time it is growing on me quite a lot.
---

Currently I've been playing a lot with Go. I like the idea of it, it's compiled, simple, performant and the dev feedback is instant using the air package. I tried Go multiple times and everytime I didn't feel it but this time it is growing on me quite a lot.

To give context, I really like using Typescript with Node for my api and if I'm not using it I'm using Java or Kotlin (Those are the languages we can use at work). For me I can say that Go is replacing Node as my go to for small microservices. Here's why:

## Technologies

I'm using Echo and I also tried Fiber. Both are great but I prefer Echo even tho Fiber is more like Express since it is more aligned with the standard library.

![Echo Landing](assets/posts/ready-to-go/golang-echo.png)

Everything else is almost the same as every other stacks but I really want to make a demo app using HTMX.

## Why I like it

**Simplicity**

Like I say in the intro, I'm really starting to like the simplicity of it. At first I really disliked the mix of PascalCase and camelCase. For me it was so wrong to mix those 2 and have a private vs public meaning to it. Now that I am used to it, I find it so powerful and simple. I can keep the same pattern for all my packages and for my service file name my every functions with camelcase and then have a facade file with every functions with pascalcase and everything is put together. It is awesome. I also really like having very low ceremonies around doing thing (looking at you Java/Spring). It's so easy to write and read.

**Error Handling**

![Github Code](assets/posts/ready-to-go/func-example.png)

Error handling is also, at first glance, a big pain point of Go that after use becomes a big win. With Go you are forced to handle those errors or at least to aknowledge them. Kind of like Checked Exceptions in Java.

The performance is better than Node, it uses less memory and I can do CPU intensive tasks if I want to ! Yeah ! For me the DX is the same, *Air* is the same as nodemon.

All in all, I really like Go and I will dive even further in it. I'm looking at Wails right now for desktop apps, it's like Electron but with a better promise in term of performance and memory usage.

**Cheers !**
