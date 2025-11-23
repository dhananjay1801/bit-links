# BitLinks - URL Shortener

A modern, fast, and simple URL shortener built with Next.js. Create short, memorable links from long URLs without the hassle of registration or ads.

## Features

- **Fast & Simple** - Generate short URLs in seconds
- **Modern UI** - Beautiful, responsive design with Tailwind CSS
- **Custom Short URLs** - Choose your preferred short link
- **No Registration** - Use immediately without signing up
- **No Ads** - Clean, ad-free experience
- **Fast Redirects** - Instant redirection to original URLs

## Tech Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **Database**: MongoDB
- **Styling**: Tailwind CSS 4

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dhananjay1801/bit-links.git
cd bit-links
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Endpoints

### POST `/api/generate`

Generates a short URL from a long URL.

**Request Body:**
```json
{
  "url": "https://example.com/very/long/url",
  "shorturl": "my-custom-link"
}
```

**Response:**
```json
{
  "success": true,
  "message": "URL Generated Successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": true,
  "message": "Short URL already exists"
}
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
