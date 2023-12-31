# Next.js Mongo CRUD Application

This is a CRUD (Create, Read, Update, Delete) application built with Next.js and MongoDB. It provides a platform for users to create, read, update, and delete posts.

# Frontend

## Technologies Used

- Next.js
- MongoDB
- React
- Tailwind CSS
- ESLint

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

npm

1. Run npm install to get all current packages
   ```sh
   npm install npm@latest -g
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Mongo-CRUD-Blog-App.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Backend

## API Documentation

This application provides a RESTful API which is used to manage blog topics. The API is built with Next.js and MongoDB.

### Endpoints

#### GET /api/topics

This endpoint is used to retrieve all topics. It does not require any parameters.

#### POST /api/topics

This endpoint is used to create a new topic. It requires a JSON body with the following structure:

```json
{
  "title": "Topic Title",
  "description": "Topic Description"
}
```

#### DELETE /api/topics

This endpoint is used to delete a topic. It requires a query parameter `id` which is the ID of the topic to be deleted.

#### GET /api/topics/[id]

This endpoint is used to retrieve a specific topic by its ID. It requires a path parameter `id` which is the ID of the topic.

#### PUT /api/topics/[id]

This endpoint is used to update a specific topic by its ID. It requires a path parameter `id` which is the ID of the topic, and a JSON body with the following structure:

```json
{
  "newTitle": "New Topic Title",
  "newDescription": "New Topic Description"
}
```

### Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the 5xx range indicate an error with the server.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
