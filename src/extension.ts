import { commands, window } from 'vscode';
import { addTemplateFiles } from './helper';

const componentPath = () =>
    window.showInputBox({
        title: 'Specify path for folder',
        placeHolder: `Example 'src/components'`
    });

const componentName = () =>
    window.showInputBox({
        title: 'Enter name of the component',
        placeHolder: `Example 'Header'`
    });

const validateInput = (val: any, errMessage: string): boolean => {
    if (!val) {
        window.showErrorMessage(errMessage);
        return true;
    }
    return false;
};

export function activate() {
    commands.registerCommand('react-component-generator.create-react-component', () => {
        componentPath().then(path => {
            if (!validateInput(path, 'No path specified')) {
                componentName().then(name => {
                    if (!validateInput(name, 'Component name is required')) {
                        addTemplateFiles(path + '/', name!);
                    }
                });
            }
        });
    });
}
