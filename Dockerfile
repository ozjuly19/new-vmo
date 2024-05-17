# Use a specific version for consistency
FROM alpine:3.19

# Install dependencies in one layer to reduce image size
RUN apk add --no-cache openssh nodejs npm \
  && sed -i s/#PermitRootLogin.*/PermitRootLogin\ yes/ /etc/ssh/sshd_config \
  && passwd -d root

# Setup SSH
COPY --chmod=755 --chown=root:root ssh-setup/entrypoint.sh /entrypoint.sh
COPY .backend-ssh/authorized_keys /root/.ssh/authorized_keys

# Setup Node.js application
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Final configurations
EXPOSE 22
ENTRYPOINT ["/entrypoint.sh"]