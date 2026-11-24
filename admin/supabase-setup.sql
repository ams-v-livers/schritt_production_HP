-- ============================================================
-- SCHRITT PRODUCTION ADMIN
-- SUPABASE SETUP
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.talents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  reading text default '',
  birthday text default '',
  type text not null default 'V'
    check (type in ('V','REAL')),
  iriam_generation text default '',
  message text default '',
  bio text default '',
  platforms jsonb not null default '[]'::jsonb,
  platform_links jsonb not null default '{}'::jsonb,
  x_url text default '',
  profile_image text default '',
  color_a text not null default '#ff9500',
  color_b text not null default '#ffb34d',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.top_liver (
  id uuid primary key default gen_random_uuid(),
  talent_id uuid references public.talents(id) on delete set null,
  label text not null default 'MONTHLY PICK UP',
  message text default '',
  live_url text default '',
  image_url text default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'NEWS',
  body text default '',
  url text default '',
  image_url text default '',
  published_at date,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null
    check (event_type in ('office','platform')),
  platform text default '',
  title text not null,
  description text default '',
  status text not null default '開催予定',
  start_date date,
  end_date date,
  image_url text default '',
  url text default '',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.talents enable row level security;
alter table public.top_liver enable row level security;
alter table public.news enable row level security;
alter table public.events enable row level security;

-- 公開サイト：公開データのみ読み取り可能
create policy "public read published talents"
on public.talents
for select
using (published = true);

create policy "public read top liver"
on public.top_liver
for select
using (true);

create policy "public read published news"
on public.news
for select
using (published = true);

create policy "public read published events"
on public.events
for select
using (published = true);

-- ログイン済み運営：CRUD可能
create policy "authenticated manage talents"
on public.talents
for all
to authenticated
using (true)
with check (true);

create policy "authenticated manage top liver"
on public.top_liver
for all
to authenticated
using (true)
with check (true);

create policy "authenticated manage news"
on public.news
for all
to authenticated
using (true)
with check (true);

create policy "authenticated manage events"
on public.events
for all
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict (id) do nothing;

create policy "public read site images"
on storage.objects
for select
using (bucket_id = 'site-images');

create policy "authenticated upload site images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'site-images');

create policy "authenticated update site images"
on storage.objects
for update
to authenticated
using (bucket_id = 'site-images')
with check (bucket_id = 'site-images');

create policy "authenticated delete site images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'site-images');
