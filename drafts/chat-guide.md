# NeoHaskell Chat Application Guide

## Table of Contents

- Introduction to NeoHaskell Framework
  - What is NeoHaskell?
  - Understanding CQRS and Event Sourcing
  - Comparing MVC with CQRS/Event Sourcing
- Setting Up Your Development Environment
  - Installing NeoHaskell
  - Project Structure Overview
- Creating a New Chat Application Project
  - Generating the Project Skeleton
  - Understanding the Project Components
- Defining the Domain Model
  - Creating Aggregates for Chat Entities
  - Defining Commands and Events
- Implementing the Write Side
  - Handling Commands
  - Emitting Events
  - Storing State with Event Sourcing
- Implementing the Read Side
  - Creating Read Models
  - Subscribing to Events
  - Projecting Data for the UI
- Defining the User Interface with Read Models
  - Understanding Read Models in NeoHaskell
  - Creating Dynamic HTML with HTMX
  - Componentizing UI with HTMX
- Testing Your Application
  - Writing Unit Tests for Commands and Events
  - Testing Read Models and UI Components
- Running the Application
  - Starting the Application Locally
  - Monitoring Application Logs
  - Troubleshooting Common Issues
- Conclusion and Next Steps
  - Expanding Your Application
  - Learning More About NeoHaskell and CQRS/Event Sourcing
