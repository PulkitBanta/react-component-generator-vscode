import { commands, ExtensionContext, window } from 'vscode';
import { addTemplateFiles } from './helper';
import path = require('path');
import fs = require('fs');

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

export function activate(context: ExtensionContext) {
    commands.registerCommand(
        'medly-react-component-generator.create-react-component',
        () => {
            componentPath().then((path) => {
                if (!validateInput(path, 'No path specified')) {
                    componentName().then((name) => {
                        if (!validateInput(name, 'Name is undefined')) {
                            addTemplateFiles(path + '/', name!);
                        }
                    });
                }
            });
        }
    );
}
