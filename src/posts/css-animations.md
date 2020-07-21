---
title: 'today I learned: animating with css'
date: '2020-07-20'
tags: ['web design', 'CSS', 'learning', 'animations', 'TIL']
---

I am writing an update in the spirit of this great blog post I read this morning, "[Write More, Write Small](https://dev.to/jbranchaud/write-more-write-small-5c45)." I like the idea of keeping a TIL (today I learned) log. So, today I learned: some (more) animation with CSS. 

I finished a Udemy course that I've been going through on and off for a few months called [Level Up Your CSS Animation Skills](https://www.udemy.com/course/level-up-your-css-animation-skills/). Before this course, I had done some basic keyframe animations before, but usually just by copying and pasting code from elsewhere - not truly understanding how it works. Though it was pretty quick (just about 3.5 hours of instruction), it was a great dive into the mechanics of animating with CSS, especially some of the more interesting interactions like parallax scrolling.

The most challenging aspect of working with animations in web design is making sure that you strike the right balance: giving your designs a bit of finesse and liveliness while not overwhelming your user by animating everything. The instructor did a good job showing off what you can do with CSS animations while also warning against animation overload.

One of the projects for the course was to create an animated carousel using jQuery. I've built an image carousel component with React in the past, but haven't focused on adding any animation to the transitions. The carousel I built today advances on its own and can be navigated by the user. Items in the carousel grow slightly when they move to the center. They also shrink, slide to the left, and become less opaque when sliding out of center focus spot. I think the animations add a nice touch to the design and I will certainly keep playing around with these techniques. 

If you want to see the carousel I created, which features 8 books I read recently, [check it out](https://js-carousel.herokuapp.com/index.html) or read the [source code](https://github.com/larsz-o/js-carousel).
