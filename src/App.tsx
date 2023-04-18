import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButtom } from './components/submit-buttom/submit-buttom';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <FormRow>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" />
                </FormRow>
                <FormRow>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" />
                </FormRow>
                <FormRow>
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" name="message" />
                </FormRow>
                <FormRow>
                    <SubmitButtom>Submit</SubmitButtom>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
