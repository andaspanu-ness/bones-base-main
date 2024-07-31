import { default as React, FC, ReactNode } from 'react';
import { IconNames } from '../../../../../shared/icons/Icons';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    showRightIcon?: boolean;
    leftDivider?: boolean;
    rightDivider?: boolean;
    showLeftIcon?: boolean;
    leftIcon?: IconNames;
    rightIcon?: IconNames;
    children: ReactNode;
    type?: 'solid' | 'outline' | 'link';
    variant?: 'primary' | 'secondary';
};
export declare const Button: FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map