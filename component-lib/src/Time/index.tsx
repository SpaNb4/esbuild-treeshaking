import React from 'react';
import { format } from 'date-fns';

import './styles.css';

type Props = {
  date: Date;
};

export const Time = React.memo((props: Props) => {
  return (
    <>
      <div className="component-lib__time">
        {format(props.date, 'HH:mm:ss:SSS')}
      </div>
      {/* <div>{formatDistanceToNow(props.date)}</div> */}
    </>
  );
});
