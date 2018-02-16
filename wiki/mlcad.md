---
layout: page
title: MLCad
date: 2005-08-28 00:44:55
---
<p>This is Mikes <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a>.
</p>
<p>It is quite a nice WYSIWIG interface to <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a>.  It is free, and because of the compatibility with standards is able to work with the newest part updates.
</p>
<p>Current versions has an interface to <a class="wiki" href="/wiki/lsynth.html" title="LSynth">LSynth</a> and a number of generators for the aesthetic stuff.
</p>
<p>One feature notably lacking is a proper UNDO feature, and a more intelligent (multi-tier) parts tree would be welcome. Sadly - although free it is not open source, which rules out me having a look at adding some of these features myself. It is also Windows only, but that doesnt stop you use Wine to run it.
</p>
<p>MLCad is available at <a href="http://www.lm-software.com/mlcad/" rel="external" target="_blank">http://www.lm-software.com/mlcad/</a>. It is highly recommended if you are going to do any amount of <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> robotics work, and with some alternative parts libraries - may be adaptable for other Construction Toys.
<br/><a id="usage"></a>
</p>
<h1 id="Usage_Tips">Usage Tips</h1>
<p>
</p>
<ul><li><a href="MLCad#obvious">The startlingly obvious</a>
</li><li><a href="MLCad#keys">Use the keyboard!</a>
</li><li><a href="MLCad#copypaste">Copy Paste Construction</a>
</li><li><a href="MLCad#matrix">Enter the Matrix</a>
</li><li><a href="MLCad#lsynth">LSynth Generator</a>
</li><li><a href="MLCad#versions">Versions</a>
</li><li><a href="MLCad#modular">Modular Building</a>
</li><li><a href="MLCad#steps">Steps</a>
</li><li><a href="MLCad#tron">Inputting an existing physical model</a>
</li><li><a href="MLCad#submitting">Submitting a model</a>
</li></ul><p><a id="obvious"></a>
</p>
<h2 id="The_startlingly_obvious.">The startlingly obvious.</h2>
<p>
<br/>Remember to save often and take breaks.
</p>
<p>Generally for <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> a large high resolution display is recommended - I find it frustrating to work in anything less the 1280x1024 when designing.
</p>
<p>If you can, use a trackball over a mouse, and you will find your wrists thank you for it. Three buttons are also usful - the scroll wheel can be used in the canvas windows to zoom, and pushing the middle button allows you to pan.
</p>
<p>There are some very interesting multi-control input devices (like the space-ball) used in professional <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> software, but sadly none of them are compatible with MLCad.
<br/><a id="keys"></a>
</p>
<h2 id="Use_the_keyboard_">Use the keyboard!</h2>
<p>
<br/>Use keys allows for finer movements - but I always use the mouse for larger movements. You can become very fast by being familiar with the key combinations and shortcuts.
</p>
<p>Remember to check and set the step size first. Beware of fine grid movements when you dont expect them - they may subtly put peice out of line - which will spoil renderings of your design.
</p>
<p>Cursor Keys with peice(or group of) selected - Will translate(that is move) the peices in the XY axis. Home and End keys give you Z axis movement. These keys make up the movement keys.
</p>
<p>Control+ Movement Keys will rotate the peice.
</p>
<p>Page Up/Down will focus the previous/next line in the list display.
</p>
<p>Ctrl + S - <a href="MLCad#obvious">Save</a>.
</p>
<p>You will learn the rest as you use them.
<br/><a id="copypaste"></a>
</p>
<h2 id="Copy_Paste_Construction">Copy Paste Construction</h2>
<p>
<br/>This means dragging initial peices onto the canvas, then I copy them and paste them down, then use <a class="wiki" href="#keys" rel="">keys</a> to move them to the desired location. This means that the peices will already probably be lined up in at least one dimension. This can be done with whole groups of peice if need be, but if this group is more than about 5/10 peices you should probably follow the <a href="MLCad#modular">Modular building</a> tip below.
</p>
<p><a id="matrix"></a>
</p>
<h2 id="Enter_the_Matrix">Enter the Matrix</h2>
<p>
<br/>When even fine grid rotation or position is not enough - use the position+rotation matrix dialog. This may be a little daunting for those not familiar with matrix transforms, and can even be abused (as it is commonly for part creation) to give you a scaling factor. Please make sure you <a href="MLCad#obvious">Save</a> before you do this! You may even want to create a new <a href="MLCad#versions">Version</a> here.
<br/><a id="lsynth"></a>
</p>
<h2 id="LSynth_Generator">LSynth Generator</h2>
<p>
<br/>You are going to need this feature for <a class="wiki" href="/wiki/pneumatic.html" title="Use of air to operate and power actuators">pneumatic</a> tubes, or electric cables to motors and the <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a>. It is frustrating sometimes, but the results are worth the effort.
</p>
<p>Remember that the generator guides work in one direction. Before you generate- check they are all going in the correct direction. Again- their orientation also matters, otherwise you may get twists in cables like the Electric ones.
</p>
<p>If you are using the build in <a class="wiki" href="/wiki/lsynth.html" title="LSynth">LSynth</a> generator link, ensure to save a version with just the pre-generation information, and save a different version to generate on. It is easier to modify and view a file that has not had the generator run on it, and sometimes things go wrong and you loose the initial set-up info. This is probably a good place to use a branch as described in <a href="MLCad#versions">Versions</a>.
<br/><a id="versions"></a>
</p>
<h2 id="Versions">Versions</h2>
<p>
<br/>When you are building a large build, or updating an older model, keep versions.
</p>
<p>This means you can revert if something goes horribly wrong, or simply view a history of the model. You may even "branch" it - creating two new different models based on the same earlier version.
<br/>Use CVS or similar for this - it is a good habit to get into.
<br/><a id="modular"></a>
</p>
<h2 id="Modular_Building">Modular Building</h2>
<p>
<br/>Also try to build in modules - if two sections of the model are essentially the same, create them in subparts, and then attach the subparts to a larger assembly. Some of my creations have a number of tiers of sub-parts. These can be done in two ways - either as Multipart <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> Dat files (MPD's) which may not be readable by all <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> apps, or as a number of seperate DATs. By using the models directory of your <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> parts library- you will see these in your parts tree. Failing that - you can right click in the list window and click "add part".
<br/><a id="steps"></a>
</p>
<h2 id="Steps">Steps</h2>
<p>
<br/>Try to build things in a logical physical way when possible - and add steps in while you go. They mean that yourself, and others may be able to rebuild the model when necessary. MLCad has an option to sort peices by their height - this may help with simple models - but is not a great deal of use with complex mechanisms. If you have neglected to do this when inputting the whole model, then ensure you create a new <a href="MLCad#versions">version</a> before adding the steps in later.
<br/><a id="tron"></a>
</p>
<h2 id="Inputting_an_existing_physical_model">Inputting an existing physical model</h2>
<p>
<br/>If I have taken an existing physical model and converted it to <a class="wiki" href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a>, I sometimes end up changing peices and colours as it goes in - try to resist the temptation to do this straight away, and do this in a second <a href="MLCad#versions">version</a> of the item.
<br/><a id="submitting"></a>
</p>
<h2 id="Submitting_a_model">Submitting a model</h2>
<p>
<br/>Finally - if you have anything robot related and cool - then let us know in the forums or your user area. It is one of the reasons this site exists. You will need to be logged in to actually upload anything to OrionRobots.
</p>
<p>You may want to upload the actual dat. Make sure you get any dependancies or custom peices. If there is more than one file - it is better to zip it up and upload the zip. Make sure you export at least one clear image of the model, which could be used as a thumbnail, and a larger one for the description. It is better to use GIF for a smaller model, and JPG if it is larger or uses more colours.
</p>
<p>If there are a number of custom peices, it may be a good idea to use the export images tool to export all the steps, and build a html instruction book with this. This will save potential fans the frustration of trying to find missing dependancies.
</p>
<p>If you are using LSynth generated sections, upload a version before, and a version after the Lsynth stuff has been generated. Again - this is a good reason to simply use images.
</p>
<p>Ensure if you are uploading a DAT you have <a href="MLCad#steps">steps</a>, and add the odd comment so people can build the model, and follow what was intended when recreating the model. Make sure if you are uploading to put a version number in the comments, as well as your (authors) name and release date.
</p>
<p>By sharing with the others, you open up the possiblility of others contributing to the model, and enhancing it. If you are really interested in ensuring cooperation of this kind, think of applying a license like the Creative Commons license to it so others are encouraged to modify and contribute. After all - you can then add the variations others create to your <a href="MLCad#versions">version</a> tree. If you have already included a version number in the file, then you will easily be able to see what changes were made, and may be able to incorporate them into other or newer versions.
</p>
<p>{GOOGLEBAR(pub=pub-1306094303661715)/}
</p>
