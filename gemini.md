# DreamQuest Project

This document provides context for the Gemini agent.

## Project Overview

The project is to build a self-improving agentic workflow that powers a Next.js frontend. The workflow will respond to user queries related to career guidance and mentorship, and will be aware of user sessions. It will leverage user data from Firestore and a Neo4j Aura knowledge graph to provide personalized and accurate responses.

The agentic workflow will be built using the Google Agent Development Kit (ADK) and deployed on the Google Cloud Agent Engine.

## Core Components

*   **Frontend:** A Next.js application that interacts with the agentic workflow.
*   **Backend:** An agentic workflow built with the Google ADK and deployed on the Google Cloud Agent Engine.
*   **Databases:**
    *   **Firestore:** Stores user data, including `user_id`, `user_name`, `session_id`, `role`, `course`, and `skill`.
    *   **Neo4j Aura:** A knowledge graph containing information about job roles, skills, and courses.
        *   **Nodes:** `Role`, `Skill`, `Course`
        *   **Relationships:** `Role -[:REQUIRES]-> Skill`, `Course -[:TEACHES]-> Skill`

## Self-Improving Knowledge Graph

The knowledge graph is not static. It will be continuously updated and expanded based on user input and external information.

*   **Knowledge Graph Expansion:** When a user provides a role, skill, or course that is not in the graph, a new node will be created. The system will use a language model and tools like `google_search` to automatically populate the details of the new node and create the necessary relationships.
*   **Content Generation:** If the system needs to provide more content than is available in the knowledge graph, it will generate new content using a model with tools like `google_search`. This new content will then be added to the knowledge graph to keep it up-to-date with the latest trends.

## Agentic Workflow Functionality

The agentic workflow will be composed of multiple agents, each responsible for specific tasks. The workflow will handle the following user requests:

1.  **Skill Requirements:**
    *   Get required skills based on a course name.
    *   Get required skills based on a user's interests (e.g., "I love space rockets").
    *   Get required skills for a specific job role.
2.  **Career Identity:**
    *   Provide a brief career identity of the user based on their details.
3.  **Job/Course Recommendations:**
    *   Recommend job or course names based on user details.
4.  **Information Retrieval:**
    *   Get details about a job (e.g., salary, description) or a course.
5.  **Career News:**
    *   Fetch and deliver career news from external APIs.
6.  **Interest Assessment:**
    *   Provide a quiz to help users discover their interests.
7.  **AI Mentor:**
    *   Offer a live, interactive, multilingual voice communication feature with an AI mentor.

## Getting Started

**TODO:** Add instructions on how to set up the development environment, build the project, and run it.

### Prerequisites

*   Google Cloud Project
*   Next.js development environment
*   Access to Firestore and Neo4j Aura databases

### Installation

1.  [Step 1]
2.  [Step 2]

### Running the Application

*   **Backend:** Instructions to deploy the ADK agents to the Agent Engine.
*   **Frontend:** Instructions to run the Next.js application.

## Testing

*   [Instructions on how to run tests for the agentic workflow]