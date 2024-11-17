# CODELESS-PLATFORM-FOR-DATA-MANAGEMENT

## Developed with the following software and tools:

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white)
- ![YAML](https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
- ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white)
- ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
- ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white)

---

## Data Provision
1. Start off by uploading the CSV file wherein your previous data is stored.
2. Use the **CreateTemplate** button to visualize the JSON data type of the CSV as an entity.
3. Templates (data types) will be stored separately in the database.
4. Objects corresponding to a template will be accepted and sent to the backend.

## Analytics Service
1. You can perform aggregate functions and logical operations on the objects of the template you wish to work upon.

## Expression Creation
1. This page allows you to modify existing templates and their corresponding objects by adding custom expressions, leveraging existing attributes and expressions present inside multiple templates in the database.
2. This feature will enable the comparison of performances of different entities in analytics.

## Payroll Check
1. We have ensured the platform can handle a variety of data. Apart from automating payroll processing for employees, we also provide real-time induction motor analysis.

## Application Snapshots

![WhatsApp Image 2024-04-25 at 15 00 29_07485ce5](https://github.com/user-attachments/assets/9392a098-fa1e-4c93-be38-3309558bf755)

## Getting Started

To get started with **CODELESS-PLATFORM-FOR-DATA-MANAGEMENT**, follow the steps below to set up both the frontend and backend locally.

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** and **npm** (for running the React frontend)
- **Java Development Kit (JDK)** (for running the Spring Boot backend)
- **MongoDB** (for the database)
- **Maven** (for managing Java dependencies in the Spring Boot project)

### 1. **Setting Up the Backend (Spring Boot)**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/CODELESS-PLATFORM-FOR-DATA-MANAGEMENT.git
   cd CODELESS-PLATFORM-FOR-DATA-MANAGEMENT
   ```

2. **Configure MongoDB URL in the Backend:**
   Open the `application.properties` file located in the `src/main/resources` folder of the backend project, and set the MongoDB connection URL:

   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/your-database-name
   ```

   Replace `your-database-name` with the name of your MongoDB database.

3. **Run the Spring Boot Backend:**
   Use Maven to build and run the backend:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The Spring Boot application should now be running on `http://localhost:8080`.

### 2. **Setting Up the Frontend (React)**

1. **Navigate to the Frontend Folder:**
   The frontend React project is typically in a folder like `frontend`. Move to this directory:

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   Run the following command to install all required npm dependencies:

   ```bash
   npm install
   ```

3. **Configure Backend URL for Frontend:**
   In your React app, configure the backend URL to point to the correct Spring Boot backend. This can typically be done in a `.env` file or directly in the Axios setup.

   Example `.env` file:

   ```bash
   REACT_APP_BACKEND_URL=http://localhost:8080
   ```

4. **Run the React Frontend:**
   Start the React development server with:

   ```bash
   npm start
   ```

   This will open the frontend in your browser, typically at `http://localhost:3000`.

### 3. **MongoDB Setup**

If you don't have MongoDB installed locally, follow these steps to set it up:

1. **Download and Install MongoDB:**
   Follow the official MongoDB installation guide for your operating system:  
   [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

2. **Start MongoDB:**
   Once installed, start MongoDB by running:

   ```bash
   mongod
   ```

   MongoDB will run on the default port `27017`.

### 4. **Test the Application**

Once everything is set up, you can test the full-stack application by:

1. **Uploading a CSV file** in the frontend to create templates and data objects.
2. **Visualizing the JSON structure** of your CSV and making changes to templates.
3. **Using the analytics service** to perform operations on the data.
4. **Interacting with the backend APIs** and ensuring data is being saved to the MongoDB database.

### 5. **Additional Configuration (Optional)**

If you want to customize the MongoDB database URL or make other configurations, update the respective files in both the backend and frontend accordingly. You can also configure custom port settings or set up Docker for local deployment.

---

With these steps, you should now be able to get **CODELESS-PLATFORM-FOR-DATA-MANAGEMENT** up and running locally!

Feel free to explore the features of the platform like **data provisioning**, **analytics**, **expression creation**, and **payroll checks**.

---
```
