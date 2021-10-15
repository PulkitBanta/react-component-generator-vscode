// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { workspace, Uri, commands, window, ExtensionContext } from 'vscode';
import { getWorkspaceFolder } from './helper';
import path = require('path');

export function activate(context: ExtensionContext) {
    commands.registerCommand(
        'medly-react-component-generator.create-react-component',
        () => {
            workspace.fs
                .readFile(
                    Uri.file(
                        path.join(
                            __dirname + '/../assets/template/component.template'
                        )
                    )
                )
                .then((content) => {
                    workspace.fs.writeFile(
                        Uri.file(
                            getWorkspaceFolder() +
                                '/src/components/Component.tsx'
                        ),
                        content
                    );
                    window.showInformationMessage(
                        'Component successfully created'
                    );
                });
        }
    );
}
