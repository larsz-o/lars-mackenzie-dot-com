---
title: 'still loading: lottie animations'
date: '2020-07-08'
snippet: "I had never implemented a loading state animation for a web application before so I started digging around for some ideas on how to do this when I discovered Lottie Files."
tags: ['Illustrator', 'animations', 'learning', 'After Effects']
isPublished: true
id: '1'
---
I had never implemented a loading state animation for a web application before so I started digging around for some ideas on how to do this when I discovered Lottie Files.

Lottie creates JSON animation files that can be run on a range of applications. It seemed easy enough to `npm install react-lottie` and pull two nice loading state animations into an interactive learning project I'm working on. (Spoiler alert: it was!) For this project, I used free animations from [Lottie's public library](https://lottiefiles.com/featured). So many great animators share their work for free there - I highly recommend checking it out. Pulling in the animation was as simple as finding the file I wanted to use, setting a timeout and load conditions (which I tied to the `.then()` statement of an axios call to a database), and voila! Visual markers to indicate how long it would take for data to load in that actually looked good.

After seeing how simple it was to add great looking animations to a project, I started thinking about how I could use Lottie Files for other projects. I was working with a colleague to redesign a short course for faculty who are now tasked with teaching online for the first time. I found Lottie animations for each section of these lessons to really elevate the visual design of the course without having to record a ton of talking head videos (hard to do during COVID, and honestly, maybe not the best use of anyone's time for this type of thing anyway). My colleagues loved the Lottie files and I was hooked.

However, I found that I would soon run out of free Lottie animations for this type of work, as great as they are. I wanted to learn how to make my own. So, I took a [short course](https://lottiefiles.com/course) on working with Lottie Files, which was great for learning some fundamentals. I said this in a previous post but I'll say it again: working in Unity on game design really helped me to understand some of the mechanics of animation in a totally new way. Though I've only done basic keyframe animations on sprites in Unity, this foundation made me feel like I could try something like creating Lottie animations. 

So far I've created a few animations for fun, including this Tetris simulation
![Tetris animation](https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/22436-bright-gameboy.gif)

and these two shopkeeps from Nook's Cranny, tallying up your turnip totals.
![Timmy and Tommy bug eyes](https://lars-prof-site.s3.us-east-2.amazonaws.com/projects/23097-twins.gif)

I created all of the graphics in Illustrator and animated them in After Effects. These are *certainly* works in progress. I would love to spend time refining my skills in Illustrator in particular and learning how to finesse the mechanics of animation, but I'm proud of these first attempts. 