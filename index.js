module.exports = function() {
    return {
        visitor: {
            CallExpression(path, options) {
                const customMessage = options.opts;
                let defaultString = 'You Are Awesome'
                if(!customMessage || customMessage.message) {
                    defaultString = customMessage.message;
                }
                if (path.node.callee.object && path.node.callee.object.name === 'console' && path.node.callee.property.name === 'log') {
                    path.node.arguments.unshift({
                        type: 'StringLiteral',
                        value: `${defaultString}`
                    })
                }

            }
        }
    };
};