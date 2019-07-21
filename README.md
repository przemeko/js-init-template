# Javascript project init template

## VSCode setup:

### Step 1: Run

```
npm install
```

### Step 2: Install plugings:

Install eslint plugin: `dbaeumer.vscode-eslint`  
Install prettier plugin: `esbenp.prettier-vscode` .

### Explanation

We need prettier because eslint cannot format your code automatically.  
Because prettier and eslint will confilict together you need to configure prettier to use eslint configs.

```
"prettier.eslintIntegration": true,
```

Vscode will be confuse now which formatter to use, so you need to tell him:

```
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Webstorm setup:
in progress