echo ‘Resetting PM2 Metadata …’
pm2 reset all
echo ‘Calling pm2-runtime …’
pm2-runtime ecosystem.config.js --name check-links
echo ‘pm2 now called’