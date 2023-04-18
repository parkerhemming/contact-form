import styles from './label.module.scss';
import classNames from 'classnames';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
    htmlFor?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-labels-and-templates
 */
export const Label = ({ className, children, htmlFor }: LabelProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <label htmlFor={htmlFor} className={styles.label}>
                {children}
            </label>
        </div>
    );
};
