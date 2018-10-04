import React from 'react';
import Typography from '@material-ui/core/Typography';


const Installation = () => (
  <div>
    <Typography paragraph>
      install via npm:
    </Typography>

    <pre>$ npm install timeline-plus</pre>

    <Typography paragraph>
      or
    </Typography>
    
    <Typography paragraph>
      Include the files directly in your html:
    </Typography>

      <pre class="prettyprint">
        <code class="lang-html">
{
`<script src="https://unpkg.com/timeline-plus/dist/timeline.js"></script>
<link href="https://unpkg.com/timeline-plus/dist/timeline.css" rel="stylesheet" type="text/css" />`
}
        </code>
    </pre>
  </div>
)

export default Installation