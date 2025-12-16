# p5-playground

A minimal p5.js sketch ready for GitHub Pages deployment.

## 🚀 Quick Start

This project is set up and ready to publish via GitHub Pages. The sketch displays a simple colored background with a blue circle.

### Publishing to GitHub Pages

1. Go to your repository **Settings** on GitHub
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select the branch you want to deploy (e.g., `main`)
4. Click **Save**
5. Your sketch will be live at: `https://<username>.github.io/<repository-name>/`

## ✏️ Customizing Your Sketch

Edit `sketch.js` to create your own p5.js sketch:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 180, 200);
  fill(100, 150, 255);
  ellipse(200, 200, 100, 100);
}
```

- `setup()`: Runs once when the sketch starts. Use it to set canvas size and initial properties.
- `draw()`: Runs continuously in a loop. Use it to create animations and interactive graphics.

## 📚 Resources

- [p5.js Reference](https://p5js.org/reference/)
- [p5.js Examples](https://p5js.org/examples/)
- [p5.js Tutorials](https://p5js.org/learn/)

## 🧪 Testing Locally

To test your sketch locally, use a local server:

- **Python**: `python -m http.server` or `python3 -m http.server`
- **Node.js**: `npm run serve` (or `npx http-server`)
- **VS Code**: Use the Live Server extension

Then visit `http://localhost:8000` (or the appropriate port) to view your sketch.

Note: Opening `index.html` directly in a browser may not work due to CORS restrictions.

## 🧪 Running Unit Tests

This project includes automated unit testing with Jest:

### Running Tests Locally

First, install dependencies:
```bash
npm install
```

Then run tests:
```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Adding New Tests

- Create test files in the `__tests__` directory
- Name test files with `.test.js` or `.spec.js` extension
- Use Jest's `describe()` and `test()` functions to structure your tests

Example test:
```javascript
describe('My Feature', () => {
  test('should work correctly', () => {
    expect(1 + 1).toBe(2);
  });
});
```

## 🚦 Quality Gates & CI/CD

This repository uses GitHub Actions workflows to maintain code quality:

### Super-Linter Workflow
- **Purpose**: Automatically lints all code changes for style and quality
- **When it runs**: On every push and pull request
- **What it checks**: JavaScript, HTML, CSS, Markdown, YAML, and JSON files
- **Configuration**: See `.github/workflows/super-linter.yml`
- **Linter version**: super-linter v8.3.0 (slim)

### Unit Test Workflow
- **Purpose**: Runs automated tests to catch bugs and regressions
- **When it runs**: On every push and pull request
- **Test framework**: Jest with jsdom environment
- **Node versions**: Tests run on Node.js 18.x and 20.x
- **Configuration**: See `.github/workflows/unit-test.yml` and `jest.config.js`
- **Coverage reports**: Generated and uploaded as artifacts

### Viewing Workflow Results
1. Go to the **Actions** tab in your GitHub repository
2. Select a workflow run to see detailed results
3. Click on individual jobs to view logs and error messages
4. Download coverage reports from the artifacts section

### Local Linting
To maintain code quality locally before pushing:
- Use ESLint for JavaScript
- Use HTMLHint for HTML
- Use Stylelint for CSS
- Configure your IDE with appropriate linters


## 🔧 Dependency Management

This project uses [Dependabot](https://docs.github.com/en/code-security/dependabot) for automated dependency updates:

- **Automated Updates**: Dependabot checks for p5.js updates weekly (every Monday at 09:00 UTC)
- **Security Updates**: Automatic security vulnerability notifications and updates
- **Grouped PRs**: All npm updates are grouped into single pull requests to reduce noise

The p5.js library is loaded from CDN in `index.html`, and tracked in `package.json` for dependency monitoring.