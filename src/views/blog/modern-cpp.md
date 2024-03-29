---
layout: layouts/post.njk
title: Amazing Modern C++
date: 2024-03-01
description: C++ is a daunting, enormous and scary beast. The pointers, the tooling, the memory issues and dependency management makes it difficult for new and old programmers but is it still accurate? C++ went through a lot of changes starting with C++11 and I believe the beast is getting way more tamed than we think. Let's dive in on the why.
---

C++ is a daunting, enormous and scary beast. The pointers, the tooling, the memory issues and dependency management makes it difficult for new and old programmers but is it still accurate? C++ went through a lot of changes starting with C++11 and I believe the beast is getting way more tamed than we think. Let's dive in on the why.

### Smart Pointers

Smart pointers, on the outside, looks like a pointer in a language like C#. The initialization and destruction is managed for you. No need of the new and delete keywords, C++ will do it for you. The big difference with C# is that you still don't have a garbage collector and the cleanup is still done the C++ way, just not by hand. This is, for me, the biggest security feature of modern C++. Everyone should use them, always.

The keywords are unique_ptr, shared_ptr and weak_ptr

### CMake

Let's be honest, CMake is hard. There's a lot of config to write, it's not straight forward and it is error prone. BUT, when it is done once, you can reuse it almost always with some tweaks and you're done. It is a thousand times better than doing a Makefile, it works on all main platforms and help ease the pain a lot.

![cmake](assets/posts/modern-cpp/cmake.png)

### Vcpkg

This is a package manager for C++ created by Microsoft and is latest and greatest. You have a json config for the libraries and have the version in it. The down side is that it is had to pin point a version, you need to add it in the override section of the config or it will always select the latest when cloning.

![vcpkg](assets/posts/modern-cpp/vcpkg.png)

C++ is still evolving and it is evolving in the right way. The issue really is in older codebases were we can't use new versions and cannot use new safe features.
