Make text bubbles for games with html/js. 

## Usage
Create an element including plain text to be revealed.
```markup
<div id="text">
 Plain text to be revealed char by char.
</div>;
```

Then start bubble.
```javascript
var element = document.getElementById('text');
bubble(element).start();
```

Register a callback when whole text is revealed;
```javascript
bubble(element).start(function(){ ... });
```