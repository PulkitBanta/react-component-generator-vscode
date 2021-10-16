import { commands, ExtensionContext, window } from 'vscode';
import { addTemplateFiles } from './helper';
import path = require('path');
import fs = require('fs');

export function activate(context: ExtensionContext) {
    commands.registerCommand(
        'medly-react-component-generator.create-react-component',
        () => {
            window
                .showInputBox({
                    title: 'Specify path for folder',
                    placeHolder: 'Example src/components'
                })
                .then((directory) => {
                    if (!directory) {
                        window.showErrorMessage('No path specified');
                        return;
                    }
                    addTemplateFiles(directory + '/');
                    window.showInformationMessage(directory + ' provided');
                });
        }
    );
}
