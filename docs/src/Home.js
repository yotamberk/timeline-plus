import React from 'react';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe';


const Home = () => (
  <div>
    <Typography paragraph>
      The Timeline is an interactive visualization chart to visualize data in time.
      The data items can take place on a single date, or have a start and end date (a range).
      You can freely move and zoom in the timeline by dragging and scrolling in the
      Timeline. Items can be created, edited, and deleted in the timeline.
      The time scale on the axis is adjusted automatically, and supports scales ranging
      from milliseconds to years.
    </Typography>
    <Typography paragraph>
      Timeline uses regular HTML DOM to render the timeline and items put on the
      timeline. This allows for flexible customization using css styling.
    </Typography>

    <Iframe url={`${process.env.PUBLIC_URL}/examples/basicUsage.html`}
        width="100%"
        height="450px"
        display="initial"
        position="relative"
        allowFullScreen
      />
  </div>
)

export default Home