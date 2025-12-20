# DreamQuest

A playful and personalized way to explore career possibilities with the help of AI.

## Description

DreamQuest is a self-improving agentic workflow that powers a Next.js frontend, designed to provide career guidance and mentorship. It leverages user data from Firestore and a Neo4j Aura knowledge graph to offer personalized and accurate responses to user queries about job roles, skills, and courses.

The core of the project is a self-improving knowledge graph. When a user provides a role, skill, or course that is not in the graph, the system uses a language model to automatically populate the details and create the necessary relationships, ensuring the data is always expanding and up-to-date.

## Table of Contents

- [Project Title](#dreamquest)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Testing](#testing)
- [Known Issues / Limitations](#known-issues--limitations)
- [License](#license)
- [Author(s)](#authors)
- [Acknowledgements](#acknowledgements)

## Installation

Follow these steps to set up the development environment.

### Prerequisites

- Node.js and npm
- Python 3.x
- Access to a Google Cloud Project with Firestore enabled
- Access to a Neo4j Aura database instance

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend/neo4jaura-db
    ```

2.  **Create and activate a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate # On Windows use `venv\Scripts\activate`
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install neo4j pandas python-dotenv
    ```

4.  **Configure environment variables:**
    Create a file named `.env` in the `backend/neo4jaura-db` directory and add your Neo4j credentials:
    ```env
    NEO4J_URI="neo4j+s://your-aura-db-uri.com"
    NEO4J_USERNAME="neo4j"
    NEO4J_PASSWORD="your-neo4j-password"
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd Frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

## Usage

### 1. Ingest Data into Neo4j

Before running the application, you must populate the Neo4j database with the initial dataset.

1.  Navigate to the backend directory:
    ```bash
    cd backend/neo4jaura-db
    ```
2.  Run the ingestion script:
    ```bash
    python ingestion.py
    ```
    This script will clear the existing database and load the data from the `.csv` files in the same directory.

### 2. Run the Frontend Application

1.  Navigate to the frontend directory:
    ```bash
    cd Frontend
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to `http://localhost:3000`.

### 3. Run the Backend Agent

*Update this section with instructions on how to deploy and run the Google ADK agents on the Google Cloud Agent Engine.*

## Configuration

The application requires the following environment variables to be configured:

-   **Backend (`/backend/neo4jaura-db/.env`):**
    -   `NEO4J_URI`: The URI for your Neo4j Aura database.
    -   `NEO4J_USERNAME`: The username for your Neo4j database.
    -   `NEO4J_PASSWORD`: The password for your Neo4j database.

-   **Frontend:**
    *Update this section with any frontend-specific environment variables, such as Google Cloud project details for Firestore.*

## Features

-   **Skill Requirements:** Get required skills for a course, based on interests, or for a specific job role.
-   **Career Identity:** Get a brief career identity summary based on user details.
-   **Job/Course Recommendations:** Recommends jobs and courses based on user profile.
-   **Information Retrieval:** Get details about a job (e.g., salary, description) or a course.
-   **Career News:** Fetches and delivers career news from external APIs.
-   **Interest Assessment:** Provides a quiz to help users discover their interests.
-   **AI Mentor:** Offers a live, interactive, multilingual voice communication feature with an AI mentor.
-   **Self-Improving Knowledge Graph:** The backend knowledge graph automatically expands based on user input and external information.

## Technologies Used

-   **Frontend:**
    -   Next.js
    -   React
    -   TypeScript
    -   Tailwind CSS
    -   Shadcn/UI
    -   Framer Motion
-   **Backend:**
    -   Python
    -   Google Agent Development Kit (ADK)
    -   Neo4j (Graph Database)
    -   Google Firestore (NoSQL Document Database)
    -   Pandas
-   **Deployment:**
    -   Google Cloud Agent Engine
    -   Google App Hosting for Next.js

## Project Structure

Here is an overview of the key directories and files in this project:

```
.
├── backend/
│   └── neo4jaura-db/   # Backend scripts and data
│       ├── ingestion.py  # Script to ingest CSV data into Neo4j
│       ├── *.csv         # Raw data files for the knowledge graph
│       └── .env.example  # Example environment file for backend
├── Frontend/             # Next.js frontend application
│   ├── src/
│   │   ├── app/          # App Router pages and API routes
│   │   ├── components/   # Reusable React components (UI and features)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies and scripts
│   └── next.config.js    # Next.js configuration
├── gemini.md             # Project context for the Gemini agent
└── README.md             # You are here!
```

## Contributing
Contributions are welcome and appreciated! If you’d like to improve this project, follow the steps below:

1. **Fork** this repository  
2. **Clone** your fork to your local machine  
3. Create a new **feature branch**  
4. Make your changes and **commit** them with a clear message  
5. **Push** your branch  
6. Open a **Pull Request** describing your changes  

Please make sure your code is clean, well-documented, and does not break existing functionality.  
If you’re unsure about anything, feel free to open an issue and ask before starting.

## Testing

*No automated tests are available for this project at the moment.  
Testing is currently done manually. Automated test coverage may be added in future updates.*

## Known Issues / Limitations

- The **Career News** feature is planned but not implemented yet.
- The **Mentor / Mentorship** feature is currently under development and will be added in future updates.
- Some functionalities may be limited as the project is still evolving.

We are actively working on improving these areas and expanding the feature set.

## License

*This project does not currently use any specific license.  
All rights are reserved by the project owner. A suitable license may be added in the future.*

## Author(s)
**Soha Rida Khan**  
GitHub: [sohaa-khan11](https://github.com/sohaa-khan11)

**Mohammed Umar F**  
GitHub: [mdumr4](https://github.com/mdumr4)

**Soujanya k Hegde**  
GitHub: [shegde092](https://github.com/shegde092)

**Akshay Shanbhag**  
GitHub: [eternal70](https://github.com/eternal70)

## Acknowledgements

*This project has been collaboratively developed by the following authors, who contributed to its design, development, and implementation.*
