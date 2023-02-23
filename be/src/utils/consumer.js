const { Kafka, logLevel } = require('node-rdkafka');


function createConsumer(config, onData) {
  const consumer = new Kafka.KafkaConsumer({
    'logLevel': logLevel.DEBUG,
    'brokers': [`broker:9092`, 'broker:9091'],
    'clientId': 'spotlight-worker',
    'group.id': 'spotlight-consumer-1'
  }, {
    'auto.offset.reset': 'earliest'
  });

  return new Promise((resolve, reject) => {
    consumer
      .on('ready', () => resolve(consumer))
      .on('data', onData);

    consumer.connect();
  });
}

async function consumerExample() {
  const config = await createConsumer();

  if (config.usage) {
    return console.log(config.usage);
  }

  console.log(`Consuming records from ${config.topic}`);

  let seen = 0;

  const consumer = await createConsumer(config, ({key, value, partition, offset}) => {
    console.log(`Consumed record with key ${key} and value ${value} of partition ${partition} @ offset ${offset}. Updated total count to ${++seen}`);
  });

  consumer.subscribe([config.topic]);
  consumer.consume();

  process.on('SIGINT', () => {
    console.log('\nDisconnecting consumer ...');
    consumer.disconnect();
  });
}

consumerExample()
  .catch((err) => {
    console.error(`Something went wrong:\n${err}`);
    process.exit(1);
  });
