-- Seeds the posts table with the 3 launch articles so News & Insights
-- isn't empty before anyone has used the admin portal.

INSERT INTO posts (slug, category, title_en, title_sw, excerpt_en, excerpt_sw, body_en, body_sw, image_url, published, published_at)
VALUES
(
  'she-foundation-launches-menstrual-hygiene-program-iringa',
  'Outreach',
  'SHE Foundation launches menstrual hygiene program in Iringa',
  'SHE Foundation yazindua mpango wa usafi wa hedhi Iringa',
  'Our new initiative aims to provide menstrual health education to rural special needs schools in the Iringa region.',
  'Mpango wetu mpya unalenga kutoa elimu ya afya ya hedhi kwa shule za mahitaji maalum vijijini mkoani Iringa.',
  'Our new initiative aims to provide menstrual health education to rural special needs schools in the Iringa region.',
  'Mpango wetu mpya unalenga kutoa elimu ya afya ya hedhi kwa shule za mahitaji maalum vijijini mkoani Iringa.',
  '/images/menstrual-dignity-wheelchair-wide.webp',
  true,
  '2025-02-14T00:00:00Z'
),
(
  'celebrating-international-day-of-education',
  'Advocacy',
  'Celebrating International Day of Education: inclusion in action',
  'Kuadhimisha Siku ya Kimataifa ya Elimu: ujumuishaji vitendoni',
  'Reflecting on the importance of inclusive education for adolescent girls with disabilities across Tanzania.',
  'Tunatafakari umuhimu wa elimu jumuishi kwa wasichana wenye ulemavu kote Tanzania.',
  'Reflecting on the importance of inclusive education for adolescent girls with disabilities across Tanzania.',
  'Tunatafakari umuhimu wa elimu jumuishi kwa wasichana wenye ulemavu kote Tanzania.',
  '/images/group-study.webp',
  true,
  '2025-01-28T00:00:00Z'
),
(
  'volunteer-spotlight-making-a-difference',
  'Stories',
  'Volunteer spotlight: how one volunteer is making a difference',
  'Mjitolea wa mwezi: jinsi mjitolea mmoja anavyoleta mabadiliko',
  'This month we highlight a volunteer whose dedication has helped distribute dignity kits across underserved wards.',
  'Mwezi huu tunamwangazia mjitolea ambaye kujitoa kwake kumesaidia kusambaza vifurushi vya heshima katika kata zenye uhitaji.',
  'This month we highlight a volunteer whose dedication has helped distribute dignity kits across underserved wards.',
  'Mwezi huu tunamwangazia mjitolea ambaye kujitoa kwake kumesaidia kusambaza vifurushi vya heshima katika kata zenye uhitaji.',
  '/images/community-volunteers.webp',
  true,
  '2025-01-15T00:00:00Z'
)
ON CONFLICT (slug) DO NOTHING;

-- Seeds one default admin account so the dashboard is reachable on a
-- fresh database. Credentials were shared with the site owner directly
-- (not committed here) — sign in once, add your own account from the
-- Users section, then delete this seeded one.
INSERT INTO admin_users (name, email, password_hash)
VALUES (
  'Site Admin',
  'admin@shefoundation.or.tz',
  '1b04f2cc477a78cfa75ad4e60775306c:15b3acd7bc54e35e49e4107b6113889d69db92c8d087ecf99e88df5f3384f080f80f28c408986cc064de8f2150d69c1f3fbd2ac34ad26b3185ccb20d843e78c9'
)
ON CONFLICT (email) DO NOTHING;
