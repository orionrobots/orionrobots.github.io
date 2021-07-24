---
layout: post
title: "Freecad Assembly4 File Link"
description: "Fixing linked objects in FreeCAD assembly4 after moving files"
category: "robot building"
tags: [freecad, robot building, cad, python, programming]
gallery:
    - file: freecad-assembly4-broken-link.png
      title: FreeCAD Assembly4 Broken Link
asset_dir: galleries/2021/07-24-freecad-assembly-link-issue
thumb: /galleries/2021/07-24-freecad-assembly-link-issue/thumbnails/freecad-assembly4-broken-link.png
---

When using FreeCAD's assembly4 workbench, have you seen broken object links after moving a file? Here's how I came across the issue, diagnosed it and a fix for it.

![FreeCAD Assembly4 Broken Link](/galleries/2021/07-24-freecad-assembly-link-issue/freecad-assembly4-broken-link.png)

## TLDR

Use the python console. Load in the file that should be linked, and then use the Edit menu->Send to python console button on the Body within that file. Make a variable for this object with a more unique name.

Switch to your assembly, and send the object link to the python console in the same way.

Assign obj.LinkedObject to the body in the variable.
Update the assembly using the button in the Assembly4 workbench, then save.

## Introduction

So I've been making all kinds of parts in freecad for different robot projects in freecad.
For my PicoZumo project I made some parts, and linked them together in an assembly using the assembly4 workbench.

This was great, but I later moved the files into my library - gathering files into a library, event hose that are a bit half-baked seems like a good idea so I can use them in other robot designs.

This library - is a mix of parts I've made, and parts I've imported. I can publish my parts, I may have to consider the license for the parts I've imported - from STL, from Grabcad and other sources. I'll admit to not being careful with that - so not sure how releasable much of the library will be.

## Assembly 4 problem

So it seems that when i reloaded a project using these, the PicoZumo faceplate assembly, the links were all broken.

A quick search of the web didn't reveal much useful - this thread <https://forum.freecadweb.org/viewtopic.php?t=52027> was on topic, but smelled too much like defeat. I'm clearly not the first to hit this, and it won't be the last time I see this. I'm always a fan of deferred design, including being able to rearrange my file store to my liking.

Well - there's a python console built right into freecad, and I am a little handy with Python... So what can I get?

First - a part, or assembly, in fact most objects in the model-tree in freecad, have a context menu item "send to python console". Nice. Lets hit that on an object with a failed link:

```python
>>> ### Begin command Std_SendToPythonConsole
>>> obj = App.getDocument("FaceAssembly").getObject("furniture_bracket_FurnitureBracket001")
>>> ### End command Std_SendToPythonConsole
```

Yes - it's a furniture bracket, in the pico Zumo project, Ive been experimenting with using an off the shelf furniture bracket where I'd use a 3d printed part, to make the concept easier to reproduce for builders without the 3d printer. Always aiming to lower that barrier.

Anyway - lets inspect it. Before I do dir - can import pprint (python pretty printing library for data structures) to get pretty output? - yes: `from pprint import pprint`.

Now we can `dir` the object ot see its properties (there may be docs somewhere - but Ive not found them):

```python
>>> pprint(dir(obj))
['AssemblyType',
 'AttachedBy',
 'AttachedTo',
 'AttachmentOffset',
 'ColoredElements',
 'Content',
 'Document',
 'ElementCount',
 'ElementList',
 'ExpressionEngine',
 'FullName',
 'ID',
 'InList',
 'InListRecursive',
 'Label',
 'Label2',
 'LinkExecute',
 'LinkPlacement',
 'LinkTransform',
 'LinkedChildren',
 'LinkedObject',
 'MemSize',
 'Module',
 'MustExecute',
 'Name',
 'NoTouch',
 'OldLabel',
 'OutList',
 'OutListRecursive',
 'Parents',
 'Placement',
 'PlacementList',
 'PropertiesList',
 'Removing',
 'Scale',
 'ScaleList',
 'ScaleVector',
 'ShowElement',
 'State',
 'TypeId',
 'ViewObject',
 'Visibility',
 'VisibilityList',
 '_ChildCache',
 '_LinkTouched',
 '__class__',
 '__delattr__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__le__',
 '__lt__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 'addExtension',
 'addProperty',
 'adjustRelativeLinks',
 'cacheChildLabel',
 'configLinkProperty',
 'dumpContent',
 'dumpPropertyContent',
 'enforceRecompute',
 'evalExpression',
 'expandSubname',
 'flattenSubname',
 'getAllDerivedFrom',
 'getDocumentationOfProperty',
 'getEditorMode',
 'getEnumerationsOfProperty',
 'getGroupOfProperty',
 'getLinkExtProperty',
 'getLinkExtPropertyName',
 'getLinkPropertyInfo',
 'getLinkedObject',
 'getParentGeoFeatureGroup',
 'getParentGroup',
 'getPathsByOutList',
 'getPropertyByName',
 'getPropertyStatus',
 'getPropertyTouchList',
 'getStatusString',
 'getSubObject',
 'getSubObjectList',
 'getSubObjects',
 'getTypeIdOfProperty',
 'getTypeOfProperty',
 'hasChildElement',
 'hasExtension',
 'isDerivedFrom',
 'isElementVisible',
 'isValid',
 'purgeTouched',
 'recompute',
 'removeProperty',
 'resolve',
 'resolveSubElement',
 'restoreContent',
 'restorePropertyContent',
 'setEditorMode',
 'setElementVisible',
 'setExpression',
 'setLink',
 'setPropertyStatus',
 'supportedProperties',
 'touch']
>>> 
```

Quite a list. Anything there that leaps out as the LinkedObject? In the Property panel on the left - it's called "linked Object" - so it's either got a field/property above, or there's a more generic "attributes" type structure with it.
However - I see "LinkedObject". Hmm - what is there? `None`. Hmm.
What about the faceplate object, that is still in the same path? Does it have a different field here?
Lets send that to console, and debug the linked object - it looks different in the left-hand property box...

```python
>>> obj.LinkedObject
<body object>
```

Hmmm... So that is set to a type `body`. Could I set the other one to the body of the object I mean to link?

Lets get assigned the body of the furniture bracket file (it's loaded in) - and call it furn_body.
Hmm - wait - the send_to_python console button is gone... What am I missing there? Not to worry - it's in the "Edit" menu too.

```python
>>> ### Begin command Std_SendToPythonConsole
>>> obj = App.getDocument("furniture_bracket").getObject("Body")
>>> ### End command Std_SendToPythonConsole
>>> furn_body = obj
>>> obj
<body object>
```

I assigned it - but double checked it is a body...
Lets switch back to the other object and try linking it this way.

```python
>>> ### Begin command Std_SendToPythonConsole
>>> obj = App.getDocument("FaceAssembly").getObject("furniture_bracket_FurnitureBracket001")
>>> ### End command Std_SendToPythonConsole
>>> obj.LinkedObject = furn_body
```

Woah! It appears - as if it had never been wrong...
Can i save it?
Omg - it kinda works - there's still a problem shown though... An update assembly - and that problems gone on that item. Lets do another...

Select the vl53l0x - assign it's body to dist_body.

```python
>>> ### Begin command Std_SendToPythonConsole
>>> obj = App.getDocument("vl53l0x").getObject("vl53l0x")
>>> ### End command Std_SendToPythonConsole
>>> dist_body = obj
>>>
```

Come to think of it - I could have assigned the other one to a name to stop having to send and switch - but ok. Ah no - this is a different assembly link Ok.

```python
>>> obj.LinkedObject = dist_body
```

And save...

And although it's a little tedious - the links are back, restored in their correct places.
