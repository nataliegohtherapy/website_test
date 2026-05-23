const { execSync } = require('child_process');

const GIT_PATH = '"C:\\Program Files\\Git\\bin\\git.exe"';

function runCommand(command) {
    try {
        const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
        return { success: true, output };
    } catch (error) {
        return { success: false, output: error.stdout || error.stderr || error.message };
    }
}

console.log('--- Starting Auto-Push ---');

const add = runCommand(`${GIT_PATH} add .`);
if (!add.success) {
    console.error(`Failed to add files: ${add.output}`);
    process.exit(1);
}
console.log('Added changes to staging.');

const commit = runCommand(`${GIT_PATH} commit -m "update via website-editor skill"`);
if (!commit.success) {
    if (commit.output.includes('nothing to commit')) {
        console.log('Nothing to commit, repository is clean.');
    } else {
        console.error(`Failed to commit changes: ${commit.output}`);
        process.exit(1);
    }
} else {
    console.log('Committed changes.');
}

const push = runCommand(`${GIT_PATH} push origin main`);
if (!push.success) {
    console.error(`Failed to push changes: ${push.output}`);
    process.exit(1);
}
console.log('Successfully pushed changes to GitHub.');
console.log('--- Auto-Push Complete ---');
