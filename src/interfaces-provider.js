const vscode = require('vscode');

function provideInterfaces(keyword, callback) {
    vscode.commands.executeCommand("vscode.executeWorkspaceSymbolProvider", keyword)
        .then(
            /** 
             * @param {array} objects
             */
            (objects) => {
                const interfaces = objects.
                    filter(x => x.kind == vscode.SymbolKind.Interface).
                    map(x => x.name)
                callback(interfaces);
            });
}

module.exports = provideInterfaces