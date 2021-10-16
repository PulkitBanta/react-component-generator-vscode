import { workspace, window, Uri } from 'vscode';
import path = require('path');
import fs = require('fs');

export const templateDir = () => path.join(__dirname + '/../assets/template/');

export const getWorkspaceFolder = (): string | undefined => {
    if (workspace.workspaceFolders !== undefined) {
        let wf = workspace.workspaceFolders[0].uri.path;
        return wf + '/';
    } else {
        window.showErrorMessage(
            'Try to run this command inside a workspace folder'
        );
        return undefined;
    }
};

export const addTemplateFiles = (directory: string) => {
    fs.readdir(templateDir(), (err, files) => {
        if (err) {
            window.showErrorMessage('files not found');
        } else {
            files.forEach((file) => {
                fs.readFile(templateDir() + file, (err, content) => {
                    if (err) {
                        window.showErrorMessage(
                            'Error occurred while reading ' + file
                        );
                        return;
                    }
                    workspace.fs.writeFile(
                        Uri.file(
                            getWorkspaceFolder() +
                                directory +
                                file.substring(0, file.length - 9)
                        ),
                        content
                    );
                });
            });
        }
    });
};
