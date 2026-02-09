# How to Run TypeScript Files

This project contains TypeScript files (`.ts`). There are two primary ways to run them:

## 1. Using `ts-node` (Recommended for development)

`ts-node` executes TypeScript files directly via Node.js without a separate compilation step.

### Installation
Make sure `ts-node` is installed in your project:
\`\`\`bash
npm install ts-node
\`\`\`

### Execution
Use `npx` to run your file (e.g., \`test.ts\`) with `ts-node`:
\`\`\`bash
npx ts-node test.ts
\`\`\`

## 2. Standard Compilation and Execution

This method uses the TypeScript compiler (`tsc`) to create a JavaScript file first, and then runs the JavaScript file with Node.js.

### Compilation
Ensure you have `typescript` installed locally:
\`\`\`bash
npm install typescript
\`\`\`

Compile your TypeScript file (`test.ts`). This will create a corresponding \`test.js\` file.
\`\`\`bash
npx tsc test.ts
\`\`\`

### Execution
Run the compiled JavaScript file:
\`\`\`bash
node test.js
\`\`\`