FROM NODE_VERSION

# WORKDIR /usr/src/app

RUN apk update && \  
    npm install -g npm @vue/cli  


# CMD ["/bin/sh"]  