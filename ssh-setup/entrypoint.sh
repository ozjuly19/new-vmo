#!/bin/ash

# generate host keys if not present
ssh-keygen -A

cd /app
npx prisma generate
npx prisma db push
exec npm run dev &


# do not detach (-D), log to stderr (-e), passthrough other arguments
exec /usr/sbin/sshd -D -e "$@"