# loop and register the device every 10 minutes, eventually change this to sending telemetry every ten minutes.
while :
do
 
curl -X 'POST' \
  'http://localhost:9090/api/v1/provision' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "deviceName": "NEW_DEVICE_NAME",
  "provisionDeviceKey": "u7piawkboq8v32dmcmpp",
  "provisionDeviceSecret": "jpmwdn8ptlswmf4m29bw"
}'


    sleep 600
done