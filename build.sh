	# --platform linux/amd64 \
docker build  \
	-t drone-ui:0.2.0-mp .

docker image prune --force --filter label=app=drone-ui-mp