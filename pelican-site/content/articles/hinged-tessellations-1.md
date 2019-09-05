---
Title: Hinged Tessellations (Part1)
Slug: hinged-tessellations
category: Projects
date: 2014-02-01
tags: [geometry, javascript]
thumbnail: /images/hinged-tessellations/hinge-tess-anim.gif
extraCSS:
    - "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css"
    - /hingedtessapp/css/hingetess.css
extraJS: 
    - https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
    - http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
    - /hingedtessapp/js/canvasStack1v00.js
    - /hingedtessapp/js/simple2d.js
    - /hingedtessapp/js/hingetess.js
snippet: >
    A tessellation is a set of figures which can cover the plane indefinitely. A hinged tessellation is a set of figures which not only cover the plane indefinitely, but has a set of hinges such that each figure can rotate about it's neighbours...
---

<span class="caption"> Jump to the nice <a href="/hingedtessapp"> interactive version </a></span>
#What are they?
A _tessellation_ is a set of figures which can cover the plane indefinitely. A _hinged tessellation_ is a set of figures which not only cover the plane indefinitely, but has a set of hinges such that each figure can rotate about it's neighbours.

#Regular Hinged Tessellations
The idea of linking a bunch of squares by their vertices has been stumbled across and explored by a number of people, and led to the discovery of a couple other hinged tessellation variations: including two different sized squares, hexagons with triangles, and octagons with squares. 

![HingedTessellation1_700.gif](/images/hinged-tessellations/HingedTessellation1_700.gif)
<span class="caption"> Like these hinged squares (pic from <a href ="http://mathworld.wolfram.com/HingedTessellation.html">wolfram mathworld</a>)</span>


#Irregular Hinged Tessellations?
Squares and hexagons are boring. *Of course* they'd work nicely together to hinge.  When I first 'discovered' hinged tessellations I was most interested in which irregular shapes might work (if any).  I was using blocks at the time and with a little experimentation I constructed this:

![trapezoid.gif](/images/hinged-tessellations/trapezoid.gif)

Thus it was clear to me that not only regular polygons could work; as that shape is actually a trapezoid (if we only focus on the hinged vertices).

![blocks-to-trapezoid.png](/images/hinged-tessellations/blocks-to-trapezoid.png)

**Cool**. I of course then sketched out some other trapezoids, and decided that potentially the reason why they can hinge so nicely is because their pairs of corners are both _supplementary_ (add up to 180°).  The idea of supplementary corner angles also makes sense 

![trapezoid-angles.png](/images/hinged-tessellations/trapezoid-angles.png)
<span class="caption"> Angles a + b = 180° </span>

Given that a quadrilateral has 4 corners, there are two different way we can set up the supplementary angles, either next to each other (a trapezoid) _or_ opposite each other. I learned later that these are called [cyclic quadrilaterals](http://en.wikipedia.org/wiki/Cyclic_quadrilateral), because all the vertices lie on a circle.

![cyclic-quad.png](/images/hinged-tessellations/cyclic-quad.png)
<span class="caption"> Angles *a* + *c* = *b* + *d* = 180° </span>


I knew that one can actually tile the cyclic quadrilateral (because it's been proven that one can tile [all quadrilaterals](http://euler.slu.edu/escher/index.php/Tessellations_by_Polygons#Tessellations_by_Quadrilaterals)), but looking at that tessellation (see below) it is pretty clearly not hingeable.

![tiles-well.png](/images/hinged-tessellations/tiles-well.png)

I first tried a few times tessellating just the cyclic quads in a similar fashion to the trapezoids, but it was apparent that they wouldn't line up correctly.  On a whim I mirrored a couple of the pieces, and then I was pretty certain I had a hingeable structure!

![fold-it.png](/images/hinged-tessellations/fold-it.png)
<span class="caption"> Blue tiles are mirror images, note how external edges all lie on parallel lines </span>

The next step was trying to come up with a geometric proof, but as I had no good idea of how to go about it I ended up writing this little javascript/canvas app which would let you try all of them!


<div id = "hinged-tess-example">
    <div id = "title-box">
        <h1> Hinged Tessellation Generator </h1>
    </div>
    <div class="clear"></div>
    <div id = "ui-container">
        <div id="ui-col1">
        <br>
        <p>
            Try moving the vertices, switching from a trapezoid to a cyclic quadrilateral, and changing the angle at which the tessellation is open! </p>
        </div>
        <div id="ui-col2">
            <div id='quadrilateral-option'>
                <input type='radio' name='task-sort' id='trap' checked><label id="trap_label" for='trap'>trapezoid</label>
                <input type='radio' name='task-sort' id='cyclic'><label id="cyclic_label"  for='cyclic'>cyclic</label>
            </div>
            <div id="quad_canvas" style="position:relative; width:200px; height:200px"></div>
        </div>
        <div id = "ui-col3">
            <div id = "theta-slider">
                    <label > Angle Open: </label>
                    <div id="sliderInput-slider" class="ui-slider-1" style="margin:10px;">
                        <div class="ui-slider-handle"></div>
                    </div>
                    <input type="text" class="sliderInput-input" id="slider-input" />
            </div>
            <div id = "option-buttons">
                <input type="checkbox" id="show_grid" width="200px"/><label for="show_grid" width="200px">Show Grid</label>
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
    <div id = "tessellation-canvas">
        <div id="hta_tess">
                <canvas id="tess_canvas" width="600" height="600"></canvas>
            </div>
    </div>
    <div id = "footer">
    </div>
</div>

The app has a standalone page [here](/hingedtessapp).  There are some odd bugs that I don't remember existing when I oringally wrote this; namely, occasionally doubling the size of some tiles at 0, 90 and 180 degrees.  The code can be viewed on github at [github.com/algrant/hinged-tess-app](http://github.com/algrant/hinged-tess-app).

## Future Work

So you may have noticed that the title of this post ends with (Part 1).  This is because I have done a lot more work following this, but would prefer to split it up into future articles!

These include:

* Eventually doing some real math and determining various relationships between expansion rates and interior angles.
* Creating physical representations of these toys.
* Determining the rules for making 'Escher' style tiles which can still hinge.


As a teaser, here's the first physical model I built (with a laser cutter and some time/effort)


<div style="width: 100%; padding-bottom:66%; position:relative">
	<iframe src="//player.vimeo.com/video/61608664" width="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="    position: absolute; top: 0; left: 0; height:100%"></iframe> 
</div>

