const fs = require('fs');
module.exports = {
    'max-files-per-folder': {
        meta: {
            docs: {
                description: 'disallow identifiers',
                category: 'Possible Errors',
            },
            schema: [],
        },
        create(context) {
            return {
                Program(node) {
                    // Get the current working directory from the context
                    const cwd = context.getCwd();

                    // Function to check the number of files in a directory
                    function checkDir(dirPath) {
                        try {
                            const fs = require('fs');
                            const files = fs.readdirSync(dirPath);
                            if (files.length > 7) {
                                context.report({
                                    node,
                                    message: `Folder '${dirPath}' contains more than 7 files. Please consider organizing or splitting the contents.`,
                                });
                            }
                        } catch (error) {
                            // Handle potential errors like permission issues
                            console.error(`Error accessing directory: ${dirPath}`, error);
                        }
                    }

                    // Recursively traverse through the project directory
                    function traverse(dir) {
                        const dirPath = path.join(cwd, dir);
                        checkDir(dirPath);
                        const stats = fs.statSync(dirPath);
                        if (stats.isDirectory()) {
                            const subdirs = fs.readdirSync(dirPath).filter((file) => file !== '.' && file !== '..');
                            subdirs.forEach((subdir) => traverse(path.join(dir, subdir)));
                        }
                    }

                    // Start the traversal from the project root
                    traverse('.');
                }
            }
        }
    }
}
