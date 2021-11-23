module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID','AKIA35KCLFHBP3JCOI5F'),
      secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
      region: env('AWS_REGION','us-west-1'),
      params: {
        Bucket: env('AWS_BUCKET','image-b354'),
      },
    },
  },
  // ...
});

