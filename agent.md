# Agent Roles and Responsibilities

This document provides a detailed explanation of each agent in the DreamQuest agentic workflow.

### 1. Orchestrator Agent

*   **Role:** The central nervous system and traffic controller of the entire agentic workflow. It is the only agent that communicates directly with the frontend, ensuring a single, consistent entry and exit point for all interactions.

*   **In-Depth Responsibilities:**
    *   **Intent Recognition:** When a request comes from the Next.js frontend (e.g., "What skills do I need for this job?" or "Find me some courses"), the Orchestrator's primary task is to accurately determine the user's underlying intent. It uses its language model capabilities to classify the request into one of the categories that our specialist agents can handle.
    *   **Task Delegation:** Once the intent is recognized, the Orchestrator selects the appropriate specialist agent (or a sequence of agents) to handle the task. It acts as a "tool-user," where its tools are the other 8 specialist agents.
    *   **Context Management:** It is responsible for managing the conversational context. It uses the `session_id` to track the history of the conversation, ensuring that follow-up questions are understood in the correct context.
    *   **Response Synthesis:** After a specialist agent completes its task and returns the result, the Orchestrator receives the data. It may need to format this data into a natural, human-readable response before sending it back to the frontend. In some cases, it might need to call multiple specialist agents and synthesize their results into a single, comprehensive answer.

### 2. Skill Agent

*   **Role:** The domain expert for all queries related to skills. Its purpose is to map skills to roles, courses, and interests.

*   **In-Depth Responsibilities:**
    *   **Querying the Knowledge Graph:** Its primary tool is a function that allows it to perform **read-only** Cypher queries on the Neo4j knowledge graph. It uses this to answer questions like:
        *   `MATCH (:Role {name: "Software Engineer"})-[:REQUIRES]->(s:Skill) RETURN s.name`
        *   `MATCH (:Course {name: "B.Tech in CS"})-[:TEACHES]->(s:Skill) RETURN s.name`
    *   **Interest-Based Skill Discovery:** For more abstract queries like "I love space rockets," it would use its reasoning abilities to translate that interest into concrete search terms (e.g., "aerospace engineering," "propulsion systems"). It would then query the knowledge graph for roles and skills related to these terms.
    *   **Collaboration with Knowledge Graph Agent:** If it queries the graph for a skill and finds no results, it will not give up. Instead, it will call the **Knowledge Graph Agent** and request that this new skill be researched and added to the database.

### 3. Career Identity Agent

*   **Role:** A personalized career analyst that constructs a holistic view of the user's professional identity.

*   **In-Depth Responsibilities:**
    *   **Data Aggregation:** This agent needs to gather data from multiple sources. It will have a tool to **read** the user's profile from the **Firestore** database (fetching their stated role, skills, courses, etc.). It will also have a tool to **read** from the **Neo4j** graph to get more context on those entities.
    *   **Synthesis and Analysis:** It takes this aggregated data and uses its language model to synthesize it into a coherent narrative. It can identify the user's strengths, potential skill gaps, and logical next steps in their career.
    *   **Dynamic Knowledge Expansion:** If the user's role (e.g., "AI Ethicist") is not found in the Neo4j graph, this agent is responsible for triggering the knowledge expansion process. It will call the **Knowledge Graph Agent** and delegate the task of creating and enriching this new node.

### 4. Recommendation Agent

*   **Role:** A proactive job and course recommender that aims to find the best opportunities for the user.

*   **In-Depth Responsibilities:**
    *   **Personalized Matching:** It starts by querying the Neo4j graph to find roles and courses that are a good match for the user's existing skills and interests.
    *   **Content Augmentation:** This agent is designed to handle cases where the internal data is insufficient. If the graph returns too few recommendations, it will use a `google_search` tool to find fresh opportunities on the web. It will construct targeted queries like "entry-level bioinformatics jobs" or "online courses for game development."
    *   **Feeding the Knowledge Graph:** It plays a key role in keeping the database current. When it finds new, high-quality roles or courses on the web, it will pass this information to the **Knowledge Graph Agent** to be permanently added to the system.

### 5. Information Agent

*   **Role:** The system's librarian, providing detailed information on demand.

*   **In-Depth Responsibilities:**
    *   **Targeted Information Retrieval:** When a user asks for details about a specific entity (e.g., "Tell me more about the 'Data Scientist' role"), this agent queries the Neo4j graph to retrieve all available attributes (description, salary, qualifications, etc.).
    *   **Data Validation and Enrichment:** If the information in the graph is sparse or seems outdated, this agent can use `google_search` to find more current information. It can then trigger an update by calling the **Knowledge Graph Agent** with the new data, ensuring the system's information remains accurate.

### 6. News Agent

*   **Role:** The user's personal news correspondent for the career world.

*   **In-Depth Responsibilities:**
    *   **Targeted News Aggregation:** It uses tools like external news APIs (e.g., NewsAPI) or `google_search` to find the latest news, articles, and blog posts related to the user's career field.
    *   **Content Summarization:** It doesn't just provide links. It uses its language model to summarize the key points of the articles it finds, giving the user a quick and easy way to stay informed.
    *   **Trend Spotting:** It can be programmed to identify emerging trends. If it consistently finds articles about a new technology or skill, it can alert the **Knowledge Graph Agent** to add this as a new, trending skill in the database.

### 7. Quiz Agent

*   **Role:** An interactive guide designed to help users explore and identify their professional interests.

*   **In-Depth Responsibilities:**
    *   **Quiz Administration:** It manages the flow of the "Find your interest" quiz, presenting a series of questions to the user.
    *   **Response Analysis:** It analyzes the user's answers to build a profile of their interests and work style preferences.
    *   **Result-Based Recommendations:** Based on the quiz results, it can suggest potential career paths, job roles, or areas of study that align with the user's personality. It would query the knowledge graph to find these matches.
    *   **Profile Updates:** The insights gained from the quiz can be used to update the user's profile in the **Firestore** database, making future recommendations even more accurate.

### 8. Mentor Agent

*   **Role:** A real-time, conversational AI mentor that provides an interactive and personal guidance experience.

*   **In-Depth Responsibilities:**
    *   **Multimodal Communication:** This is one of the most complex agents. It will need to integrate several technologies:
        *   **Speech-to-Text:** To understand the user's spoken words.
        *   **Text-to-Speech:** To respond in a natural-sounding voice.
        *   **Multilingual Support:** To communicate with the user in their preferred language.
    *   **Real-time Access to Other Agents:** The Mentor Agent will act as a conversational front-end to the entire system. When a user asks a question, the Mentor Agent will, in real-time, call the appropriate specialist agent (e.g., the Skill Agent or Recommendation Agent) to get the answer, and then deliver that answer in a conversational manner.

### 9. Knowledge Graph Agent

*   **Role:** The dedicated and trusted guardian of the Neo4j knowledge graph. It is the only agent with **write and update** permissions.

*   **In-Depth Responsibilities:**
    *   **Data Creation and Enrichment:** When another agent sends it a request to create a new node (e.g., a new job role), it's not just a simple write. The Knowledge Graph Agent first uses its own tools (`google_search`, language model) to research the new entity, find its properties (description, salary, etc.), and identify its relationships with other entities.
    *   **Data Integrity:** It is responsible for ensuring the quality and consistency of the data in the graph. It will have logic to avoid creating duplicate nodes and to ensure that all new data adheres to the defined schema.
    *   **Asynchronous Processing:** Many of its tasks (like researching and enriching a new role) can be time-consuming. It will be designed to perform these tasks asynchronously in the background, so it doesn't block the main flow of conversation with the user.