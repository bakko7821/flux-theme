import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("dima-theme.hello", () => {
    vscode.window.showInformationMessage("Theme extension is active");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
