FROM alpine:3.19

ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 22

COPY --chmod=755 --chown=root:root ssh-setup/entrypoint.sh /entrypoint.sh

RUN apk add --no-cache openssh \
  && sed -i s/#PermitRootLogin.*/PermitRootLogin\ yes/ /etc/ssh/sshd_config

RUN passwd -d root
COPY .backend-ssh/authorized_keys /root/.ssh/authorized_keys

# Now lets setup node, npm, and the app

RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .