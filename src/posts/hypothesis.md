---
title: 'annotate away'
date: '2020-09-14'
snippet: "What can you do with a collaborative annotation tool?"
tags: ['learning', 'educational technology', 'tips and tricks', 'collaboration']
isPublished: true

---
I've been brainstorming with a colleague about some instructional videos we want to make for faculty on integratinng new tools for their teaching. She suggested creating a video on using [Hypothes.is](https://hypothes.is/) or another annotation tool for collaborative note taking, questions, etc. 

As a result, I learned that it is very easy to add Hypothes.is to your website - so I did! All it takes is adding the Hypothes.is script and a configuration script to your HTML. I plopped this before my closing body tag: 

```html
<script type="application/json" class="js-hypothesis-config">

    {
      "showHighlights": true
    }
    
</script>
    
<script src="https://hypothes.is/embed.js" async></script>
```
(for instructions on how to further configure this tool, [check out the documentation](https://web.hypothes.is/help/embedding-hypothesis-in-websites-and-platforms/).)

Now when a visitor clicks on any text on this site, they're given the option to highlight or add an annotation, which can be saved directly to their Hypothes.is account. Pretty cool! 

Remi Kalir, Learning Design and Technology faculty at the University of Colorado [has students annotate his syllabus with questions using Hypothes.is](http://remikalir.com/blog/annotate-your-syllabus-3-0/#annotations:group:__world__). I love this idea for increasing clarity on assignments or as a quick corrective for broken links to course readings and resources.

Hypothes.is is also available as a [Chrome extension](https://web.hypothes.is/start/), allowing students to comment on and highlight text on any website, just like they might add comments to a Google or Word document for a shared project. As an instructor or facilitator, you can create private groups where you can view student comments. I think this tool has a lot of potential for students to keep track of their own work _or_ to work with others to mark up living websites for educational purposes. 

Some ideas for student projects: 
* highlight examples of x, y, z on _The New York Times_ website
* pose a question to the author of this article using an annotation, selecting the passage that spurred your question
* make suggestions to improve an argument based on what we learned this week
* write an alternative ending to this story in your annotations
* create collective notes for a group presentation 
* identify elements of this website/design/article that fit within this week's theme

Have you used this tool in your teaching? What did you think?



