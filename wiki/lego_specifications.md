---
layout: page
title: Lego Specifications
date: 2005-06-24 19:41:28
---
<p><a class="wiki" href="/wiki/rcx_specifications.html" title="RCX Specifications">RCX Specifications</a>
<br/><a class="wiki" href="/wiki/cybermaster.html" title="CyberMaster">CyberMaster</a>
<br/><a class="wiki" href="tiki-directory_redirect.php?siteId=88" rel="">Lego Wheel Traction Specifications - A study by Phillippe Hurbain</a>
</p>
<p>If you are going to a build a robot with <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> you will need some of the structural specifications for the standard bricks. This will help designing models, and interfacing Lego with other materials.
</p>
<h1  id="Materials">Materials</h1>
<p>Most of their bricks use high quality ABS plastic - which is slightly elastic.
</p>
<table class="normal" id="fancytable_1"> <tr> <td class="odd">Specific Gravity/Density</td> <td class="odd">1.05 lb/ft3</td> </tr> <tr> <td class="even">Tensile Strength</td> <td class="even">5000 PSI</td> </tr> <tr> <td class="odd">Elongation At Break</td> <td class="odd"> 45 %</td> </tr> </table>
<p>
</p>
<h1  id="Measurements">Measurements</h1>
<p>Although studs are the standard unit of measure- to interface with other systems, and for some more complex models, it is important to understand the dimensions.  The goal is to represent brick heights and plate heights in millimeters.  We will refer to gears using the number of teeth(ie 24t) - although the diameter of the holes, wheels and studs could also be of significance.
</p>
<p>According to <a class="wiki" href="tiki-directory_redirect.php?siteId=89" rel="">Steve Baker</a> the distance between 2 Studs is 8mm wide.  This is verified as Stud pitch = 7.985 on Lugnet - although 8mm is commonly used.
</p>
<p>Plate height(according to Lugnet) is 3.194 mm, although 3.2 mm or 16/5 mm are commonly used.
</p>
<p>Brick height is 9.582 mm, and 9.6 mm or 48/5 mm are commonly used.
</p>
<p>The ratio of the height of standard beams, to the width of studs is 5:6 - which can make for some trickiness when doing perpendicular mounts.
</p>
<h3  id="Calculated::">Calculated::</h3>
<p>
<br/>8:48/5 (take the 5 over) = 5"8:48 (factor 8 from 48) = 5"8:6*8 (canceling) = 5:6.
</p>
<p>Plates(thin bricks) are 1/3 standard bricks.
</p>
<h3  id="Calculated::_2">Calculated::</h3>
<p>
<br/>16/5:48/5 == 16:48 == 1"16:3"16 = 1:3.
</p>
<p>Therefore 5 plates thick is the width of 2 studs.
</p>
<p>In LDU (LDraw units), the measurements are:
</p>
<p>Brick height = 24
<br/>Plate height =  8
<br/>Stud pitch   = 20
</p>
<p>
<br/>In the Lego system, technic gears have a ratio that the number of teeth are 8 times the diameter, or 16 times the radius in stud pitch.  Conveniently - the number of studs, and Diameter in Millimeters seem to be the same.
</p>

&lt;table border="1" cellpadding="1" cellspacing="0"&gt;
&lt;tr&gt;&lt;th&gt;Teeth&lt;/th&gt;&lt;th colspan="2"&gt;Diameter&lt;/th&gt;&lt;th colspan="2"&gt;Radius&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;th&gt;&lt;/th&gt;&lt;th&gt;Studs(by pitch)&lt;/th&gt;&lt;th&gt;Mm&lt;/th&gt;&lt;th&gt;Studs(by pitch)&lt;/th&gt;&lt;th&gt;Mm&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;8t&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;0.5&lt;/td&gt;&lt;td&gt;4&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;16t&lt;/td&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;16&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;24t&lt;/td&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;24&lt;/td&gt;&lt;td&gt;1.5&lt;/td&gt;&lt;td&gt;12&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;40t&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;40&lt;/td&gt;&lt;td&gt;2.5&lt;/td&gt;&lt;td&gt;20&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
<p>
<br/>More info on mounting these can be found at <a class="wiki" href="tiki-directory_redirect.php?siteId=90" rel="">The Brick Bakery</a>.
</p>
<p>If you want to put bricks into another cad system(ie ProEngineer /ProDesktop/SolidWorks) - you will find the following helpful:
</p>

&lt;table border="1" cellpadding="1" cellspacing="0"&gt;
&lt;tr&gt;&lt;th&gt;Description&lt;/th&gt;&lt;th&gt;Short name&lt;/th&gt;&lt;th&gt;Size in mm&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Spacing of stud centers&lt;/td&gt;&lt;td&gt;sSt&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Diameter of studs&lt;/td&gt;&lt;td&gt;dSt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Height of block&lt;/td&gt;&lt;td&gt;hB&lt;/td&gt;&lt;td&gt;9.6&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Height of studs&lt;/td&gt;&lt;td&gt;hSt&lt;/td&gt;&lt;td&gt;1.7&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Thickness of brick walls&lt;/td&gt;&lt;td&gt;thB&lt;/td&gt;&lt;td&gt;1.5&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Outer diameter of cylinders
   (found on underside of bricks)&lt;/td&gt;&lt;td&gt;doCyl&lt;/td&gt;&lt;td&gt;6.31&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Thickness of cylinder walls&lt;/td&gt;&lt;td&gt;thCyl&lt;/td&gt; &lt;td&gt;0.657&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
<p>
<br/>When you are constraining and defining - you may find these definitions/calculations using the above symbols useful:
</p>

&lt;table border="1" cellpadding="1" cellspacing="0"&gt;
&lt;tr&gt;&lt;td&gt;hB&lt;/td&gt;&lt;td&gt;sSt * 6 / 5&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;thB&lt;/td&gt;&lt;td&gt;(sSt - dSt) / 2&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;hSt&lt;/td&gt;&lt;td&gt;hB / 3 - thB&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;odCyl&lt;/td&gt;&lt;td&gt;sqrt(2) * sSt - dSt&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;thCyl&lt;/td&gt;&lt;td&gt;(odCyl - dSt) / 2&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
