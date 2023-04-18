import { createBoard } from '@wixc3/react-board';
import { SubmitButtom } from '../../../components/submit-buttom/submit-buttom';

export default createBoard({
    name: 'SubmitButtom',
    Board: () => <SubmitButtom />
});
