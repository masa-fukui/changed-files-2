# API Documentation

## Endpoints

### GET /api/data
Fetches data from the server.

**Response:**
```json
{
  "data": []
}
```

### POST /api/data
Posts data to the server.

**Request Body:**
```json
{
  "name": "string",
  "value": "string"
}
```

**Response:**
```json
{
  "success": true,
  "id": "string"
}
```

### DELETE /api/data/:id
Deletes a data entry by ID.

**Parameters:**
- `id` (string): The ID of the data entry to delete

**Response:**
```json
{
  "success": true
}
```
