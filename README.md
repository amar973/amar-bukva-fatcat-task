# amar-bukva-fatcat-task

## Project Description

This project is a solution for the FatCat Coders homework task. It involves converting a JavaScript project to TypeScript, creating a reusable List component to fetch and display data from an API, developing a Form Generator component, and building a dynamic Page Generator component.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- node: (>=18.0.0)
- npm (>=9.0.0)

### Installation

1. Clone the repository:
    git clone https://github.com/amar973/amar-bukva-fatcat-task.git
    cd amar-bukva-fatcat-task

2. Install dependencies:
    npm install

# Running the Project

1. Start the development server:
    npm run dev

2. Open http://localhost:3000 to view it in the browser.

# Scripts

1. Lint Check: To check for linting errors, run:
    npm run lint:check
    
2. Lint Fix: To automatically fix linting errors, run:
    npm run lint:fix

3. Format Code: To format code using Prettier, run:
    npm run format

# TypeScript Transition

    This project has been transitioned from JavaScript to TypeScript with the following TypeScript compiler options:
        "noImplicitAny": true
        "strict": true
        "strictNullChecks": true
        "noImplicitThis": true

    Import aliases have been configured to use the format @homework-task/path/to/file.ts.

# List Component

    A reusable component that fetches and displays data from the API endpoint https://jsonplaceholder.typicode.com/users. It displays the following keys for each item: id, name, username, email, and phone.

# Form Generator Component

    A scalable and reusable component that:
        Accepts a validation schema prop to ensure form data adheres to specified rules.
        Incorporates an API hook that handles states such as data, isLoading, and isError.
        Implements a callback function prop (renderForm) that renders the form elements and handles their state appropriately.

# Page Generator Component

    A reusable component for building web pages that dynamically handles different page layouts and components based on the props it receives.

# Code Quality
    To ensure high code quality, the following checks are enforced:
        ESLint and Prettier rules are followed.
        No ts-ignore or eslint-disable comments are used.
        TypeScript and ESLint errors are not allowed.
        Pre-commit hooks check for TypeScript and ESLint errors.
