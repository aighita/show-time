<div align="center">
    <h1>🎵 Show Time - Music Festival Management Platform</h1>
    <p><em>A comprehensive festival tracking and booking system built during NetRom Summer Camp 2025</em></p>
    
[![Symfony](https://img.shields.io/badge/Symfony-7.3-green.svg)](https://symfony.com/)
[![PHP](https://img.shields.io/badge/PHP-8.2+-blue.svg)](https://php.net/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-purple.svg)](https://stripe.com/)

</div>

## 🌟 Project Overview

**Show Time** is a full-stack music festival management platform I developed during my participation in the NetRom Summer Camp 2025 in Craiova. This project demonstrates my ability to build complex web applications using modern technologies and showcases my growth as a developer through hands-on learning.

### 🎯 What I Built

A comprehensive platform that allows users to:
- **Browse** music festivals with detailed information
- **Book** festival tickets with secure payment processing
- **Manage** festivals, bands, and bookings through an admin dashboard
- **Experience** a modern, responsive UI built with React and TypeScript

## 🚀 Key Achievements & Learning Outcomes

### 💻 Full-Stack Development Mastery
- **Backend Excellence**: Built a robust API using Symfony 7.3 with PHP 8.2+
- **Frontend Innovation**: Created interactive React components with TypeScript
- **Database Design**: Implemented complex relationships using Doctrine ORM
- **Modern UI/UX**: Styled with Tailwind CSS and shadcn/ui components

### 🏗️ Architecture & Design Patterns
- **MVC Architecture**: Properly structured Symfony application following best practices
- **Entity Relationships**: Complex many-to-many relationships between Festivals and Bands
- **Repository Pattern**: Custom repository classes for data access
- **Form Handling**: Symfony Form components with validation
- **Component-Based UI**: Reusable React components with proper prop typing

### 💳 Payment Integration
- **Stripe Integration**: Implemented secure payment processing for festival bookings
- **Session Management**: Handled payment sessions with success/cancel flows
- **Database Persistence**: Stored payment status and session information

### 📊 Data Management
- **CSV Data Import**: Built data fixtures to import real festival data from CSV files
- **Database Migrations**: Version-controlled database schema changes
- **Data Validation**: Both client-side and server-side validation

## 🛠️ Technology Stack

### Backend
- **PHP 8.2+** - Modern PHP with latest features
- **Symfony 7.3** - Latest Symfony framework with new features
- **Doctrine ORM** - Database abstraction and entity management
- **MySQL** - Relational database for data persistence
- **Symfony Forms** - Form handling and validation
- **Symfony Security** - Authentication and authorization

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript 5.8** - Type-safe JavaScript development
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Symfony UX** - Integration between Symfony and React
- **Webpack Encore** - Asset management and bundling

### External Services & APIs
- **Stripe Payment API** - Secure payment processing for festival bookings
  - Created checkout sessions for ticket purchases
  - Handled payment success/failure callbacks
  - Managed payment metadata and session persistence

### Development Tools
- **Composer** - PHP dependency management
- **npm** - JavaScript package management
- **Webpack** - Module bundling and asset compilation
- **Docker** - Containerized development environment (via compose files)
- **PHP-CS-Fixer** - Code style enforcement

## 🏗️ Project Structure & Architecture

### Core Entities
```php
🎪 Festival Entity
├── Many-to-Many relationship with Bands
├── One-to-Many relationship with Bookings
└── Attributes: name, location, dates, pricing

🎸 Band Entity  
├── Many-to-Many relationship with Festivals
├── Music genre enumeration
└── Attributes: name, genre, description

🎫 Booking Entity
├── Many-to-One relationship with Festival
├── Stripe integration fields
└── Attributes: customer info, payment status
```

### Controller Architecture
- **HomeController**: Landing page with featured festivals
- **FestivalController**: CRUD operations for festivals + booking flow
- **BandController**: Complete band management system
- **BookingController**: Payment processing with Stripe integration
- **DashboardController**: Analytics and admin overview

### React Component Structure
```typescript
📱 Frontend Components
├── LandingPage - Hero section and main CTAs
├── FeaturedFestivals - Dynamic festival grid with TypeScript interfaces
├── DashboardAnalytics - Admin statistics and metrics
├── UI Components - Reusable shadcn/ui components
└── Forms - Type-safe form handling with validation
```

## 💡 Technical Challenges Overcome

### 1. **Complex Entity Relationships**
Successfully implemented bidirectional many-to-many relationships between Festivals and Bands, ensuring data consistency and proper cascade operations.

### 2. **Payment Flow Integration**
Integrated Stripe's checkout system with proper session management, handling edge cases like payment cancellation and session expiration.

### 3. **Modern Frontend Integration**
Seamlessly integrated React with Symfony using Symfony UX, maintaining server-side rendering benefits while providing rich client-side interactivity.

### 4. **Type Safety Across Stack**
Implemented TypeScript interfaces that match PHP entity structures, ensuring type safety from database to UI.

### 5. **Real Data Integration**
Built data fixtures to import actual festival data from CSV files, handling data cleaning and transformation.

## 🔧 Setup & Installation

### Prerequisites
- PHP 8.2+
- Composer
- Node.js 18+
- MySQL
- Symfony CLI (optional but recommended)

### Quick Start
```bash
# Clone the repository
git clone [repository-url]
cd show-time-filter

# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install

# Set up environment variables
cp .env .env.local
# Configure database and Stripe keys in .env.local

# Set up database
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load

# Set up a sandbox stripe key in .env file

# Build frontend assets
npm run build

# Start development server
symfony serve
```

## 🎨 Key Features Implemented

### 🎪 Festival Management
- Complete CRUD operations for festivals
- Date range management with validation
- Location and pricing information
- Band assignment and management

### 🎸 Band Management  
- Comprehensive band profiles with music genres
- Many-to-many relationships with festivals
- Genre-based categorization using PHP enums

### 💳 Secure Booking System
- Stripe-powered payment processing
- Session-based checkout flow
- Payment status tracking
- Success/cancellation handling

### 📊 Admin Dashboard
- Real-time statistics and analytics
- Entity management interfaces
- Responsive design for all screen sizes

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Interactive React components
- Loading states and smooth transitions
- Accessible UI components

## 🏃‍♂️ Performance & Optimization

### Database Optimization
- **Doctrine Query Optimization**: Efficient entity loading with proper relationships
- **Database Indexing**: Optimized queries for festival and booking searches
- **Migration Management**: Version-controlled schema changes with rollback capabilities

### Frontend Performance
- **Code Splitting**: Webpack configuration for optimized bundle sizes
- **Lazy Loading**: React components loaded on demand
- **Asset Optimization**: Minified CSS/JS with cache optimization
- **TypeScript Compilation**: Zero-runtime overhead with compile-time type checking

### Security Implementation
- **CSRF Protection**: Symfony CSRF tokens for form submissions
- **Input Validation**: Multi-layer validation (client-side TypeScript + server-side PHP)
- **Payment Security**: PCI-compliant Stripe integration with secure session handling
- **SQL Injection Prevention**: Doctrine ORM parameterized queries

## 🚀 Advanced Features

### Real-Time Data Processing
- **CSV Data Import**: Automated processing of large festival datasets
- **Database Fixtures**: Seeding system for development and testing environments
- **Data Transformation**: Clean import of external festival data with validation

### API Integration Architecture
- **Stripe Webhook Handling**: Asynchronous payment status updates
- **Session Management**: Persistent payment sessions with expiration handling
- **Error Recovery**: Graceful handling of payment failures and network issues

### Modern Development Workflow
- **Hot Module Replacement**: Live reloading during development
- **Type Safety**: End-to-end TypeScript interfaces matching PHP entities
- **Component Library**: Reusable UI components with consistent design system
- **Docker Containerization**: Consistent development environment across platforms

## 📚 Technical Implementation Details

### Entity Design & Relationships
```php
// Complex bidirectional relationships with cascade operations
class Festival {
    #[ORM\ManyToMany(targetEntity: Band::class, inversedBy: 'festivals')]
    #[ORM\JoinTable(name: 'festival_band')]
    private Collection $bands;
    
    #[ORM\OneToMany(targetEntity: Booking::class, mappedBy: 'festival')]
    private Collection $bookings;
}
```

### Payment Processing Flow
```php
// Stripe session creation with metadata tracking
$session = $stripe->createCheckoutSession([
    'payment_method_types' => ['card'],
    'mode' => 'payment',
    'success_url' => $this->generateUrl('app_payment_success'),
    'cancel_url' => $this->generateUrl('app_payment_cancel'),
    'metadata' => ['booking_id' => $booking->getId()],
    'expires_at' => time() + 3600 * 24
]);
```

### React Component Architecture
```typescript
// Type-safe component interfaces matching backend entities
interface Festival {
    id: number;
    name: string;
    location: string;
    startDate: string;
    endDate: string;
}

export default function FeaturedFestivals({festivals}: {festivals: Festival[]}) {
    // Component implementation
}
```

## 🔧 Development Environment

### Local Setup Requirements
```bash
# PHP Development Stack
PHP 8.2+ with extensions: ctype, iconv, pdo_mysql
Composer 2.x for dependency management
MySQL 8.0+ for database operations

# JavaScript Development Stack  
Node.js 18+ with npm package manager
Webpack Encore for asset compilation
TypeScript compiler for type checking
```

### Production Deployment
- **Docker Compose**: Multi-container setup with PHP-FPM, Nginx, MySQL
- **Environment Variables**: Secure configuration management for API keys
- **Asset Pipeline**: Optimized builds with cache busting and compression
- **Database Migrations**: Automated schema updates with version control

---

*NetRom Summer Camp 2025 - Craiova*
