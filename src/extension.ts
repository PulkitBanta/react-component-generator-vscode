import { commands, window, ExtensionContext } from 'vscode';
import { addTemplateFiles, templateDir } from './helper';
import path = require('path');
import fs = require('fs');

export function activate(context: ExtensionContext) {
    commands.registerCommand(
        'medly-react-component-generator.create-react-component',
        () => {
            addTemplateFiles();
        }
    );
}
