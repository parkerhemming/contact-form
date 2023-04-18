import styles from './submit-buttom.module.scss';
import classNames from 'classnames';

export interface SubmitButtomProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-submit-buttoms-and-templates
 */
export const SubmitButtom = ({ className, children }: SubmitButtomProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button>{ children }</button>
        </div>
    );
};
