import React from 'react';
import cn from 'classnames';

import './styles.css';

type Props = JSX.IntrinsicElements['label'];

export const Label = React.memo((props: Props) => {
  const { className } = props;
  return <label {...props} className={cn('component-lib__label', className)} />;
});
