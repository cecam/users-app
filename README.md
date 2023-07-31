# Random User Table App

This repository contains a web application built using various technologies to create a user-friendly Random User Table. The app fetches user data from the [Random User API](https://randomuser.me/) and displays it in a table format with various features and functionalities.

## Features

- **Fetching Data**: The application fetches 100 users from the Random User API upon loading.

- **Table Format**: The fetched user data is displayed in a table format, similar to the example provided in the link.

- **Row Coloring**: Rows are colored based on certain criteria, similar to the example.

- **Sorting by Country**: Users can sort the data by country by clicking on the "Country" column header.

- **Deleting a Row**: Users can delete a row by clicking on the delete button/icon associated with each row.

- **Restore Initial State**: The application allows users to restore the initial state by providing a feature to restore all deleted rows.

- **Error Handling**: Any potential errors that may occur during data fetching or user actions are handled gracefully, providing appropriate feedback to the user.

- **Filter by Country**: Users can filter the data by country using a search or filter input.

- **Sort by Column Header**: Users can sort the data by clicking on the column headers, providing a more interactive experience.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/cecam/users-app.git`
2. Change directory to the project folder: `cd users-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to `http://localhost:5173/` to access the app.

## Technologies Used

The app was developed using the following technologies:

- ReactJS: A JavaScript library used to create the user interface of the application.

- Vite: A build tool that serves as the development server for the application, providing fast refresh and other features.

- Tailwind CSS: A utility-first CSS framework used for styling the application, enabling rapid UI development.

- vitest: A testing library used to perform basic tests.

- React Testing Library: A testing library specifically designed for testing React components and interactions.

Other libraries were also used for design, animations, and various other functionalities to enhance the user experience.

This app aims to demonstrate the integration of various technologies to build a robust and visually appealing Random User Table application. If you have any questions or feedback, feel free to reach out to the project maintainers or open an issue on the GitHub repository.

Happy coding!
