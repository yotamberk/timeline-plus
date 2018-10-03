# Timeline

Based on vis.js Timeline (v4.21.0) - [https://github.com/almende/vis.git](https://github.com/almende/vis.git).
The vis.js library was initially developed by [Almende B.V](http://almende.com).

The last few years, the timeline module has been maintained mainly by me. Due to lack of support in the other modules of vis, I decided to branch off and seperate this module to my own project where I can procceed the great work that has been done there, and update fixes, feature requests and versions more often with no dependency of the other modules in vis.

I intend to add features and fixes that are to my concern for my own projects. I will accept feature requests and merge requests, but will not prioritize them if not to my interest.

## Install

Install via npm:

    $ npm install timeline-plus
    
Or include the files via unpkg: 

[https://unpkg.com/timeline-plus/dist/timeline.js](https://unpkg.com/timeline-plus/dist/timeline.js). 

and

[https://unpkg.com/timeline-plus/dist/timeline.css](https://unpkg.com/timeline-plus/dist/timeline.css).


Or download the library from the github project:
[https://github.com/yotamberk/timeline.git](https://github.com/yotamberk/timeline.git).

## API and Examples
[https://yotamberk.github.io/timeline-plus/](https://yotamberk.github.io/timeline-plus/)

## Basic Example

A basic example on loading a Timeline is shown below. More examples can be
found in the [examples directory](https://github.com/yotamberk/timeline/tree/master/examples)
of the project.

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>Timeline basic demo</title>
  <script src="timeline/dist/timeline.js"></script>
  <link href="timeline/dist/timeline.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="timeline"></div>

<script type="text/javascript">
  var container = document.getElementById('timeline');
  var data = [
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
  ];
  var options = {};
  var timeline = new timeline.Timeline(container, data, options);
</script>
</body>
</html>
```
