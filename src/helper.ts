import { workspace, window } from 'vscode';

export const getWorkspaceFolder = (): string | undefined => {
    if(workspace.workspaceFolders !== undefined) {
        let wf = workspace.workspaceFolders[0].uri.path;
        // let f = workspace.workspaceFolders[0].uri.fsPath ;
        return wf;
    } 
    else {    
        window.showErrorMessage("Try to run this command in an open workspace folder");
        return undefined;
    }
};