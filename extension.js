// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	
	let disposable = vscode.commands.registerCommand('scc.statisticalcc',function(){
		vscode.window.showInformationMessage('scc statisticalcc');
	});
	
	let shownumber = vscode.commands.registerCommand('scc.showNumber',function(){
		let editor = vscode.window.activeTextEditor;
		if (!editor){return;}
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		vscode.window.showInformationMessage('选择的字数:'+ text.length)
	});

	var WordCounter =require('./wordCounter');
	var counter = new WordCounter(vscode)

	context.subscriptions.push(counter);
	context.subscriptions.push(disposable);
	context.subscriptions.push(shownumber);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
