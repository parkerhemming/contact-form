import styles from './form-row.module.scss';
import classNames from 'classnames';

export interface FormRowProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-form-rows-and-templates
 */
export const FormRow = ({ className, children }: FormRowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.formRow}>{children}</div>
        </div>
    );
};
