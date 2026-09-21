-- SHE Foundation Tanzania — database schema
-- Run once against your Postgres database (local dev or your provisioned
-- Vercel/Neon Postgres instance) before using the admin portal.

CREATE TABLE IF NOT EXISTS submissions (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('volunteer', 'partner', 'contact')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  extra JSONB,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS submissions_type_idx ON submissions (type);
CREATE INDEX IF NOT EXISTS submissions_status_idx ON submissions (status);
CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions (created_at DESC);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_sw TEXT NOT NULL,
  excerpt_en TEXT NOT NULL,
  excerpt_sw TEXT NOT NULL,
  body_en TEXT NOT NULL DEFAULT '',
  body_sw TEXT NOT NULL DEFAULT '',
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS posts_published_idx ON posts (published, published_at DESC);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
