import React from 'react';

const Usage = () => (
  <div>
    The constructor of the Timeline is <code>{`timeline.Timeline`}</code>
    <pre class="prettyprint"><code class='lang-js'>{`const Timeline = new timeline.Timeline(container, items, options);`}</code></pre>
    or when using groups:
    <pre class="prettyprint"><code class='lang-js'>{`const Timeline = new timeline.Timeline(container, items, groups, options);`}</code></pre>

    The constructor accepts four parameters:
    <ul>
      <li>
        <code>{`container`}</code> is the DOM element in which to create the timeline.
      </li>
      <li>
        <code>{`items`}</code> is an Array containing items. Items can also be set using the method
        <code>{`setItems`}</code>.
      </li><li>
      <code>{`groups`}</code> is an Array containing groups. Groups can also be set using the method
      <code>{`setGroups`}</code>.
    </li>
      <li>
        <code>{`options`}</code> is an optional Object containing a name-value map
        with options. Options can also be set using the method
        <code>{`setOptions`}</code>.
      </li>
    </ul>
  </div>
)

export default Usage