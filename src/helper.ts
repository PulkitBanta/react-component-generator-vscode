import { Uri, window, workspace } from 'vscode';
import path = require('path');
import fs = require('fs');
// import Buffer = require('buffer');

const SUFFIX_LENGTH = 9;

export const templateDir = (): string => path.join(__dirname + '/../assets/template/');

export const filePath = (templateFile: string, componentPath: string, componentName: string): string => {
    const fileName = templateFile.includes('component')
        ? componentName + templateFile.substring(9, templateFile.length - SUFFIX_LENGTH)
        : templateFile.substring(0, templateFile.length - SUFFIX_LENGTH);

    return getWorkspaceFolder() + componentPath + componentName + '/' + fileName;
};

export const getWorkspaceFolder = (): string | undefined => {
    if (workspace.workspaceFolders !== undefined) {
        const wf = workspace.workspaceFolders[0].uri.path;
        return wf + '/';
    } else {
        window.showErrorMessage('Try to run this command inside a workspace folder');
        return undefined;
    }
};

export const addTemplateFiles = (componentPath: string, componentName: string) => {
    fs.readdir(templateDir(), (err, files) => {
        if (err) {
            window.showErrorMessage('files not found');
        } else {
            files.forEach(file => {
                fs.readFile(templateDir() + file, (err, content) => {
                    if (err) {
                        window.showErrorMessage('Error occurred while creating the component');
                        return;
                    }
                    const updatedContent = content.toString().replace(/Component/gi, componentName);
                    workspace.fs.writeFile(Uri.file(filePath(file, componentPath, componentName)), Buffer.from(updatedContent));
                });
            });
        }
    });
    window.showInformationMessage('Component created');
};
