---
Title: Kaleidocycles
Slug: kaleidocycles
category: Projects
date: 2015-04-09
tags: [geometry, javascript, paper-toys, origami]
thumbnail: /images/three-kaleidocycles.gif
snippet: >
    Would be fun to use this correctly some day.
---

<!-- PELICAN_BEGIN_SUMMARY -->
Kaleidocycles are a mechanical toy featuring a number of tetrehedra chained together to form a loop which can be rotated in on itself. They were popularised and named by Wallace Walker in the 1950s; and have continued to show up in media and museum gift shops ever since.
<!-- PELICAN_END_SUMMARY -->

I'm not 100% sure where I came across one at first, but I'm pretty sure it was simply a video online like this:

<div class="centered-content">
  <iframe src="https://giphy.com/embed/4HmjzLn7tMX81ixbgT" width="480" height="480" frameBorder="0" class="giphy-embed centered-content" allowFullScreen></iframe>
</div>

As usual I couldn't help myself but build one ([origami instructions here](https://www.youtube.com/watch?v=LgZuAaUxlBk)); and once I began playing with it I immediately got to thinking about what the exact shape of these forms are, as well as what other shapes might work.

After some thought and a few days of play I ended up doing a bit of hand wavy geometry to calculate the geometry of regular kaleidocycles (see below). With this in mind I built an 8 sided & 10 sided kaleidocycle and felt awfully clever.

Of course eventually I started looking up some of the maths to see if anyone else had made further progress and I found a wonderful article which seems to no longer be officially online but is [here, thanks to the wayback machine](https://web.archive.org/web/20150215025519/http://kaleidocycles.de/theory.shtml). 

![m-engle-kaleidocycle.png](/images/m-engle-kaleidocycle.png)
They uncovered a whole suite of kaleidocycles which work based on maintaining the same geometry between the connected joints, but modifying the actual tetrahedron geometry.  With this information in hand I decided I needed to code up a version for myself to play with (given I wasn't about to build hundreds *more* of these).  The code I wrote can be found on my [github](https://github.com/algrant/kaleidocycle-js), and played with below (modify offsets PA/PB/QC/QD to change the ratio of sides on the tetrehedons). 

<div class="full-width-container">
  <iframe src="http://algrant.github.io/kaleidocycle-js/" class="github-iframe"></iframe>
</div>

## Deriving kaleidocycle side lengths

Let's begin with the six sided kaleidocycle.

The first step is to look at the kaleidocycle in it's closed position - when a set of points meets in the center (try setting the viewer above to any multiple of $90^\circ$).

![kaleidocycle-diagram-1.png](/images/kaleidocycle-diagram-1.png)
<span class="caption">A displays top down. B faces a single triangular face. Hinges are shown in red.</span>

Given that the hinged edges are of length $R$, and assuming noting that from this top down perspective the kaleidocycle is a perfect hexagon we can see that the edge length must also be $R$.

Rotating to look directly at the face we can see that the top down edge length is actually the width of the triangle.

With this in mind we can calculate the long edges $l$ to be exactly $\sqrt{R^2 + (\frac{R}{2})^2} = \sqrt{5}\frac{R}{2}$

### More sided kaleidocycles

Given the above derivation it was only a few more steps to determine the geometry of an N sided kaleidocycle.
Because it's a little bit cleaner we define hinge length of $R = 2r$ and simply use $r$ in future equations.

![kaleidocycle-diagram-2.png](/images/kaleidocycle-diagram-2.png)

**A.** Given all corners meet perfectly in the middle of the closed kaleidocycle we can be certain that the internal corner ($\theta_1$) is exactly $\theta_1 = 360^\circ/n$.

 We know that once we rotate the kaleidocycle 180 degrees all of the outside points must now be inside points and must also be exactly $\theta_2 = 360^\circ/n$; thus $\theta_1 = \theta_2$.

**B.** Now we can calculate length $w$ using simple trigonometry to be $ w = r/cos\theta$

**C.** we know this is the width of the face of our tetrahedrons and can calculate our edge length $l$ to be $$l = \sqrt{ r^2 + w^2} = \sqrt{ r^2 + r^2/cos^2\theta} = r\sqrt{1 + 1 / cos^2\theta}$$

With this knowledge we can calculate all the regular kaleidocycles!

# Even more Kaleidocycles

Another thought I had had while looking into these was whether or not the connecting hinges must be at right angles to one another - I could not satisfactorily come up with an answer, but recently found an amazing [paper](https://www.pnas.org/content/116/1/90) by Johannes Schönke and Eliot Fried which explores and describe these "mobius kaleidocycles" in full!

<video class="vjs-tech" poster="https://static-movie-usa.glencoesoftware.com/jpg/10.1073/457/638c271fe2cd7beb427e8c6efd116d8642ac583c/pnas.1809796115.sm01.jpg" uuid="e6c9cff1-ac8c-4330-a746-f18c24886e38" id="vjs_video_3_html5_api" controls style="width: 100%;">
  <source src="https://static-movie-usa.glencoesoftware.com/webm/10.1073/457/638c271fe2cd7beb427e8c6efd116d8642ac583c/pnas.1809796115.sm01.webm" type="video/webm; codecs=&quot;vp8.0, vorbis&quot;">
  <source src="https://static-movie-usa.glencoesoftware.com/mp4/10.1073/457/638c271fe2cd7beb427e8c6efd116d8642ac583c/pnas.1809796115.sm01.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
  <source src="https://static-movie-usa.glencoesoftware.com/ogv/10.1073/457/638c271fe2cd7beb427e8c6efd116d8642ac583c/pnas.1809796115.sm01.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
</video>

