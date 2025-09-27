# alarins.com — deploy notes
- Node/Next.js 15; build artifacts: .next/ (static: .next/static/)
- Nginx vhost: /etc/nginx/sites-available/alarins.com.conf
- Snippets: dune-admin-next.conf (/_next), dune-admin-next-pin.conf (CSS alias)
- App runs at 127.0.0.1:3000, SSL via LE, served on 443
## Routines
- Build: cd /opt/dune-admin && rm -rf .next/cache && npm run -s build
- Restart: systemctl restart dune-admin | pm2 restart dune-admin
- Check: curl -I https://alarins.com/admin/dashboard
