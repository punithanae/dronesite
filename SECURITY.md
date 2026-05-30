# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

📧 **Email**: contact@punithanfly.com

Please do **not** create public GitHub issues for security vulnerabilities.

## Security Measures

This project implements the following security measures:

- ✅ HTTPS enforcement via HSTS headers
- ✅ XSS protection headers
- ✅ Content-Type sniffing prevention
- ✅ Frame protection (X-Frame-Options)
- ✅ Input validation with Zod schemas
- ✅ Google reCAPTCHA v3 for form protection
- ✅ SQL injection prevention via Supabase parameterized queries
- ✅ Row Level Security (RLS) on database tables
- ✅ Environment variables for all secrets
- ✅ `.env.local` excluded from version control
