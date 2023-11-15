import React from 'react';
import cn from 'classnames';

import './styles.css';

type Props = JSX.IntrinsicElements['button'];

export const Button = React.memo((props: Props) => {
  const { className } = props;
  return <button {...props} className={cn('component-lib__button', className)} />;
});
