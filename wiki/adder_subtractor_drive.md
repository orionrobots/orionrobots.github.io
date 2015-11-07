---
layout: page
title: Adder Subtractor Drive
date: 2006-05-26 08:32:55
---
<p>One of the problems with <a class="wiki" href="/wiki/skid_steering.html" title="Skid Steering">Skid Steering</a> is that the two drive motors tend not to be identical in output chracteristics - that is, that two motors of the same model, from the same company, and even in the same batch, may still not be exactly equal. While this variation may be minor, it may equate to a large drift, which after travelling a metre or so, will put your robot a fair way off course. If you would like to see furthar reasoning on motor differences - take a look at this <a class="wiki" href="tiki-directory_redirect.php?siteId=116" rel="">The Brick Bakery: Analysis of Motor Speeds for Geared Motors.</a>
</p>
<p>One way to remedey it is to employ a gyroscope<a class="wiki wikinew for-review" title="Create page: gyroscope">?</a>, or sensors - and some intelligent programming to keep the robot on track. This can be a little inefficient - as the robot is constantly having to correct itself. A better concept is to use mechanical methods to solve the problem, thus eliminating the need for complex electronics or sensors.
</p>
<p>In you have an <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> reader, please take a look at this file <a class="wiki" href="tiki-download_file.php?fileId=4" rel=""> AdderSubtractorBuggy.dat</a>.
</p>
<p>This system uses sets of two differential gears to input power. Consider the inputs A and B, and the outputs L and R. The behaviour of the drive is such that:
<br/>L=A+B
<br/>and
<br/>R=A-B
</p>
<p>This means A controls/powers the forward/backward motion of a vehical. You may need to double the power/size of this motor, compared with a <a class="wiki" href="/wiki/skid_steering.html" title="Skid Steering">Skid Steering</a> basic setup - where it only has to drive one side. Motor B sets the difference, and it is this difference which allows it to turn. By having A=1 and B=1 then R will be 0 and L will be 2. By having A=0 and B=1 - you can turn on the spot.
</p>
<p>The disadvantages are that you may have to reprogram your controller to deal with this - which is a little different from normal <a class="wiki" href="/wiki/skid_steering.html" title="Skid Steering">Skid Steering</a> systems, and that you require (as mentioned above) a larger motor or to double up for the inputs. The other fairly basic issue is the additional complexity of housing this drive in a robot.
</p>
<h1  id="How_Can_You_Build_this_">How Can You Build this?</h1>
<p><img class="img-responsive" src="image172"/>
</p>
<p>The system is made up of two differentials (populated), then link gears between them such that on one side they are both driven in the same direction, and on the other side they are driven in opposite directions. The outputs come from the output axles of one of the differentials. You then input by actually driving the differentials input teeth on each one.
</p>
<h1  id="Links">Links</h1>
<ul><li> <a class="wiki" href="tiki-directory_redirect.php?siteId=116" rel="">The Brick Bakery: Analysis of Motor Speeds for Geared Motors.</a>
</li><li> <a  href="http://www.mapageweb.umontreal.ca/cousined/lego/1-Varia/Adder/adder.html" rel="external" target="_blank">http://www.mapageweb.umontreal.ca/cousined/lego/1-Varia/Adder/adder.html</a> - Another page on Adder Subtractor Drives in Lego
</li></ul>