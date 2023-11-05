# Contact List Web App

This is a web application that allows you to manage and view a contact list. It is built using React.js with TypeScript, and it follows mobile-first design principles to create a single-page application (SPA).

## Table of Contents

- [Technical Requirements](#technical-requirements)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Persistence](#persistence)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Technical Requirements

- **TypeScript:** The project is developed using TypeScript, ensuring strong typing and improved code quality.

- **React.js:** The web app is built with React.js, and you are allowed to use Create React App, Create Next App, or your starter template.

- **Mobile-First Design:** The UI/UX design of the web app is mobile-first, ensuring a seamless experience on various devices.

- **Single Page Application (SPA):** The project is structured as a single-page application, improving user experience and performance.

- **GraphQL Integration:** GraphQL is used to fetch a contact list and submit contact information. You can utilize GraphQL clients like Apollo Client, Relay, etc. The GraphQL endpoint for the contact list can be found at [https://wpe-hiring.tokopedia.net/graphql](https://wpe-hiring.tokopedia.net/graphql).

- **CSS-in-JS:** The project prefers using Emotion or CSS-in-JS for styling, allowing for a more component-based and maintainable styling approach.

- **Persistence:** The list of contacts should persist and not be removed or reset on page reload. Web Storage API is used to store this data locally.

- **Repository and Deployment:** You should provide a hosted project repository, which can be on platforms like GitHub, GitLab, or Bitbucket. Additionally, the web app should be deployed using free hosting solutions such as Vercel, Surge, GitHub Pages, Firebase, Netlify, or others.

## Features

- View a list of contacts
- Add new contacts
- Edit existing contacts
- Delete contacts
- Mobile-friendly design
- Persist contact list data across page reloads

## Getting Started

### Prerequisites

To run this project, you need to have Node.js and npm (Node Package Manager) installed on your computer. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Change to the project directory:

   ```bash
   cd contact-list-web-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

After following the installation steps, you can start the development server:

```bash
npm start
```

This will start the development server, and you can access the web app by opening a web browser and navigating to [http://localhost:3000](http://localhost:3000).

## API Integration

The project uses GraphQL to fetch and submit contact information. The GraphQL endpoint for the contact list can be found at [https://wpe-hiring.tokopedia.net/graphql](https://wpe-hiring.tokopedia.net/graphql).
