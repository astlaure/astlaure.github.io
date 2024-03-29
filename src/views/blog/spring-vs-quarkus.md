---
layout: layouts/post.njk
title: Spring VS Quarkus
date: 2024-03-01
description: Spring is the most popular Java Enterprise framework used everywhere, but Quarkus is taking a lot of steam in this new microservice heavy world. Quarkus brings the Cloud Native mindset and was built from the ground up to support it and support Native builds using GraalVM.
seo: Spring is the most popular Java Enterprise framework used everywhere, but Quarkus is taking a lot of steam in this new microservice heavy world.
---

Spring is the most popular Java Enterprise framework used everywhere, but Quarkus is taking a lot of steam in this new microservice heavy world. Quarkus brings the Cloud Native mindset and was built from the ground up to support it and support Native builds using GraalVM.

![Echo Landing](assets/posts/spring-vs-java/java-beans.jpg)

Spring is like pure magic. There a lot of autoconfiguration, behind the scene code and proxies doing all the heavy lifting. It is fast to use but is very heavy on the runtime because of it. It has it's own set of annotations, ways to do things and tightly coupled modules that covers all the most popular technologies an enterprise would use. Because of all that magic creating native builds with Spring took a lot of time and effort to make it work. There's now a module you can use but again, it was "patched" in instead.

Quarkus is king when talking about Native Builds, but it also got better start time and better memory usage in JVM mode compared to Spring. It's lightweight and close to the vanilla Jakarta nomenclature. There's so much extensions (modules) supported by Red Hat but there's also the Quarkiverse where you can find a lot of community extensions for everything you could need. The native build integration is first-class and works very well.

I see a reason for both frameworks. Use Quarkus if performance is really important, like in a Lambda nd you need the native build feature. Use Spring if it covers all your technologies needs, if there's a module already created, and if you want simplicity with autoconfiguration and defaults already done for you. Keep in mind tho that this simplicity has a real cost at runtime.
